import React from 'react';
import tarjetasData from '../components/tarjetas/tarjetasData.js';
import Link from 'next/link';

function TarjetasPage() {
  return (
    <div>
      <h1>Lista de Tarjetas de Crédito</h1>
      <ul>
        {tarjetasData.map((tarjeta) => (
          <li key={tarjeta.id}>
            <Link href={`/tarjetas/${tarjeta.id}`}>
              {tarjeta.numeroTarjeta}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TarjetasPage;
