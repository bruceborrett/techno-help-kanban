import { KanbanBoard } from 'src/kanban-board/entities/kanban-board.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class KanbanCard {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @ManyToOne(() => KanbanBoard, (board) => board.id)
  projectId: number;

  @Column()
  laneId: number;

  @Column()
  order: number;

  @Column()
  description: string;

  @Column()
  startDate: Date;

  @Column()
  dueDate: Date;

  @Column()
  assignee: string;
}
