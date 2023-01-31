import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneradorCodigoMonitorComponent } from './generador-codigo-monitor.component';

describe('GeneradorCodigoMonitorComponent', () => {
  let component: GeneradorCodigoMonitorComponent;
  let fixture: ComponentFixture<GeneradorCodigoMonitorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneradorCodigoMonitorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneradorCodigoMonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
