import { Module } from '@nestjs/common';
import { KanbanLaneService } from './kanban-lane.service';
import { KanbanLaneController } from './kanban-lane.controller';

import { TypeOrmModule } from '@nestjs/typeorm';
import { KanbanLane } from './entities/kanban-lane.entity';

@Module({
  imports: [TypeOrmModule.forFeature([KanbanLane])],
  controllers: [KanbanLaneController],
  providers: [KanbanLaneService],
})
export class KanbanLaneModule {}
