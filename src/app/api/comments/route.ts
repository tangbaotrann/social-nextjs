import { NextResponse } from "next/server";

import prisma from "@/lib/prisma";

export async function GET(req: Request): Promise<NextResponse<unknown>> {
  try {
    const { searchParams } = new URL(req.url);

    const postId = Number(searchParams.get("postId")) as number;
    const skip = Number(searchParams.get("skip")) as number;
    const take = Number(searchParams.get("take")) as number;

    if (!postId)
      return NextResponse.json(
        { error: "Post id not found!" },
        { status: 400 }
      );

    const comments = await prisma.comment.findMany({
      where: {
        postId: postId,
      },
      include: {
        user: true,
      },
      take: take,
      skip: skip,
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(comments, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json(err, { status: 500 });
  }
}
