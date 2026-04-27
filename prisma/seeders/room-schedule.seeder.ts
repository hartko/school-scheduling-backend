import { PrismaClient } from "@prisma/client";

export async function seedRoomSchedules(prisma: PrismaClient) {
  const schedule = await prisma.schedule.findFirst();
  if (!schedule) { console.warn("  ⚠ No schedule found, skipping room-schedules seed"); return; }

  const rooms = await prisma.room.findMany();
  const data = rooms.map((r) => ({ room_id: r.id, schedule_id: schedule.id }));

  await prisma.roomSchedule.createMany({ data, skipDuplicates: true });
  console.log(`  ✔ room-schedules: ${data.length} records (schedule: ${schedule.name})`);
}
