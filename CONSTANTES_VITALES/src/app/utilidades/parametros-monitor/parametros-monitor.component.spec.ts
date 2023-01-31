import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametrosMonitorComponent } from './parametros-monitor.component';

describe('ParametrosMonitorComponent', () => {
  let component: ParametrosMonitorComponent;
  let fixture: ComponentFixture<ParametrosMonitorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParametrosMonitorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParametrosMonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
