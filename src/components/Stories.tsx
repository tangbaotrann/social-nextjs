import Image from "next/image";
import { auth } from "@clerk/nextjs/server";

import prisma from "@/lib/prisma";
import StoriesList from "./StoriesList";

async function Stories() {
  const { userId: currentUserId } = auth();

  if (!currentUserId) return null;

  const stories = await prisma.story.findMany({
    where: {
      expiresAt: {
        gt: new Date(),
      },
      OR: [
        {
          user: {
            followers: {
              some: {
                followerId: currentUserId,
              },
            },
          },
        },
        {
          userId: currentUserId,
        },
      ],
    },
    include: {
      user: true,
    },
  });

  return (
    <div className="bg-white rounded-lg p-4 shadow-md overflow-scroll text-xs scrollbar-hide">
      <div className="flex items-center gap-8">
        <StoriesList stories={stories} userId={currentUserId} />
      </div>
    </div>
  );
}

export default Stories;
