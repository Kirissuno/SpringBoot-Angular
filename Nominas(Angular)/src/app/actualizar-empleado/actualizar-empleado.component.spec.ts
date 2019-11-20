import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarEmpleadoComponent } from './actualizar-empleado.component';

describe('ActualizarEmpleadoComponent', () => {
  let component: ActualizarEmpleadoComponent;
  let fixture: ComponentFixture<ActualizarEmpleadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActualizarEmpleadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
