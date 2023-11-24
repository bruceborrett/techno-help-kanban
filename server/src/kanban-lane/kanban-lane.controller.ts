import { KanbanLaneService } from './kanban-lane.service';
import { Controller, Get } from '@nestjs/common';

@Controller('kanban-lane')
export class KanbanLaneController {
  constructor(private readonly kanbanLaneService: KanbanLaneService) {}

  @Get()
  findAll() {
    return this.kanbanLaneService.findAll();
  }

  @Get(':id')
  findOne(id: number) {
    return this.kanbanLaneService.findOne(id);
  }
}
