import { Injectable } from '@nestjs/common';
import { CreateRoomScheduleDto } from './dto/create-room-schedule.dto';
import { UpdateRoomScheduleDto } from './dto/update-room-schedule.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class RoomSchedulesService {
  constructor(private readonly prisma: PrismaService) {}

  create(createRoomScheduleDto: CreateRoomScheduleDto) {

    return this.prisma.roomSchedule.create({
      data: createRoomScheduleDto
    });
  }

  findAll() {
    return this.prisma.roomSchedule.findMany();
  }

  findOne(id: number) {
    return this.prisma.roomSchedule.findUnique({
      where: { id }
    });
  }

  update(id: number, updateRoomScheduleDto: UpdateRoomScheduleDto) {
    return this.prisma.roomSchedule.update({
      where: { id },
      data: updateRoomScheduleDto
    });
  }

  remove(id: number) {
    return this.prisma.roomSchedule.delete({
      where: { id }
    });
  }
}
