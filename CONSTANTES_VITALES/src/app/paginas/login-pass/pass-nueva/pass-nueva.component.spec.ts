import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassNuevaComponent } from './pass-nueva.component';

describe('PassNuevaComponent', () => {
  let component: PassNuevaComponent;
  let fixture: ComponentFixture<PassNuevaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassNuevaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassNuevaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
