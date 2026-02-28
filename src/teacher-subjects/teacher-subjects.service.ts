import { Injectable } from '@nestjs/common';
import { CreateTeacherSubjectDto } from './dto/create-teacher-subject.dto';
import { UpdateTeacherSubjectDto } from './dto/update-teacher-subject.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TeacherSubjectsService {
  constructor(private readonly prisma: PrismaService) {}
  
  create(createTeacherSubjectDto: CreateTeacherSubjectDto) {
    return this.prisma.teacherSubject.create({
      data: createTeacherSubjectDto
    });
  }

  findAll() {
    return this.prisma.teacherSubject.findMany();
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
