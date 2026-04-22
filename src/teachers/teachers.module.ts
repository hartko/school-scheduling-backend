import { Module } from '@nestjs/common';
import { TeachersService } from './teachers.service';
import { TeachersController } from './teachers.controller';
import { PaginationModule } from 'src/common/pagination/pagination.module';

@Module({
  imports: [PaginationModule],
  controllers: [TeachersController],
  providers: [TeachersService],
})
export class TeachersModule {}
