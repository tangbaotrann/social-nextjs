import { auth } from "@clerk/nextjs/server";

import BoxShadow from "./BoxShadow";
import prisma from "@/lib/prisma";
import FriendRequestListAction from "./FriendRequestListAction";

async function FriendRequests() {
  const { userId: currentUserId } = auth();

  const requests = await prisma.followRequest.findMany({
    where: {
      receiverId: currentUserId || "",
    },
    include: {
      sender: true,
    },
  });

  return (
    <BoxShadow
      textTitleLeft="Friend requests"
      textTitleRight={`${requests.length > 0 ? "See all" : ""}`}
    >
      <FriendRequestListAction requests={requests} />
    </BoxShadow>
  );
}

export default FriendRequests;
