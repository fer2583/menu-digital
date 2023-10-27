import { Component } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  menus: any  = {};

  constructor(private menuSrv: MenuService){
  this.menus = this.menuSrv.getMenu();
  console.log(this.menus)
  }
}
