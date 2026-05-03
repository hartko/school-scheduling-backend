import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import dotenv from "dotenv";

import { seedSchedules } from "./seeders/schedule.seeder";
import { seedSections } from "./seeders/section.seeder";
import { seedRooms } from "./seeders/room.seeder";
import { seedSubjects } from "./seeders/subject.seeder";
import { seedTeachers } from "./seeders/teacher.seeder";
import { seedTeacherSubjects } from "./seeders/teacher-subject.seeder";
import { seedSectionSubjects } from "./seeders/section-subject.seeder";
import { seedRoomSchedules } from "./seeders/room-schedule.seeder";

dotenv.config();

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL as string,
});

const prisma = new PrismaClient({
  adapter,
});

async function main() {
  console.log("🗑️  Clearing existing data...");
  await prisma.classGroup.deleteMany({});
  await prisma.teacherSubject.deleteMany({});
  await prisma.sectionSubject.deleteMany({});
  await prisma.roomSchedule.deleteMany({});
  await prisma.scheduleTime.deleteMany({});
  await prisma.teacher.deleteMany({});
  await prisma.section.deleteMany({});
  await prisma.room.deleteMany({});
  await prisma.subject.deleteMany({});
  await prisma.schedule.deleteMany({});
  console.log("🌱 Seeding database...");

  await seedSchedules(prisma);
  await seedSections(prisma);
  await seedRooms(prisma);
  await seedSubjects(prisma);
  await seedTeachers(prisma);
  await seedTeacherSubjects(prisma);
  await seedSectionSubjects(prisma);
  await seedRoomSchedules(prisma);
 

  console.log("🌱 Seeding finished.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });