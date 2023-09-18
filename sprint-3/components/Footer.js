
import Image from "next/image";
import Link from "next/link";
export default function Footer(){
    return(
        <>
            
            <footer className="bg-white text-dark pt-5 pb-4">
                <Link href="/">
                    <Image src="/NovaBank.png" width={180} height={40}/>
                </Link>
                <div className="container text-center text-md-start">

                    <div className="row text-center text-md-start">

                        <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                            <h5 className="text-uppercase mb-4 font-weight-bold text-primary">Dejanos ayudarte</h5>
                            <hr className="mb-4"/>
                            <ul>
                                <p><a href="mailto:novabank@gmail.com" className="text-dark">Contactanos</a></p>
                                <p><a href="/#" className="text-dark">Politica de Privacidad</a></p>
                                <p><a href="/#" className="text-dark">Terminos y Condiciones</a></p>
                                <p><a href="/#" className="text-dark">Preguntas Frecuentes</a></p>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 font-weight-bold text-primary">Acerca de:</h5>
                        <hr className="mb-4"/>
                        <ul>
                            <p><a href="/#" className="text-dark">Nosotros</a></p>
                            <p><a href="/#" className="text-dark">Empleos</a></p>
                            <p><a href="/#" className="text-dark">Preferencias de cookies</a></p>
                            <p><a href="/#" className="text-dark">Blogs</a></p>
                        </ul>   
                    </div>

                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 font-weight-bold text-primary">Información</h5>
                        <hr className="mb-4"/>
                        <ul>
                            <p>Email:novabank@gmail.com</p>
                            <p>Tel:+54 9 3858-584732</p>
                            <p>Dirección:Gadano 2468, Gral Roca</p>
                        </ul>   
                    </div>

                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 font-weight-bold text-primary">Redes Sociales</h5>
                        <hr className="mb-4"/>
                        <ul>
                            <a href="https://www.facebook.com" target='blank'><i className=" fab fa-brands fa-facebook"></i></a>
                            <a href="https://www.twitter.com" target='blank'><i className="fab fa-brands fa-x-twitter"></i></a>
                            <a href="https://www.whatsapp.com" target='blank'><i className="fab fa-brands fa-whatsapp"></i></a>
                            <a href="https://www.instagram.com" target='blank'><i className="fab fa-brands fa-instagram"></i></a>
                        </ul>   
                    </div>
                </div>
            </footer>
        </>
    );
}