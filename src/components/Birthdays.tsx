import Link from "next/link";
import Image from "next/image";

import { icons } from "../../public";

function Birthday() {
  return (
    <div className="bg-white rounded-lg shadow-md text-sm p-4">
      {/* Top */}
      <div className="flex items-center justify-between font-medium">
        <span className="text-gray-500">Friend requests</span>
      </div>

      <div className="flex items-center justify-between py-4">
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
          <button className="bg-blue-500 text-white text-xs font-medium rounded-md p-1 hover:opacity-80 hover:duration-500">
            Celebrate
          </button>
        </div>
      </div>

      <div className="flex items-center gap-4 p-4 bg-slate-100 rounded-lg ">
        <Image src={icons.gift} alt={icons.gift} width={24} height={24} />
        <Link
          href="/"
          className="flex flex-col gap-1 text-xs hover:opacity-70 hover:duration-500"
        >
          <span className="text-gray-700 font-semibold">Upcoming Birthday</span>
          <span className="text-gray-500">
            See other 16 have upcoming birthdays.
          </span>
        </Link>
      </div>
    </div>
  );
}

export default Birthday;
