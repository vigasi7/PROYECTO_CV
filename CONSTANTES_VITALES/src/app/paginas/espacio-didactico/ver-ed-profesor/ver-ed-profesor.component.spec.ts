import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerEdProfesorComponent } from './ver-ed-profesor.component';

describe('VerEdProfesorComponent', () => {
  let component: VerEdProfesorComponent;
  let fixture: ComponentFixture<VerEdProfesorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerEdProfesorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerEdProfesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
