import { Module } from '@nestjs/common';
import { RoomSchedulesService } from './room-schedules.service';
import { RoomSchedulesController } from './room-schedules.controller';
import { PaginationModule } from 'src/common/pagination/pagination.module';
@Module({
  imports: [PaginationModule],
  controllers: [RoomSchedulesController],
  providers: [RoomSchedulesService],
})
export class RoomSchedulesModule {}
