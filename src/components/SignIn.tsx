import Image from "next/image";
import { SignedIn, UserButton } from "@clerk/nextjs";

import { icons } from "../../public";

function SignIn() {
  return (
    <SignedIn>
      <div className="cursor-pointer">
        <Image src={icons.people} alt={icons.people} width={20} height={20} />
      </div>
      <div className="cursor-pointer">
        <Image src={icons.message} alt={icons.message} width={20} height={20} />
      </div>
      <div className="cursor-pointer">
        <Image
          src={icons.notification}
          alt={icons.notification}
          width={20}
          height={20}
        />
      </div>
      <UserButton />
    </SignedIn>
  );
}

export default SignIn;
