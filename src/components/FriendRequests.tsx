import Image from "next/image";

import { icons } from "../../public";
import BoxShadow from "./BoxShadow";

function FriendRequests() {
  return (
    <BoxShadow textTitleLeft="Friend requests" textTitleRight="See all">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="https://images.pexels.com/photos/20643866/pexels-photo-20643866/free-photo-of-thanh-ph-toa-nha-toa-nha-ch-c-tr-i-cac-c-a-s.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
            alt=""
            width={40}
            height={40}
            className="w-10 h-10 object-cover rounded-full"
          />
          <span className="">Join</span>
        </div>

        <div className="flex items-center gap-2">
          <Image
            src={icons.accept}
            alt=""
            width={20}
            height={20}
            className="cursor-pointer hover:opacity-70 hover:duration-500"
          />
          <Image
            src={icons.reject}
            alt=""
            width={20}
            height={20}
            className="cursor-pointer hover:opacity-70 hover:duration-500"
          />
        </div>
      </div>
    </BoxShadow>
  );
}

export default FriendRequests;
