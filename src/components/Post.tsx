import moment from "moment";
import Image from "next/image";
import { auth } from "@clerk/nextjs/server";

import { icons } from "../../public";
import UserName from "./UserName";
import { PostTypesProps } from "@/types/Post.type";
import PostInteractive from "./PostInteractive";
import CommentPost from "./CommentPost";
import PostInfoMore from "./PostInfoMore";

function Post({ post }: PostTypesProps) {
  const { userId: currentUserId } = auth();

  if (!currentUserId) return null;

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

          <div className="flex flex-col gap-1">
            <UserName
              elementType="span"
              userPublic={post.user}
              className="font-medium"
            />

            <span className="text-xs text-gray-400">
              {moment(post.createdAt).format("HH:mm:ss a")}
            </span>
          </div>
        </div>

        <PostInfoMore post={post} userId={currentUserId} />
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
      <PostInteractive
        postId={post.id}
        likes={post.likes.map((like) => like.userId)}
        commentNumber={post._count.comments}
      />

      {/* Comment post */}
      <CommentPost postId={post.id} />
    </div>
  );
}

export default Post;
