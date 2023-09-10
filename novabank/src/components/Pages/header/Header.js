import React from 'react';
import { useState } from "react";
import logo from "./NovaBank.png";
import {Navbar,Nav,NavbarBrand} from 'reactstrap';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import NavDropdown from 'react-bootstrap/NavDropdown';


export const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Navbar className="my-1," color="faded" style={{boxShadow:' 0px 0.5px 0px 0px rgba(0,0,0,0.3)'}}>

        {/* Boton menu desplegable */}
        <Button variant="light" color='primary' onClick={handleShow} style={{boxShadow:' 0.5px 0.5px 0.5px 0.5px rgba(0,0,0,0.3)'}}>
          ☰ Menú
        </Button>

        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title style={{color:'#3044B6', fontSize: 25}}>Menú</Offcanvas.Title>
          </Offcanvas.Header>
          <NavDropdown.Divider />
          <Offcanvas.Body className=''>
            <NavDropdown.Item href="/menu">Inicio</NavDropdown.Item>
            <NavDropdown.Item href="#">Cuentas y Tarjetas</NavDropdown.Item>
            <NavDropdown.Item href="../prestamos">Préstamos</NavDropdown.Item>
            <NavDropdown.Item href="../ConvertidorDeMoneda">Conv. De monedas</NavDropdown.Item>
            <NavDropdown.Item href="#">Transferencias</NavDropdown.Item>
            <NavDropdown.Item href="#">Págos</NavDropdown.Item>
            {/* ATENCION AL CLIENTE NO LINKEA */}
            {/* una vez que linkee aca, hay que modificar el href de:
            contactanos
            preguntas frecuentes
            empleos
             */}
            {/* <NavDropdown.Item href="../AtencionCliente">Atención al cliente</NavDropdown.Item> */}
            <NavDropdown.Item href="#">Atención al cliente</NavDropdown.Item>

            <NavDropdown.Divider />
            <NavDropdown.Item href="#">Mi cuenta</NavDropdown.Item>
            <NavDropdown.Item href="#">Ayuda</NavDropdown.Item>
            <NavDropdown.Item href="/#">Cerrar Sección</NavDropdown.Item>
          </Offcanvas.Body>
        </Offcanvas>

        {/* Logo y navbar */}

        <NavbarBrand href="/menu">
          <img alt="logo" src={logo} style={{height: 40, width: 180}} block/>
        </NavbarBrand>
        <Nav className="mr-auto" style={{color:'#3044B6'}}>
        </Nav>
      </Navbar>
    </>
  )
}
export default Header;
