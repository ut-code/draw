import { NextRequest, NextResponse } from "next/server";
import prisma from "@/app/lib/db";

export async function POST(req: NextRequest) {
  const request = await req.json();
  const mode = request.mode;

  if (mode === "upload") {
    const res = await prisma.works.create({
      data: {
        id: request.workId,
        userName: request.userName,
        title: request.title,
        permitToShowOnTopPage: request.permitToShowOnTopPage,
      },
    });

    return NextResponse.json(res);
  } else if (mode === "download") {
    const res = await prisma.works.findMany({
      where: {
        id: request.workId,
      },
    });

    return NextResponse.json(res);
  } else if (mode === "public_download") {
    const res = await prisma.works.findMany({
      where: {
        permitToShowOnTopPage: true,
      },
    });

    return NextResponse.json(res);
  } else {
    throw new Error("mode error");
  }
}
