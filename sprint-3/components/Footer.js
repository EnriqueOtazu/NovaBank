
import Image from "next/image";
import Link from "next/link";


export default function Footer () {
  return (
        <footer className="footer">
            <Link href="/">
                <Image src="/NovaBank.png" width={180} height={40}/>
            </Link>
            <div className="container">
                <div className="footer-row">
                    <div className="footer-links">
                        <h4>Ayuda</h4>
                        <ul>
                            <li><a href="mailto:novabank@gmail.com">Contactanos</a></li>
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
                            <a href="https://www.facebook.com" target='blank'><i className="fa-brands fa-facebook"></i></a>
                            <a href="https://www.twitter.com" target='blank'><i className="fa-brands fa-x-twitter"></i></a>
                            <a href="https://www.whatsapp.com" target='blank'><i className="fa-brands fa-whatsapp"></i></a>
                            <a href="https://www.instagram.com" target='blank'><i className="fa-brands fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    );
}
