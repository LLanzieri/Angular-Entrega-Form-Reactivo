import { FormControl, FormGroup } from '@angular/forms';

import { Component } from '@angular/core';
import { Validators } from '@angular/forms'

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})

export class FormLoginComponent {
  formularioLogin!: FormGroup;

  constructor() {

    let controles: any = {
      email: new FormControl('maildeprueba@prueba.com', [Validators.required, Validators.pattern('^[a-z]+@[a-z]+\\.[a-z]{2,3}$')]),
      contrasena: new FormControl('', [Validators.required, Validators.minLength(5)]),
    }

    this.formularioLogin = new FormGroup(controles);

  }

  login() {
    console.log(this.formularioLogin);
  }
}