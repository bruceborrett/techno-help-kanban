import { Component, Input, Pipe, PipeTransform } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';

import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroSquares2x2, heroListBullet, heroPlus } from '@ng-icons/heroicons/outline';

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
  standalone: true
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
    provideIcons({ heroSquares2x2, heroListBullet, heroPlus })
  ],
  imports: [
    CommonModule,
    NgIconComponent,
    KanbanLaneComponent,
    KanbanCardComponent,
    LaneCardFilter,
    NgFor,
    NgIf,
    SpinnerComponent
  ],
})
export class KanbanBoardComponent {
  constructor(private kanbanService: KanbanService) { }

  project: KanbanBoard | null = null;

  @Input()
  set projectId(projectId: number) {
    this.kanbanService.getProject(projectId).subscribe(async (project) => {
      console.log(project);
      this.project = project;
    })
  }
}
