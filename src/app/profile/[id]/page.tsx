import Feed from "@/components/Feed";
import LeftMenu from "@/components/LeftMenu";
import ProfileInfo from "@/components/ProfileInfo";
import RightMenu from "@/components/RightMenu";

function ProfilePage() {
  return (
    <div className="flex gap-6">
      <div className="hidden xl:block w-[20%]">
        <LeftMenu type="Profile" />
      </div>

      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <ProfileInfo />
        <Feed />
      </div>

      <div className="hidden lg:block w-[30%]">
        <RightMenu userId="user1" />
      </div>
    </div>
  );
}

export default ProfilePage;
