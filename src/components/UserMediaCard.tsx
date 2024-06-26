import Image from "next/image";

import { UserTypes } from "@/types/User.type";
import BoxShadow from "./BoxShadow";

function UserMediaCard({ userId }: UserTypes) {
  return (
    <BoxShadow textTitleLeft="User media" textTitleRight="See all">
      <div className="flex flex-wrap justify-between gap-4">
        <div className="relative w-1/4 h-24">
          <Image
            src="https://images.pexels.com/photos/26152779/pexels-photo-26152779/free-photo-of-g-phong-c-nh-n-c-nui.png?auto=compress&cs=tinysrgb&w=400&lazy=load"
            alt=""
            fill
            className="object-cover rounded-md"
          />
        </div>
        <div className="relative w-1/4 h-24">
          <Image
            src="https://images.pexels.com/photos/26152779/pexels-photo-26152779/free-photo-of-g-phong-c-nh-n-c-nui.png?auto=compress&cs=tinysrgb&w=400&lazy=load"
            alt=""
            fill
            className="object-cover rounded-md"
          />
        </div>
        <div className="relative w-1/4 h-24">
          <Image
            src="https://images.pexels.com/photos/26152779/pexels-photo-26152779/free-photo-of-g-phong-c-nh-n-c-nui.png?auto=compress&cs=tinysrgb&w=400&lazy=load"
            alt=""
            fill
            className="object-cover rounded-md"
          />
        </div>
        <div className="relative w-1/4 h-24">
          <Image
            src="https://images.pexels.com/photos/26152779/pexels-photo-26152779/free-photo-of-g-phong-c-nh-n-c-nui.png?auto=compress&cs=tinysrgb&w=400&lazy=load"
            alt=""
            fill
            className="object-cover rounded-md"
          />
        </div>
      </div>
    </BoxShadow>
  );
}

export default UserMediaCard;
