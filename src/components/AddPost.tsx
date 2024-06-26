import Image from "next/image";

import { icons } from "../../public";
import {
  postOptionAddEvent,
  postOptionAddPhoto,
  postOptionAddVideo,
  postOptionPoll,
} from "@/constants";
import { ImageIconTypes } from "@/types/ImageIcon.type";

const iconOptions: ImageIconTypes[] = [
  {
    src: icons.addImage,
    alt: postOptionAddPhoto,
  },
  {
    src: icons.addVideo,
    alt: postOptionAddVideo,
  },
  {
    src: icons.addEvent,
    alt: postOptionAddEvent,
  },
  {
    src: icons.poll,
    alt: postOptionPoll,
  },
];

function AddPost() {
  return (
    <div className="bg-white p-4 flex justify-between gap-4 text-sm shadow-md rounded-lg mt-4 mb-4">
      <Image
        src="https://images.pexels.com/photos/18523694/pexels-photo-18523694/free-photo-of-cup-of-coffee-next-to-a-bed.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        alt=""
        width={48}
        height={48}
        className="w-12 h-12 object-cover rounded-full"
      />

      <div className="flex-1">
        <div className="flex gap-4">
          <textarea
            name=""
            id=""
            className="flex-1 bg-slate-100 rounded-lg p-2 outline-none focus:ring-2 focus:duration-500"
            placeholder="What's on your mind?"
          ></textarea>
          <Image
            src={icons.emoji}
            alt={icons.emoji}
            width={20}
            height={20}
            className="w-5 h-5 cursor-pointer self-end"
          />
        </div>

        <div className="flex items-center gap-4 mt-4 text-gray-400">
          <div className="flex items-center flex-wrap gap-4 cursor-pointer font-medium text-xs">
            {iconOptions.map((iconOption: ImageIconTypes) => (
              <div
                key={iconOption.alt}
                className="hover:opacity-80 hover:text-blue-600 hover:duration-500"
              >
                <Image
                  src={iconOption.src}
                  alt={iconOption.alt}
                  width={20}
                  height={20}
                  className="w-5 h-5 cursor-pointer"
                />
                {iconOption.alt}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddPost;
