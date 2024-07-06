"use client";

import { useState } from "react";

import { icons } from "../../public";
import IconInteractive from "./IconInteractive";
import { deletePost } from "@/lib/actions/deletePost.action";
import { Post } from "@prisma/client";

function PostInfoMore({ post, userId }: { post: Post; userId: string }) {
  const [openMore, setOpenMore] = useState<boolean>(false);

  const handleClickIconMore = () => {
    setOpenMore(!openMore);
  };

  // handle delete post action
  const handleDeletePostAction = async (): Promise<void> => {
    post.id && (await deletePost(post.id));
  };

  return (
    <div className="relative">
      <IconInteractive
        src={icons.more}
        alt={icons.more}
        width={16}
        height={16}
        onClick={handleClickIconMore}
      />

      {openMore && (
        <div className="absolute top-4 right-0 bg-white p-4 w-32 rounded-lg flex flex-col gap-2 text-xs shadow-md z-10">
          <span>View</span>
          <span>Re-port</span>

          {userId === post.userId && (
            <form action={handleDeletePostAction}>
              <button className="text-red-600 cursor-pointer hover:opacity-80 hover:duration-500">
                Delete
              </button>
            </form>
          )}
        </div>
      )}
    </div>
  );
}

export default PostInfoMore;
