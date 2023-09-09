import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../header/NovaBank.png";

export const HeaderBasic = () => {
  return (
    <>
      {/* Navbar fijo */}
      <Navbar className=" bg-body-tertiary"   style={{boxShadow:' 0px 0.5px 0px 0px rgba(0,0,0,0.3)'}}>
        <Container>

          <Navbar.Brand href="/"  className=''>
            <img alt="logo" src={logo} style={{height: 40, width: 180}} />
          </Navbar.Brand>
        </Container>

       
          <Nav className="mr-auto" style={{fontSize: 20, marginRight: 15}} >

            <Nav.Item style={{marginRight: 20}}>
              <Nav.Link href="/components/"  Navbar>Ayuda</Nav.Link>
            </Nav.Item>

            <Nav.Item left >
              <Nav.Link href="../InicioSesion"  Navbar>mi cuenta</Nav.Link>
            </Nav.Item>

          </Nav>
        
        
      </Navbar>
    </>
  )
}
export default HeaderBasic;