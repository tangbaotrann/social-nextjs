"use client";

import Link from "next/link";
import Image from "next/image";
import { ClerkLoaded, ClerkLoading, SignedOut } from "@clerk/nextjs";

import Loading from "./Loading";
import MenuMobile from "./MenuMobile";
import { MenuOptionsTypes } from "@/types/MenuOptions.type";
import { menuMobileOptions, routesUrlEndpoint } from "@/routes";
import SearchInput from "./SearchInput";
import SignIn from "./SignIn";
import SignOut from "./SignOut";

function NavBar() {
  return (
    <div className="flex items-center justify-between w-full h-24">
      <Link
        href={routesUrlEndpoint.home}
        className="md:hidden lg:block text-xl font-bold text-blue-600"
      >
        Social.dev
      </Link>

      <div className="hidden md:flex items-center justify-center gap-4">
        {menuMobileOptions
          .map((menu: MenuOptionsTypes) => (
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
          ))
          .slice(0, -2)}
      </div>

      <SearchInput />

      <div className="flex items-center justify-center gap-6">
        <ClerkLoading>
          <Loading />
        </ClerkLoading>
        <ClerkLoaded>
          <SignIn />
          <SignOut />
        </ClerkLoaded>
      </div>

      <MenuMobile />
    </div>
  );
}

export default NavBar;
