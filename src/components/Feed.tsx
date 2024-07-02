import { auth } from "@clerk/nextjs/server";

import Post from "./Post";
import prisma from "@/lib/prisma";
import { PostTypes } from "@/types/Post.type";

async function Feed({ username }: { username?: string }) {
  const { userId: currentUserId } = auth();

  let posts: PostTypes[] = [];

  if (username) {
    posts = await prisma.post.findMany({
      where: {
        user: {
          username: username,
        },
      },
      include: {
        user: true,
        likes: {
          select: {
            userId: true,
          },
        },
        _count: {
          select: {
            comments: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  }

  if (!username && currentUserId) {
    const followings = await prisma.follower.findMany({
      where: {
        followerId: currentUserId,
      },
      select: {
        followingId: true,
        followerId: true,
      },
    });

    const followingIds = followings.map((following) => following.followingId);

    posts = await prisma.post.findMany({
      where: {
        userId: {
          in: followingIds,
        },
      },
      include: {
        user: true,
        likes: {
          select: {
            userId: true,
          },
        },
        _count: {
          select: {
            comments: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  }

  return (
    <div className="flex flex-col gap-12 bg-white shadow-md rounded-md p-4 mb-4">
      {posts.length > 0
        ? posts.map((post) => <Post key={post.id} post={post} />)
        : "Not post found!"}
    </div>
  );
}

export default Feed;
