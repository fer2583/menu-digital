import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './components/cabecera/cabecera.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PromosService } from './services/promos.service';
import { PromosComponent } from './components/promos/promos.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MenuComponent } from './components/menu/menu.component';
import { ModalHorarioComponent } from './components/modal-horario/modal-horario.component';
import { ModalUbicacionComponent } from './components/modal-ubicacion/modal-ubicacion.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    PromosComponent,
    NavbarComponent,
    MenuComponent,
    ModalHorarioComponent,
    ModalUbicacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule

  ],
  providers: [PromosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
