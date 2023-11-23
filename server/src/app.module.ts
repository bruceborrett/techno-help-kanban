import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TypeOrmModule } from '@nestjs/typeorm';

import { KanbanBoardModule } from './kanban-board/kanban-board.module';
import { KanbanLaneModule } from './kanban-lane/kanban-lane.module';
import { KanbanCardModule } from './kanban-card/kanban-card.module';

import { KanbanBoard } from './kanban-board/entities/kanban-board.entity';
import { KanbanLane } from './kanban-lane/entities/kanban-lane.entity';
import { KanbanCard } from './kanban-card/entities/kanban-card.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db/sql',
      synchronize: true,
      entities: [KanbanBoard, KanbanLane, KanbanCard],
    }),
    KanbanBoardModule,
    KanbanLaneModule,
    KanbanCardModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
