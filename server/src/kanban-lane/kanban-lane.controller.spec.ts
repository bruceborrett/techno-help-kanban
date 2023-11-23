import { Test, TestingModule } from '@nestjs/testing';
import { KanbanLaneController } from './kanban-lane.controller';
import { KanbanLaneService } from './kanban-lane.service';

describe('KanbanLaneController', () => {
  let controller: KanbanLaneController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KanbanLaneController],
      providers: [KanbanLaneService],
    }).compile();

    controller = module.get<KanbanLaneController>(KanbanLaneController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
