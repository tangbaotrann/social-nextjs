import { Comment, User } from "@prisma/client";

export type CommentTypes = Comment & {
  user: User;
  pending?: boolean;
};

export type CommentTypesProps = {
  comments: CommentTypes[];
  postId: number;
};
