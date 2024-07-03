import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const usernameFormatter = (surname: string, name: string): string => {
  return name + " " + surname;
};

export const followsFormatter = (
  followers: number,
  textShow?: string
): string => {
  return `${followers} ${
    textShow === "K"
      ? "K"
      : textShow === "followers"
      ? "followers"
      : textShow === "followings"
      ? "followings"
      : ""
  }`;
};

export const sleepSession = async (
  action: string,
  sleepTime: number
): Promise<void> => {
  await new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      console.log(`Action ${action} - time: ${sleepTime}`);

      resolve();
    }, sleepTime);
  });
};
