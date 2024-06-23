import { MenuOptionsTypes } from "@/types/MenuOptions.type";
import { RouteEndPointTypes } from "@/types/RouteEndPoint.type";
import { icons } from "../../public";
import {
  routeNameFriend,
  routeNameGroup,
  routeNameHome,
  routeNameNoAvatar,
  routeNameStory,
  routeUrlFriend,
  routeUrlGroup,
  routeUrlHome,
  routeUrlNoAvatar,
  routeUrlStory,
} from "@/constants";

export const routesUrlEndpoint: RouteEndPointTypes = {
  home: routeUrlHome,
  friends: routeUrlFriend,
  groups: routeUrlGroup,
  stories: routeUrlStory,
  login: routeUrlNoAvatar,
} as const;

const routesNameEndpoint: RouteEndPointTypes = {
  home: routeNameHome,
  friends: routeNameFriend,
  groups: routeNameGroup,
  stories: routeNameStory,
  login: routeNameNoAvatar,
} as const;

const routesIconEndpoint: RouteEndPointTypes = {
  home: icons.home,
  friends: icons.friends,
  groups: icons.groups,
  stories: icons.stories,
  login: icons.login,
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
    name: routesNameEndpoint.stories,
    href: routesUrlEndpoint.stories,
    icon: routesIconEndpoint.stories,
  },
  {
    name: routesNameEndpoint.groups,
    href: routesUrlEndpoint.groups,
    icon: routesIconEndpoint.groups,
  },
  {
    name: routesNameEndpoint.login,
    href: routesUrlEndpoint.login,
    icon: routesIconEndpoint.login,
  },
];
