import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class KanbanCard {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  lane: number;

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
