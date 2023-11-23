import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { KanbanCard } from './entities/kanban-card.entity';
import { KanbanCardSeed } from './kanban-card.seed';
import { CreateKanbanCardDto } from './dto/create-kanban-card.dto';
import { UpdateKanbanCardDto } from './dto/update-kanban-card.dto';

@Injectable()
export class KanbanCardService implements OnModuleInit {
  constructor(
    @InjectRepository(KanbanCard)
    private kanbanCardRepository: Repository<KanbanCard>,
  ) {}

  // Seed the database with some data
  async onModuleInit() {
    const existing = await this.findAll();
    if (existing.length == 0) {
      this.kanbanCardRepository.save(KanbanCardSeed);
    }
  }

  async findAll(): Promise<KanbanCard[]> {
    return this.kanbanCardRepository.find();
  }

  async findOne(id: number): Promise<KanbanCard> {
    return this.kanbanCardRepository.findOneBy({ id });
  }

  async create(card: CreateKanbanCardDto) {
    await this.kanbanCardRepository.save(card);
  }

  async update(id: number, card: UpdateKanbanCardDto) {
    await this.kanbanCardRepository.update(id, card);
  }

  async remove(id: number) {
    await this.kanbanCardRepository.delete(id);
  }
}
