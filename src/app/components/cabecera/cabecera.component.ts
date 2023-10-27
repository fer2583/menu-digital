import { Component } from '@angular/core';
import { ModalHorarioComponent } from '../modal-horario/modal-horario.component';
import { MatDialog } from '@angular/material/dialog';
import { ModalUbicacionComponent } from '../modal-ubicacion/modal-ubicacion.component';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent {
  constructor(public dialog: MatDialog) {}

  abrirModalHorarios(): void {
    const dialogRef = this.dialog.open(ModalHorarioComponent, {
      width: '400px', // Personaliza el ancho según tus necesidades
    });
  };

  abrirModalUbicacion(): void {
    const dialogRef = this.dialog.open(ModalUbicacionComponent, {
      width: '400px', // Personaliza el ancho según tus necesidades
    });
  };

  compartirMenu(){
    if(navigator.share){
      navigator.share({
        title: "Parador Lo de Ñalpa",
        text: 'Echa un vistazo al menú de nuestro Parador.',
        url: 'https://tusitio.com/menu'
      })
      .then(() => console.log('Contenido compartido'))
      .catch((error) => console.error('Error al compartir', error));
    } else {
      alert('Tu navegador no admite la función de compartir. Puedes copiar la URL e invitar a otros manualmente.');
    }
  }

}
