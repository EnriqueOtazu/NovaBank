
import NavbarMenu from "@/components/Navbar";
import Accordion from 'react-bootstrap/Accordion';
import Footer from "@/components/Footer";
import accountsData from "./transferencias/accountsData";
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

                        <h3>Saldo: $ {accountsData[3].saldo.toFixed(2)}</h3>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>cuenta Dolar</Accordion.Header>
                    <Accordion.Body>
                    <h3>Saldo: $ {accountsData[3].saldoUSD}</h3>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            {/* Footer */}
            <Footer/>
        </>
    );
}