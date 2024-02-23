import React from 'react';
import '../assets/css/nosotros.css';
import Nosotros1 from '../assets/img/Imagenes_Carta/Nosotros1.jpg';
import Nosotros2 from '../assets/img/Imagenes_Carta/Nosotros2.jpeg';
import Menu from '../components/Menu';
import PiePagina from '../components/Footer';

const Nosotros = () => {
    return (
        <div>
            <Menu />
        <section className="seccionPrincipal">
    <article>
        <section className="tarjeta">
            <div className="contenido-texto">
                <h3>Un poco sobre nosotros</h3>
                <p>
                    Banana's Cocktails es un servicio de barra móvil y coctelería clásica, que ofrece un enfoque innovador con iluminación led que se ajusta a cualquier tipo de ocasión, tales como:
                </p>
                <ul>
                    <li>Bodas</li>
                    <li>Cumpleaños</li>
                    <li>Eventos corporativos</li>
                    <li>Eventos Deportivos</li>
                    <li>Lanzamiento de marcas</li>
                    <li>Entre otras festividades</li>
                </ul>
                <p>
                    Contamos con más de 6 años de experiencia dentro del mercado, brindando un servicio de excelencia a todos nuestros clientes. Nuestro equipo de bartenders y auxiliares de bar aseguran el cumplimiento de las normas de bioseguridad, servicio ágil de bebidas y por tanto, el total éxito de su evento.
                </p>
                <a href="#">Ver mas</a>
            </div>
            <div className="visual">
                <img src={Nosotros1} alt="" />
            </div>
        </section>
    </article>

    <article>
        <section className="tarjeta">
            <div className="contenido-texto">
                <h3>Como funciona</h3>
                <p>
                    Disponemos de un sistema modular de barras que ofrece la configuración perfecta para su evento sin importar el tamaño del lugar o el número de invitados. Banana's Cocktails cuenta con una carta de cócteles y bebidas mismas que pueden ser con o sin alcohol, con opciones desde las tradicionales hasta las más novedosas, que le darán a su evento un toque de originalidad y encanto. Una vez seleccionados los cócteles y definido el número de personas que asistirán al evento se realiza una cotización o puede elegir un paquete de los que se muestran a continuación.
                </p>
                <a href="#">Ver mas</a>
            </div>
            <div className="visual">
                <img src={Nosotros2} alt="" />
            </div>
        </section>
    </article>

    <h2 className="titulo1">BANANAS COCKTAILS DONDE LA BEBIDA ES LO PRIMERO</h2>
    <section className="contenedorLogo">
        <section className="logo3D"></section>
    </section>
</section>

<PiePagina />
        </div>
    );
}

export default Nosotros;
