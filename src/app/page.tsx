import { Suspense } from "react";

import AddPost from "@/components/AddPost";
import Feed from "@/components/Feed";
import LeftMenu from "@/components/LeftMenu";
import Loading from "@/components/Loading";
import RightMenu from "@/components/RightMenu";
import Stories from "@/components/Stories";

export default function Home() {
  return (
    <div className="flex gap-6">
      <div className="hidden xl:block w-[20%]">
        <Suspense fallback={<Loading />}>
          <LeftMenu type="Home" />
        </Suspense>
      </div>

      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <Stories />
        <AddPost />
        <Feed />
      </div>

      <div className="hidden lg:block w-[30%]">
        <RightMenu />
      </div>
    </div>
  );
}
