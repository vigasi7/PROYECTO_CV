import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorEdProfesorComponent } from './editor-ed-profesor.component';

describe('EditorEdProfesorComponent', () => {
  let component: EditorEdProfesorComponent;
  let fixture: ComponentFixture<EditorEdProfesorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditorEdProfesorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditorEdProfesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
