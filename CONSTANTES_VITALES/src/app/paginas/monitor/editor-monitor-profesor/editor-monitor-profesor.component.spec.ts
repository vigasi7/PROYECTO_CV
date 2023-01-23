import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorMonitorProfesorComponent } from './editor-monitor-profesor.component';

describe('EditorMonitorProfesorComponent', () => {
  let component: EditorMonitorProfesorComponent;
  let fixture: ComponentFixture<EditorMonitorProfesorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditorMonitorProfesorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditorMonitorProfesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
