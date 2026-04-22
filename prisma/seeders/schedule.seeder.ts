import { PrismaClient } from "@prisma/client";

export async function seedSchedules(prisma: PrismaClient) {

    const scheduleTimes = [
        { day: 0, start_time: "07:00", end_time: "08:00", is_break: false },
        { day: 0, start_time: "08:00", end_time: "09:00", is_break: false },
        { day: 0, start_time: "09:00", end_time: "09:15", is_break: true },
        { day: 0, start_time: "09:15", end_time: "10:15", is_break: false },
        { day: 0, start_time: "10:15", end_time: "11:15", is_break: false },
        { day: 0, start_time: "11:15", end_time: "12:15", is_break: false },
        { day: 0, start_time: "12:15", end_time: "13:00", is_break: true },
        { day: 0, start_time: "13:00", end_time: "14:00", is_break: false },
        { day: 0, start_time: "14:00", end_time: "15:00", is_break: false },
        { day: 0, start_time: "15:00", end_time: "16:00", is_break: false },
        { day: 0, start_time: "16:00", end_time: "17:00", is_break: false },
        { day: 0, start_time: "17:00", end_time: "18:00", is_break: false },
        { day: 0, start_time: "17:00", end_time: "18:00", is_break: false },
        { day: 0, start_time: "18:00", end_time: "18:30", is_break: false },
        { day: 0, start_time: "18:30", end_time: "19:30", is_break: false },
        { day: 0, start_time: "19:30", end_time: "20:30", is_break: false }

    ]

    await prisma.schedule.create({
        data: {
            name: "Regular Schedule",
            description: "Regular school day schedule with standard time slots for classes and breaks.",
            schedule_code: "SC-V1StGX",
            scheduleTimes: {
                create: scheduleTimes.flatMap((s) =>
                    Array.from({ length: 7 }, (_, day) => ({ ...s, day }))
                )
            }
        }
    });

}