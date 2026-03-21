import { Injectable } from '@nestjs/common';
import { CreateRoomScheduleDto } from './dto/create-room-schedule.dto';
import { UpdateRoomScheduleDto } from './dto/update-room-schedule.dto';
import { PrismaService } from '../prisma/prisma.service';
import { PaginationService } from 'src/common/pagination/pagination.service';

@Injectable()
export class RoomSchedulesService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly paginationService: PaginationService) { }

  create(createRoomScheduleDto: CreateRoomScheduleDto) {

    return this.prisma.roomSchedule.create({
      data: createRoomScheduleDto
    });
  }

  findAll(page: number, limit: number, search?: string, sortBy: string = 'id', sortOrder: 'asc' | 'desc' = 'asc') {
    const where = search ? { name: { contains: search, mode: 'insensitive' } } : {};
    return this.paginationService.paginate(
      this.prisma.roomSchedule,
      page,
      limit,
      { [sortBy]: sortOrder },
      where
    );
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
