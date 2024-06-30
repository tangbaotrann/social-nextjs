import { FollowRequest, User } from "@prisma/client";

export type FriendRequestTypes = FollowRequest & {
  sender: User;
};

export type FriendRequestTypesProps = {
  requests: FriendRequestTypes[];
};

export type FriendRequestIdType = {
  requestId: number;
};
