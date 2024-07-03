"use client";

import { useAuth } from "@clerk/nextjs";
import { useOptimistic, useState } from "react";

import {
  postOptionComment,
  postOptionLike,
  postOptionLiked,
  postOptionShare,
} from "@/constants";
import { icons } from "../../public";
import CommentInput from "./CommentInput";
import IconInteractive from "./IconInteractive";
import {
  LikePostTypes,
  PostInteractiveTypesProps,
  SwitchLikePostActionTypes,
} from "@/types/Post.type";
import { switchLike } from "@/lib/actions/switchLike.action";

function PostInteractive({
  postId,
  likes,
  commentNumber,
}: PostInteractiveTypesProps) {
  const { userId: currentUserId, isLoaded } = useAuth();

  const [openComment, setOpenComment] = useState<boolean>(false);
  const [likeState, setLikeState] = useState<LikePostTypes>({
    likeCount: likes.length,
    isLiked: currentUserId ? likes.includes(currentUserId) : false,
  });

  const [optimisticLike, switchOptimisticLike] = useOptimistic<
    LikePostTypes,
    SwitchLikePostActionTypes
  >(likeState, (state, { actions: actionType }) => {
    return {
      likeCount: state.isLiked ? state.likeCount - 1 : state.likeCount + 1,
      isLiked: !state.isLiked,
    };
  });

  // Like
  const handleSwitchLike = () => {
    switchOptimisticLike({ actions: "SwitchLike" }) as void;

    try {
      switchLike(postId);

      setLikeState((prevState) => ({
        likeCount: prevState.isLiked
          ? prevState.likeCount - 1
          : prevState.likeCount + 1,
        isLiked: !prevState.isLiked,
      }));
    } catch (err) {
      console.log(err);
    }
  };

  // Comment
  const handleComments = () => {
    setOpenComment(!openComment);
  };

  return (
    <>
      <div className="flex items-center justify-between text-sm">
        <div className="flex gap-8 max-sm:gap-2 md:gap-4">
          {/* Like */}
          <form
            action={handleSwitchLike}
            className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl"
          >
            <button>
              <IconInteractive
                src={optimisticLike.isLiked ? icons.liked : icons.like}
                alt={optimisticLike.isLiked ? postOptionLiked : postOptionLike}
                width={16}
                height={16}
              />
            </button>
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              {optimisticLike.likeCount}
              <span className="hidden md:inline ml-1">{postOptionLike}</span>
            </span>
          </form>

          {/* Comment */}
          <div
            className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl"
            onClick={handleComments}
          >
            <IconInteractive
              src={icons.comment}
              alt={icons.comment}
              width={16}
              height={16}
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              {commentNumber}
              <span className="hidden md:inline ml-1">{postOptionComment}</span>
            </span>
          </div>
        </div>

        {/* Share */}
        <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
          <IconInteractive
            src={icons.share}
            alt={icons.share}
            width={16}
            height={16}
          />
          <span className="text-gray-300">|</span>
          <span className="text-gray-500">
            102
            <span className="hidden md:inline ml-1">{postOptionShare}</span>
          </span>
        </div>
      </div>

      {/* Comments input */}
      {openComment && <CommentInput />}
    </>
  );
}

export default PostInteractive;
