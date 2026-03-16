import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { SectionsService } from './sections.service';
import { CreateSectionDto } from './dto/create-section.dto';
import { UpdateSectionDto } from './dto/update-section.dto';

@Controller('sections')
export class SectionsController {
  constructor(private readonly sectionsService: SectionsService) { }

  @Post()
  create(@Body() createSectionDto: CreateSectionDto) {
    return this.sectionsService.create(createSectionDto);
  }

  @Get()
  findAll(@Query('page') page: number = 1, @Query('limit') limit: number = 10, @Query('search') search?: string, @Query('sortBy') sortBy: string = 'name', @Query('sortOrder') sortOrder: 'asc' | 'desc' = 'asc') {
    return this.sectionsService.findAll(page, limit, search, sortBy, sortOrder);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sectionsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSectionDto: UpdateSectionDto) {
    return this.sectionsService.update(+id, updateSectionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sectionsService.remove(+id);
  }
}
