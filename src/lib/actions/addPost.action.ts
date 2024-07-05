"use server";

import { z } from "zod";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

import prisma from "../prisma";
import { routesUrlEndpoint } from "@/routes";

export const addPost = async (formData: FormData, imageSecureUrl: string) => {
  const { userId: currentUserId } = auth();

  if (!currentUserId) throw new Error("No auth. Please login!!");

  const valueDesc = formData.get("desc") as string;

  const requireStringDesc = z.string().min(1).max(255);
  const validatedDesc = requireStringDesc.safeParse(valueDesc);

  if (!validatedDesc.success) {
    console.log(validatedDesc.error.flatten().fieldErrors);
    return;
  }

  try {
    await prisma.post.create({
      data: {
        img: imageSecureUrl,
        desc: validatedDesc.data,
        userId: currentUserId,
      },
    });
  } catch (err) {
    console.log(err);
    throw new Error("Add post failed!!");
  }

  revalidatePath(`${routesUrlEndpoint.home}`);
};
