import { Module } from '@nestjs/common';
import { KanbanBoardService } from './kanban-board.service';
import { KanbanBoardController } from './kanban-board.controller';

@Module({
  controllers: [KanbanBoardController],
  providers: [KanbanBoardService],
})
export class KanbanBoardModule {}
