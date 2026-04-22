import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { RoomSchedulesService } from './room-schedules.service';
import { CreateRoomScheduleDto } from './dto/create-room-schedule.dto';
import { UpdateRoomScheduleDto } from './dto/update-room-schedule.dto';
import { ApiQuery } from '@nestjs/swagger';

@Controller('api/room-schedules')
export class RoomSchedulesController {
  constructor(private readonly roomSchedulesService: RoomSchedulesService) { }

  @Post()
  create(@Body() createRoomScheduleDto: CreateRoomScheduleDto) {
    console.log('Creating RoomSchedule with data:', createRoomScheduleDto);
    return this.roomSchedulesService.create(createRoomScheduleDto);
  }

  @Get()
  @ApiQuery({ name: 'page', required: false, type: Number })
  @ApiQuery({ name: 'limit', required: false, type: Number })
  @ApiQuery({ name: 'search', required: false, type: String })
  @ApiQuery({ name: 'sortBy', required: false, type: String })
  @ApiQuery({ name: 'sortOrder', required: false, type: String, enum: ['asc', 'desc'] })
  findAll(@Query('page') page?: number, @Query('limit') limit?: number, @Query('search') search?: string, @Query('sortBy') sortBy?: string, @Query('sortOrder') sortOrder?: 'asc' | 'desc') {
    return this.roomSchedulesService.findAll(page, limit, search, sortBy, sortOrder);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.roomSchedulesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRoomScheduleDto: UpdateRoomScheduleDto) {
    return this.roomSchedulesService.update(+id, updateRoomScheduleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.roomSchedulesService.remove(+id);
  }

  @Post('bulk')
  async bulkCreate(@Body() createRoomScheduleDtos: CreateRoomScheduleDto[]) {
    console.log('Bulk creating RoomSchedules with data:', createRoomScheduleDtos);
   const created: CreateRoomScheduleDto[] = [];
    for (const roomSchedule of createRoomScheduleDtos) {
      const createdItem = await this.roomSchedulesService.create(roomSchedule);
      created.push(createdItem);
    }
    return created;
  }
}
