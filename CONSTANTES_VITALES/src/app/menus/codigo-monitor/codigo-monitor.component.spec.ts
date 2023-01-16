import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodigoMonitorComponent } from './codigo-monitor.component';

describe('CodigoMonitorComponent', () => {
  let component: CodigoMonitorComponent;
  let fixture: ComponentFixture<CodigoMonitorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodigoMonitorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodigoMonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
