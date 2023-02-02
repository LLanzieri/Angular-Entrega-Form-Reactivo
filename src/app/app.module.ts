import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormConfirmarPagoComponent } from './components/form-confirmar-pago/form-confirmar-pago.component';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { FormRegistroComponent } from './components/form-registro/form-registro.component';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MenuBotonesComponent } from './components/menu-botones/menu-botones.component';

@NgModule({
  declarations: [
    AppComponent,
    FormLoginComponent,
    FormConfirmarPagoComponent,
    FormRegistroComponent,
    MenuBotonesComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
