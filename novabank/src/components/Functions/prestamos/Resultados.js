import React from 'react'

export const Resultados = ({total, cantidad, plazo}) => {
  return (
    <div className='resultado m-lg-3 bg-light' style={{boxShadow: '-4px 4px 12px 0px rgba(0,0,0,0.5)'}}>
        <div className='p-3'>
            <h2>Cotización:</h2>
            <p>La cantidad solicitada es: ${cantidad} </p>
            <p>a pagar en: ${plazo} meses</p>
            <p>Su pago mensual es de: ${(total / plazo).toFixed(2)} </p>
            <p>Total a pagar: ${total} </p>
        </div>
    </div>
  );
}
export default Resultados;