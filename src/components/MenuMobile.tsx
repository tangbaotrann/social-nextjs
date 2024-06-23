"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import { menuMobileOptions } from "@/routes";
import { MenuOptionsTypes } from "@/types/MenuOptions.type";

function MenuMobile() {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const handleMenuClick = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div className="md:hidden">
      <div
        className="flex flex-col gap-[4.5px] cursor-pointer duration-500 hover:opacity-80"
        onClick={handleMenuClick}
      >
        <div
          className={`w-6 h-1 bg-blue-500 rounded-sm ${
            openMenu ? "rotate-45" : ""
          } origin-left ease-in-out duration-500`}
        ></div>
        <div
          className={`w-6 h-1 bg-blue-500 rounded-sm ${
            openMenu ? "opacity-0" : ""
          }`}
        ></div>
        <div
          className={`w-6 h-1 bg-blue-500 rounded-sm ${
            openMenu ? "-rotate-45" : ""
          } origin-left ease-in-out duration-500`}
        ></div>
      </div>

      {openMenu && (
        <div className="absolute left-0 top-24 w-full h-[calc(100vh-96px)] bg-white flex flex-col items-center justify-center gap-8 font-medium text-xl z-10">
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
      )}
    </div>
  );
}

export default MenuMobile;
