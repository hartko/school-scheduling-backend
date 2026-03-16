import { Injectable } from '@nestjs/common';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { PrismaService } from '../prisma/prisma.service';
import { PaginationService } from 'src/common/pagination/pagination.service';

@Injectable()
export class RoomsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly paginationService: PaginationService

  ) { }

  create(createRoomDto: CreateRoomDto) {
    return this.prisma.room.create({
      data: createRoomDto
    });
  }

  findAll(page = 1, limit = 10, search?: string, sortBy: string = 'name', sortOrder: 'asc' | 'desc' = 'asc') {
    const where = search ? { name: { contains: search, mode: 'insensitive' } } : {};
    return this.paginationService.paginate(
      this.prisma.room,
      page,
      limit,
      { [sortBy]: sortOrder },
      where
    );
  }

  findOne(id: number) {
    return this.prisma.room.findUnique({
      where: { id }
    });
  }

  update(id: number, updateRoomDto: UpdateRoomDto) {
    return this.prisma.room.update({
      where: { id },
      data: updateRoomDto
    });
  }

  remove(id: number) {
    return this.prisma.room.delete({
      where: { id }
    });
  }
}
