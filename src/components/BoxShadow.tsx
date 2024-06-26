import React from "react";
import Link from "next/link";

import { BoxShadowTypes } from "@/types/BoxShadow.type";
import { routesUrlEndpoint } from "@/routes";
import { cn } from "@/lib/utils";

function BoxShadow({
  textTitleLeft,
  textTitleRight,
  iconTitleRight,
  className,
  children,
}: BoxShadowTypes) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 bg-white rounded-lg shadow-md text-sm p-4",
        className
      )}
    >
      {/* Top */}
      <div className="flex items-center justify-between font-medium">
        <span className="text-gray-500">{textTitleLeft}</span>
        <Link
          href={routesUrlEndpoint.home}
          className="text-blue-500 hover:opacity-70 hover:duration-500"
        >
          {textTitleRight}
        </Link>
        {iconTitleRight && iconTitleRight}
      </div>

      {/* Content other */}
      {children}
    </div>
  );
}

export default BoxShadow;
