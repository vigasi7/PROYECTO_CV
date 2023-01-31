import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassModificadaComponent } from './pass-modificada.component';

describe('PassModificadaComponent', () => {
  let component: PassModificadaComponent;
  let fixture: ComponentFixture<PassModificadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassModificadaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassModificadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
