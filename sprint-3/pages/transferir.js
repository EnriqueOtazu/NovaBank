import { useState } from 'react';
import Link from 'next/link';
import accountsData from './transferencias/accountsData';

function Transferir({ accountsData }) {
  const [cuentaOrigen, setCuentaOrigen] = useState('');
  const [cuentaDestino, setCuentaDestino] = useState('');
  const [monto, setMonto] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // implementar la lógica de transferencia en tiempo real
    // realizar validaciones y actualizar los saldos de las accountsData involucradas en la transferencia
  
    try {
      // Supongamos que tienes los siguientes datos necesarios para la transferencia:
       cuentaOrigen = 'cuenta1'; 
       cuentaDestino = 'cuenta2'; 
       montoTransferencia = 100; // Monto a transferir, validar si es mayor al monto de la cuenta
  
      // Realiza la lógica de transferencia aquí, actualizando los saldos en tiempo real en tu fuente de datos
      // Por ejemplo, si estás utilizando una base de datos, actualiza los saldos de las accountsData involucradas

      const cuentaOrigenIndex = accountsData.findIndex((cuenta) => cuenta.id === cuentaOrigen);
      const cuentaDestinoIndex = accountsData.findIndex((cuenta) => cuenta.id === cuentaDestino);
  
      if (cuentaOrigenIndex !== -1 && cuentaDestinoIndex !== -1) {
        // Realiza la transferencia
        accountsData[cuentaOrigenIndex].saldo -= montoTransferencia;
        accountsData[cuentaDestinoIndex].saldo += montoTransferencia;
  
        // Actualiza la base de datos o fuente de datos en tiempo real con los nuevos saldos
        // Por ejemplo, si estás utilizando Mongoose (para MongoDB):
        // await Cuenta.updateOne({ _id: accountsData[cuentaOrigenIndex]._id }, { saldo: accountsData[cuentaOrigenIndex].saldo });
        // await Cuenta.updateOne({ _id: accountsData[cuentaDestinoIndex]._id }, { saldo: accountsData[cuentaDestinoIndex].saldo });
  
        // Actualiza el mensaje con el resultado de la transferencia
        setMensaje('Transferencia realizada con éxito');
      } else {
        setMensaje('No se encontraron las accountsData de origen y destino.');
      }
    } catch (error) {
      // Manejo de errores en caso de que falle la transferencia
      console.error('Error al realizar la transferencia:', error);
      setMensaje('Error al realizar la transferencia.');
    }
  };
  

  return (
    <div>
      <h1>Transferencia de Fondos en Tiempo Real</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Cuenta de origen:
          <select value={cuentaOrigen} onChange={(e) => setCuentaOrigen(e.target.value)}>
            {accountsData.map((cuenta) => (
              <option key={cuenta.id} value={cuenta.id}>
                {cuenta.nombreCompleto}
              </option>
            ))}
          </select>
        </label>
        <br />
        <label>
          Cuenta de destino:
          <input
            type="text"
            value={cuentaDestino}
            onChange={(e) => setCuentaDestino(e.target.value)}
          />
        </label>
        <br />
        <label>
          Monto:
          <input
            type="number"
            value={monto}
            onChange={(e) => setMonto(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Realizar Transferencia</button>
      </form>
      {mensaje && <p>{mensaje}</p>}
    </div>
  );
}

export async function getServerSideProps() {
  try {
    // Conecta a tu fuente de datos en tiempo real (por ejemplo, una base de datos)
    // Aquí puedes utilizar una biblioteca de acceso a bases de datos como Mongoose (para MongoDB), Sequelize (para SQL), o cualquier otra que se adapte a tu stack tecnológico.
    // Supongamos que estás utilizando una base de datos MongoDB como ejemplo.

    // Importa el modelo de accountsData (asegúrate de haber definido un modelo en tu aplicación)
    // Por ejemplo, si estás utilizando Mongoose:
    // import Cuenta from '../../models/cuenta';

    // Conecta a la base de datos (esto puede variar según la biblioteca de acceso a bases de datos que estés utilizando)
    // await mongoose.connect('mongodb://localhost:27017/tu-base-de-datos', { useNewUrlParser: true, useUnifiedTopology: true });

    // Consulta las accountsData desde la base de datos
    // const accountsData = await Cuenta.find();

    // Desconecta de la base de datos cuando hayas terminado de obtener los datos
    // mongoose.disconnect();

    // Supongamos que accountsData es un arreglo de objetos con los datos de las accountsData

    return {
      props: {
        accountsData,
      },
    };
  } catch (error) {
    // Manejo de errores en caso de que falle la obtención de datos
    console.error('Error al obtener datos de accountsData:', error);

    return {
      props: {
        accountsData: [], // Puedes devolver un arreglo vacío o un mensaje de error en caso de fallo
        error: 'No se pudieron obtener los datos de accountsData en este momento.',
      },
    };
  }
}


export default Transferir;


// // pages/transferir.js

// // import { getServerSideProps } from 'next';

// const BasiqAPIKey = 'YzU4MzQ0ZjktNjNkZS00MzYzLWJlMzEtZjY5ODRhNWU3ZDZiOjAwM2JhNWQxLTFmMjAtNDAwNy1iOTk5LWM2ZDQ2ZjMyNmFhOA';
// const basiqApiUrl = 'https://api.basiq.io/reference/transactions'; // Ajusta la URL según la API de Basiq

// export async function getServerSideProps(context) {
//   // Implementa la lógica para obtener los datos necesarios para realizar la transferencia
//   // utilizando la información proporcionada en el contexto, como los parámetros de la solicitud

//   return {
//     props: {
//       // Proporciona los datos necesarios para realizar la transferencia
//     },
//   };
// }

// function Transferir({ transferData }) {
//   // Renderiza la página de transferencia en tiempo real y muestra los resultados actualizados
// }

// export default Transferir;
