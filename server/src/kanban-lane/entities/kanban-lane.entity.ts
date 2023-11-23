import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class KanbanLane {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  projectId: number;

  @Column()
  title: string;

  @Column()
  order: number;

  @Column()
  borderColor: string;
}
