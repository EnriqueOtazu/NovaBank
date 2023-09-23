import { useState } from "react";
import accountsData from "@/pages/transferencias/accountsData";

function TransferForm({ cuentas, onSubmit }) {
  const [alias, setAlias] = useState('');
  const [monto, setMonto] = useState('');
  const [cbu, setCBU] = useState('');
  const [showCBUInput, setShowCBUInput] = useState(false);
  const [mensajeError, setMensajeError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validar que se haya seleccionado una cuenta o se haya ingresado un CBU
    if (!alias && !cbu) {
      setMensajeError('Debes seleccionar una cuenta o ingresar un CBU.');
      return;
    }

    // Buscar la cuenta destino mediante el alias o el CBU
    const cuentaDestino = alias ? buscarCuentaMedianteAlias(alias) : null;

    try {
      // Validar que el monto sea un número válido
      const montoFloat = parseFloat(monto);
      if (isNaN(montoFloat) || montoFloat <= 0) {
        throw new Error('El monto ingresado no es válido.');
      }

      // Realizar la transferencia
      if (cuentaDestino) {
        // Lógica de transferencia si se selecciona una cuenta existente
        console.log(`Transferir $${monto} a ${cuentaDestino.aliasBancario}`);
        // Actualizar los saldos y realizar otras acciones necesarias
      } else {
        // Lógica de transferencia si se ingresa un CBU
        console.log(`Transferir $${monto} al CBU: ${cbu}`);
        // Realizar transferencia a CBU y actualizar los saldos
      }

      // Reiniciar el formulario y mostrar un mensaje de éxito
      setAlias('');
      setMonto('');
      setCBU('');
      setMensajeError('');
      setShowCBUInput(false);
      onSubmit();
    } catch (error) {
      setMensajeError(error.message);
    }
  };

  const handleAliasChange = (e) => {
    const selectedAlias = e.target.value;
    setAlias(selectedAlias);
    if (selectedAlias === 'otro') {
      setShowCBUInput(true);
    } else {
      setShowCBUInput(false);
      setCBU('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Selecciona la cuenta destino o ingresa un CBU:</label>
        <select onChange={handleAliasChange} value={alias} required>
          <option value="" disabled>
            Selecciona una cuenta o ingresa un CBU
          </option>
          {cuentas.map((cuenta) => (
            <option key={cuenta.id} value={cuenta.aliasBancario}>
              {cuenta.aliasBancario}
            </option>
          ))}
          <option value="otro">Otro (Ingresar CBU)</option>
        </select>
      </div>
      {showCBUInput && (
        <div>
          <label>Ingresa el CBU:</label>
          <input
            type="text"
            value={cbu}
            onChange={(e) => setCBU(e.target.value)}
            required
          />
        </div>
      )}
      <div>
        <label>Monto a transferir: </label>
        <input
          type="number"
          step="0.01"
          value={monto}
          onChange={(e) => setMonto(e.target.value)}
          required
        />
      </div>
      {mensajeError && <p className="error-message">{mensajeError}</p>}
      <button  type="submit">Realizar Transferencia</button>
    </form>
  );
}

export default TransferForm;