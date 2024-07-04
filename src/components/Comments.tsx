import prisma from "@/lib/prisma";
import CommentInput from "./CommentInput";
import { commentLoadLimit } from "@/constants";

async function Comments({ postId }: { postId: number }) {
  const comments = await prisma.comment.findMany({
    where: {
      postId: postId,
    },
    include: {
      user: true,
    },
    orderBy: {
      createdAt: "desc",
    },
    take: commentLoadLimit as number,
  });

  return <CommentInput comments={comments} postId={postId} />;
}

export default Comments;
