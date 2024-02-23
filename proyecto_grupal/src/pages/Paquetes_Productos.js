import React, { useEffect } from "react";
import "../assets/css/paquetesProductos.css";
import "../assets/css/estiloBase.css";
import "../assets/css/botellas.css";
import CAMBUR from '../assets/img/PACK CAMBUR.jpg';
import ORITO from '../assets/img/PACK ORITO.jpg';
import PLUS from '../assets/img/PACK ORITO PLUS.jpg';
import GUINEO from '../assets/img/PACK GUINEO.jpg';
import BotellasLogo from '../assets/img/Botellas/logo.png';
import Botella1 from '../assets/img/Botellas/1.png';
import Botella2 from '../assets/img/Botellas/2.png';
import Botella3 from '../assets/img/Botellas/3.png';
import Menu from '../components/Menu';
import PiePagina from '../components/Footer';


const PaquetesProductos = () => {
   
    
    return (
        <div>
            <Menu />
            
    
            <section className="seccionPrincipal">
                <h2 className="titulo1">Nuestros Mejores paquetes</h2>
                <section className="coleccionCartas">
                    <section className="paquetes">
                        <section className="face front">
                            <img src={CAMBUR} alt="" />
                            <h3>Pack Cambur</h3>
                        </section>
                        <section className="face back">
                            <h3>Pack Cambur</h3>
                            <p>6 tipos de cócteles de nuestra carta</p>
                            <p>Barra con luces led</p>
                            <p>Pantalla donde se proyecta el menú elegido</p>
                            <p>Bartender y auxiliar de barra</p>
                            <section className="link">
                                <a href="#">Detalles</a>
                            </section>
                        </section>
                    </section>
                    <section className="paquetes">
                        <section className="face front">
                            <img src={ORITO} alt="" />
                            <h3>Pack Orito</h3>
                        </section>
                        <section className="face back">
                            <h3>Pack Orito</h3>
                            <p>6 tipos de cócteles de nuestra carta</p>
                            <p>Cristalería</p>
                            <p>Insumos (licor, fruta, hielo, etc)</p>
                            <section className="link">
                                <a href="#">Detalles</a>
                            </section>
                        </section>
                    </section>
                    <section className="paquetes">
                        <section className="face front">
                            <img src={PLUS} alt="" />
                            <h3>Pack Orito Plus</h3>
                        </section>
                        <section className="face back">
                            <h3>Pack Orito Plus</h3>
                            <p>6 tipos de cócteles de nuestra carta</p>
                            <p>4 horas de servicio</p>
                            <p>Barra con luces led</p>
                            <section className="link">
                                <a href="#">Detalles</a>
                            </section>
                        </section>
                    </section>
                    <section className="paquetes">
                        <section className="face front">
                            <img src={GUINEO} alt="" />
                            <h3>Pack Guineo</h3>
                        </section>
                        <section className="face back">
                            <h3>Pack Guineo</h3>
                            <p>8 tipos de cócteles de nuestra carta</p>
                            <p>Pantalla donde se proyecta el menú elegido</p>
                            <p>Insumos (licor, fruta, hielo, etc)</p>
                            <section className="link">
                                <a href="#">Detalles</a>
                            </section>
                        </section>
                    </section>
                </section>

            </section>
            
            <h2 className="titulo1">Mejores botellas</h2>
            <section className="swiper mySwiper">
            <section className="swiper-wrapper">
                {/* Primer botella */}
                <section className="swiper-slide">
                <section className="icons">
                    <i className="fa-solid fa-circle-arrow-left"></i>
                    <img src={BotellasLogo} alt="" />
                    <i className="fa-regular fa-heart"></i>
                </section>
                <section className="product-content">
                    <section className="product-text">
                    <span>$95</span>
                    <h3>Jack Sigle</h3>
                    <p>
                        La esencia del legado de Jack Daniel's en cada sorbo. 
                        Suavidad excepcional con notas de roble ahumado y caramelo. Perfecto solo, en cócteles o con hielo. 
                        Autenticidad destilada en cada gota
                    </p>
                    </section>
                    <section className="product-img">
                    <img src={Botella1} alt="" />
                    </section>
                </section>
                <a href="#" className="btn-1">Comprar</a>
                </section>

                {/* Segunda botella */}
                <section className="swiper-slide">
                <section className="icons">
                    <i className="fa-solid fa-circle-arrow-left"></i>
                    <img src={BotellasLogo} alt="" />
                    <i className="fa-regular fa-heart"></i>
                </section>
                <section className="product-content">
                    <section className="product-text">
                    <span>$95</span>
                    <h3>Jack Sigle</h3>
                    <p>
                        La esencia del legado de Jack Daniel's en cada sorbo. 
                        Suavidad excepcional con notas de roble ahumado y caramelo. Perfecto solo, en cócteles o con hielo. 
                        Autenticidad destilada en cada gota
                    </p>
                    </section>
                    <section className="product-img">
                    <img src={Botella2} alt="" />
                    </section>
                </section>
                <a href="#" className="btn-1">Comprar</a>
                </section>

                {/* Otras botellas... */}
                <section className="swiper-slide">
                <section className="icons">
                    <i className="fa-solid fa-circle-arrow-left"></i>
                    <img src={BotellasLogo} alt="" />
                    <i className="fa-regular fa-heart"></i>
                </section>
                <section className="product-content">
                    <section className="product-text">
                    <span>$95</span>
                    <h3>Jack Sigle</h3>
                    <p>
                        La esencia del legado de Jack Daniel's en cada sorbo. 
                        Suavidad excepcional con notas de roble ahumado y caramelo. Perfecto solo, en cócteles o con hielo. 
                        Autenticidad destilada en cada gota
                    </p>
                    </section>
                    <section className="product-img">
                    <img src={Botella1} alt="" />
                    </section>
                </section>
                <a href="#" className="btn-1">Comprar</a>
                </section>

                <section className="swiper-slide">
                <section className="icons">
                    <i className="fa-solid fa-circle-arrow-left"></i>
                    <img src={BotellasLogo} alt="" />
                    <i className="fa-regular fa-heart"></i>
                </section>
                <section className="product-content">
                    <section className="product-text">
                    <span>$95</span>
                    <h3>Jack Sigle</h3>
                    <p>
                        La esencia del legado de Jack Daniel's en cada sorbo. 
                        Suavidad excepcional con notas de roble ahumado y caramelo. Perfecto solo, en cócteles o con hielo. 
                        Autenticidad destilada en cada gota
                    </p>
                    </section>
                    <section className="product-img">
                    <img src={Botella1} alt="" />
                    </section>
                </section>
                <a href="#" className="btn-1">Comprar</a>
                </section>
                <section className="swiper-slide">
                <section className="icons">
                    <i className="fa-solid fa-circle-arrow-left"></i>
                    <img src={BotellasLogo} alt="" />
                    <i className="fa-regular fa-heart"></i>
                </section>
                <section className="product-content">
                    <section className="product-text">
                    <span>$95</span>
                    <h3>Jack Sigle</h3>
                    <p>
                        La esencia del legado de Jack Daniel's en cada sorbo. 
                        Suavidad excepcional con notas de roble ahumado y caramelo. Perfecto solo, en cócteles o con hielo. 
                        Autenticidad destilada en cada gota
                    </p>
                    </section>
                    <section className="product-img">
                    <img src={Botella1} alt="" />
                    </section>
                </section>
                <a href="#" className="btn-1">Comprar</a>
                </section>
            </section>
            </section>

            <PiePagina />

            
        </div>
    );
}

export default PaquetesProductos;
