import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerEdAlumnoComponent } from './ver-ed-alumno.component';

describe('VerEdAlumnoComponent', () => {
  let component: VerEdAlumnoComponent;
  let fixture: ComponentFixture<VerEdAlumnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerEdAlumnoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerEdAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
