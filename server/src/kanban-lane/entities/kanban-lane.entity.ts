import { KanbanBoard } from 'src/kanban-board/entities/kanban-board.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class KanbanLane {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => KanbanBoard, (board) => board.id)
  projectId: number;

  @Column()
  title: string;

  @Column()
  order: number;

  @Column()
  borderColor: string;
}
