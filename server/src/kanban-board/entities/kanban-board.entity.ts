import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class KanbanBoard {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;
}
