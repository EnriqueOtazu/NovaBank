import React from 'react';
import HeaderBasic from './header/HeaderBasic';
import Fondo from "../Functions/inicio-sesion/fondoBanco.jpg";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from '../../../../sprint-3/components/Footer/Footer';

export const InicioSesion = () => {
  return (
    <>
        {/* Navbar fijo */}
        <HeaderBasic/>
      
      {/* Login */}
        <div className='d-flex justify-content-center aling-item-center p-5' style={{boxShadow: '-4px 4px 12px 0px rgba(0,0,0,0.5)'}}>
            <div className=' p-5 bg-white '>
                <Row className=''>
                    <Col>
                        <Image alt='' src={Fondo}  width={500} height={400} rounded />
                    </Col>
                    <Col>
                        <Form className='mb-5'>
                            <h1 className='m-5'>Bienvenido</h1>
                            <Form.Group className="mb-4" controlId="formBasicEmail">
                                <Form.Control type="text" placeholder="Usuario" /> 
                            </Form.Group>

                            <Form.Group className="mb-4" controlId="formBasicPassword">
                                <Form.Control type="password" placeholder="Contraseña" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Recordar DNI y Usuario" />
                            </Form.Group>
                            <Form.Group className="mb-4 d-grid gap-2" controlId="submit">
                                <Button variant="primary"  type="submit"  id='submit' href='/menu'>
                                    Iniciar Sesión
                                </Button>
                            </Form.Group>
                            <Form.Group>
                                <Form.Text  >
                                    Si no tenés u olvidaste tu clave y/o usuario. 
                                    <a href='/Registro'>  Crear o recuperar </a>
                                </Form.Text>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row> 
            </div> 
        </div>

        {/* <Footer/> */}
        <Footer/>
    </>
    
  )
}

export default InicioSesion;