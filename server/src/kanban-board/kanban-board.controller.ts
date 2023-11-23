import { Controller, Get } from '@nestjs/common';
import { KanbanBoardService } from './kanban-board.service';

@Controller('kanban-board')
export class KanbanBoardController {
  constructor(private readonly kanbanBoardService: KanbanBoardService) {}

  @Get()
  findAll() {
    return this.kanbanBoardService.findAll();
  }
}
