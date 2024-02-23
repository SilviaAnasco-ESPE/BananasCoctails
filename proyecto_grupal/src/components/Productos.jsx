import React, { useEffect, useState } from 'react';
import Gin from '../assets/img/Carta/GIN_TONIC/GIN_TONIC PEPINO Y ROMERO.png';
import Fresa from '../assets/img/Carta/GIN_TONIC/Gin Tonic de fresa y pimienta rosa.png';
import Pomelo from '../assets/img/Carta/GIN_TONIC/Gin Tonic de pomelo y enebro.png';
import Jengibre from '../assets/img/Carta/GIN_TONIC/Gin Tonic de jengibre y lima.png';
import MangoChile from '../assets/img/Carta/COCTELES/Margarita de mango y chile.png';
import FrutosRojos from '../assets/img/Carta/COCTELES/Mojito de frutos rojos.png';
import CocoTostado from '../assets/img/Carta/COCTELES/Piña Colada de coco tostado.png';
import CanelaNaranja from '../assets/img/Carta/COCTELES/Old Fashioned de canela y naranja.png';
import Pepino from '../assets/img/Carta/MARTINIS/Martini de pepino y albahaca.png';
import MartiniFrutas from '../assets/img/Carta/MARTINIS/Martini de frutas del bosque.png';
import Chocolate from '../assets/img/Carta/MARTINIS/Martini de chocolate y menta.png';
import MelonLimon from '../assets/img/Carta/MARTINIS/Martini de melón y limón.png';
import SandiaMenta from '../assets/img/Carta/MARGARITAS/Margarita de sandía y menta.png';
import MaracuyaJalapeno from '../assets/img/Carta/MARGARITAS/Margarita de maracuyá y jalapeño.png';
import CocoPina from '../assets/img/Carta/MARGARITAS/Margarita de coco y piña.png';


const items = [
    {
      imgSrc: Gin,
      titulo: "Gin Tonic con pepino y romero",
      descripcion: "Una variante fresca y aromática del clásico gin tonic, infusionado con pepino y adornado con una ramita de romero fresco.",
      precio: "$7",
      seccion: "Gin Tonic"
    },
    {
      imgSrc: Fresa,
      titulo: "Gin Tonic de fresa y pimienta rosa",
      descripcion: "Una combinación refrescante y afrutada de ginebra, tónica premium, fresas frescas y un toque de pimienta rosa para un toque picante.",
      precio: "$8",
      seccion: "Gin Tonic"
    },
    {
      imgSrc: Pomelo,
      titulo: "Gin Tonic de pomelo y enebro",
      descripcion: "Una versión cítrica y vibrante del gin tonic, con un toque de pomelo fresco exprimido y bayas de enebro machacadas para resaltar los sabores de la ginebra.",
      precio: "$5",
      seccion: "Gin Tonic"
    },
    {
      imgSrc: Jengibre,
      titulo: "Gin Tonic de jengibre y lima",
      descripcion: "Una variante picante y refrescante, con ginebra, tónica de jengibre y un toque de jugo de lima, ideal para los amantes de los sabores intensos.",
      precio: "$6",
      seccion: "Gin Tonic"
    },
    {
      imgSrc: MangoChile,
      titulo: "Margarita de mango y chile",
      descripcion: "Una versión tropical y picante de la clásica margarita, con tequila, triple sec, puré de mango y un toque de chile fresco para un equilibrio de dulce y picante.",
      precio: "$4",
      seccion: "Cocteles"
    },
    {
      imgSrc: FrutosRojos,
      titulo: "Mojito de frutos rojos",
      descripcion: "Una variante refrescante del mojito clásico, con ron blanco, menta fresca, lima, azúcar y una mezcla de frutos rojos como fresas, frambuesas y arándanos.",
      precio: "$9",
      seccion: "Cocteles"
    },
    {
      imgSrc: CocoTostado,
      titulo: "Piña Colada de coco tostado",
      descripcion: "Una versión indulgente de la piña colada tradicional, con ron blanco, crema de coco, jugo de piña y un toque de coco tostado para un sabor más profundo.",
      precio: "$3",
      seccion: "Cocteles"
    },
    {
      imgSrc: CanelaNaranja,
      titulo: "Old Fashioned de canela y naranja",
      descripcion: "Una variante aromática y especiada del cóctel old fashioned, con bourbon, azúcar, amargo de angostura, un palo de canela y una cáscara de naranja para un toque cítrico y dulce.",
      precio: "$5",
      seccion: "Cocteles"
    },
    {
      imgSrc: Pepino,
      titulo: "Martini de pepino y albahaca",
      descripcion: "Una variante fresca y herbácea del martini clásico, con ginebra o vodka, vermut seco, rodajas de pepino fresco y hojas de albahaca para un toque aromático.",
      precio: "$6",
      seccion: "Martinis"
    },
    {
      imgSrc: MartiniFrutas,
      titulo: "Martini de frutas del bosque",
      descripcion: "Una versión dulce y afrutada del martini, con vodka, vermut dulce y una mezcla de bayas como fresas, frambuesas y moras, para un cóctel colorido y sabroso.",
      precio: "$4",
      seccion: "Martinis"
    },
    {
      imgSrc: Chocolate,
      titulo: "Martini de chocolate y menta",
      descripcion: " Una variante indulgente y refrescante del martini, con vodka de vainilla, licor de chocolate, licor de menta y un toque de crema, para un cóctel cremoso y delicioso.",
      precio: "$2",
      seccion: "Martinis"
    },
    {
      imgSrc: MelonLimon,
      titulo: "Martini de melón y limón",
      descripcion: "Una versión refrescante y cítrica del martini, con vodka, vermut seco, licor de melón y un toque de jugo de limón fresco, ideal para los días calurosos de verano.",
      precio: "$3",
      seccion: "Martinis"
    },
    {
      imgSrc: SandiaMenta,
      titulo: "Margarita de sandía y menta",
      descripcion: "Una variante refrescante y jugosa de la margarita clásica, con tequila, triple sec, jugo de sandía fresca y hojas de menta machacadas para un toque de frescura.",
      precio: "$4",
      seccion: "Margaritas"
    },
    {
      imgSrc: MaracuyaJalapeno,
      titulo: "Margarita de maracuyá y jalapeño",
      descripcion: "Una combinación exótica y picante de tequila, triple sec, puré de maracuyá y un toque de jalapeño fresco para un cóctel audaz y lleno de sabor.",
      precio: "$3",
      seccion: "Margaritas"
    },
    {
      imgSrc: CocoPina,
      titulo: "Margarita de coco y piña",
      descripcion: "Una versión tropical y cremosa de la margarita, con tequila, triple sec, crema de coco, jugo de piña y un toque de lima para equilibrar los sabores.",
      precio: "$4",
      seccion: "Margaritas"
    }
  ];

const Productos = () => {
  const [productos, setProductos] = useState({});

  useEffect(() => {
    agregarCartas();
  }, []);

  const agregarCartas = () => {
    const productosActualizados = {};

    // Generar el HTML dinámicamente
    items.forEach(item => {
      const cardHTML = (
        <article className="card" key={item.titulo}>
          <div className="imgBx">
            <center>
              <img src={item.imgSrc} alt="" className="img-item" />
              <span className="titulo-item">{item.titulo}</span>
            </center>
          </div>
          <div className="contenido">
            <p>{item.descripcion}</p>
            <span className="precio-item">{item.precio}</span>
            <button className="boton-item">Agregar al Carrito</button>
          </div>
        </article>
      );

      // Agregar el HTML al contenedor
      if (!productosActualizados[item.seccion]) {
        productosActualizados[item.seccion] = [];
      }
      productosActualizados[item.seccion].push(cardHTML);
    });

    setProductos(productosActualizados);
  };

  return (
    <div id="container-items" className="container-items">
      {/* Renderizar los productos dinámicamente */}
      {Object.entries(productos).map(([seccion, items]) => (
        <div key={seccion}>
          <center><h2>{seccion}</h2></center>
          <div className="seccionesCarta">
            {items}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Productos;
