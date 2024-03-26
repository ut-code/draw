import { NextRequest, NextResponse } from "next/server";
import prisma from "@/app/lib/db";

export async function POST(req: NextRequest) {
  const { title, userName, filePath } = await req.json();

  const res = await prisma.draw.create({
    data: {
      userName: userName,
      title: title,
      filePath: filePath,
    },
  });
  
  return NextResponse.json(res);
}
