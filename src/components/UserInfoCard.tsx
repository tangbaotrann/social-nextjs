import Link from "next/link";
import Image from "next/image";
import moment from "moment";
import { auth } from "@clerk/nextjs/server";

import { icons } from "../../public";
import BoxShadow from "./BoxShadow";
import UserName from "./UserName";
import prisma from "@/lib/prisma";
import { UserInfoOptionsIconTypes, UserProfileProps } from "@/types/User.type";
import FollowsAndBlockAction from "./FollowsAndBlockAction";

async function UserInfoCard({ user }: UserProfileProps) {
  const iconUserInfoOptions: UserInfoOptionsIconTypes[] = [
    {
      src: icons.map,
      alt: "Living in",
      name: user.city || "no update.",
    },
    {
      src: icons.school,
      alt: "Went to",
      name: user.school || "no update.",
    },
    {
      src: icons.work,
      alt: "Works at",
      name: user.work || "no update.",
    },
    {
      src: icons.link,
      alt: "",
      link: user.website || "no update.",
    },
    {
      src: icons.date,
      alt: "Joined ",
      date: user.createdAt || "no update.",
    },
  ];

  let isUserBlocked = false;
  let isFollowing = false;
  let isFollowingSent = false;

  const { userId: currentUserId } = auth();

  if (currentUserId) {
    // Block
    const resBlocked = await prisma.block.findFirst({
      where: {
        blockerId: currentUserId,
        blockedId: user.id,
      },
    });

    resBlocked ? (isUserBlocked = true) : (isUserBlocked = false);

    // Follow
    const resFollows = await prisma.follower.findFirst({
      where: {
        followerId: currentUserId,
        followingId: user.id,
      },
    });

    resFollows ? (isFollowing = true) : (isFollowing = false);

    // Follow req
    const resFollowReq = await prisma.followRequest.findFirst({
      where: {
        senderId: currentUserId,
        receiverId: user.id,
      },
    });

    resFollowReq ? (isFollowingSent = true) : (isFollowingSent = false);
  }

  return (
    <BoxShadow textTitleLeft="User information" textTitleRight="See all">
      <div className="flex flex-col gap-4 text-gray-500">
        <div className="flex items-center gap-2">
          <UserName
            elementType="span"
            userPublic={user}
            className="text-xl text-black"
          />
          <span className="text-sm">@{user.username}</span>
        </div>

        <p className="">{user.description}</p>

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

              {iconOption.date && moment(iconOption.date).format("DD/MM/YYYY")}
            </span>
          </div>
        ))}

        <FollowsAndBlockAction
          userId={user.id}
          currentUserId={currentUserId}
          isUserBlocked={isUserBlocked}
          isFollowing={isFollowing}
          isFollowingSent={isFollowingSent}
        />
      </div>
    </BoxShadow>
  );
}

export default UserInfoCard;
