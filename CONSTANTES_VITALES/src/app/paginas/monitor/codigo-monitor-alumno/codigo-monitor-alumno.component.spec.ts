import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodigoMonitorAlumnoComponent } from './codigo-monitor-alumno.component';

describe('CodigoMonitorAlumnoComponent', () => {
  let component: CodigoMonitorAlumnoComponent;
  let fixture: ComponentFixture<CodigoMonitorAlumnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodigoMonitorAlumnoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodigoMonitorAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
