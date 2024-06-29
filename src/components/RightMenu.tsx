import { Suspense } from "react";

import Ad from "./Ad";
import Birthday from "./Birthdays";
import FriendRequests from "./FriendRequests";
import UserInfoCard from "./UserInfoCard";
import UserMediaCard from "./UserMediaCard";
import Loading from "./Loading";
import { UserProfileProps } from "@/types/User.type";

function RightMenu({ user }: UserProfileProps) {
  return (
    <div className="flex flex-col gap-6">
      {user ? (
        <>
          <Suspense fallback={<Loading />}>
            <UserInfoCard user={user} />
          </Suspense>

          <Suspense fallback={<Loading />}>
            <UserMediaCard user={user} />
          </Suspense>
        </>
      ) : (
        <>
          <FriendRequests />
          <Birthday />
          <Ad size="md" />
        </>
      )}
    </div>
  );
}

export default RightMenu;
