import Image from "next/image";

import UserName from "./UserName";
import { UserProfileInfoTypes } from "@/types/User.type";

type UserProfileProps = {
  user: UserProfileInfoTypes;
};

function ProfileInfo({ user }: UserProfileProps) {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col items-center justify-center">
        <div className="w-full h-64 relative">
          <Image
            src={user.cover || ""}
            alt={user.cover || ""}
            fill
            className="object-cover rounded-md"
          />
          <Image
            src={user.avatar || ""}
            alt={user.avatar || ""}
            width={128}
            height={128}
            className="w-32 h-32 object-cover rounded-full absolute left-0 right-0 m-auto -bottom-16 ring-4 ring-white"
          />
        </div>

        <UserName
          elementType="h1"
          className="mt-20 mb-2 text-2xl font-bold"
          user={user}
        />

        <div className="flex items-center justify-center gap-12 mb-4">
          <div className="flex flex-col items-center">
            <span className="font-medium">{user._count.posts}</span>
            <span className="text-sm">Posts</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-medium">{user._count.followers}k</span>
            <span className="text-sm">Followers</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-medium">{user._count.followings}k</span>
            <span className="text-sm">Followings</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;
