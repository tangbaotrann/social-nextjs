export type UserInfoOptionsIconTypes = {
  src: string;
  alt: string;
  name?: string;
  link?: string;
  date?: Date;
};

export type UserInfoParamsTypes = {
  params: {
    username: string;
  };
};

export type UserProfileInfoTypes = {
  id: string;
  username: string;
  avatar: string | null;
  cover: string | null;
  name: string | null;
  surname: string | null;
  description: string | null;
  city: string | null;
  school: string | null;
  work: string | null;
  website: string | null;
  createdAt: Date;
  _count?: {
    followers?: number;
    followings?: number;
    posts?: number;
  };
};

export type UserPublicInfoTypes = {
  elementType:
    | "p"
    | "span"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "div"
    | "b"
    | "i"
    | "strong";
  className?: string;
  userPublic: UserProfileInfoTypes;
  followType?: "followers" | "followings";
  textShow?: "followers" | "followings" | "K";
};

export type UserProfileProps = {
  user: UserProfileInfoTypes;
};

export type FollowsAndBlockTypes = {
  userId: string;
  isUserBlocked: boolean;
  isFollowing: boolean;
  isFollowingSent: boolean;
};

export type UserStateTypes = {
  following: boolean;
  blocked: boolean;
  followingReqSent: boolean;
};

export type UserStateActionTypes = {
  actions: "Follow" | "Block";
};
