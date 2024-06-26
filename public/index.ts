import {
  iconAccept,
  iconActivity,
  iconAddEvent,
  iconAddImage,
  iconAddVideo,
  iconAlbums,
  iconComment,
  iconCourse,
  iconDate,
  iconEmoji,
  iconEvent,
  iconFriend,
  iconGift,
  iconGroup,
  iconHome,
  iconLike,
  iconLink,
  iconList,
  iconMap,
  iconMarket,
  iconMessage,
  iconMore,
  iconNews,
  iconNoAvatar,
  iconNotification,
  iconPeople,
  iconPoll,
  iconPost,
  iconReject,
  iconSchool,
  iconSearch,
  iconSetting,
  iconShare,
  iconStory,
  iconVideo,
  iconWork,
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
  emoji: iconEmoji,
  addImage: iconAddImage,
  addVideo: iconAddVideo,
  addEvent: iconAddEvent,
  poll: iconPoll,
  more: iconMore,
  like: iconLike,
  comment: iconComment,
  share: iconShare,
  accept: iconAccept,
  reject: iconReject,
  gift: iconGift,
  map: iconMap,
  school: iconSchool,
  work: iconWork,
  link: iconLink,
  date: iconDate,
  post: iconPost,
  activity: iconActivity,
  market: iconMarket,
  event: iconEvent,
  albums: iconAlbums,
  video: iconVideo,
  news: iconNews,
  course: iconCourse,
  list: iconList,
  setting: iconSetting,
} as const;
