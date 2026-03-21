import { Injectable } from '@nestjs/common';
import { CreateClassGroupDto } from './dto/create-class-group.dto';
import { UpdateClassGroupDto } from './dto/update-class-group.dto';
import { PrismaService } from '../prisma/prisma.service';
import { PaginationService } from 'src/common/pagination/pagination.service';

@Injectable()
export class ClassGroupService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly pagination: PaginationService
  ) { }

  create(createClassGroupDto: CreateClassGroupDto) {
    return this.prisma.classGroup.create({
      data: createClassGroupDto
    });
  }

  findAll(page = 1, limit = 10, search?: string, sortBy: string = 'id', sortOrder: 'asc' | 'desc' = 'asc') {
    return this.pagination.paginate(
      this.prisma.classGroup,
      page,
      limit,
      { [sortBy]: sortOrder },
      search ? { name: { contains: search, mode: 'insensitive' } } : {}
    );
  }

  findOne(id: number) {
    return this.prisma.classGroup.findUnique({
      where: { id }
    });
  }

  update(id: number, updateClassGroupDto: UpdateClassGroupDto) {
    return this.prisma.classGroup.update({
      where: { id },
      data: updateClassGroupDto
    });
  }

  remove(id: number) {
    return this.prisma.classGroup.delete({
      where: { id }
    });
  }
}
