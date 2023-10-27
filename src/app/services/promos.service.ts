import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class PromosService {

private promos =  [
    { id: 1,
      nombre: "Promo Licuados",
      sumario: "2 Licuados de una Fruta.",
      descripcion: "2 Licuados de una sola fruta, pudiendo ser uno de durazno y otro de banana, y recorda que no hay recargo por ser con leche o agua!",
      precio: 2000,
      imagen: 'assets/promoLicuados.png'
    },
    { id: 2,
      nombre: "Promo Tostado",
      sumario: "1 Licuados más un Tostado Jamón y Queso.",
      descripcion: "1 Licuados de una sola fruta, pudiendo ser uno de durazno, banana, frutilla, melón, etc. Más un Tostado de Jamón y Queso en pan fránces",
      precio: 2500,
      imagen: 'assets/promoTostado.png'
    },
    { id: 3,
      nombre: "Promo Burger",
      sumario: "Burger y Papas con Cheddar y Panceta.",
      descripcion: "1 Burger completa con lechuga, tomate, jamón y queso más Papas fritas con baño de Cheddar y Panceta.",
      precio: 3500,
      imagen: 'assets/promoBurger.png'
    },
    { id: 4,
      nombre: "Promo Fritas",
      sumario: "Fritas con Cheddar más una Saborizada.",
      descripcion: "1 Papas Fritas porción chica con Cheddar más un agua saborizada, pudiendo ser de manzana, naranja, pomelo.",
      precio: 2500,
      imagen: 'assets/promoFritas.png'
    },
  ]

  getPromos(){
    return this.promos;
  }

  constructor() { }
}
