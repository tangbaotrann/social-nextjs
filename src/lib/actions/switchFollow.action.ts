"use server";

import { auth } from "@clerk/nextjs/server";

import prisma from "../prisma";

export const switchFollow = async (userId: string): Promise<void> => {
  const { userId: currentUserId } = auth();

  try {
    if (currentUserId) {
      const existingFollow = await prisma.follower.findFirst({
        where: {
          followerId: currentUserId,
          followingId: userId,
        },
      });

      if (existingFollow) {
        await prisma.follower.delete({
          where: {
            id: existingFollow.id,
          },
        });
      } else {
        const existingFollowReq = await prisma.followRequest.findFirst({
          where: {
            senderId: currentUserId,
            receiverId: userId,
          },
        });

        if (existingFollowReq) {
          await prisma.followRequest.delete({
            where: {
              id: existingFollowReq.id,
            },
          });
        } else {
          await prisma.followRequest.create({
            data: {
              senderId: currentUserId,
              receiverId: userId,
            },
          });
        }
      }
    }
  } catch (err) {
    console.log(err);
    throw new Error("Something went wrong!");
  }
};
