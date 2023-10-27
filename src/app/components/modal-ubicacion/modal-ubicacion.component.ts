import { Component } from '@angular/core';

@Component({
  selector: 'app-modal-ubicacion',
  templateUrl: './modal-ubicacion.component.html',
  styleUrls: ['./modal-ubicacion.component.css']
})
export class ModalUbicacionComponent {
  ubicacion = {
    direccion: "Palma de Mallorca 20",
    localidad: "Santa Clara del Mar",
    pais: "Argentina"}
}
