import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const usernameFormatter = (surname: string, name: string): string => {
  return name + " " + surname;
};

export const followersFormatter = (followers: number) => {
  return followers + " " + "followers";
};
