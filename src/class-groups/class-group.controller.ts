import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ClassGroupService } from './class-group.service';
import { CreateClassGroupDto } from './dto/create-class-group.dto';
import { UpdateClassGroupDto } from './dto/update-class-group.dto';

@Controller('class-group')
export class ClassGroupController {
  constructor(private readonly classGroupService: ClassGroupService) {}

  @Post()
  create(@Body() createClassGroupDto: CreateClassGroupDto) {
    return this.classGroupService.create(createClassGroupDto);
  }

  @Get()
  findAll(
    @Query('page') page: number,
    @Query('limit') limit: number,
    @Query('search') search?: string,
    @Query('sortBy') sortBy: string = 'id',
    @Query('sortOrder') sortOrder: 'asc' | 'desc' = 'asc'
  ) {
    return this.classGroupService.findAll(page, limit, search, sortBy, sortOrder);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.classGroupService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateClassGroupDto: UpdateClassGroupDto) {
    return this.classGroupService.update(+id, updateClassGroupDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.classGroupService.remove(+id);
  }
}
