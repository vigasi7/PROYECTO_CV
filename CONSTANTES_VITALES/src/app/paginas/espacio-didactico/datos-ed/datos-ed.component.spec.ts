import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosEDComponent } from './datos-ed.component';

describe('DatosEDComponent', () => {
  let component: DatosEDComponent;
  let fixture: ComponentFixture<DatosEDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosEDComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatosEDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
