import Link from "next/link";
import Image from "next/image";

import { icons } from "../../public";
import BoxShadow from "./BoxShadow";
import { UserInfoOptionsIconTypes, UserTypes } from "@/types/User.type";

const iconUserInfoOptions: UserInfoOptionsIconTypes[] = [
  {
    src: icons.map,
    alt: "Living in",
    name: "Denver",
  },
  {
    src: icons.school,
    alt: "Went to",
    name: "Edgar High School",
  },
  {
    src: icons.work,
    alt: "Works at",
    name: "Apple Inc.",
  },
  {
    src: icons.link,
    alt: "",
    link: "https://github.com/tangbaotrann",
  },
  {
    src: icons.date,
    alt: "",
    date: "2024-22-01",
  },
];

function UserInfoCard({ userId }: UserTypes) {
  return (
    <BoxShadow textTitleLeft="User information" textTitleRight="See all">
      <div className="flex flex-col gap-4 text-gray-500">
        <div className="flex items-center gap-2">
          <span className="text-xl text-black">Fleming</span>
          <span className="text-sm">@Fleming</span>
        </div>

        <p className="">Desc...</p>

        {iconUserInfoOptions.map((iconOption: UserInfoOptionsIconTypes) => (
          <div className="flex items-center gap-2" key={iconOption.src}>
            <Image
              src={iconOption.src}
              alt={iconOption.alt}
              width={16}
              height={16}
            />
            <span className="flex items-center gap-1">
              {iconOption.alt}
              <b>{iconOption.name}</b>
              {iconOption.link && (
                <Link
                  href={iconOption.link}
                  target="_blank"
                  className="font-medium hover:opacity-80 hover:text-blue-600 hover:duration-500"
                >
                  <i>{iconOption.link}</i>
                </Link>
              )}
              {iconOption.date && iconOption.date}
            </span>
          </div>
        ))}

        <button className="w-full bg-blue-500 text-white rounded-md p-2 hover:opacity-80 hover:duration-500">
          Following
        </button>
        <span className="text-red-500 text-xs self-end cursor-pointer hover:opacity-70 hover:duration-500">
          Block user
        </span>
      </div>
    </BoxShadow>
  );
}

export default UserInfoCard;
