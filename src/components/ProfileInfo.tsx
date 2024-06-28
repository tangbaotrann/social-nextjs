import Image from "next/image";

import { UserProfileInfoTypes } from "@/types/User.type";

// Fake data
const userProfileInfo: UserProfileInfoTypes = {
  totalPost: 123,
  titlePost: "Posts",
  totalFollowers: 12.5,
  titleFollowers: "Followers",
  totalFollowing: 10.5,
  titleFollowing: "Following",
};

function ProfileInfo() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col items-center justify-center">
        <div className="w-full h-64 relative">
          <Image
            src="https://images.pexels.com/photos/25587971/pexels-photo-25587971/free-photo-of-g-thien-nhien-t-i-m-u.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            fill
            className="object-cover rounded-md"
          />
          <Image
            src="https://images.pexels.com/photos/17192407/pexels-photo-17192407/free-photo-of-tay-may-m-n-th-c-v-t-la.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            width={128}
            height={128}
            className="w-32 h-32 object-cover rounded-full absolute left-0 right-0 m-auto -bottom-16 ring-4 ring-white"
          />
        </div>

        <h1 className="mt-20 mb-2 text-2xl font-bold">Kean</h1>

        <div className="flex items-center justify-center gap-12 mb-4">
          <div className="flex flex-col items-center">
            <span className="font-medium">{userProfileInfo.totalPost}</span>
            <span className="text-sm">{userProfileInfo.titlePost}</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-medium">
              {userProfileInfo.totalFollowers}k
            </span>
            <span className="text-sm">{userProfileInfo.titleFollowers}</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-medium">
              {userProfileInfo.totalFollowing}k
            </span>
            <span className="text-sm">{userProfileInfo.titleFollowing}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;
