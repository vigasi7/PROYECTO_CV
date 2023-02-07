import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagInicioAdminComponent } from './pag-inicio-admin.component';

describe('PagInicioAdminComponent', () => {
  let component: PagInicioAdminComponent;
  let fixture: ComponentFixture<PagInicioAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagInicioAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagInicioAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
