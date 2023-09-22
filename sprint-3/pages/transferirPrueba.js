import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';


// Cuenta de origen fija
const cuentaOrigen =  {
  "id": 4,
  "nombreCompleto": "usuario Lopez",
  "aliasBancario": "usuario.prueba",
  "cbu": "1677701234565680123456",
  "nombreBanco": "NovaBank",
  "saldo" : 999.980
}

function TransferForm({ onSubmit }) {
  const [monto, setMonto] = useState('');
  const [mensajeError, setMensajeError] = useState('');
  
  const router = useRouter();
  const { cuenta } = router.query;
  console.log(cuenta);
  const cuentaDestino = JSON.parse(cuenta);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const montoFloat = parseFloat(monto);
      if (isNaN(montoFloat) || montoFloat <= 0) {
        throw new Error('El monto ingresado no es válido.');
      }
      if (montoFloat > cuentaOrigen.saldo) {
        throw new Error('Saldo insuficiente para realizar la transferencia.');
      }
      const confirmarTransferencia = window.confirm(
        `¿Deseas transferir $${montoFloat.toFixed(2)} a ${cuentaDestino.aliasBancario}?`
      );

      if (!confirmarTransferencia) {
        return; // El usuario canceló la transferencia
      }

      cuentaOrigen.saldo -= montoFloat;
      cuentaDestino.saldo += montoFloat;

      
      // Devolver un mensaje de éxito
      onSubmit('Transferencia realizada con éxito');
    } catch (error) {
      setMensajeError(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Monto a transferir:</label>
        <input
          type="number"
          step="0.01"
          value={monto}
          onChange={(e) => setMonto(e.target.value)}
          required
        />
      </div>
      {mensajeError && <p className="error-message">{mensajeError}</p>}
      <button type="submit">Realizar Transferencia</button>
    </form>
  );
}

function TransferirPage({ cuentaDestino }) {
  const realizarTransferencia = (mensaje) => {
    // Lógica para mostrar un mensaje de éxito o redirigir a otra página
    alert(mensaje); 
  };

  return (
    <div>
      <h1>Realizar Transferencia</h1>
      <TransferForm cuentaDestino={cuentaDestino} onSubmit={realizarTransferencia} />
      <Link href="/transferencias">
        Volver a la lista de cuentas
      </Link>
      <tr></tr>
      <Link href="/Menu">Volver al inicio</Link>
      
    </div>
  );
}

export default TransferirPage;
