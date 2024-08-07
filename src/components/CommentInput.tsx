"use client";

import Image from "next/image";
import { useUser } from "@clerk/nextjs";
import { ChangeEvent, useEffect, useOptimistic, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { icons } from "../../public";
import IconInteractive from "./IconInteractive";
import ButtonSubmitForm from "./ButtonSubmitForm";
import Comment from "./Comment";
import { CommentTypes, CommentTypesProps } from "@/types/Comment.type";
import { addComment } from "@/lib/actions/addComment.action";
import { commentLoadLimit } from "@/constants";
import { listenEvent } from "@/helpers/events";

function CommentInput({ comments, postId }: CommentTypesProps) {
  const { user } = useUser();

  const [commentState, setCommentState] = useState<CommentTypes[]>(comments);
  const [description, setDescription] = useState<string>("");

  const [visibleCountComments, setVisibleCountComments] =
    useState<number>(commentLoadLimit);
  const [commentLoading, setCommentLoading] = useState<boolean>(false);
  const [checkLoadMoreComments, setCheckLoadMoreComments] = useState<number>(
    commentState.length
  );

  const [toggleComment, setToggleComment] = useState<boolean>(true);

  const handleOnChangeComment = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setDescription(value);
  };

  // handle add new comment
  const handleAddNewComment = async () => {
    if (!user || !description) return;

    addOptimisticComment({
      id: +uuidv4(),
      desc: description,
      createdAt: new Date(Date.now()),
      updatedAt: new Date(Date.now()),
      userId: user?.id,
      postId: postId,
      user: {
        id: user.id,
        avatar: user.imageUrl || icons.login,
        name: "",
        surname: "",
        city: "",
        work: "",
        school: "",
        website: "",
        username: "loading...",
        cover: "",
        description: "",
        createdAt: new Date(Date.now()),
      },
      pending: true,
    }) as void;

    try {
      const newComment = await addComment(postId, description);

      setCommentState((prevState) => [newComment, ...prevState]);
      setVisibleCountComments((prevCount) => prevCount + 1);
      setDescription("");
    } catch (err) {
      console.error(err);
    }
  };

  // load comments
  const handleLoadMoreComments = async () => {
    setCommentLoading(true);

    const url: string = `/api/comments?postId=${postId}&skip=${visibleCountComments}&take=${commentLoadLimit}`;
    const resCommentLoadMore = await fetch(url);

    if (resCommentLoadMore.ok) {
      const moreComments = await resCommentLoadMore.json();

      setCommentState((prevState) => [...prevState, ...moreComments]);
      setVisibleCountComments((prevCount) => prevCount + commentLoadLimit);
      setCheckLoadMoreComments(moreComments.length);
      setCommentLoading(false);
    } else {
      console.log("Comment end.");
      setCommentLoading(false);
    }
  };

  const [optimisticComment, addOptimisticComment] = useOptimistic<
    CommentTypes[],
    CommentTypes
  >(commentState, (state, newComment) => [newComment, ...state]);

  useEffect(() => {
    const remove = listenEvent(
      "custom:toggle-comment",
      ({ detail: payload }: any) => {
        setToggleComment(payload);
      }
    );

    return remove;
  }, []);

  return (
    <>
      <div className="flex items-center gap-4 w-full">
        {user && (
          <>
            <Image
              src={user.imageUrl}
              alt={user.imageUrl}
              width={32}
              height={32}
              className="w-8 h-8 object-cover rounded-full"
            />

            {/* Comment input */}
            <form
              action={handleAddNewComment}
              className="flex items-center gap-2 w-full"
            >
              <input
                type="text"
                name="desc"
                id="desc"
                onChange={(e) => handleOnChangeComment(e)}
                placeholder="Write a comment..."
                className="flex-1 bg-transparent outline-none p-2 rounded-md text-sm font-medium focus:ring-2 focus:duration-500"
              />
              <IconInteractive
                src={icons.emoji}
                alt={icons.emoji}
                width={16}
                height={16}
              />

              <div>
                <ButtonSubmitForm
                  className={`${
                    !description &&
                    "disabled cursor-not-allowed pointer-events-none bg-gray-400"
                  }`}
                >
                  Send
                </ButtonSubmitForm>
              </div>
            </form>
          </>
        )}
      </div>

      {/* Load comments */}
      {toggleComment ? (
        <div className="flex flex-col gap-4 mt-6 w-full">
          {optimisticComment.length > 0 ? (
            <>
              {optimisticComment
                .slice(0, visibleCountComments)
                .map((comment: CommentTypes) => (
                  <div
                    className={`flex gap-4 p-1 rounded-lg fade-out`}
                    key={comment.id}
                  >
                    <Comment comment={comment} />
                  </div>
                ))}

              {optimisticComment.length >= commentLoadLimit && (
                <div className="flex justify-start">
                  {commentLoading ? (
                    <button className="text-sm font-medium">
                      Waiting loading...
                    </button>
                  ) : (
                    <button
                      onClick={
                        checkLoadMoreComments > 0
                          ? handleLoadMoreComments
                          : () => {}
                      }
                      className="text-sm font-medium hover:opacity-70 hover:text-blue-600 hover:duration-500"
                    >
                      {checkLoadMoreComments !== 0 ? (
                        "See more"
                      ) : (
                        <i>-- End --</i>
                      )}
                    </button>
                  )}
                </div>
              )}
            </>
          ) : (
            <span>No comment.</span>
          )}
        </div>
      ) : null}
    </>
  );
}

export default CommentInput;
