import Image from "next/image";

import BoxShadow from "./BoxShadow";
import prisma from "@/lib/prisma";
import { Post } from "@prisma/client";
import { UserProfileProps } from "@/types/User.type";

async function UserMediaCard({ user }: UserProfileProps) {
  const listPostWithMedia: Post[] = await prisma.post.findMany({
    where: {
      userId: user.id,
      img: {
        not: null,
      },
    },
    take: 8,
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <BoxShadow textTitleLeft="User media" textTitleRight="See all">
      <div className="flex flex-wrap justify-between gap-4">
        {listPostWithMedia?.length > 0 ? (
          listPostWithMedia?.map((post: Post) => (
            <div className="relative w-1/4 h-24" key={post.id}>
              <Image
                src={post.img!}
                alt="img-not-found"
                fill
                className="object-cover rounded-md"
              />
            </div>
          ))
        ) : (
          <span>Not found media.</span>
        )}
      </div>
    </BoxShadow>
  );
}

export default UserMediaCard;
