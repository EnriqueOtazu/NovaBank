import React from 'react';
import './Footer.css';
import logo from '../header/NovaBank.png'

export const Footer = () => {
  return (
        <footer className="footer">
            <img src={logo} alt='logo-Novabank' />
            <div className="container">
                <div className="footer-row">
                    <div className="footer-links">
                        <h4>Ayuda</h4>
                        <ul>
                            <li><a href="/#">Contactanos</a></li>
                            <li><a href="/#">Politica de Privacidad</a></li>
                            <li><a href="/#">Terminos y Condiciones</a></li>
                            <li><a href="/#">Preguntas Frecuentes</a></li>
                        </ul>
                    </div>

                    <div className="footer-links">
                        <h4>Acerca de:</h4>
                        <ul>
                            <li><a href="/#">Nosotros</a></li>
                            <li><a href="/#">Empleos</a></li>
                            <li><a href="/#">Preferencias de cookies</a></li>
                            <li><a href="/#">Blogs</a></li>
                        </ul>
                    </div>

                    <div className="footer-links">
                        <h4>Información</h4>
                        <ul>
                            <li>Email:novabank@gmail.com</li>
                            <li>Tel:+54 9 3858-584732</li>
                            <li>Dirección:Gadano 2468, Gral Roca</li>
                        </ul>
                    </div>

                    <div className="footer-links">
                        <h4>Redes Sociales</h4>
                        <div className="social-link">
                            <a href="/#"><i className="fa-brands fa-facebook"></i></a>
                            <a href="/#"><i className="fa-brands fa-x-twitter"></i></a>
                            <a href="/#"><i className="fa-brands fa-whatsapp"></i></a>
                            <a href="/#"><i className="fa-brands fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    );
}

export default Footer;