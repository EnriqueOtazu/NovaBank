
import FormsHeader from "@/components/FormsHeader";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Registro() {
    return (
        <>
            {/* Header  */}
            <FormsHeader />

            {/* Form Regsitro */}

            <div className='container w-50 mt-5 mb-5 justify-content-center p-5 rounded shadow' style={{ boxShadow: '-4px 4px 12px 0px rgba(0,0,0,0.5)' }}>
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
                            <Button variant="primary" type="submit" id='submit' href='/Menu'>
                                Registrar
                            </Button>
                        </Form.Group>

                        <Form.Group className="mb-4 d-grid gap-2" controlId="submit">
                            <Link href="/InicioSesion" className="btn btn-light">Volver</Link>
                        </Form.Group>

                    </Form>

                    
                </div>
            </div>

            {/* Footer */}
            <Footer/>
        </>
    );
}