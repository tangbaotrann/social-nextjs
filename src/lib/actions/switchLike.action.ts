"use server";

import { auth } from "@clerk/nextjs/server";

import prisma from "../prisma";

export const switchLike = async (postId: number) => {
  const { userId: currentUserId } = auth();

  if (!currentUserId) throw new Error("No auth. Please login!");

  try {
    const existingLike = await prisma.like.findFirst({
      where: {
        postId: postId,
        userId: currentUserId,
      },
    });

    if (existingLike) {
      await prisma.like.delete({
        where: {
          id: existingLike.id,
        },
      });
    } else {
      await prisma.like.create({
        data: {
          postId: postId,
          userId: currentUserId,
        },
      });
    }
  } catch (err) {
    console.log(err);
    throw new Error("Like post failed!");
  }
};
