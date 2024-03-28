import { NextRequest, NextResponse } from "next/server";
import prisma from "@/app/lib/db";

export async function POST(req: NextRequest) {
  const { workId, title, userName, permitToShowOnTopPage } = await req.json();

  const res = await prisma.works.create({
    data: {
      id: workId,
      userName: userName,
      title: title,
      permitToShowOnTopPage,
    },
  });

  return NextResponse.json(res);
}
