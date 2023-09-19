
import NavbarMenu from "@/components/Navbar";
import Accordion from 'react-bootstrap/Accordion';
import Footer from "@/components/Footer";
export default function Menu() {
    return (
        <>
            {/* Navbar */}
            <NavbarMenu />

            {/* Accordion */}

            <Accordion defaultActiveKey="0" className='p-5' alwaysOpen>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Cuentas</Accordion.Header>
                    <Accordion.Body>

                        <h3>Saldo: $10.000</h3>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>cuenta Dolar</Accordion.Header>
                    <Accordion.Body>
                        <h3>Saldo: US$10</h3>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            {/* Footer */}
            <Footer/>
        </>
    );
}