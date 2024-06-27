import React from "react";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { IconInteractivePropsTypes } from "@/types/Icons.type";

function IconInteractive({
  src,
  alt,
  width = 16,
  height = 16,
  commClassName = "w-4 h-4 cursor-pointer hover:opacity-70 hover:duration-500",
  className,
  ...props
}: IconInteractivePropsTypes) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={cn(commClassName, className)}
      {...props}
    />
  );
}

export default IconInteractive;
