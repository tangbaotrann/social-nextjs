import { Post, User } from "@prisma/client";

export type PostTypes = Post & { user: User } & {
  likes: { userId: string }[];
} & {
  _count: { comments: number };
};

export type PostTypesProps = {
  post: PostTypes;
};
