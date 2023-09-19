
import HeaderBasic from "@/components/HeaderBasic";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function InicioSesion(){
    return(
        <>
            {/* Header */}
            <HeaderBasic/>

            {/* Login */}
            <div className="container w-75 bg-white mt-5 rounded shadow">
                <div className="row align-items-stretch">
                    <div className="col bg d-none  d-lg-block col-md-5 col-lg-5 col-xl-6 rounded">
                        <Image src="/fondoBanco.jpg" width={570} height={800}/>
                    </div>
                    <div className="col bg-white p-5 rounded-end">
                        <h2 className="text-center  py-5">Bienvenido</h2>

                        <form action="#">
                            <div className="mb-4">
                                <label For="text" className="form-label">Usuario</label>
                                <input type="text" className="form-control" name="email"/>
                            </div>
                            <div className="mb-4">
                                <label For="password" className="form-label">Contraseña</label>
                                <input type="password" className="form-control" name="password"/>
                            </div>
                            <div className="mb-4 form-check">
                                <input type="checkbox" className="form-cheach-input" name="connected"/>
                                <label For="connected" className="form-cheack-label">Mantener coenctado</label>
                            </div>

                            <div className="d-grid">
                                <button type="submit" className="btn btn-primary"> iniciar Sesión</button>
                            </div>

                            <div className="my-3">
                                <span>No tienes cuenta?<Link href="/menu/Menu">Regístrate!</Link> </span> <br/>
                                <span><Link href="/">Recuperar Contraseña!</Link> </span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <Footer/>
        </>
    );
}