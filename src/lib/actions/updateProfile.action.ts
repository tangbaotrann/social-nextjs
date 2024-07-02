"use server";

import { auth } from "@clerk/nextjs/server";

import prisma from "../prisma";
import { objProfile } from "../validation";
import { ActionResultTypes } from "@/types/ActionResult.type";

export const updateProfile = async (
  prevState: ActionResultTypes,
  payload: { formData: FormData; coverSecureUrl: string }
): Promise<ActionResultTypes> => {
  const { userId: currentUserId } = auth();

  if (!currentUserId) throw new Error("No auth!");

  const { formData, coverSecureUrl } = payload;

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
    return { success: false, error: true };
  }

  try {
    await prisma.user.update({
      where: {
        id: currentUserId,
      },
      data: validateProfile.data,
    });

    return { success: true, error: false };
  } catch (err) {
    console.error(err);
    return { success: false, error: true };
  }
};
