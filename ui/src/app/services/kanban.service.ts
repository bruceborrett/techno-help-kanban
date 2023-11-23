import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { KanbanBoard } from '../pages/kanban-board/kanban-board.component';
import { KanbanLane } from '../components/kanban-lane/kanban-lane.component';
import { KanbanCard } from '../components/kanban-card/kanban-card.component';

@Injectable({
  providedIn: 'root'
})
export class KanbanService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getProjects() {
    return this.http.get<KanbanBoard[]>(`${this.baseUrl}/kanban-board`)
  }

  getProject(projectId: number) {
    return this.http.get<KanbanBoard>(`${this.baseUrl}/kanban-board/${projectId}`)
  }

  getLanes(projectId: number) {
    return this.http.get<KanbanLane[]>(`${this.baseUrl}/kanban-lane/project/${projectId}`)
  }

  getCards(projectId: number) {
    return this.http.get<KanbanCard[]>(`${this.baseUrl}/kanban-card/project/${projectId}`)
  }
}
