import Image from 'next/image';
import Link from 'next/link';
import styles from './Footer.module.css';

const FooterNext = () => {
  return (
    <footer className={styles.footer}>
      <Image src="/header/NovaBank.png" alt="logo-Novabank" width={200} height={60} />

      <div className="container">
        <div className="footer-row">
          <div className="footer-links">
            <h4>Ayuda</h4>
            <ul>
              <li>
                <a href="mailto:novabank@gmail.com">Contáctanos</a>
              </li>
              <li>
                <Link href="/politica-de-privacidad">Política de Privacidad</Link>
              </li>
              <li>
                <Link href="/terminos-y-condiciones">Términos y Condiciones</Link>
              </li>
              <li>
                <Link href="/preguntas-frecuentes">Preguntas Frecuentes</Link>
              </li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Acerca de:</h4>
            <ul>
              <li>
                <Link href="/nosotros">Nosotros</Link>
              </li>
              <li>
                <Link href="/empleos">Empleos</Link>
              </li>
              <li>
                <Link href="/preferencias-de-cookies">Preferencias de cookies</Link>
              </li>
              <li>
                <Link href="/blogs">Blogs</Link>
              </li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Información</h4>
            <ul>
              <li>Email: novabank@gmail.com</li>
              <li>Tel: +54 9 3858-584732</li>
              <li>Dirección: Gadano 2468, Gral Roca</li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Redes Sociales</h4>
            <div className="social-link">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-x-twitter"></i>
              </a>
              <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-whatsapp"></i>
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterNext;
