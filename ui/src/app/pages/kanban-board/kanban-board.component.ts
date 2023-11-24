import { Component, ElementRef, Input, Pipe, PipeTransform, ViewChild } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';

import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroSquares2x2, heroListBullet, heroPlus, heroXMark } from '@ng-icons/heroicons/outline';

import { KanbanLane, KanbanLaneComponent } from '../../components/kanban-lane/kanban-lane.component';
import { KanbanCard, KanbanCardComponent } from '../../components/kanban-card/kanban-card.component';

import { KanbanService } from '../../services/kanban.service';
import { SpinnerComponent } from '../../components/spinner/spinner.component';

export interface KanbanBoard {
  id: number
  title: string
  __lanes__: KanbanLane[]
  __cards__: KanbanCard[]
}

@Pipe({
  name: 'laneCardFilter',
  standalone: true,
  pure: false
})
export class LaneCardFilter implements PipeTransform {
  transform(value: KanbanCard[], laneId: number) {
    return value.filter((card) => {
      return card.laneId == laneId
    });
  }
}

@Component({
  selector: 'app-kanban-board',
  standalone: true,
  templateUrl: './kanban-board.component.html',
  styleUrl: './kanban-board.component.css',
  viewProviders: [
    provideIcons({ heroSquares2x2, heroListBullet, heroPlus, heroXMark })
  ],
  imports: [
    CommonModule,
    NgIconComponent,
    KanbanLaneComponent,
    KanbanCardComponent,
    LaneCardFilter,
    NgFor,
    NgIf,
    SpinnerComponent,
  ],
})
export class KanbanBoardComponent {
  constructor(private kanbanService: KanbanService) {}

  project: KanbanBoard | null = null;
  error: string | null = null;

  @ViewChild('modal') modal!: ElementRef<HTMLDialogElement>;

  @Input()
  set projectId(projectId: number) {
    this.kanbanService.project(projectId).subscribe(async (project) => {
      this.project = project;
    })
  }

  ngAfterViewInit() {
    this.kanbanService.error.subscribe((error) => {
      if (error) {
        this.error = error;
        this.modal.nativeElement.showModal();
      }
    })
  }

}
