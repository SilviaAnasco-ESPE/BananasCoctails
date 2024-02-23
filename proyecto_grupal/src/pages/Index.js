import React from 'react';
import '../assets/css/index.css';
import '../assets/css/estiloBase.css';
import Imagen1 from '../assets/img/Imagen1.jpg';
import Imagen2 from '../assets/img/Imagen2.jpg';
import Imagen3 from '../assets/img/Imagen3.jpg';
import Imagen4 from '../assets/img/Imagen4.jpg';
import Galeria2 from '../assets/img/Imagenes_iconos/Galeria2.jpeg'
import Galeria3 from '../assets/img/Imagenes_iconos/Galeria3.jpeg'
import Galeria4 from '../assets/img/Imagenes_iconos/Galeria4.jpeg'
import Galeria5 from '../assets/img/Imagenes_iconos/Galeria5.jpeg'
import Imag2 from '../assets/img/Imagen2.jpg'
import Reloj from '../components/Reloj';
import Menu from '../components/Menu';
import PiePagina from '../components/Footer';

function index() {
    return (
        <div className="App">
      <Menu />

      <section className="seccionPrincipal">
        <section className="slider-box">
          <ul>
            <li>
              <img src={Imagen1} alt="" />
              <section className="texto">
                <h2>CONFIANZA</h2>
                <p>Contamos con más de 6 años de experiencia dentro del mercado, brindando un servicio de excelencia a todos nuestros clientes.</p>
              </section>
            </li>
            <li>
              <img src={Imagen2} alt="" />
              <section className="texto">
                <h2>PERFECTO PARA CUALQUIER EVENTO</h2>
                <p>Disponemos de un sistema modular de barras que ofrece la configuración perfecta para su evento sin importar el tamaño del lugar o el número de invitados.</p>
              </section>
            </li>
            <li>
              <img src={Imagen3} alt="" />
              <section className="texto">
                <h2>BIOSEGURIDAD</h2>
                <p>Nuestro equipo de bartenders y auxiliares de bar aseguran el cumplimiento de las normas de bioseguridad, servicio ágil de bebidas y por tanto, el total éxito de su evento.</p>
              </section>
            </li>
            <li>
              <img src={Imagen4} alt="" />
              <section className="texto">
                <h2>VARIEDAD</h2>
                <p>Banana's Cocktails cuenta con una carta de cócteles y bebidas mismas que pueden ser con o sin alcohol, con opciones desde las tradicionales hasta las más novedosas, que le darán a su evento un toque de originalidad y encanto.</p>
              </section>
            </li>
          </ul>
          
        </section>
        <section>
          <section className="buscador">
            <h1 style={{ fontSize: "24px" }}>
              Encuentra todo lo que necesitas para tu evento
            </h1>
            <form action="./formularios/Busqueda.php" method="post" >
              <input type="text" placeholder="¿Qué buscas?" style={{ textAlign: "center" }} name="busqueda" />
              <input className="button" type="submit" value="Ingresar" />
            </form>
          </section>
          <br />
          <h3 align="center" style={{ fontSize: "24px" }}>
            Disfruta planeando tu evento
          </h3>
          <p align="center">Empieza a planear gratis tu evento con nosotros.</p>

          <br />
          <br />
          <center><Reloj /></center>
          <br />
          <section className="gallery">
            <img
              src={Galeria2}
              alt="Gallery Img1"
              className="gallery-img-1"
            /><img
            src={Galeria4}
              alt="Gallery Img2"
              className="gallery-img-2"
            /><img
            src={Imag2}
              alt="Gallery Img3"
              className="gallery-img-3"
            /><img
            src={Galeria3}
              alt="Gallery Img4"
              className="gallery-img-4"
            /><img
            src={Galeria5}
              alt="Gallery Img5"
              className="gallery-img-5"
            />
          </section>

        </section>
      </section>

      <section className="website-container" id="contacto">
        <h1 className="website-logo">Contacta<span>Nos</span></h1>

        <section className="website-contact-wrapper animated bounceInUp">
          <section className="website-contact-form">
            <h3 style={{ color: "#fff" }}>Contactanos</h3>
            <form action="./formularios/Datos.php" method="post" id="contacto">
              <p>
                <label htmlFor="website-nombre"><strong>Nombre:</strong></label>
                <input name="website-nombre" type="text" placeholder="Ejem. Luis" pattern="[A-Za-z]+" title="Ingresa solo letras" minLength="4" maxLength="8" size="10" required />
              </p>
              <p>
                <label htmlFor="website-apellido"><strong>Apellido:</strong></label>
                <input name="website-apellido" type="text" pattern="[A-Za-z]+" title="Ingresa solo letras" required placeholder="Ejem. Añasco" />
              </p>
              <p>
                <label htmlFor="website-telefono"><strong>Telefono:</strong></label>
                <input name="website-telefono" type="tel" required placeholder="0998578412" pattern="[0-9]{10}" title="Por favor ingrese exactamente 10 números." maxLength="10" />
              </p>
              <p>
                <label htmlFor="website-email"><strong>Correo Electronico:</strong></label>
                <input name="website-email" type="email" required placeholder="anas....@gmail.com" />
              </p>
              <p className="block">
                <label htmlFor="website-message"><strong>Mensaje:</strong></label>
                <textarea name="website-message" rows="3"></textarea>
              </p>
              <p className="block">
                <input type="submit" value="ENVIAR" />
              </p>
            </form>
          </section>
          <section className="website-contact-info">
            <h4>Mas informacion</h4>
            <ul>
              <li><i className="fas fa-map-marker-alt"></i> BANANAS COCKTAILS</li>
              <li><i className="fa-solid fa-phone"></i>(593) 998 785 356</li>
              <li>
                <i className="fas fa-envelope-open-text"></i> banCocktail@espe.edu.ec
              </li>
            </ul>
            <p>
              ¿Tienes alguna pregunta sobre nuestros servicios, reservaciones o eventos especiales?
              ¡No dudes en comunicarte con nosotros! Nuestro equipo está listo para ayudarte y
              asegurarse de que tengas la mejor experiencia en nuestro establecimiento.
              ¡Esperamos recibir tu llamada o visita pronto!
            </p>
            <strong>
              <p>Bananas_Company.com</p>
            </strong>
          </section>
        </section>
      </section>

      <PiePagina />
    </div>
    )
    
}
export default index;
