
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'next/image';

export default function HeaderBasic() {
    return(
        <>
            {/* Navbar fijo */}
            <Navbar  className="bg-body-tertiary justify-content-between"   style={{boxShadow:' 0px 0.5px 0px 0px rgba(0,0,0,0.3)'}}>
                <Container className='m-lg-0 '>
                <Navbar.Brand href="/"  >
                    
                    <Image 
                    src="/NovaBank.png" 
                    alt='NovaBank'
                    height ={40}
                    width= {180}
                    ></Image>

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
    );
}