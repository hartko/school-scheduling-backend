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

dotenv.config();

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL as string,
});

const prisma = new PrismaClient({
  adapter,
});

async function main() {
  console.log("🌱 Seeding database...");

  await seedSchedules(prisma);
  await seedSections(prisma);
  await seedRooms(prisma);
  await seedSubjects(prisma);
  await seedTeachers(prisma);
  await seedTeacherSubjects(prisma);
  await seedSectionSubjects(prisma);
 

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