import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-menu-botones',
  templateUrl: './menu-botones.component.html',
  styleUrls: ['./menu-botones.component.css']
})
export class MenuBotonesComponent {

  formularioElegido: number = 1;
  @Output() eventoSalidaFormulario: EventEmitter<number> = new EventEmitter<number>();

  setearFormulario(nro: number) {

    this.formularioElegido = nro;
    this.eventoSalidaFormulario.emit(this.formularioElegido);
  }
}
