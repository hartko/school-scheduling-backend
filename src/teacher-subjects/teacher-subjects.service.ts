import { Injectable } from '@nestjs/common';
import { CreateTeacherSubjectDto } from './dto/create-teacher-subject.dto';
import { UpdateTeacherSubjectDto } from './dto/update-teacher-subject.dto';
import { PrismaService } from '../prisma/prisma.service';
import { PaginationService } from 'src/common/pagination/pagination.service';

@Injectable()
export class TeacherSubjectsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly pagination: PaginationService
  ) {}
  
  create(createTeacherSubjectDto: CreateTeacherSubjectDto) {
    return this.prisma.teacherSubject.create({
      data: createTeacherSubjectDto
    });
  }

  findAll(page = 1, limit = 10, search?: string, sortBy: string = 'id', sortOrder: 'asc' | 'desc' = 'asc') {
   return this.pagination.paginate(
      this.prisma.teacherSubject,
      page,
      limit,
      { [sortBy]: sortOrder },
      search ? { name: { contains: search, mode: 'insensitive' } } : {}
    );
  }

  findOne(id: number) {
    return this.prisma.teacherSubject.findUnique({
      where: { id }
    });
  }

  update(id: number, updateTeacherSubjectDto: UpdateTeacherSubjectDto) {
    return this.prisma.teacherSubject.update({
      where: { id },
      data: updateTeacherSubjectDto
    });
  }

  remove(id: number) {
    return this.prisma.teacherSubject.delete({
      where: { id }
    });
  }
}
