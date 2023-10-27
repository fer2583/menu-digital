import { Component } from '@angular/core';
import { PromosService } from 'src/app/services/promos.service';

@Component({
  selector: 'app-promos',
  templateUrl: './promos.component.html',
  styleUrls: ['./promos.component.css']
})
export class PromosComponent {

  promos: any = [{}]

  constructor(private promoSrv: PromosService){
    this.promos = this.promoSrv.getPromos();
    console.log(this.promos)
  }

}
