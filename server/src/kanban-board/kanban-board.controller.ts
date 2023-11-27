import { Controller, Get, Param } from '@nestjs/common';
import { KanbanBoardService } from './kanban-board.service';
import { KanbanBoard } from './entities/kanban-board.entity';

@Controller('kanban-board')
export class KanbanBoardController {
  constructor(private readonly kanbanBoardService: KanbanBoardService) {}

  @Get()
  findAll(): Promise<KanbanBoard[]> {
    return this.kanbanBoardService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<KanbanBoard> {
    console.log(id);
    return this.kanbanBoardService.findOne(id);
  }
}
