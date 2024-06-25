import Ad from "./Ad";
import Birthday from "./Birthdays";
import FriendRequests from "./FriendRequests";
import UserInfoCard from "./UserInfoCard";
import UserMediaCard from "./UserMediaCard";
import { UserTypes } from "@/types/User.type";

function RightMenu({ userId }: UserTypes) {
  return (
    <div className="flex flex-col gap-6">
      {userId ? (
        <>
          <UserInfoCard userId={userId} />
          <UserMediaCard userId={userId} />
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
