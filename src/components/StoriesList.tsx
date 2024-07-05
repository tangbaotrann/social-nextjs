"use client";

import Image from "next/image";
import { useOptimistic, useState } from "react";
import {
  CldUploadWidget,
  CloudinaryUploadWidgetResults,
} from "next-cloudinary";
import { useUser } from "@clerk/nextjs";
import { v4 as uuidv4 } from "uuid";

import { icons } from "../../public";
import { addStories } from "@/lib/actions/addStories.action";
import { StoriesTypes, StoriesTypesProps } from "@/types/Stories.type";
import UserName from "./UserName";

function StoriesList({ stories, userId }: StoriesTypesProps) {
  const { user } = useUser();

  const [storyState, setStoryState] = useState<StoriesTypes[]>(stories);
  const [img, setImg] = useState<any>();

  // handle add new stories
  const handleAddNewStoriesAction = async (
    imageSecureUrl: string
  ): Promise<void> => {
    if (!imageSecureUrl) return;

    addOptimisticStories({
      id: +uuidv4(),
      img: img.secure_url,
      createdAt: new Date(Date.now()),
      expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000),
      userId: userId,
      user: {
        id: userId,
        avatar: user?.imageUrl || icons.login,
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
      // pending: true,
    }) as void;

    try {
      const newStories = await addStories(imageSecureUrl);

      setStoryState((prevState) => [newStories, ...prevState]);
      setImg(null);
    } catch (err) {
      console.log(err);
    }
  };

  const [optimisticStories, addOptimisticStories] = useOptimistic<
    StoriesTypes[],
    StoriesTypes
  >(storyState, (state, newStories) => [newStories, ...state]);

  return (
    <>
      <CldUploadWidget
        uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}
        onSuccess={(result: CloudinaryUploadWidgetResults, { widget }) => {
          setImg(result.info);
          widget.close();
        }}
      >
        {({ open }) => {
          return (
            <div className="flex flex-col items-center gap-2 cursor-pointer relative hover:opacity-70 hover:duration-500 transition-all">
              <Image
                src={img?.secure_url || user?.imageUrl || icons.login}
                alt={img?.secure_url || user?.imageUrl || icons.login}
                width={80}
                height={80}
                className="w-20 h-20 rounded-full object-cover ring-2"
                onClick={() => open()}
              />

              {img ? (
                <form action={() => handleAddNewStoriesAction(img?.secure_url)}>
                  <button className="text-xs text-white bg-blue-500 p-1 rounded-md">
                    Send
                  </button>
                </form>
              ) : (
                <span className="font-medium">Add a story</span>
              )}

              <div
                className="absolute top-1 text-6xl text-gray-200 font-medium hover:text-white"
                onClick={() => open()}
              >
                +
              </div>
            </div>
          );
        }}
      </CldUploadWidget>

      {optimisticStories.map((_story) => (
        <div
          key={_story.id}
          className="flex flex-col items-center gap-2 cursor-pointer w-max"
        >
          <Image
            src={_story.img}
            alt=""
            className="rounded-lg ring-2"
            width={80}
            height={80}
          />
          <UserName
            elementType="span"
            userPublic={_story.user}
            className="font-medium"
          />
        </div>
      ))}
    </>
  );
}

export default StoriesList;
