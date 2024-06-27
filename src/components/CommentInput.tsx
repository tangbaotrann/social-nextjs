import Image from "next/image";

import { icons } from "../../public";
import IconInteractive from "./IconInteractive";

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
            className="flex-1 bg-transparent outline-none p-2 rounded-md text-sm font-medium mr-1 focus:ring-2 focus:duration-500"
          />
          <IconInteractive
            src={icons.emoji}
            alt={icons.emoji}
            width={16}
            height={16}
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
              <IconInteractive
                src={icons.like}
                alt={icons.like}
                width={16}
                height={16}
              />
              <span className="text-gray-300">|</span>
              <span className="text-gray-500">123 Likes</span>
            </div>

            <div className="">Reply</div>
          </div>
        </div>

        {/* <IconMore /> */}
        <IconInteractive
          src={icons.more}
          alt={icons.more}
          width={16}
          height={16}
        />
      </div>
    </div>
  );
}

export default CommentInput;
