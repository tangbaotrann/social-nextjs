import Image from "next/image";

import { icons } from "../../public";
import { PostOptionsTypes } from "@/types/Post.type";
import {
  postOptionComment,
  postOptionLike,
  postOptionShare,
} from "@/constants";
import CommentInput from "./CommentInput";
import IconMore from "./IconMore";

const iconOptionsInteraction: PostOptionsTypes[] = [
  {
    src: icons.like,
    alt: postOptionLike,
  },
  {
    src: icons.comment,
    alt: postOptionComment,
  },
];

function Post() {
  return (
    <div className="flex flex-col gap-4">
      {/* Top post */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="https://images.pexels.com/photos/19915666/pexels-photo-19915666/free-photo-of-back-view-of-man-walking-on-sea-shore.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            className="w-10 h-10 rounded-full"
            width={40}
            height={40}
          />
          <span className="font-medium">Lie</span>
        </div>

        <IconMore />
      </div>

      {/* Content post */}
      <div className="flex flex-col gap-4">
        <div className="w-full min-h-96 relative">
          <Image
            src="https://images.pexels.com/photos/23355108/pexels-photo-23355108/free-photo-of-a-bakery-with-bread-on-display-in-front-of-a-window.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            fill
            className="object-cover rounded-md"
          />
        </div>
        <span>Description ...</span>
      </div>

      {/* Interactive post */}
      <div className="flex items-center justify-between text-sm">
        {/* Like + Comment */}
        <div className="flex gap-8 max-sm:gap-2 md:gap-4">
          {iconOptionsInteraction.map((iconOption: PostOptionsTypes) => (
            <div
              className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl"
              key={iconOption.src}
            >
              <Image
                src={iconOption.src}
                alt={iconOption.alt}
                width={16}
                height={16}
                className="cursor-pointer"
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
          <Image
            src={icons.share}
            alt={icons.share}
            width={16}
            height={16}
            className="cursor-pointer"
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
