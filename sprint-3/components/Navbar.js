
import Image from "next/image";
import Link from "next/link";


export default function Navbar() {
    const sidebar = () => {
        return (
            <>
                <div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasScrollingLabel">Offcanvas with body scrolling</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <p>Try scrolling the rest of the page to see this option in action.</p>
                    </div>
                </div>
            </>
        );
    }
    return (
        <>
            {/* NavBar con sidebar */}
            <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ boxShadow: ' 0px 0.5px 0px 0px rgba(0,0,0,0.3)' }}>
                <div className="container-fluid">

                    {/* Sidebar -  Offcanvas */}
                    <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" id="sidebar" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">Menú</button>

                    {/* Logo */}

                    <Link href="/menu/Menu" className="text-center">
                        <Image src="/NovaBank.png" width={180} height={40} />
                    </Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse container-fluid " id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0">

                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">Ayuda</a>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" href="/login/InicioSesion">Mi cuenta</Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}