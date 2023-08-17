import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargararticuloComponent } from './cargararticulo.component';

describe('CargararticuloComponent', () => {
  let component: CargararticuloComponent;
  let fixture: ComponentFixture<CargararticuloComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CargararticuloComponent]
    });
    fixture = TestBed.createComponent(CargararticuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
