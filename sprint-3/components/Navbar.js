
import Image from "next/image";
import Link from "next/link";
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState } from "react";


export default function NavbarMenu() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Navbar className="bg-body-tertiary" color="faded" style={{ boxShadow: ' 0px 0.5px 0px 0px rgba(0,0,0,0.3)' }}>

                {/* Boton sidebar */}
                <Button variant="light" className="m-lg-2" onClick={handleShow} style={{ boxShadow: ' 0.5px 0.5px 0.5px 0.5px rgba(0,0,0,0.3)' }}>
                    ☰ Menú
                </Button>

                <Offcanvas show={show} onHide={handleClose}>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title style={{color:'#3044B6', fontSize: 25}}>Menú</Offcanvas.Title>
                    </Offcanvas.Header>
                    <hr/>
                    <Offcanvas.Body className="d-grid " style={{fontSize: 20}} >
                        <NavDropdown.Item><Link href="/Menu" className="btn btn-light d-grid" style={{fontSize:20}}>Inicio</Link></NavDropdown.Item>
                        <NavDropdown.Item><Link href="/Conversor" className="btn btn-light d-grid" style={{fontSize:20}}>Cuentas y tarjetas</Link></NavDropdown.Item>
                        <NavDropdown.Item><Link href="/Prestamos" className="btn btn-light d-grid" style={{fontSize:20}}>Préstamos</Link></NavDropdown.Item>
                        <NavDropdown.Item><Link href="/Conversor" className="btn btn-light d-grid" style={{fontSize:20}}>Conversor de moneda</Link></NavDropdown.Item>
                        <NavDropdown.Item><Link href="/transferencias" className="btn btn-light d-grid" style={{fontSize:20}}>Transferencias</Link></NavDropdown.Item>
                        <NavDropdown.Item><Link href="#" className="btn btn-light d-grid" style={{fontSize:20}}>Págos</Link></NavDropdown.Item>
                        <hr/>
                        <NavDropdown.Item><Link href="#" className="btn btn-light d-grid" style={{fontSize:20}}>Mi cuenta</Link></NavDropdown.Item>
                        <NavDropdown.Item><Link href="#" className="btn btn-light d-grid" style={{fontSize:20}}>Ayuda</Link></NavDropdown.Item>
                        <NavDropdown.Item><Link href="/" className="btn btn-light d-grid" style={{fontSize:20}}>Cerra Sesión</Link></NavDropdown.Item>
                    </Offcanvas.Body>
                </Offcanvas>

                {/* Logo */}
                <Navbar.Collapse className="justify-content-center me-lg-5">
                    <Link href="/Menu">
                        <Image
                            alt="Logo NovaBank"
                            src="/NovaBank.png"
                            width={180}
                            height={40}
                        />
                    </Link>
                </Navbar.Collapse>
                

            </Navbar >
        </>
    );
}