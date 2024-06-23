"use client";

import Link from "next/link";
import Image from "next/image";

import MenuMobile from "./MenuMobile";
import { menuMobileOptions, routesUrlEndpoint } from "@/routes";
import { MenuOptionsTypes } from "@/types/MenuOptions.type";

function NavBar() {
  return (
    <div className="flex items-center justify-between h-24">
      <Link
        href={routesUrlEndpoint.home}
        className="hidden lg:block text-xl font-bold text-blue-600"
      >
        Social.dev
      </Link>

      <div className="hidden md:flex items-center justify-center gap-4">
        {menuMobileOptions.map((menu: MenuOptionsTypes) => (
          <Link
            href={menu.href}
            key={menu.name}
            className="flex items-center gap-2 text-gray-600 font-medium hover:text-blue-500 duration-500 hover:opacity-80"
          >
            <Image
              src={menu.icon || ""}
              alt={menu.icon || ""}
              width={16}
              height={16}
            />
            {menu.name}
          </Link>
        ))}
      </div>

      <div className="">
        <MenuMobile />
      </div>
    </div>
  );
}

export default NavBar;
