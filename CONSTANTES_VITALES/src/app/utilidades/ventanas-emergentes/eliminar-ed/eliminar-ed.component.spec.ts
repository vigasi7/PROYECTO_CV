import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarEdComponent } from './eliminar-ed.component';

describe('EliminarEdComponent', () => {
  let component: EliminarEdComponent;
  let fixture: ComponentFixture<EliminarEdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarEdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarEdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
