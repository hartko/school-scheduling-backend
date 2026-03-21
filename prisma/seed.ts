import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";
import dotenv from "dotenv";

import { seedSchedules } from "./seeders/schedule.seeder";
import { seedSections } from "./seeders/section.seeder";
import { seedRooms } from "./seeders/room.seeder";
import { seedSubjects } from "./seeders/subject.seeder";
import { seedTeachers } from "./seeders/teacher.seeder";

dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL as string,
  ssl: { rejectUnauthorized: false },
});
const adapter = new PrismaPg(pool);

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