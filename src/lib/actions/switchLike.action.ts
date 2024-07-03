"use server";

import { auth } from "@clerk/nextjs/server";

import prisma from "../prisma";
import { sleepSession } from "../utils";

export const switchLike = async (postId: number): Promise<void> => {
  const { userId: currentUserId } = auth();

  if (!currentUserId) throw new Error("No auth. Please login!");

  try {
    const existingLike = await prisma.like.findFirst({
      where: {
        postId: postId,
        userId: currentUserId,
      },
    });

    // await sleepSession("SwitchLike", 2000);

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
