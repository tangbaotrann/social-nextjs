import { notFound } from "next/navigation";
import { auth } from "@clerk/nextjs/server";

import Feed from "@/components/Feed";
import LeftMenu from "@/components/LeftMenu";
import ProfileInfo from "@/components/ProfileInfo";
import RightMenu from "@/components/RightMenu";
import prisma from "@/lib/prisma";
import { UserInfoParamsTypes } from "@/types/User.type";

async function ProfilePage({ params }: UserInfoParamsTypes) {
  let isBlocked = false;

  const { userId: currentUserId } = auth();

  const user = await prisma.user.findFirst({
    where: {
      username: params.username,
    },
    include: {
      _count: {
        select: {
          followers: true,
          followings: true,
          posts: true,
        },
      },
    },
  });

  if (!user) return notFound();

  // Check block user
  if (currentUserId) {
    const resBlocked = await prisma.block.findFirst({
      where: {
        blockerId: user.id,
        blockedId: currentUserId,
      },
    });

    if (resBlocked) isBlocked = true;
  } else {
    isBlocked = false;
  }

  if (isBlocked) return notFound();

  return (
    <div className="flex gap-6">
      <div className="hidden xl:block w-[20%]">
        <LeftMenu type="Profile" />
      </div>

      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <ProfileInfo user={user} />
        <Feed username={user.username} />
      </div>

      <div className="hidden lg:block w-[30%]">
        <RightMenu user={user} />
      </div>
    </div>
  );
}

export default ProfilePage;
