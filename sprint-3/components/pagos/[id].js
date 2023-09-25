import { useRouter } from 'next/router';
import detailsData from './detailData';
import Link from 'next/link';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function paymentdetail({ detail }) {
    const router = useRouter();

    // Verifica si la página se está generando en el servidor
    if (router.isFallback) {
        return <div>Cargando...</div>;
    }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className='container w-50  mb-5 justify-content-center p-5 rounded shadow' style={{ boxShadow: '-4px 4px 12px 0px rgba(0,0,0,0.5)' }}>
                <h1>Detalles de factura</h1>
                <p><b>Empresa:</b> {detail.empresa}</p>
                <p><b>Correo:</b> {detail.correo}</p>
                <p><b>Descripción:</b> {detail.descripcion}</p>
                <p><b>Precio:</b> US$ {detail.saldoUSD}</p>
                <Link href="/Pagos" className="btn btn-primary m-lg-1" style={{ fontSize: '20px' }}>
                    Volver
                </Link>

                {/* <Link href={`/transferir?cuenta=${JSON.stringify(detail)}`} onClick={handleShow} className="btn btn-primary" style={{ fontSize: '20px' }}>
                    Realizar pago
                </Link> */}

                <Button className='btn btn-primary' style={{ fontSize: '20px' }} onClick={handleShow}>
                    Realizar pago
                </Button>
            </div>

            
            {/* Modale de pagos */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Pagar Factura </Modal.Title>
                </Modal.Header>
                <Modal.Body>Está seguro?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Volver
                    </Button>
                    <Button variant="primary" onClick={handleClose} href='/Pagos'  >
                        Pagar Factura
                    </Button>
                </Modal.Footer>
            </Modal>

        </>
    );
}

export async function getStaticPaths() {
    // Genera las rutas estáticas para cada cuenta bancaria
    const paths = detailsData.map((detail) => ({
        params: { id: detail.id.toString() },
    }));

    return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
    // Obtiene los detalles de la cuenta bancaria en función del parámetro de ruta 'id'
    const detailId = parseInt(params.id);
    const detail = detailsData.find((acc) => acc.id === detailId);

    // Verifica si existe la cuenta en el objeto antes de retornarla
    if (!detail) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            detail,
        },
    };
}

export default paymentdetail;
