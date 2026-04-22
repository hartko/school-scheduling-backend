/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Schedule` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `name` to the `Schedule` table without a default value. This is not possible if the table is not empty.
  - Added the required column `schedule_code` to the `Schedule` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Schedule" ADD COLUMN     "description" TEXT,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "schedule_code" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Schedule_name_key" ON "Schedule"("name");
