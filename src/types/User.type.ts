export type UserTypes = {
  userId?: string;
};

export type UserInfoOptionsIconTypes = {
  src: string;
  alt: string;
  name?: string;
  link?: string;
  date?: string;
};

export type UsernameTypes = {
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
  user: {
    name: string | null;
    surname: string | null;
    username: string;
  };
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
  _count: {
    followers: number;
    followings: number;
    posts: number;
  };
};
