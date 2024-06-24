import Link from "next/link";
import Image from "next/image";
import { SignedOut } from "@clerk/nextjs";

import { icons } from "../../public";

function SignOut() {
  return (
    <SignedOut>
      <div className="flex items-center gap-2 hover:opacity-80 hover:text-blue-600 hover:duration-500">
        <Image src={icons.login} alt={icons.login} width={20} height={20} />
        <Link href="/sign-in">Login/ Register</Link>
      </div>
    </SignedOut>
  );
}

export default SignOut;
