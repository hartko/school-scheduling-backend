import { Module } from '@nestjs/common';
import { RoomsService } from './rooms.service';
import { RoomsController } from './rooms.controller';
import { PaginationModule } from 'src/common/pagination/pagination.module';

@Module({
  imports: [PaginationModule],
  controllers: [RoomsController],
  providers: [RoomsService],
})
export class RoomsModule {}
