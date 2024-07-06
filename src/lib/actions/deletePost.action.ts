"use server";

import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

import prisma from "../prisma";
import { routesUrlEndpoint } from "@/routes";

export const deletePost = async (postId: number): Promise<void> => {
  const { userId: currentUserId } = auth();

  if (!currentUserId) throw new Error("No auth. Please login!");

  if (!postId) throw new Error("Post id not found!");

  try {
    await prisma.post.delete({
      where: {
        id: postId,
        userId: currentUserId,
      },
    });
  } catch (err) {
    console.log(err);
    throw new Error("Delete post failed!!");
  }

  revalidatePath(`${routesUrlEndpoint.home}`);
};
