import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalirMonitorComponent } from './salir-monitor.component';

describe('SalirMonitorComponent', () => {
  let component: SalirMonitorComponent;
  let fixture: ComponentFixture<SalirMonitorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalirMonitorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalirMonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
