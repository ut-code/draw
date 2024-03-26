-- CreateTable
CREATE TABLE "Draw" (
    "id" TEXT NOT NULL DEFAULT uuid_generate_v4(),
    "userName" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "filePath" TEXT NOT NULL,

    CONSTRAINT "Draw_pkey" PRIMARY KEY ("id")
);
