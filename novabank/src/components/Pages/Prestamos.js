import React, { useState } from 'react';
import Header from './header/Header';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { calcularTotal } from '../Functions/prestamos/calculos';
import {Resultados} from '../Functions/prestamos/Resultados';
import { Mensaje } from '../Functions/prestamos/Mensaje';
import Footer from './Footer/Footer';


export const Prestamos = () => {

  const [cantidad, setCantidad] = useState(0);
  const [plazo, setPlazo] = useState("");
  const [error, setError] = useState(false);
  const [total, setTotal] = useState(0);

  const calcularPrestamos = e =>{
    e.preventDefault();
    if(cantidad === 0 || plazo === ""){
        setError(true);
        return;
    }
    setError(false);

    const total = calcularTotal(cantidad,plazo);
    setTotal(total);
  }

  let componente;
  if (total === 0){
    componente = <Mensaje/>
  }else{
    componente = <Resultados total={total} cantidad={cantidad} plazo={plazo} />
  }

  return (
    <><Header />
      <h1 className='p-4'>Préstamos personales</h1>
      <Form className='p-4' onSubmit={calcularPrestamos}>
        <Form.Group>
          <Form.Label>Cantidad Prestamo</Form.Label>
          <InputGroup className="mb-3">
            <InputGroup.Text>$</InputGroup.Text>
            <Form.Control aria-label="Amount (to the nearest dollar)" onChange={(e) => setCantidad(e.target.value)}/>
            <InputGroup.Text>.00</InputGroup.Text>
          </InputGroup>
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Plazo para pagar</Form.Label>
          <Form.Select aria-label="Default select example"  onChange={(e) => setPlazo(e.target.value)}>
            <option>Seleccionar</option>
            <option value="3">3 meses</option>
            <option value="6">6 meses</option>
            <option value="12">12 meses</option>
            <option value="24">24 meses</option>
          </Form.Select>
        </Form.Group>
        <Button variant="primary" type="submit">
          Calcular
        </Button>
      </Form>
      {(error) ? <p className='error'>Todos los campos son obligatorios...</p> : "" }

      <div className='mensaje'>
        {componente}
      </div>

      {/* Footer */}
      <Footer/>
    </>
  );
}

export default Prestamos;