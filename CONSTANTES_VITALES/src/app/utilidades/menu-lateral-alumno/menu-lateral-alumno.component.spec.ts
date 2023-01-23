import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuLateralAlumnoComponent } from './menu-lateral-alumno.component';

describe('MenuLateralAlumnoComponent', () => {
  let component: MenuLateralAlumnoComponent;
  let fixture: ComponentFixture<MenuLateralAlumnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuLateralAlumnoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuLateralAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
