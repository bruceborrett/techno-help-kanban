import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { KanbanBoard } from '../pages/kanban-board/kanban-board.component';
import { BehaviorSubject, catchError } from 'rxjs';
import { KanbanCard } from '../components/kanban-card/kanban-card.component';

@Injectable({
  providedIn: 'root'
})
export class KanbanService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  private projects$ = new BehaviorSubject<KanbanBoard[]>([]);
  private project$ = new BehaviorSubject<KanbanBoard | null>(null);
  private error$ = new BehaviorSubject<string | null>(null);

  error = this.error$.asObservable();

  projects() {
    this.http.get<KanbanBoard[]>(`${this.baseUrl}/kanban-board`).subscribe((projects) => {
      this.projects$.next(projects);
    })
    return this.projects$.asObservable();
  }

  project(projectId: number) {
    this.http.get<KanbanBoard>(`${this.baseUrl}/kanban-board/${projectId}`).subscribe((project) => {
      this.project$.next(project);
    })
    return this.project$.asObservable();
  }

  moveCard(cardId: number, laneId: number) {
    const project = this.project$.getValue()
    if (project) {
      project.__cards__.forEach((c) => {
        if (c.id === cardId) {
          const oldLane = c.laneId;
          c.laneId = laneId;
          this.project$.next(project);
          this.http.patch(`${this.baseUrl}/kanban-card/${c.id}`, c).pipe(
            catchError((error: HttpErrorResponse) => {
              this.error$.next(error.message);
              c.laneId = oldLane;
              this.project$.next(project);
              return [];
            })
          ).subscribe();
        }
      })
    }
  }
}
