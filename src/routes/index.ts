import { MenuOptionsTypes } from "@/types/MenuOptions.type";
import { RouteEndPointTypes } from "@/types/RouteEndPoint.type";

export const routesUrlEndpoint: RouteEndPointTypes = {
  home: "/",
  friends: "/friends",
  groups: "/groups",
  stories: "/stories",
  login: "/login",
} as const;

const routesNameEndpoint: RouteEndPointTypes = {
  home: "Home",
  friends: "Friends",
  groups: "Groups",
  stories: "Stories",
  login: "Login",
} as const;

const routesIconEndpoint: RouteEndPointTypes = {
  home: "/home.png",
  friends: "/friends.png",
  groups: "/groups.png",
  stories: "/stories.png",
  login: "/noAvatar.png",
} as const;

export const menuMobileOptions: MenuOptionsTypes[] = [
  {
    name: routesNameEndpoint.home,
    href: routesUrlEndpoint.home,
    icon: routesIconEndpoint.home,
  },
  {
    name: routesNameEndpoint.friends,
    href: routesUrlEndpoint.friends,
    icon: routesIconEndpoint.friends,
  },
  {
    name: routesNameEndpoint.groups,
    href: routesUrlEndpoint.groups,
    icon: routesIconEndpoint.groups,
  },
  {
    name: routesNameEndpoint.stories,
    href: routesUrlEndpoint.stories,
    icon: routesIconEndpoint.stories,
  },
  {
    name: routesNameEndpoint.login,
    href: routesUrlEndpoint.login,
    icon: routesIconEndpoint.login,
  },
];
