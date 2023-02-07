import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaTablaProfesoresComponent } from './vista-tabla-profesores.component';

describe('VistaTablaProfesoresComponent', () => {
  let component: VistaTablaProfesoresComponent;
  let fixture: ComponentFixture<VistaTablaProfesoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaTablaProfesoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VistaTablaProfesoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
