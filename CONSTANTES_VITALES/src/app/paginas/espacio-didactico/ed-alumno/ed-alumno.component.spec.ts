import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdAlumnoComponent } from './ed-alumno.component';

describe('EdAlumnoComponent', () => {
  let component: EdAlumnoComponent;
  let fixture: ComponentFixture<EdAlumnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdAlumnoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
