import React from 'react';
import logo from "./NovaBank.png";
import Fondo from "./fondoBanco.jpg";
import {Navbar,Nav,NavbarBrand} from 'reactstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Footer from '../Footer/Footer';

export const InicioSesion = () => {
  return (
    <>
        {/* Navbar fijo */}
      <Navbar className="my-1" color="faded" style={{boxShadow:' 0px 0.5px 0px 0px rgba(0,0,0,0.3)'}} block>
        <NavbarBrand href="/" >
          <img alt="logo" src={logo} style={{height: 40, width: 180,}} />
        </NavbarBrand>
        <Nav className="mr-auto" style={{color:'#3044B6'}}>
        </Nav>
      </Navbar>
      
      {/* Login */}

   
        <div className='d-flex justify-content-center aling-item-center p-5' style={{boxShadow: '-4px 4px 12px 0px rgba(0,0,0,0.5)'}}>
            <div className=' p-5 bg-white '>
                <Row className=''>
                    <Col>
                        <Image src={Fondo}  width={500} rounded />
                    </Col>
                    <Col>
                        <Form className='mb-5'>
                            <h1>Bienvenido</h1>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Usuario</Form.Label>
                                <Form.Control type="text" placeholder="Usuario" />
                                
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Contraaseña</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row> 
            </div> 
        </div>

        <div>

            
        </div>
        {/* <Footer/> */}
    </>
    
  )
}

export default InicioSesion;