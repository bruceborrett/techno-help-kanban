import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { KanbanBoard } from './entities/kanban-board.entity';
import { KanbanBoardSeed } from './kanban-board.seed';

@Injectable()
export class KanbanBoardService implements OnModuleInit {
  constructor(
    @InjectRepository(KanbanBoard)
    private kanbanBoardRepository: Repository<KanbanBoard>,
  ) {}

  // Seed the database with some data
  async onModuleInit() {
    const existing = await this.findAll();
    if (existing.length == 0) {
      this.kanbanBoardRepository.save(KanbanBoardSeed);
    }
  }

  findAll(): Promise<KanbanBoard[]> {
    return this.kanbanBoardRepository.find();
  }

  findOne(id: number): Promise<KanbanBoard> {
    return this.kanbanBoardRepository.findOne({
      where: { id },
      relations: {
        lanes: true,
        cards: true,
      },
    });
  }
}
