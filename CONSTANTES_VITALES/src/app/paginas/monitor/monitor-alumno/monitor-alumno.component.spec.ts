import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitorAlumnoComponent } from './monitor-alumno.component';

describe('MonitorAlumnoComponent', () => {
  let component: MonitorAlumnoComponent;
  let fixture: ComponentFixture<MonitorAlumnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonitorAlumnoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonitorAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
