import { Module } from '@nestjs/common';
import { SchedulesService } from './schedules.service';
import { SchedulesController } from './schedules.controller';
import { PaginationModule } from 'src/common/pagination/pagination.module';
@Module({
  imports: [PaginationModule],
  controllers: [SchedulesController],
  providers: [SchedulesService],
})
export class SchedulesModule {}
