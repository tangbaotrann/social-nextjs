import Image from "next/image";

import BoxShadow from "./BoxShadow";

function ProfileCard() {
  return (
    <BoxShadow>
      <div className="h-20 relative">
        <Image
          src="https://images.pexels.com/photos/20347111/pexels-photo-20347111/free-photo-of-phong-c-nh-nui-r-ng-cay.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
          fill
          className="object-cover rounded-md"
        />
        <Image
          src="https://images.pexels.com/photos/20608918/pexels-photo-20608918/free-photo-of-dan-ong-d-ng-ph-toa-nha-t-ng.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
          width={48}
          height={48}
          className="object-cover rounded-full w-12 h-12 absolute left-0 right-0 m-auto -bottom-6 ring-1 ring-white z-10"
        />
      </div>

      <div className="flex flex-col items-center justify-center gap-2 py-2">
        <span className="font-semibold">Username</span>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <Image
              src="https://images.pexels.com/photos/20608918/pexels-photo-20608918/free-photo-of-dan-ong-d-ng-ph-toa-nha-t-ng.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
              width={12}
              height={12}
              className="rounded-full object-cover w-3 h-3"
            />
            <Image
              src="https://images.pexels.com/photos/20608918/pexels-photo-20608918/free-photo-of-dan-ong-d-ng-ph-toa-nha-t-ng.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
              width={12}
              height={12}
              className="rounded-full object-cover w-3 h-3"
            />
          </div>

          <span className="text-xs text-gray-500">50 followers</span>
        </div>

        <button className="bg-blue-500 text-white text-xs p-2 rounded-md hover:opacity-80 hover:duration-500">
          My Profile
        </button>
      </div>
    </BoxShadow>
  );
}

export default ProfileCard;
