import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RoomSchedulesService } from './room-schedules.service';
import { CreateRoomScheduleDto } from './dto/create-room-schedule.dto';
import { UpdateRoomScheduleDto } from './dto/update-room-schedule.dto';

@Controller('api/room-schedules')
export class RoomSchedulesController {
  constructor(private readonly roomSchedulesService: RoomSchedulesService) {}

  @Post()
  create(@Body() createRoomScheduleDto: CreateRoomScheduleDto) {
    return this.roomSchedulesService.create(createRoomScheduleDto);
  }

  @Get()
  findAll() {
    return this.roomSchedulesService.findAll();
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
}
