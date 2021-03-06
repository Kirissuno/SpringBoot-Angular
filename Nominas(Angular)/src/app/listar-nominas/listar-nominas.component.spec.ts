import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarNominasComponent } from './listar-nominas.component';

describe('ListarNominasComponent', () => {
  let component: ListarNominasComponent;
  let fixture: ComponentFixture<ListarNominasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarNominasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarNominasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
