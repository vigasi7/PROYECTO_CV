import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilesMonitorComponent } from './perfiles-monitor.component';

describe('PerfilesMonitorComponent', () => {
  let component: PerfilesMonitorComponent;
  let fixture: ComponentFixture<PerfilesMonitorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilesMonitorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilesMonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
