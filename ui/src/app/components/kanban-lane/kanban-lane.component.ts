import { Component, Input } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { KanbanCard, KanbanCardComponent } from '../kanban-card/kanban-card.component';
import { DragAndDropModule, DropEvent } from 'angular-draggable-droppable';

export interface KanbanLane {
  id: number;
  title: string;
  borderColor: string;
}

@Component({
  selector: 'app-kanban-lane',
  standalone: true,
  imports: [CommonModule, KanbanCardComponent, NgFor, DragAndDropModule],
  templateUrl: './kanban-lane.component.html',
  styleUrl: './kanban-lane.component.css'
})
export class KanbanLaneComponent {
  @Input() lane!: KanbanLane;
  @Input() cards?: KanbanCard[];

  drop(laneId: number, cardId: number) {

  }
}
