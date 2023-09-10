import React from 'react';
import HeaderBasic from './header/HeaderBasic';
import Fondo from "../Functions/inicio-sesion/fondoBanco.jpg";
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from './Footer/Footer';

export const AtencionCliente = () => {
  return (
    <>
        {/* Navbar fijo */}
        <HeaderBasic/>
      
      {/* Login */}
        <div className='d-flex justify-content-center aling-item-center p-5' style={{boxShadow: '-4px 4px 12px 0px rgba(0,0,0,0.5)'}}>
            <div className=' p-5 bg-white '>
                <Row className=''>
                    <Col>
                        <Image src={Fondo}  width={500} height={400} rounded />
                    </Col>
                    <Col>
                        <h5>Contactanos!</h5>
                        <p>Email:novabank@gmail.com</p>
                        <p>  Tel:+54 9 3858-584732</p>
                        <p> Dirección:Gadano 2468, Gr</p>
                    </Col>
                    <Col>
                        <h5>Preguntas Frecuentes!</h5>
                        <h6>¿Como me hago una cuenta?</h6>
                        <p>  Acercate a cualquiera de nuestras sucursales, o escribinos por Whatsapp y un asistente virtual sera asignado para ayudarte</p>
                        <h6>¿Que hago si me roban la tarjeta?</h6>
                        <p> No te preocupes! con nuestra pagina vas a poder congelar tu tarjeta en caso de perderla, y cuando la encuentres podes reanudar su uso! y para extravios o robos, vas a poder cancelar la tarjeta y una sin cargo te llegara a tu domicilio dentro de los 7-9 dias habiles del reporte.</p>
                        <h6>¿Puedo recibir transferencias del exterior?</h6>
                        <p>Mientras cuentes con una cuenta en moneda extranjera, podrás recibir dinero del exterior siempre y cuando hayas realizado el pedido en algunas de nuestras sucursales</p>
                    </Col>
                    <Col>
                        <h5>Empleos</h5>
                        <a href='#'>Puesto: Mantenimiento de infraestructura digital, especializado en React</a>
                        
                        <a href='#'>Puesto: Especialista en bases de datos para trabajo full time</a>
                        
                        <a href='#'>Puesto: Recepcionista</a>
                    </Col>
                </Row> 
            </div> 
        </div>

        {/* <Footer/> */}
        <Footer/>
    </>
    
  )
}

export default AtencionCliente;