import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaTablaAlumnosComponent } from './vista-tabla-alumnos.component';

describe('VistaTablaAlumnosComponent', () => {
  let component: VistaTablaAlumnosComponent;
  let fixture: ComponentFixture<VistaTablaAlumnosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaTablaAlumnosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VistaTablaAlumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
