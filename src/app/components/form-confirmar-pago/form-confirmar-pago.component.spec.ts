import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormConfirmarPagoComponent } from './form-confirmar-pago.component';

describe('FormConfirmarPagoComponent', () => {
  let component: FormConfirmarPagoComponent;
  let fixture: ComponentFixture<FormConfirmarPagoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormConfirmarPagoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormConfirmarPagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
