import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private menu ={

  hamburguesas: [
    { id: 1,
      nombre: "Burger Simple",
      sumario: "2 Licuados de una Fruta.",
      descripcion: "2 Licuados de una sola fruta, pudiendo ser uno de durazno y otro de banana, y recorda que no hay recargo por ser con leche o agua!",
      precio: 2000,
      imagen: 'assets/burgerSimple.jpeg',
      categoria: "burger"
    },
    { id: 2,
      nombre: "Burger Completa",
      sumario: "1 Licuados más un Tostado Jamón y Queso.",
      descripcion: "1 Licuados de una sola fruta, pudiendo ser uno de durazno, banana, frutilla, melón, etc. Más un Tostado de Jamón y Queso en pan fránces",
      precio: 2500,
      imagen: 'assets/burgerCompleta.jpeg',
      categoria: "burger"
    },
    { id: 3,
      nombre: "Burger Cheddar / Panceta",
      sumario: "Burger y Papas con Cheddar y Panceta.",
      descripcion: "1 Burger completa con lechuga, tomate, jamón y queso más Papas fritas con baño de Cheddar y Panceta.",
      precio: 3500,
      imagen: 'assets/cheeseBurger.png',
      categoria: "burger"
    },
    { id: 4,
      nombre: "Burger Ñalpa",
      sumario: "Fritas con Cheddar más una Saborizada.",
      descripcion: "1 Papas Fritas porción chica con Cheddar más un agua saborizada, pudiendo ser de manzana, naranja, pomelo.",
      precio: 2500,
      imagen: 'assets/burgerÑalpa.png',
      categoria: "burger"
    }
  ],
  sandwiches:[
    {id: 5,
      nombre: "Bondiola Simple",
      sumario: "Sandwich de Bondiola clasico en pan fránces.",
      descripcion: "Dos lonjas de bondiola grill en limon y sal con pan fránces",
      precio: 2500,
      imagen: 'assets/bondiolaSimple.png',
      categoria: "burger"},
    {id: 6,
      nombre: "Bondiola Completa",
      sumario: "Sandwich de Bondiola con J,Q,L y T en pan fránces.",
      descripcion: "Dos lonjas de bondiola grill en limon y sal con jamon, queso, lechuga y tomate",
      precio: 2500,
      imagen: 'assets/bondiolaCompleto.jpg',
      categoria: "burger"},
    {id: 7,
      nombre: "Bondiola Desmenuzada",
      sumario: "Sandwich de bondiola desmenuzada",
      descripcion: "Bondiola de cerdo desmenuzada bajo 3 hs de coccion con finas hierbas con pan frances",
      precio: 2500,
      imagen: 'assets/bondiolaDesmenuzada.png',
      categoria: "burger"},
    {id: 8,
      nombre: "Pechuga Simple",
      sumario: "Sandwich de Pechuga grill con limon",
      descripcion: "Dos filetes de Pechuga grill con limon y sal en pan frances",
      precio: 2500,
      imagen: 'assets/pechuga.png',
      categoria: "burger"},
    {id: 9,
      nombre: "Pechuga Completa",
      sumario: "Sandwich de Pechuga grill con lechuga, tomate, jamon y queso",
      descripcion: "Dos filetes de Pechuga grill con limon y sal, cubierta de lechuga, tomate, jamon y queso en pan frances",
      precio: 2500,
      imagen: 'assets/pechugaCompleta.png',
      categoria: "burger"},
    {id: 10,
      nombre: "Carne Desmenuzada",
      sumario: "Sandwich de Bife de chorizo desmenuzado ",
      descripcion:"Bife de chorizo desmenuzado bajo 3 hs de coccion con finas hierbas en pan frances",
      precio: 2500,
      imagen: 'assets/desmenuzada.png',
      categoria: "burger"},
    {id: 11,
      nombre: "Milanesa Simple",
      sumario: "Sandwich de Milanesa de Ternera",
      descripcion: "Milanesa de Ternera doble empanizado, frita con pan frances",
      precio: 2500,
      imagen: 'assets/milaSimple.png',
      categoria: "burger"},
    {id: 12,
      nombre: "Milanesa Completa",
      sumario: "Milanesa de Ternera con J,Q,L y T",
      descripcion: "Milanesa de ternera doble empanizado frita con jamon, queso, lechuga y tomate en pan frances",
      precio: 2500,
      imagen: 'assets/milaCompleta.jpeg',
      categoria: "burger"},

    {id: 13,
      nombre: "Pechuga Crispy Simple",
      sumario: "Pechuga doble rebozado especial",
      descripcion: "Milanesa de pechuga doble rebozado especial crujiente en pan frances",
      precio: 2500,
      imagen: 'assets/pechugaCrispy.png',
      categoria: "burger"},
    {id: 14,
      nombre: "Pechuga Crispy Completa",
      sumario: "Pechuga doble rebozado especial con J,Q,L y T",
      descripcion: "Milanesa de pechuga doble rebozado especial crujiente en pan frances con lechuga, tomate, jamon y queso",
      precio: 2500,
      imagen: 'assets/crispyCompleta.png',
      categoria: "burger"},
    {id: 15,
      nombre: "Super Pancho",
      sumario: "Super pancho de con aderezo y papas pay",
      descripcion: "Super pancho de con aderezo y papas pay",
      precio: 2500,
      imagen: 'assets/pancho.jpg',
      categoria: "burger"},
    ],
  fritos:[
      {id: 16,
        nombre: "Papas Grandes",
        sumario: "Fritas para dos personas",
        descripcion: "1 porcion de Papas Fritas grandes rusticas que se comparten entre dos o más",
        precio: 2500,
        imagen: 'assets/fritasG.png',
        categoria: "burger"},
      {id: 17,
        nombre: "Papas Grandes Cheddar",
        sumario: "Fritas con Cheddar para dos personas",
        descripcion: "1 porcion de Papas Fritas grandes rusticas con Cheddar que se comparten entre dos o más",
        precio: 2500,
        imagen: 'assets/papasGC.png',
        categoria: "burger"},
      {id: 18,
        nombre: "Papas Grandes Cheddar y Panceta",
        sumario: "Fritas con Cheddar y Panceta para dos personas",
        descripcion: "1 porcion de Papas Fritas grandes rusticas con Cheddar y Panceta que se comparten entre dos o más",
        precio: 2500,
        imagen: 'assets/papasGCP.png',
        categoria: "burger"},
      {id: 19,
        nombre: "Papas Chicas",
        sumario: "Porcion de Papas Fritas individual",
        descripcion: "1 Papas Fritas porción chica para una persona.",
        precio: 2500,
        imagen: 'assets/papasChicas.png',
        categoria: "burger"},
      {id: 20,
        nombre: "Papas Chicas Cheddar",
        sumario: "Porcion de Papas Fritas con Cheddar individual",
        descripcion: "1 Papas Fritas porción chica con Cheddar para una persona",
        precio: 2500,
        imagen: 'assets/papasGCP.png',
        categoria: "burger"},
      {id: 21,
          nombre: "Papas Chicas Cheddar y Panceta",
          sumario: "Porcion de Papas Fritas con Cheddar y Panceta individual",
          descripcion: "1 Papas Fritas porción chica con Cheddar y Panceta para una persona",
          precio: 2500,
          imagen: 'assets/fritasCP.png',
          categoria: "burger"},
      {id: 22,
          nombre: "Nuggets de Pollo",
          sumario: "Nuggets con relleno de pollo saborizado",
          descripcion: "8 unidades de Nuggets con relleno de pollo saborizado y doble empanizado.",
          precio: 2500,
          imagen: 'assets/nuggets.png',
          categoria: "burger"},
      {id: 23,
          nombre: "Bastones de Muzzarella",
          sumario: "Bastones de Muzzarella con Cheddar",
          descripcion: "8 unidades de Bastones de Muzzarella con Cheddar y empanizado con queso.",
          precio: 2500,
          imagen: 'assets/bastones.png',
          categoria: "burger"},
      {id: 24,
          nombre: "Rabas Chicas",
          sumario: "Porcion de calamar frito",
          descripcion: "1 porción chica de Rabas de calamar con limon.",
          precio: 2500,
          imagen: 'assets/rabas.png',
          categoria: "burger"},
      {id: 25,
          nombre: "Rabas Grandes",
          sumario: "Porcion de calamar frito para dos personas",
          descripcion: "1 porción grande para compartir de Rabas de calamar con limon.",
          precio: 2500,
          imagen: 'assets/rabasGrande.png',
          categoria: "burger"},
      ],
  pizzas:[
        {id: 26,
          nombre: "Pizza Muzzarella",
          sumario: "Fritas con Cheddar más una Saborizada.",
          descripcion: "1 Papas Fritas porción chica con Cheddar más un agua saborizada, pudiendo ser de manzana, naranja, pomelo.",
          precio: 2500,
          imagen: 'assets/pizza.png',
          categoria: "burger"},
        {id: 27,
          nombre: "Pizza Napolitana",
          sumario: "Fritas con Cheddar más una Saborizada.",
          descripcion: "1 Papas Fritas porción chica con Cheddar más un agua saborizada, pudiendo ser de manzana, naranja, pomelo.",
          precio: 2500,
          imagen: 'assets/napolitana.png',
          categoria: "burger"},
        {id: 28,
          nombre: "Pizza Especial",
          sumario: "Fritas con Cheddar más una Saborizada.",
          descripcion: "1 Papas Fritas porción chica con Cheddar más un agua saborizada, pudiendo ser de manzana, naranja, pomelo.",
          precio: 2500,
          imagen: 'assets/jamon.png',
          categoria: "burger"},
        {id: 29,
          nombre: "Empanadas de carne desmenuzada",
          sumario: "Fritas con Cheddar más una Saborizada.",
          descripcion: "1 Papas Fritas porción chica con Cheddar más un agua saborizada, pudiendo ser de manzana, naranja, pomelo.",
          precio: 2500,
          imagen: 'assets/empanadasC.png',
          categoria: "burger"},
        {id: 29,
          nombre: "Empanadas de Jamon y Queso",
          sumario: "Fritas con Cheddar más una Saborizada.",
          descripcion: "1 Papas Fritas porción chica con Cheddar más un agua saborizada, pudiendo ser de manzana, naranja, pomelo.",
          precio: 2500,
          imagen: 'assets/empanadas.png',
          categoria: "burger"},
        {id: 30,
          nombre: "Empanadas de Jamon, Queso y Cheddar",
          sumario: "Fritas con Cheddar más una Saborizada.",
          descripcion: "1 Papas Fritas porción chica con Cheddar más un agua saborizada, pudiendo ser de manzana, naranja, pomelo.",
          precio: 2500,
          imagen: 'assets/empanadas1.png',
          categoria: "burger"},
        ],
  bebidas:[
          {id: 31,
            nombre: "Cerveza Artesanal 500ml",
            sumario: "Fritas con Cheddar más una Saborizada.",
            descripcion: "1 Papas Fritas porción chica con Cheddar más un agua saborizada, pudiendo ser de manzana, naranja, pomelo.",
            precio: 2500,
            imagen: 'assets/cerveza.png',
            categoria: "burger"},
          {id: 32,
            nombre: "Cerveza Andes 500ml",
            sumario: "Fritas con Cheddar más una Saborizada.",
            descripcion: "1 Papas Fritas porción chica con Cheddar más un agua saborizada, pudiendo ser de manzana, naranja, pomelo.",
            precio: 2500,
            imagen: 'assets/cerveza2.png',
            categoria: "burger"},
          {id: 33,
            nombre: "Cerveza Brahama / Quilmes 500ml",
            sumario: "Fritas con Cheddar más una Saborizada.",
            descripcion: "1 Papas Fritas porción chica con Cheddar más un agua saborizada, pudiendo ser de manzana, naranja, pomelo.",
            precio: 2500,
            imagen: 'assets/cerveza1.png',
            categoria: "burger"},
          {id: 34,
            nombre: "Gaseosa 1.5 Lts",
            sumario: "Fritas con Cheddar más una Saborizada.",
            descripcion: "1 Papas Fritas porción chica con Cheddar más un agua saborizada, pudiendo ser de manzana, naranja, pomelo.",
            precio: 2500,
            imagen: 'assets/gaseosa.png',
            categoria: "burger"},
          {id: 35,
            nombre: "Saborizada 1.5 Lts",
            sumario: "Fritas con Cheddar más una Saborizada.",
            descripcion: "1 Papas Fritas porción chica con Cheddar más un agua saborizada, pudiendo ser de manzana, naranja, pomelo.",
            precio: 2500,
            imagen: 'assets/saborizadas.png',
            categoria: "burger"},
          {id: 36,
            nombre: "Agua Mineral 1.5 Lts",
            sumario: "Fritas con Cheddar más una Saborizada.",
            descripcion: "1 Papas Fritas porción chica con Cheddar más un agua saborizada, pudiendo ser de manzana, naranja, pomelo.",
            precio: 2500,
            imagen: 'assets/aguaG.png',
            categoria: "burger"},
          {id: 37,
            nombre: "Gaseosa 500ml ",
            sumario: "Fritas con Cheddar más una Saborizada.",
            descripcion: "1 Papas Fritas porción chica con Cheddar más un agua saborizada, pudiendo ser de manzana, naranja, pomelo.",
            precio: 2500,
            imagen: 'assets/gaseosaC.png',
            categoria: "burger"},
          {id: 38,
            nombre: "Saborizada 500ml ",
            sumario: "Fritas con Cheddar más una Saborizada.",
            descripcion: "1 Papas Fritas porción chica con Cheddar más un agua saborizada, pudiendo ser de manzana, naranja, pomelo.",
            precio: 2500,
            imagen: 'assets/saborizadasC.png',
            categoria: "burger"},
          {id: 39,
            nombre: "Agua Mineral 500ml ",
            sumario: "Fritas con Cheddar más una Saborizada.",
            descripcion: "1 Papas Fritas porción chica con Cheddar más un agua saborizada, pudiendo ser de manzana, naranja, pomelo.",
            precio: 2500,
            imagen: 'assets/aguaC.png',
            categoria: "burger"},
          {id: 40,
            nombre: "Aperitivos 500ml",
            sumario: "Fritas con Cheddar más una Saborizada.",
            descripcion: "1 Papas Fritas porción chica con Cheddar más un agua saborizada, pudiendo ser de manzana, naranja, pomelo.",
            precio: 2500,
            imagen: 'assets/aperitivos.png',
            categoria: "burger"},
          ],
  licuados:[
            {id: 41,
              nombre: "Licuados 1 fruta",
              sumario: "Fritas con Cheddar más una Saborizada.",
              descripcion: "1 Papas Fritas porción chica con Cheddar más un agua saborizada, pudiendo ser de manzana, naranja, pomelo.",
              precio: 2500,
              imagen: 'assets/licuados.png',
              categoria: "burger"},
            {id: 42,
              nombre: "Licuados Combinados",
              sumario: "Fritas con Cheddar más una Saborizada.",
              descripcion: "1 Papas Fritas porción chica con Cheddar más un agua saborizada, pudiendo ser de manzana, naranja, pomelo.",
              precio: 2500,
              imagen: 'assets/licuadosCB.png',
              categoria: "burger"},
            {id: 43,
              nombre: "Limonada",
              sumario: "Fritas con Cheddar más una Saborizada.",
              descripcion: "1 Papas Fritas porción chica con Cheddar más un agua saborizada, pudiendo ser de manzana, naranja, pomelo.",
              precio: 2500,
              imagen: 'assets/limonada.png',
              categoria: "burger"},
            {id: 44,
              nombre: "Licuado Ñalpa",
              sumario: "Fritas con Cheddar más una Saborizada.",
              descripcion: "1 Papas Fritas porción chica con Cheddar más un agua saborizada, pudiendo ser de manzana, naranja, pomelo.",
              precio: 2500,
              imagen: 'assets/licuadoÑalpa.png',
              categoria: "burger"},
            {id: 45,
              nombre: "Smoothie",
              sumario: "Fritas con Cheddar más una Saborizada.",
              descripcion: "1 Papas Fritas porción chica con Cheddar más un agua saborizada, pudiendo ser de manzana, naranja, pomelo.",
              precio: 2500,
              imagen: 'assets/smoothie.png',
              categoria: "burger"},
            {id: 46,
              nombre: "Fernet con Cola",
              sumario: "Fritas con Cheddar más una Saborizada.",
              descripcion: "1 Papas Fritas porción chica con Cheddar más un agua saborizada, pudiendo ser de manzana, naranja, pomelo.",
              precio: 2500,
              imagen: 'assets/fernet.png',
              categoria: "burger"},
            {id: 47,
              nombre: "Cuba Libre",
              sumario: "Fritas con Cheddar más una Saborizada.",
              descripcion: "1 Papas Fritas porción chica con Cheddar más un agua saborizada, pudiendo ser de manzana, naranja, pomelo.",
              precio: 2500,
              imagen: 'assets/cubalibre.png',
              categoria: "burger"},
            {id: 48,
              nombre: "Gin Tonic",
              sumario: "Fritas con Cheddar más una Saborizada.",
              descripcion: "1 Papas Fritas porción chica con Cheddar más un agua saborizada, pudiendo ser de manzana, naranja, pomelo.",
              precio: 2500,
              imagen: 'assets/gintonic.png',
              categoria: "burger"},
            {id: 49,
              nombre: "Daikiri",
              sumario: "Fritas con Cheddar más una Saborizada.",
              descripcion: "1 Papas Fritas porción chica con Cheddar más un agua saborizada, pudiendo ser de manzana, naranja, pomelo.",
              precio: 2500,
              imagen: 'assets/daikiri.png',
              categoria: "burger"},
            ]
  }

  getMenu(){
    return this.menu;
  }

  constructor() { }
}