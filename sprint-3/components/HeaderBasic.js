
import Image from "next/image";
import Link from "next/link";

export default function HeaderBasic(){
    return(
        <>
            {/* Navbar fijo */}

            <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{boxShadow:' 0px 0.5px 0px 0px rgba(0,0,0,0.3)'}}>
                <div className="container-fluid">
                    <Link href="/">
                        <Image alt=''src="/NovaBank.png" width={180} height={40}/>
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