import { Module } from '@nestjs/common';
import { ClassGroupService } from './class-group.service';
import { ClassGroupController } from './class-group.controller';
import { PaginationModule } from 'src/common/pagination/pagination.module';

@Module({
  imports:[PaginationModule],
  controllers: [ClassGroupController],
  providers: [ClassGroupService],
})
export class ClassGroupModule {}
