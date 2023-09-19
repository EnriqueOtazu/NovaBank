import React, {useEffect,useState} from 'react';
import NavbarMenu from "@/components/Navbar";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Footer from '@/components/Footer';

export default function Conversor() {
    const [monedas, setMonedas] = useState([]);
    const [moneda1, setMoneda1] = useState('USD');
    const [moneda2, setMoneda2] = useState('EUR');
    const [monto, setMonto] = useState(undefined);
    const [result, setResult] = useState(undefined);

    useEffect(() => {
        const host = 'api.frankfurter.app';
        fetch(`https://${host}/currencies`)
            .then((resp) => resp.json())
            .then((data) => {
                setMonedas(Object.keys(data));
            });
    }, []);

    useEffect(() => {
        setMonto('')
        setResult('')
    }, [moneda1, moneda2])

    const handleConvert = () => {
        if (moneda1 !== moneda2) {
            const host = 'api.frankfurter.app';
            fetch(
                `https://${host}/latest?amount=${monto}&from=${moneda1}&to=${moneda2}`
            )
                .then((resp) => resp.json())
                .then((data) => { setResult(data.rates[moneda2]) });
        }
    };
    return (
        <>
            {/* Navbar */}
            <NavbarMenu />

            {/* Conversor */}
            <div className="background m-lg-3 bg-light p-5" style={{ boxShadow: '-4px 4px 12px 0px rgba(0,0,0,0.5)' }}>
                <h2 >Conversor de moneda</h2>
                <div className="container p-5">
                    <div className="selects-container">
                        <Form.Group className="mb-3">
                            <Form.Label>De:</Form.Label>
                            <Form.Select value={moneda1} name="moneda-1" id="moneda-1" onChange={(e) => setMoneda1(e.target.value)}>
                                {monedas.map((moneda) => (
                                    <option value={moneda}>{moneda}</option>
                                ))}
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>A:</Form.Label>
                            <Form.Select value={moneda2} name="moneda-2" id="moneda-2" onChange={(e) => setMoneda2(e.target.value)}>
                                {monedas.map((moneda) => (
                                    <option value={moneda}>{moneda}</option>
                                ))}
                            </Form.Select>
                        </Form.Group>

                    </div>

                    <Form.Group className="mb-3">
                        <Form.Label>Cantidad</Form.Label>
                        <Form.Control type="text" className='mb-3' value={monto} onChange={(e) => setMonto(e.target.value)} />
                        <p className=""> {moneda2}: {result}</p>
                    </Form.Group>

                    <Form.Group>
                        <Button onClick={handleConvert}>Convertir</Button>
                    </Form.Group>
                </div>
            </div>

            {/* Footer */}
            <Footer/>

        </>
    );
}