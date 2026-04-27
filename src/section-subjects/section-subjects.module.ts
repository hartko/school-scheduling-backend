import { Module } from '@nestjs/common';
import { SectionSubjectsService } from './section-subjects.service';
import { SectionSubjectsController } from './section-subjects.controller';

@Module({
  controllers: [SectionSubjectsController],
  providers: [SectionSubjectsService],
})
export class SectionSubjectsModule {}
