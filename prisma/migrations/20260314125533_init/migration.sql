-- CreateTable
CREATE TABLE "Account" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Teacher" (
    "id" SERIAL NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "middle_name" TEXT,
    "teacher_code" TEXT,
    "email" TEXT,

    CONSTRAINT "Teacher_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Room" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "capacity" INTEGER,
    "level" INTEGER,

    CONSTRAINT "Room_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Section" (
    "id" SERIAL NOT NULL,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Section_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Subject" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "code" TEXT,

    CONSTRAINT "Subject_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Schedule" (
    "id" SERIAL NOT NULL,
    "start_time" TEXT NOT NULL,
    "end_time" TEXT NOT NULL,
    "is_break" BOOLEAN NOT NULL DEFAULT false,
    "day" INTEGER NOT NULL,

    CONSTRAINT "Schedule_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TeacherSubject" (
    "id" SERIAL NOT NULL,
    "teacher_id" INTEGER NOT NULL,
    "subject_id" INTEGER NOT NULL,

    CONSTRAINT "TeacherSubject_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RoomSchedule" (
    "id" SERIAL NOT NULL,
    "room_id" INTEGER NOT NULL,
    "schedule_id" INTEGER NOT NULL,
    "teacherId" INTEGER,

    CONSTRAINT "RoomSchedule_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ClassGroup" (
    "id" SERIAL NOT NULL,
    "teacher_id" INTEGER,
    "subject_id" INTEGER,
    "schedule_id" INTEGER,
    "room_id" INTEGER,
    "teacherId" INTEGER,
    "subjectId" INTEGER,
    "scheduleId" INTEGER,
    "teacherSubjectId" INTEGER,
    "roomScheduleId" INTEGER,

    CONSTRAINT "ClassGroup_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Teacher_teacher_code_key" ON "Teacher"("teacher_code");

-- CreateIndex
CREATE UNIQUE INDEX "Teacher_email_key" ON "Teacher"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Section_code_key" ON "Section"("code");

-- CreateIndex
CREATE UNIQUE INDEX "Subject_code_key" ON "Subject"("code");

-- CreateIndex
CREATE UNIQUE INDEX "TeacherSubject_teacher_id_subject_id_key" ON "TeacherSubject"("teacher_id", "subject_id");

-- CreateIndex
CREATE UNIQUE INDEX "RoomSchedule_room_id_schedule_id_key" ON "RoomSchedule"("room_id", "schedule_id");

-- AddForeignKey
ALTER TABLE "TeacherSubject" ADD CONSTRAINT "TeacherSubject_teacher_id_fkey" FOREIGN KEY ("teacher_id") REFERENCES "Teacher"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TeacherSubject" ADD CONSTRAINT "TeacherSubject_subject_id_fkey" FOREIGN KEY ("subject_id") REFERENCES "Subject"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RoomSchedule" ADD CONSTRAINT "RoomSchedule_room_id_fkey" FOREIGN KEY ("room_id") REFERENCES "Room"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RoomSchedule" ADD CONSTRAINT "RoomSchedule_schedule_id_fkey" FOREIGN KEY ("schedule_id") REFERENCES "Schedule"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RoomSchedule" ADD CONSTRAINT "RoomSchedule_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "Teacher"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClassGroup" ADD CONSTRAINT "ClassGroup_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "Teacher"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClassGroup" ADD CONSTRAINT "ClassGroup_subjectId_fkey" FOREIGN KEY ("subjectId") REFERENCES "Subject"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClassGroup" ADD CONSTRAINT "ClassGroup_scheduleId_fkey" FOREIGN KEY ("scheduleId") REFERENCES "Schedule"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClassGroup" ADD CONSTRAINT "ClassGroup_teacherSubjectId_fkey" FOREIGN KEY ("teacherSubjectId") REFERENCES "TeacherSubject"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClassGroup" ADD CONSTRAINT "ClassGroup_roomScheduleId_fkey" FOREIGN KEY ("roomScheduleId") REFERENCES "RoomSchedule"("id") ON DELETE SET NULL ON UPDATE CASCADE;
