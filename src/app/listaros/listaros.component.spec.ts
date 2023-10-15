import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarosComponent } from './listaros.component';

describe('ListarosComponent', () => {
  let component: ListarosComponent;
  let fixture: ComponentFixture<ListarosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarosComponent]
    });
    fixture = TestBed.createComponent(ListarosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
