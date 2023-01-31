import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuLateralProfesorComponent } from './menu-lateral-profesor.component';

describe('MenuLateralProfesorComponent', () => {
  let component: MenuLateralProfesorComponent;
  let fixture: ComponentFixture<MenuLateralProfesorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuLateralProfesorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuLateralProfesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
