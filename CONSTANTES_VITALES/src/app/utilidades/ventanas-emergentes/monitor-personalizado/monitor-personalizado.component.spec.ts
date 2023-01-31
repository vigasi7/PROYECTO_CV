import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitorPersonalizadoComponent } from './monitor-personalizado.component';

describe('MonitorPersonalizadoComponent', () => {
  let component: MonitorPersonalizadoComponent;
  let fixture: ComponentFixture<MonitorPersonalizadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonitorPersonalizadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonitorPersonalizadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
