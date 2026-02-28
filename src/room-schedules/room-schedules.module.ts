import { Module } from '@nestjs/common';
import { RoomSchedulesService } from './room-schedules.service';
import { RoomSchedulesController } from './room-schedules.controller';

@Module({
  controllers: [RoomSchedulesController],
  providers: [RoomSchedulesService],
})
export class RoomSchedulesModule {}
