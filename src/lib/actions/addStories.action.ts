"use server";

import { auth } from "@clerk/nextjs/server";

import prisma from "../prisma";
import { StoriesTypes } from "@/types/Stories.type";

export const addStories = async (
  imageSecureUrl: string
): Promise<StoriesTypes> => {
  const { userId: currentUserId } = auth();

  if (!currentUserId) throw new Error("No auth. Please login!");

  try {
    const existingStory = await prisma.story.findFirst({
      where: {
        userId: currentUserId,
      },
    });

    if (existingStory) {
      await prisma.story.delete({
        where: {
          id: existingStory.id,
        },
      });
    }

    const newStories = await prisma.story.create({
      data: {
        userId: currentUserId,
        img: imageSecureUrl,
        expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000),
      },
      include: {
        user: true,
      },
    });

    return newStories;
  } catch (err) {
    console.log(err);
    throw new Error("Add new stories failed!");
  }

  //   revalidatePath(`${routesUrlEndpoint.home}`);
};
