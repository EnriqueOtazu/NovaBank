
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
                <Button variant="light" className="m-lg-2" color="primary" onClick={handleShow} style={{ boxShadow: ' 0.5px 0.5px 0.5px 0.5px rgba(0,0,0,0.3)' }}>
                    ☰ Menú
                </Button>

                <Offcanvas show={show} onHide={handleClose}>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Menú</Offcanvas.Title>
                    </Offcanvas.Header>
                    <NavDropdown.Divider />
                    <Offcanvas.Body className="d-grid gap-2">
                        <NavDropdown.Item  href="/menu/Menu"><Button variant="light"  size="lg" > Inicio</Button></NavDropdown.Item>
                        <NavDropdown.Item href="#">Cuentas y Tarjetas</NavDropdown.Item>
                        <NavDropdown.Item href="../prestamos">Préstamos</NavDropdown.Item>
                        <NavDropdown.Item href="../ConvertidorDeMoneda">Conv. De monedas</NavDropdown.Item>
                        <NavDropdown.Item href="#">Transferencias</NavDropdown.Item>
                        <NavDropdown.Item href="#">Págos</NavDropdown.Item>

                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#">Mi cuenta</NavDropdown.Item>
                        <NavDropdown.Item href="#">Ayuda</NavDropdown.Item>
                        <NavDropdown.Item href="/#">Cerrar Sección</NavDropdown.Item>
                    </Offcanvas.Body>
                </Offcanvas>

                {/* Logo */}
                <Navbar.Collapse className="justify-content-center">
                    <Link href="/menu/Menu">
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