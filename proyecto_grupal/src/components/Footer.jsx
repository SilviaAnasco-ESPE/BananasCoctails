import React from 'react';
import '../assets/css/nosotros.css';

const Footer = () => {
    return (
        <div>
        <footer className="piePagina">
            <p>Banana's Cocktails</p>
            <p>Copyright ©</p>
            <section className="socials">
                <a style={{ background: 'rgb(61, 131, 221)' }} href="https://www.facebook.com/choilusion" className="fa-brands fa-facebook-f"></a>
                <a style={{ background: 'rgb(67, 182, 228)' }} href="https://twitter.com/?lang=es" className="fa-brands fa-twitter"></a>
                <a style={{ backgroundImage: 'linear-gradient(to right, #ff8d54, #ff13ff)' }} href="https://www.instagram.com/bananas_cocktails/" className="fa-brands fa-instagram"></a>
            </section>
        </footer>
        </div>
    );
}

export default Footer;
