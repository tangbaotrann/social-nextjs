import { Story, User } from "@prisma/client";

export type StoriesTypes = Story & {
  user: User;
};

export type StoriesTypesProps = {
  stories: StoriesTypes[];
  userId: string;
};
