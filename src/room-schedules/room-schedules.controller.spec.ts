import { Test, TestingModule } from '@nestjs/testing';
import { RoomSchedulesController } from './room-schedules.controller';
import { RoomSchedulesService } from './room-schedules.service';

describe('RoomSchedulesController', () => {
  let controller: RoomSchedulesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RoomSchedulesController],
      providers: [RoomSchedulesService],
    }).compile();

    controller = module.get<RoomSchedulesController>(RoomSchedulesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
