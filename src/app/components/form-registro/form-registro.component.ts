import { FormControl, FormGroup } from '@angular/forms';

import { Component } from '@angular/core';
import { ParseSourceFile } from '@angular/compiler';
import { Validators } from '@angular/forms'

@Component({
  selector: 'app-form-registro',
  templateUrl: './form-registro.component.html',
  styleUrls: ['./form-registro.component.css']
})
export class FormRegistroComponent {
  formularioRegistro!: FormGroup;

  coincidenPassword: boolean = true;

  constructor() {

    let controles: any = {
      nombre: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]),
      apellido: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]),
      telefono: new FormControl('', [Validators.required, Validators.pattern('^[0-9 ]+$')]),
      usuario: new FormControl('', [Validators.required, Validators.pattern('^([a-zA-Z ]|[0-9])+$')]),
      contrasena: new FormControl('', [Validators.required, Validators.minLength(5), Validators.pattern('.*[a-z].*'), Validators.pattern('.*[A-Z].*'), Validators.pattern('.*[0-9].*')]),
      repetirContrasena: new FormControl('', [Validators.required, Validators.minLength(5), Validators.pattern('.*[a-z].*'), Validators.pattern('.*[A-Z].*'), Validators.pattern('.*[0-9].*')])
    }

    this.formularioRegistro = new FormGroup(controles);

  }

  registrarse() {
    if (this.formularioRegistro.controls['contrasena'].value === this.formularioRegistro.controls['repetirContrasena'].value)
      this.coincidenPassword = true;
    else
      this.coincidenPassword = false;

  }
}
