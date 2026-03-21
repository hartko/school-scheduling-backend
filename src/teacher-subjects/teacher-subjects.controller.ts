import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { TeacherSubjectsService } from './teacher-subjects.service';
import { CreateTeacherSubjectDto } from './dto/create-teacher-subject.dto';
import { UpdateTeacherSubjectDto } from './dto/update-teacher-subject.dto';

@Controller('teacher-subjects')
export class TeacherSubjectsController {
  constructor(private readonly teacherSubjectsService: TeacherSubjectsService) { }

  @Post()
  create(@Body() createTeacherSubjectDto: CreateTeacherSubjectDto) {
    return this.teacherSubjectsService.create(createTeacherSubjectDto);
  }

  @Get()
  findAll(@Query('page') page: number = 1, @Query('limit') limit: number = 10, @Query('search') search?: string, @Query('sortBy') sortBy: string = 'id', @Query('sortOrder') sortOrder: 'asc' | 'desc' = 'asc') {
    return this.teacherSubjectsService.findAll(page, limit, search, sortBy, sortOrder);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.teacherSubjectsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTeacherSubjectDto: UpdateTeacherSubjectDto) {
    return this.teacherSubjectsService.update(+id, updateTeacherSubjectDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.teacherSubjectsService.remove(+id);
  }
}
