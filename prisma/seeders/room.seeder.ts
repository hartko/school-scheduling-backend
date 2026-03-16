import { PrismaClient } from "@prisma/client";

export async function seedRooms(prisma: PrismaClient) {
    const predefinedRooms = [
        { "name": "ROOM 1", "capacity": 30, "level": 1 },
        { "name": "ROOM 2", "capacity": 30, "level": 1 },
        { "name": "ROOM 3", "capacity": 30, "level": 1 },
        { "name": "ROOM 4", "capacity": 30, "level": 1 },
        { "name": "ROOM 5", "capacity": 30, "level": 1 },
        { "name": "ROOM 6", "capacity": 30, "level": 1 },
        { "name": "ROOM 7", "capacity": 30, "level": 1 },
        { "name": "ROOM 8", "capacity": 30, "level": 1 },
        { "name": "ROOM 9", "capacity": 30, "level": 1 },
        { "name": "ROOM 10", "capacity": 30, "level": 1 },
        { "name": "ROOM 11", "capacity": 30, "level": 1 },
        { "name": "ROOM 15", "capacity": 30, "level": 1 },
        { "name": "ROOM 16", "capacity": 30, "level": 1 },
        { "name": "ROOM 17", "capacity": 30, "level": 1 },
        { "name": "ROOM 18", "capacity": 30, "level": 1 },
        { "name": "ROOM 19", "capacity": 30, "level": 1 },
        { "name": "ROOM 20", "capacity": 30, "level": 1 },
        { "name": "ROOM 21", "capacity": 30, "level": 1 },
        { "name": "ROOM 22", "capacity": 30, "level": 1 },
        { "name": "ROOM 23", "capacity": 30, "level": 1 },
        { "name": "ROOM 24", "capacity": 30, "level": 1 },
        { "name": "ROOM 25", "capacity": 30, "level": 1 },
        { "name": "ROOM 26", "capacity": 30, "level": 1 },
        { "name": "ROOM 27", "capacity": 30, "level": 1 },
        { "name": "ROOM 28", "capacity": 30, "level": 1 },
        { "name": "Biology Room", "capacity": 30, "level": 1 },
        { "name": "Computer Lab 1", "capacity": 30, "level": 1 },
        { "name": "Computer Lab 2", "capacity": 30, "level": 1 },
        { "name": "Science Lab", "capacity": 30, "level": 1 }
    ]

    await prisma.room.createMany({
        data: predefinedRooms,
        skipDuplicates: true,
    });

}