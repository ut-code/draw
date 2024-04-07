-- CreateTable
CREATE TABLE "Works" (
    "id" TEXT NOT NULL,
    "userName" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "permitToShowOnTopPage" BOOLEAN NOT NULL,

    CONSTRAINT "Works_pkey" PRIMARY KEY ("id")
);
