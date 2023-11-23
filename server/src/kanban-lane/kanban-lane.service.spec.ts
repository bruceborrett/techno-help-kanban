import { Test, TestingModule } from '@nestjs/testing';
import { KanbanLaneService } from './kanban-lane.service';

describe('KanbanLaneService', () => {
  let service: KanbanLaneService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KanbanLaneService],
    }).compile();

    service = module.get<KanbanLaneService>(KanbanLaneService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
