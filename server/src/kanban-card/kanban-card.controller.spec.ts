import { Test, TestingModule } from '@nestjs/testing';
import { KanbanCardController } from './kanban-card.controller';
import { KanbanCardService } from './kanban-card.service';

describe('KanbanCardController', () => {
  let controller: KanbanCardController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KanbanCardController],
      providers: [KanbanCardService],
    }).compile();

    controller = module.get<KanbanCardController>(KanbanCardController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
