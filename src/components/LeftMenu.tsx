import Link from "next/link";
import Image from "next/image";

import BoxShadow from "./BoxShadow";
import ProfileCard from "./ProfileCard";
import { icons } from "../../public";
import Separator from "./Separator";
import Ad from "./Ad";
import { ImageIconTypes } from "@/types/ImageIcon.type";
import { LayoutLeftTypes } from "@/types/LeftMenu.type";
import {
  titleActivity,
  titleAlbums,
  titleCourse,
  titleEvent,
  titleList,
  titleMarket,
  titleNews,
  titlePost,
  titleSetting,
  titleVideo,
} from "@/constants";

const iconOptions: ImageIconTypes[] = [
  {
    src: icons.post,
    alt: titlePost,
  },
  {
    src: icons.activity,
    alt: titleActivity,
  },
  {
    src: icons.market,
    alt: titleMarket,
  },
  {
    src: icons.event,
    alt: titleEvent,
  },
  {
    src: icons.albums,
    alt: titleAlbums,
  },
  {
    src: icons.video,
    alt: titleVideo,
  },
  {
    src: icons.news,
    alt: titleNews,
  },
  {
    src: icons.course,
    alt: titleCourse,
  },
  {
    src: icons.list,
    alt: titleList,
  },
  {
    src: icons.setting,
    alt: titleSetting,
  },
];

function LeftMenu({ type }: LayoutLeftTypes) {
  return (
    <div className="flex flex-col gap-6">
      {type === "Home" && <ProfileCard />}

      <BoxShadow>
        {iconOptions.map((iconOption: ImageIconTypes) => (
          <div key={iconOption.alt}>
            <Link
              href="/"
              className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100 hover:opacity-80 hover:duration-500"
            >
              <Image
                src={iconOption.src}
                alt={iconOption.alt}
                width={20}
                height={20}
              />
              <span>{iconOption.alt}</span>
            </Link>

            <Separator />
          </div>
        ))}

        <Ad size="sm" />
      </BoxShadow>
    </div>
  );
}

export default LeftMenu;
