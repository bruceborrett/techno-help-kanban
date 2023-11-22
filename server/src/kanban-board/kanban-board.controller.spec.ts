import { Test, TestingModule } from '@nestjs/testing';
import { KanbanBoardController } from './kanban-board.controller';
import { KanbanBoardService } from './kanban-board.service';

describe('KanbanBoardController', () => {
  let controller: KanbanBoardController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KanbanBoardController],
      providers: [KanbanBoardService],
    }).compile();

    controller = module.get<KanbanBoardController>(KanbanBoardController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
