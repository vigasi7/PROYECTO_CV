import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OcultarEdComponent } from './ocultar-ed.component';

describe('OcultarEdComponent', () => {
  let component: OcultarEdComponent;
  let fixture: ComponentFixture<OcultarEdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OcultarEdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OcultarEdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
