import { Component } from '@angular/core';

@Component({
  selector: 'app-modal-horario',
  templateUrl: './modal-horario.component.html',
  styleUrls: ['./modal-horario.component.css']
})
export class ModalHorarioComponent {

  horarios = [
    {dia: "Lunes: ", hora: " 11 - 00"},
    {dia: "Martes: ", hora: " 11 - 00"},
    {dia: "Miercoles: ", hora: " 11 - 00"},
    {dia: "Jueves: ", hora: " 11 - 00"},
    {dia: "Viernes: ", hora: " 11 - 00"},
    {dia: "Sabados: ", hora: " 11 - 00"},
    {dia: "Domingos: ", hora: " 11 - 00"},
  ]
}
