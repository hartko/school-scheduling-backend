/*
  Warnings:

  - You are about to drop the column `day` on the `Schedule` table. All the data in the column will be lost.
  - You are about to drop the column `end_time` on the `Schedule` table. All the data in the column will be lost.
  - You are about to drop the column `is_break` on the `Schedule` table. All the data in the column will be lost.
  - You are about to drop the column `start_time` on the `Schedule` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Schedule" DROP COLUMN "day",
DROP COLUMN "end_time",
DROP COLUMN "is_break",
DROP COLUMN "start_time";

-- CreateTable
CREATE TABLE "ScheduleTime" (
    "id" SERIAL NOT NULL,
    "start_time" TEXT NOT NULL,
    "end_time" TEXT NOT NULL,
    "is_break" BOOLEAN NOT NULL DEFAULT false,
    "day" INTEGER NOT NULL,
    "schedule_id" INTEGER NOT NULL,

    CONSTRAINT "ScheduleTime_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ScheduleTime" ADD CONSTRAINT "ScheduleTime_schedule_id_fkey" FOREIGN KEY ("schedule_id") REFERENCES "Schedule"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
