import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KanbanCreateCardComponent } from './kanban-create-card.component';

describe('KanbanCreateCardComponent', () => {
  let component: KanbanCreateCardComponent;
  let fixture: ComponentFixture<KanbanCreateCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KanbanCreateCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KanbanCreateCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
