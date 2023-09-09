import React from 'react';
import {Navbar,NavbarBrand} from 'reactstrap';
import logo from "../Pages/header/NovaBank.png";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Footer from './Footer/Footer';


export const Registro = () => {
  return (
    <>
      {/* Navbar fijo */}

      <Navbar className="my-1," color="faded" style={{boxShadow:' 0px 0.5px 0px 0px rgba(0,0,0,0.3)'}}>
        <NavbarBrand href="/"  >
          <img alt="logo" src={logo} style={{height: 40, width: 180}} />
        </NavbarBrand>
      </Navbar>

      {/* Form Regsitro */}

      <div className='d-flex justify-content-center p-5' style={{boxShadow: '-4px 4px 12px 0px rgba(0,0,0,0.5)'}}>
        <div>
          <h2 align='center'>Registro de Usuario</h2><br></br>
          <Form className='mb-5'>
                          
            <Form.Group className="mb-4" controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Nombre y Apellido" /> 
            </Form.Group>

            <Form.Group className="mb-4" controlId="formBasicPassword">
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>

            <Form.Group className="mb-4" controlId="formBasicPassword">
              <Form.Control type="number" placeholder="DNI" />
            </Form.Group>

            <Form.Group className="mb-4" controlId="formBasicPassword">
              <Form.Label>Fecha de nacimiento</Form.Label>
              <Form.Control type="date" placeholder="Fecha de nacimiento" />
            </Form.Group>

            <Form.Group className="mb-4" controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Contraseña" />
            </Form.Group>

            <Form.Group className="mb-4 d-grid gap-2" controlId="submit">
              <Button variant="primary"  type="submit"  id='submit' href='/menu'>
                Registrar
              </Button>
            </Form.Group>

            <Form.Group className="mb-4 d-grid gap-2" controlId="submit">
              <Button variant="light"  type="submit" href='/'>
                Volver
              </Button>
            </Form.Group>
  
          </Form>
        </div>
      </div>
        
      {/* Footer */}
      <Footer/>
    </>
  )
}

export default Registro;