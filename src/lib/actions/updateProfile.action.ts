"use server";

import { auth } from "@clerk/nextjs/server";

import prisma from "../prisma";
import { objProfile } from "../validate";

export const updateProfile = async (
  formData: FormData,
  coverSecureUrl: string
): Promise<void> => {
  const { userId: currentUserId } = auth();

  if (!currentUserId) throw new Error("No auth!");

  const valueFields = Object.fromEntries<FormDataEntryValue>(formData);

  const filteredFieldsEmpty = Object.fromEntries<FormDataEntryValue>(
    Object.entries<FormDataEntryValue>(valueFields).filter(
      ([_, value]) => value !== ""
    )
  );

  const validateProfile = objProfile.safeParse({
    cover: coverSecureUrl,
    ...filteredFieldsEmpty,
  });

  if (!validateProfile.success) {
    console.log(validateProfile.error.flatten().fieldErrors);
    return;
  }

  try {
    await prisma.user.update({
      where: {
        id: currentUserId,
      },
      data: validateProfile.data,
    });
  } catch (err) {
    console.error(err);
    throw new Error("Failed to update profile!");
  }
};
