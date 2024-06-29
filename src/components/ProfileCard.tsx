import Image from "next/image";
import { auth } from "@clerk/nextjs/server";

import BoxShadow from "./BoxShadow";
import prisma from "@/lib/prisma";
import { icons } from "../../public";
import UserName from "./UserName";
import Follows from "./Follows";

async function ProfileCard() {
  const { userId } = auth();

  if (!userId) return null;

  const user = await prisma.user.findFirst({
    where: {
      id: userId,
    },
    include: {
      _count: {
        select: {
          followers: true,
        },
      },
    },
  });

  if (!user) return null;

  return (
    <BoxShadow>
      <div className="h-20 relative">
        <Image
          src={user.cover || icons.noCover}
          alt={user.cover || icons.noCover}
          fill
          className="object-cover rounded-md"
        />
        <Image
          src={user.avatar || icons.login}
          alt={user.avatar || icons.login}
          width={48}
          height={48}
          className="object-cover rounded-full w-12 h-12 absolute left-0 right-0 m-auto -bottom-6 ring-1 ring-white z-10"
        />
      </div>

      <div className="flex flex-col items-center justify-center gap-2 py-2">
        <UserName
          elementType="span"
          userPublic={user}
          className="font-medium"
        />

        <div className="flex items-center gap-2">
          {user._count.followers === 0 ? null : (
            <div className="flex items-center gap-1">
              <Image
                src="https://images.pexels.com/photos/20608918/pexels-photo-20608918/free-photo-of-dan-ong-d-ng-ph-toa-nha-t-ng.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt=""
                width={12}
                height={12}
                className="rounded-full object-cover w-3 h-3"
              />
            </div>
          )}
          <Follows
            elementType="span"
            followType="followers"
            textShow="followers"
            userPublic={user}
            className="text-xs text-gray-500"
          />
        </div>

        <button className="bg-blue-500 text-white text-xs p-2 rounded-md hover:opacity-80 hover:duration-500">
          My Profile
        </button>
      </div>
    </BoxShadow>
  );
}

export default ProfileCard;
