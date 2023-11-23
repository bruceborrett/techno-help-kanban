import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { KanbanBoard } from '../pages/kanban-board/kanban-board.component';

@Injectable({
  providedIn: 'root'
})
export class KanbanService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getProjects() {
    return this.http.get<KanbanBoard[]>(`${this.baseUrl}/kanban-board`)
  }
}
