import NavbarMenu from "@/components/Navbar"
import detailData from "../components/pagos/detailData"
import Link from "next/link"
import Footer from "@/components/Footer"

export default function Pagos() {
    return (
        <>
            {/* Navbar */}
            <NavbarMenu />

            {/* tabla */}

            <div className='container w-50 mt-5 mb-5 justify-content-center p-5 rounded shadow' style={{ boxShadow: '-4px 4px 12px 0px rgba(0,0,0,0.5)' }}>
                <h1 style={{textAlign:'center'}} className="p-3">Facturas Registradas</h1>
                {/* <h4>Haz click en cualquiera para recibir toda la informacion o realizarle una transferencia</h4> */}
                <ul>
                    {detailData.map((detail) => (
                        <li style={{ listStyleType: 'none' }} key={detail.id}>
                            <Link href={`/pagos/${detail.id}}`} className="btn btn-light d-grid" style={{ fontSize: 20, width: '300px', border: '1px solid #3044B6', margin: '5px' }}>
                                {detail.empresa}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Footer */}
            <Footer/>
        </>
    )
}