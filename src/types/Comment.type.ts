import { Comment, User } from "@prisma/client";

export type CommentTypes = Comment & {
  user: User;
};

export type CommentTypesProps = {
  comments: CommentTypes[];
  postId: number;
};
