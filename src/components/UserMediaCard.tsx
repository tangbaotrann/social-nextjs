import Link from "next/link";
import Image from "next/image";

import { UserTypes } from "@/types/User.type";

function UserMediaCard({ userId }: UserTypes) {
  return (
    <div className="flex flex-col gap-4 bg-white rounded-lg shadow-md text-sm p-4">
      {/* Top */}
      <div className="flex items-center justify-between font-medium">
        <span className="text-gray-500">User media</span>
        <Link
          href="/"
          className="text-blue-500 hover:opacity-70 hover:duration-500"
        >
          See all
        </Link>
      </div>

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
    </div>
  );
}

export default UserMediaCard;
