import { Injectable } from '@nestjs/common';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';
import { PrismaService } from '../prisma/prisma.service';
import { PaginationService } from 'src/common/pagination/pagination.service';

@Injectable()
export class SubjectsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly paginationService: PaginationService
  ) { }

  create(createSubjectDto: CreateSubjectDto) {
    return this.prisma.subject.create({
      data: createSubjectDto
    });
  }

  findAll(page: number, limit: number, search: string, sortBy: string, sortOrder: 'asc' | 'desc') {
    const where = search ? { name: { contains: search, mode: 'insensitive' } } : {};
    return this.paginationService.paginate(
      this.prisma.subject,
      page,
      limit,
      { [sortBy]: sortOrder },
      where
    );
  }

  findOne(id: number) {
    return this.prisma.subject.findUnique({
      where: { id }
    });
  }

  update(id: number, updateSubjectDto: UpdateSubjectDto) {
    return this.prisma.subject.update({
      where: { id },
      data: updateSubjectDto
    });
  }

  remove(id: number) {
    return this.prisma.subject.delete({
      where: { id }
    });
  }
}
