import { KanbanCard } from 'src/kanban-card/entities/kanban-card.entity';
import { KanbanLane } from 'src/kanban-lane/entities/kanban-lane.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class KanbanBoard {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @OneToMany(() => KanbanLane, (lane) => lane.projectId)
  lanes: Promise<KanbanLane[]>;

  @OneToMany(() => KanbanCard, (card) => card.projectId)
  cards: Promise<KanbanCard[]>;
}
