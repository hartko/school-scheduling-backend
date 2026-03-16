import { Module } from '@nestjs/common';
import { SectionsService } from './sections.service';
import { SectionsController } from './sections.controller';
import { PaginationModule } from 'src/common/pagination/pagination.module';

@Module({
  imports: [PaginationModule],
  controllers: [SectionsController],
  providers: [SectionsService],
})
export class SectionsModule {}
