import { Module } from '@nestjs/common';
import { KanbanCardService } from './kanban-card.service';
import { KanbanCardController } from './kanban-card.controller';

import { TypeOrmModule } from '@nestjs/typeorm';
import { KanbanCard } from './entities/kanban-card.entity';

@Module({
  imports: [TypeOrmModule.forFeature([KanbanCard])],
  controllers: [KanbanCardController],
  providers: [KanbanCardService],
})
export class KanbanCardModule {}
