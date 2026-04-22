import { Injectable } from '@nestjs/common';
import { CreateScheduleDto, ScheduleDto } from './dto/create-schedule.dto';
import { UpdateScheduleDto } from './dto/update-schedule.dto';
import { PrismaService } from '../prisma/prisma.service';
import { PaginationService } from '../common/pagination/pagination.service';
import { nanoid } from 'nanoid';

@Injectable()
export class SchedulesService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly paginationService: PaginationService) { }

  private toScheduleRows(dto: CreateScheduleDto, scheduleCode: string) {
    return dto.schedule.map((s: ScheduleDto) => ({
      name: dto.name,
      description: dto.description,
      start_time: s.start_time,
      end_time: s.end_time,
      is_break: s.is_break ?? false,
      day: s.day,
      schedule_code: scheduleCode
    }));
  }
  create(createScheduleDto: CreateScheduleDto) {
    const scheduleCode = `SCH-${nanoid(6).toUpperCase()}`;
    return this.prisma.schedule.createMany({
      data: this.toScheduleRows(createScheduleDto, scheduleCode),
    });
  }

  findAll(page = 1, limit = 10, search?: string, sortBy: string = 'name', sortOrder: 'asc' | 'desc' = 'asc') {
    const where = search ? { name: { contains: search, mode: 'insensitive' } } : {};
    return this.paginationService.paginate(
      this.prisma.schedule,
      page,
      limit,
      { [sortBy]: sortOrder },
      where
    );
  }

  findOne(id: number) {
    return this.prisma.schedule.findUnique({
      where: { id },
      include: {
        scheduleTimes: {
          orderBy: [
            { day: 'asc' },
            { start_time: 'asc' }
          ]
        }
      }
    });
  }

  update(id: number, updateScheduleDto: UpdateScheduleDto) {
    return this.prisma.schedule.update({
      where: { id },
      data: updateScheduleDto
    });
  }

  remove(id: number) {
    return this.prisma.schedule.delete({
      where: { id }
    });
  }
}
