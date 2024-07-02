import { Post, User } from "@prisma/client";

export type PostTypes = Post & { user: User } & {
  likes: { userId: string }[];
} & {
  _count: { comments: number };
};

export type PostTypesProps = {
  post: PostTypes;
};

export type PostInteractiveTypesProps = {
  postId: number;
  likes: string[];
  commentNumber: number;
};

export type LikePostTypes = {
  likeCount: number;
  isLiked: boolean;
};

export type SwitchLikePostActionTypes = {
  actions: "SwitchLike";
};
