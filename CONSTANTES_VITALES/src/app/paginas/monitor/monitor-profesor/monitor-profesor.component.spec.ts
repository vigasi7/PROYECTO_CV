import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitorProfesorComponent } from './monitor-profesor.component';

describe('MonitorProfesorComponent', () => {
  let component: MonitorProfesorComponent;
  let fixture: ComponentFixture<MonitorProfesorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonitorProfesorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonitorProfesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
