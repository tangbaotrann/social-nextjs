import Image from "next/image";

import IconMore from "./IconMore";
import { icons } from "../../public";

function CommentInput() {
  return (
    <div className="">
      <div className="flex items-center gap-4">
        <Image
          src="https://images.pexels.com/photos/7525672/pexels-photo-7525672.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
          alt=""
          width={32}
          height={32}
          className="w-8 h-8 object-cover rounded-full"
        />

        {/* Comment input */}
        <div className="flex flex-1 items-center justify-between w-full">
          <input
            type="text"
            placeholder="Write a comment..."
            className="flex-1 bg-transparent outline-none p-2 rounded-md text-sm font-medium focus:ring-2 focus:duration-500"
          />
          <Image
            src={icons.emoji}
            alt={icons.emoji}
            width={16}
            height={16}
            className="cursor-pointer ml-1"
          />
        </div>
      </div>

      {/* Load comments */}
      <div className="flex gap-4 mt-6">
        <Image
          src="https://images.pexels.com/photos/7525672/pexels-photo-7525672.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
          alt=""
          width={40}
          height={40}
          className="w-10 h-10 object-cover rounded-full"
        />

        <div className="flex flex-1 flex-col gap-2">
          <span className="font-medium">Join</span>
          <p>Comment of people other here.</p>

          {/* Interactive comment */}
          <div className="flex items-center gap-8 text-xs text-gray-500 mt-2">
            <div className="flex items-center gap-4">
              <Image
                src={icons.like}
                alt={icons.like}
                width={16}
                height={16}
                className="w-4 h-4 object-cover"
              />
              <span className="text-gray-300">|</span>
              <span className="text-gray-500">123 Likes</span>
            </div>

            <div className="">Reply</div>
          </div>
        </div>

        <IconMore />
      </div>
    </div>
  );
}

export default CommentInput;
