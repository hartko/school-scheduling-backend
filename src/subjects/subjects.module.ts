import { Module } from '@nestjs/common';
import { SubjectsService } from './subjects.service';
import { SubjectsController } from './subjects.controller';
import { PaginationModule } from 'src/common/pagination/pagination.module';

@Module({
  imports: [PaginationModule],
  controllers: [SubjectsController],
  providers: [SubjectsService],
})
export class SubjectsModule {}
