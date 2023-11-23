import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { KanbanLane } from './entities/kanban-lane.entity';
import { KanbanLaneSeed } from './kanban-lane.seed';

@Injectable()
export class KanbanLaneService implements OnModuleInit {
  constructor(
    @InjectRepository(KanbanLane)
    private kanbanLaneRepository: Repository<KanbanLane>,
  ) {}

  // Seed the database with some data
  async onModuleInit() {
    const existing = await this.findAll();
    if (existing.length == 0) {
      this.kanbanLaneRepository.save(KanbanLaneSeed);
    }
  }

  findAll(): Promise<KanbanLane[]> {
    return this.kanbanLaneRepository.find();
  }

  findOne(id: number): Promise<KanbanLane> {
    return this.kanbanLaneRepository.findOneBy({ id });
  }

  findByProject(projectId: number): Promise<KanbanLane[]> {
    return this.kanbanLaneRepository.findBy({ projectId });
  }
}
