"use server";

import { auth } from "@clerk/nextjs/server";

import prisma from "../prisma";

export const acceptFollowRequest = async (userId: string): Promise<void> => {
  const { userId: currentUserId } = auth();

  try {
    if (!currentUserId) throw new Error("User is not auth!!");

    const existFollowReq = await prisma.followRequest.findFirst({
      where: {
        senderId: userId,
        receiverId: currentUserId,
      },
    });

    if (existFollowReq) {
      await prisma.followRequest.delete({
        where: {
          id: existFollowReq.id,
        },
      });

      await prisma.follower.create({
        data: {
          followerId: userId,
          followingId: currentUserId,
        },
      });
    }
  } catch (err) {
    console.log(err);
    throw new Error("Failed to accept follow request!");
  }
};
