import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query } from '@nestjs/common';
import { ApiQuery } from '@nestjs/swagger';
import { SectionSubjectsService } from './section-subjects.service';
import { CreateSectionSubjectDto } from './dto/create-section-subject.dto';
import { BulkAssignSectionSubjectsDto } from './dto/bulk-assign-section-subjects.dto';

@Controller('section-subjects')
export class SectionSubjectsController {
  constructor(private readonly service: SectionSubjectsService) {}

  @Get()
  @ApiQuery({ name: 'section_id', required: false, type: Number })
  find(@Query('section_id') sectionId?: string) {
    if (sectionId) return this.service.findBySectionId(+sectionId);
    return this.service.findAll();
  }

  @Post()
  create(@Body() dto: CreateSectionSubjectDto) {
    return this.service.create(dto);
  }

  @Put(':sectionId')
  bulkAssign(
    @Param('sectionId', ParseIntPipe) sectionId: number,
    @Body() dto: BulkAssignSectionSubjectsDto,
  ) {
    return this.service.bulkAssign(sectionId, dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.service.remove(id);
  }
}
