import Image from "next/image";

import { AdTypes } from "@/types/Ad.type";
import BoxShadow from "./BoxShadow";
import IconMore from "./IconInteractive";

function Ad({ size }: AdTypes) {
  return (
    <BoxShadow textTitleLeft="Sponsored Ads" iconTitleRight={<IconMore />}>
      <div className={`flex flex-col ${size === "sm" ? "gap-2" : "gap-4"}`}>
        <div className={`relative w-full ${size === "md" ? "h-36" : "h-48"}`}>
          <Image
            src="https://images.pexels.com/photos/8259263/pexels-photo-8259263.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
            alt=""
            fill
            className="rounded-lg object-cover"
          />
        </div>

        <div className="flex items-center gap-4">
          <Image
            src="https://images.pexels.com/photos/8259263/pexels-photo-8259263.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
            alt=""
            width={24}
            height={24}
            className="rounded-full w-6 h-6 object-cover"
          />
          <span className="text-blue-500 font-medium">Big Lou</span>
        </div>

        <p className={size === "sm" ? "text-xs" : "text-sm"}>
          {size === "sm"
            ? "Description sm"
            : size === "md"
            ? "Description md"
            : "Description lg"}
        </p>

        <button className="bg-gray-200 text-gray-500 p-2 text-xs rounded-lg">
          Learn more
        </button>
      </div>
    </BoxShadow>
  );
}

export default Ad;
