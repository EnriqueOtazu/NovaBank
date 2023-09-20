import Link from "next/link";
import Image from "next/image";
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';


export default function FormsHeader() {
    return (
        <>  
            {/* Navbar solo para forms */}
            <Navbar className="bg-body-tertiary" color="faded" style={{ boxShadow: ' 0px 0.5px 0px 0px rgba(0,0,0,0.3)' }}>

                {/* Boton sidebar */}
                <Button variant="light" className="m-lg-2" style={{ boxShadow: ' 0.5px 0.5px 0.5px 0.5px rgba(0,0,0,0.3)' }}>
                   <Link href="/" style={{color:'#3044B6', textDecoration:'none'}}>← Volver Inicio</Link> 
                </Button>


                {/* Logo */}
                <Navbar.Collapse className="justify-content-center">
                    <Link href="/">
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
    )
}