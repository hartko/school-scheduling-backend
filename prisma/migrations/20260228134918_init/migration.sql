/*
  Warnings:

  - You are about to drop the `TeacherSchedule` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "TeacherSchedule" DROP CONSTRAINT "TeacherSchedule_schedule_id_fkey";

-- DropForeignKey
ALTER TABLE "TeacherSchedule" DROP CONSTRAINT "TeacherSchedule_teacher_id_fkey";

-- DropTable
DROP TABLE "TeacherSchedule";

-- CreateTable
CREATE TABLE "RoomSchedule" (
    "id" SERIAL NOT NULL,
    "room_id" INTEGER NOT NULL,
    "schedule_id" INTEGER NOT NULL,
    "teacherId" INTEGER,

    CONSTRAINT "RoomSchedule_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "RoomSchedule_room_id_schedule_id_key" ON "RoomSchedule"("room_id", "schedule_id");

-- AddForeignKey
ALTER TABLE "RoomSchedule" ADD CONSTRAINT "RoomSchedule_room_id_fkey" FOREIGN KEY ("room_id") REFERENCES "Room"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RoomSchedule" ADD CONSTRAINT "RoomSchedule_schedule_id_fkey" FOREIGN KEY ("schedule_id") REFERENCES "Schedule"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RoomSchedule" ADD CONSTRAINT "RoomSchedule_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "Teacher"("id") ON DELETE SET NULL ON UPDATE CASCADE;
