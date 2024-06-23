import {
  iconFriend,
  iconGroup,
  iconHome,
  iconMessage,
  iconNoAvatar,
  iconNotification,
  iconPeople,
  iconSearch,
  iconStory,
} from "@/constants";
import { IconsTypes } from "@/types/Icons.type";

export const icons: IconsTypes = {
  home: iconHome,
  friends: iconFriend,
  groups: iconGroup,
  stories: iconStory,
  login: iconNoAvatar,
  people: iconPeople,
  message: iconMessage,
  notification: iconNotification,
  search: iconSearch,
} as const;
