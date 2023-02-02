import { FormControl, FormGroup } from '@angular/forms';

import { Component } from '@angular/core';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-form-confirmar-pago',
  templateUrl: './form-confirmar-pago.component.html',
  styleUrls: ['./form-confirmar-pago.component.css']
})
export class FormConfirmarPagoComponent {

  formularioConfirmarPago!: FormGroup;

  constructor() {

    let controles: any = {
      nombre: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]),
      apellido: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]),
      nroTarjeta: new FormControl('', [Validators.required, Validators.pattern('^[0-9 ]+$'), Validators.maxLength(16)]),
      vencimiento: new FormControl('', [Validators.required, Validators.pattern('^((0[1-9])|(1[0-2]))\/[0-9][0-9]')]),
      codigoSeguridad: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{3}')]),
    }

    this.formularioConfirmarPago = new FormGroup(controles);

  }

  confirmarPago() {
    console.log(this.formularioConfirmarPago);
  }

}
