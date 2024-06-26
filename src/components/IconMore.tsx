import Image from "next/image";

import { icons } from "../../public";

function IconMore() {
  return (
    <Image
      src={icons.more}
      alt={icons.more}
      width={16}
      height={16}
      className="w-4 h-4 cursor-pointer hover:opacity-70 hover:duration-500"
    />
  );
}

export default IconMore;
