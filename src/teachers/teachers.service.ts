import { Injectable } from '@nestjs/common';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { PrismaService } from '../prisma/prisma.service';
import { PaginationService } from 'src/common/pagination/pagination.service';

@Injectable()
export class TeachersService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly paginationService: PaginationService) { }

  create(createTeacherDto: CreateTeacherDto) {
    return this.prisma.teacher.create({
      data: createTeacherDto
    });
  }

  findAll(page: number, limit: number, search: string, sortBy: string, sortOrder: 'asc' | 'desc') {
    const where = search ? { name: { contains: search, mode: 'insensitive' } } : {};
    return this.paginationService.paginate(
      this.prisma.teacher,
      page,
      limit,
      { [sortBy]: sortOrder },
      where
    );
  }

  findOne(id: number) {
    return this.prisma.teacher.findUnique({
      where: { id }
    });
  }

  update(id: number, updateTeacherDto: UpdateTeacherDto) {
    return this.prisma.teacher.update({
      where: { id },
      data: updateTeacherDto
    });
  }

  remove(id: number) {
    return this.prisma.teacher.delete({
      where: { id }
    });
  }
}
