import React from 'react';
import './Footer.css';
import logo from '../header/NovaBank.png'
import NavLink from 'react-bootstrap/esm/NavLink';
export const Footer = () => {
  return (
        <footer className="footer">
            <img src={logo} alt='logo-Novabank' />
            <div className="container">
                <div className="footer-row">
                    <div className="footer-links">
                        <h4>Ayuda</h4>
                        <ul>
                            <li><NavLink href="mailto:novabank@gmail.com">Contactanos</NavLink></li>
                
                            <li><NavLink href="/#">Politica de Privacidad</NavLink></li>
                            <li><NavLink href="/#">Terminos y Condiciones</NavLink></li>
                            <li><NavLink href="/#">Preguntas Frecuentes</NavLink></li>
                        </ul>
                    </div>

                    <div className="footer-links">
                        <h4>Acerca de:</h4>
                        <ul>
                            <li><NavLink href="/#">Nosotros</NavLink></li>
                            <li><NavLink href="/#">Empleos</NavLink></li>
                            <li><NavLink href="/#">Preferencias de cookies</NavLink></li>
                            <li><NavLink href="/#">Blogs</NavLink></li>
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
                            <NavLink href="https://www.facebook.com" target='blank'><i className="fa-brands fa-facebook"></i></NavLink>
                            <NavLink href="https://www.twitter.com" target='blank'><i className="fa-brands fa-x-twitter"></i></NavLink>
                            <NavLink href="https://www.whatsapp.com" target='blank'><i className="fa-brands fa-whatsapp"></i></NavLink>
                            <NavLink href="https://www.instagram.com" target='blank'><i className="fa-brands fa-instagram"></i></NavLink>
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    );
}

export default Footer;