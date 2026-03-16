/*
  Warnings:

  - You are about to drop the column `room_id` on the `ClassGroup` table. All the data in the column will be lost.
  - You are about to drop the column `scheduleId` on the `ClassGroup` table. All the data in the column will be lost.
  - You are about to drop the column `schedule_id` on the `ClassGroup` table. All the data in the column will be lost.
  - You are about to drop the column `subjectId` on the `ClassGroup` table. All the data in the column will be lost.
  - You are about to drop the column `subject_id` on the `ClassGroup` table. All the data in the column will be lost.
  - You are about to drop the column `teacherId` on the `ClassGroup` table. All the data in the column will be lost.
  - You are about to drop the column `teacher_id` on the `ClassGroup` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "ClassGroup" DROP CONSTRAINT "ClassGroup_roomScheduleId_fkey";

-- DropForeignKey
ALTER TABLE "ClassGroup" DROP CONSTRAINT "ClassGroup_scheduleId_fkey";

-- DropForeignKey
ALTER TABLE "ClassGroup" DROP CONSTRAINT "ClassGroup_subjectId_fkey";

-- DropForeignKey
ALTER TABLE "ClassGroup" DROP CONSTRAINT "ClassGroup_teacherId_fkey";

-- DropForeignKey
ALTER TABLE "ClassGroup" DROP CONSTRAINT "ClassGroup_teacherSubjectId_fkey";

-- AlterTable
ALTER TABLE "ClassGroup" DROP COLUMN "room_id",
DROP COLUMN "scheduleId",
DROP COLUMN "schedule_id",
DROP COLUMN "subjectId",
DROP COLUMN "subject_id",
DROP COLUMN "teacherId",
DROP COLUMN "teacher_id",
ADD COLUMN     "room_schedule_id" INTEGER,
ADD COLUMN     "section_id" INTEGER,
ADD COLUMN     "teacher_subject_id" INTEGER;

-- AddForeignKey
ALTER TABLE "ClassGroup" ADD CONSTRAINT "ClassGroup_teacher_subject_id_fkey" FOREIGN KEY ("teacher_subject_id") REFERENCES "TeacherSubject"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClassGroup" ADD CONSTRAINT "ClassGroup_room_schedule_id_fkey" FOREIGN KEY ("room_schedule_id") REFERENCES "RoomSchedule"("id") ON DELETE SET NULL ON UPDATE CASCADE;
