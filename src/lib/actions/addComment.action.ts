"use server";

import { auth } from "@clerk/nextjs/server";

import prisma from "../prisma";
import { CommentTypes } from "@/types/Comment.type";

export const addComment = async (
  postId: number,
  desc: string
): Promise<CommentTypes> => {
  const { userId: currentUserId } = auth();

  if (!currentUserId) throw new Error("No auth. Please login!");

  try {
    const newComment = await prisma.comment.create({
      data: {
        postId: postId,
        userId: currentUserId,
        desc: desc,
      },
      include: {
        user: true,
      },
    });

    return newComment;
  } catch (err) {
    console.log(err);
    throw new Error("Could not add comment!");
  }
};
