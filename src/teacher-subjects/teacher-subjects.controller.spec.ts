import { Test, TestingModule } from '@nestjs/testing';
import { TeacherSubjectsController } from './teacher-subjects.controller';
import { TeacherSubjectsService } from './teacher-subjects.service';

describe('TeacherSubjectsController', () => {
  let controller: TeacherSubjectsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TeacherSubjectsController],
      providers: [TeacherSubjectsService],
    }).compile();

    controller = module.get<TeacherSubjectsController>(TeacherSubjectsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
