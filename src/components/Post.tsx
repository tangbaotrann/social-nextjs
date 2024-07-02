import Image from "next/image";

import { icons } from "../../public";
import {
  postOptionComment,
  postOptionLike,
  postOptionShare,
} from "@/constants";
import UserName from "./UserName";
import CommentInput from "./CommentInput";
import IconInteractive from "./IconInteractive";
import { PostTypesProps } from "@/types/Post.type";
import { ImageIconTypes } from "@/types/ImageIcon.type";

const iconOptionsInteraction: ImageIconTypes[] = [
  {
    src: icons.like,
    alt: postOptionLike,
  },
  {
    src: icons.comment,
    alt: postOptionComment,
  },
];

function Post({ post }: PostTypesProps) {
  return (
    <div className="flex flex-col gap-4">
      {/* Top post */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src={post.user.avatar || icons.login}
            alt={post.user.avatar || icons.login}
            className="w-10 h-10 rounded-full"
            width={40}
            height={40}
          />
          <UserName
            elementType="span"
            userPublic={post.user}
            className="font-medium"
          />
        </div>

        <IconInteractive
          src={icons.more}
          alt={icons.more}
          width={16}
          height={16}
        />
      </div>

      {/* Content post */}
      <div className="flex flex-col gap-4">
        <span>{post.desc}</span>

        <div className="w-full min-h-96 relative">
          <Image
            src={post.img || ""}
            alt={post.img || ""}
            fill
            className="object-cover rounded-md"
          />
        </div>
      </div>

      {/* Interactive post */}
      <div className="flex items-center justify-between text-sm">
        {/* Like + Comment */}
        <div className="flex gap-8 max-sm:gap-2 md:gap-4">
          {iconOptionsInteraction.map((iconOption: ImageIconTypes) => (
            <div
              className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl"
              key={iconOption.alt}
            >
              <IconInteractive
                src={iconOption.src}
                alt={iconOption.alt}
                width={16}
                height={16}
              />
              <span className="text-gray-300">|</span>
              <span className="text-gray-500">
                101
                <span className="hidden md:inline ml-1">{iconOption.alt}</span>
              </span>
            </div>
          ))}
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
      <CommentInput />
    </div>
  );
}

export default Post;
