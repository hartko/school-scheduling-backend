import { Module } from '@nestjs/common';
import { TeacherSubjectsService } from './teacher-subjects.service';
import { TeacherSubjectsController } from './teacher-subjects.controller';
import { PaginationModule } from 'src/common/pagination/pagination.module';
@Module({
  imports: [PaginationModule],
  controllers: [TeacherSubjectsController],
  providers: [TeacherSubjectsService],
})
export class TeacherSubjectsModule {}
