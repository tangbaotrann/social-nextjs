"use server";

import { auth } from "@clerk/nextjs/server";

import prisma from "../prisma";

export const switchBlock = async (userId: string): Promise<void> => {
  const { userId: currentUserId } = auth();

  try {
    if (currentUserId) {
      const existingBlock = await prisma.block.findFirst({
        where: {
          blockerId: currentUserId,
          blockedId: userId,
        },
      });

      if (existingBlock) {
        await prisma.block.delete({
          where: {
            id: existingBlock.id,
          },
        });
      } else {
        await prisma.block.create({
          data: {
            blockerId: currentUserId,
            blockedId: userId,
          },
        });
      }
    }
  } catch (err) {
    console.error(err);
    throw new Error("Error switching block status!");
  }
};
