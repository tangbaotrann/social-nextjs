import Image from "next/image";
import { icons } from "../../public";

function SearchInput() {
  return (
    <div className="hidden xl:flex p-2 items-center bg-slate-100 rounded-xl">
      <input
        type="search"
        className="bg-transparent outline-none"
        placeholder="Search here..."
      />
      <Image src={icons.search} alt={icons.search} width={20} height={20} />
    </div>
  );
}

export default SearchInput;
