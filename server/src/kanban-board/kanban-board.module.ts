import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { KanbanBoardService } from './kanban-board.service';
import { KanbanBoardController } from './kanban-board.controller';
import { KanbanBoard } from './entities/kanban-board.entity';

@Module({
  imports: [TypeOrmModule.forFeature([KanbanBoard])],
  controllers: [KanbanBoardController],
  providers: [KanbanBoardService],
})
export class KanbanBoardModule {}
