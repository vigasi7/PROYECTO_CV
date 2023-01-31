import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdProfesorComponent } from './ed-profesor.component';

describe('EdProfesorComponent', () => {
  let component: EdProfesorComponent;
  let fixture: ComponentFixture<EdProfesorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdProfesorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdProfesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
