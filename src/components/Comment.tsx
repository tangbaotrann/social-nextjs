"use client";

import Image from "next/image";

import { icons } from "../../public";
import IconInteractive from "./IconInteractive";
import { CommentTypes } from "@/types/Comment.type";
import UserName from "./UserName";
import moment from "moment";

function Comment({ comment }: { comment: CommentTypes }) {
  return (
    <>
      <Image
        src={comment.user.avatar || icons.login}
        alt={comment.user.avatar || icons.login}
        width={40}
        height={40}
        className="w-10 h-10 object-cover rounded-full"
      />

      <div className="flex flex-1 flex-col gap-2">
        <UserName
          elementType="span"
          userPublic={comment.user}
          className="font-medium"
        />

        <p>{comment.desc}</p>

        {/* Interactive comment */}
        <div className="flex items-center gap-8 text-xs text-gray-500 mt-2">
          <div className="flex items-center gap-4">
            <IconInteractive
              src={icons.like}
              alt={icons.like}
              width={16}
              height={16}
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">0 Likes</span>
          </div>

          <div className="">Reply</div>

          <div className="flex justify-end">
            <span>
              {moment(comment.createdAt).format("DD/MM/YYYY HH:mm:ss a")}
            </span>
          </div>
        </div>
      </div>

      {/* <IconMore /> */}
      <IconInteractive
        src={icons.more}
        alt={icons.more}
        width={16}
        height={16}
      />
    </>
  );
}

export default Comment;
