"use client";

import { useState } from "react";
import Image from "next/image";
import { useUser } from "@clerk/nextjs";
import {
  CldUploadWidget,
  CloudinaryUploadWidgetResults,
} from "next-cloudinary";

import { icons } from "../../public";
import {
  postOptionAddEvent,
  postOptionAddPhoto,
  postOptionAddVideo,
  postOptionPoll,
} from "@/constants";
import { ImageIconTypes } from "@/types/ImageIcon.type";
import Loading from "./Loading";
import ButtonSubmitForm from "./ButtonSubmitForm";
import { addPost } from "@/lib/actions/addPost.action";

const iconOptions: ImageIconTypes[] = [
  {
    src: icons.addImage,
    alt: postOptionAddPhoto,
  },
  // {
  //   src: icons.addVideo,
  //   alt: postOptionAddVideo,
  // },
  // {
  //   src: icons.addEvent,
  //   alt: postOptionAddEvent,
  // },
  // {
  //   src: icons.poll,
  //   alt: postOptionPoll,
  // },
];

function AddPost() {
  const { user, isLoaded } = useUser();

  const [img, setImg] = useState<any>();

  const handleAddNewPostAction = async (
    formData: FormData,
    imageSecureUrl: string
  ) => {
    try {
      await addPost(formData, imageSecureUrl);
    } catch (err) {
      console.log(err);
    }
  };

  if (!isLoaded) return <Loading />;

  return (
    <div className="bg-white p-4 flex justify-between gap-4 text-sm shadow-md rounded-lg mt-4 mb-4">
      <Image
        src={user?.imageUrl || icons.login}
        alt={user?.imageUrl || icons.login}
        width={48}
        height={48}
        className="w-12 h-12 object-cover rounded-full"
      />

      <div className="flex-1">
        <form
          action={(formData: FormData) =>
            handleAddNewPostAction(formData, img?.secure_url)
          }
          className="flex items-center gap-4"
        >
          <textarea
            name="desc"
            id="desc"
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

          <div>
            <ButtonSubmitForm className="bg-slate-50 text-black rounded-md p-1 hover:bg-blue-500 hover:text-white text-sm font-medium hover:duration-500">
              Send
            </ButtonSubmitForm>
          </div>
        </form>

        <div className="flex items-center gap-4 mt-4 text-gray-400">
          <div className="flex items-center flex-wrap gap-4 cursor-pointer font-medium text-xs">
            {iconOptions.map((iconOption: ImageIconTypes) => (
              <CldUploadWidget
                key={iconOption.alt}
                uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}
                onSuccess={(
                  result: CloudinaryUploadWidgetResults,
                  { widget }
                ) => {
                  setImg(result.info);
                  widget.close();
                }}
              >
                {({ open }) => {
                  return (
                    <div
                      className="hover:opacity-80 hover:text-blue-600 hover:duration-500"
                      onClick={() => open()}
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
                  );
                }}
              </CldUploadWidget>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddPost;
