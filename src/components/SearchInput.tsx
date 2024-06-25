import Image from "next/image";
import { icons } from "../../public";

function SearchInput() {
  return (
    <div className="hidden xl:flex items-center relative">
      <input
        type="text"
        className="text-sm font-medium bg-slate-100 rounded-xl p-2 outline-none focus:ring-2 focus:duration-500"
        placeholder="Search here..."
      />
      <Image
        src={icons.search}
        alt={icons.search}
        width={20}
        height={20}
        className="absolute right-2"
      />
    </div>
  );
}

export default SearchInput;
