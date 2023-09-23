import { useRouter } from 'next/router';
import tarjetasData from './tarjetasData'; 
import { useState } from 'react';
import resumenData from './resumenData';
import ResumenTabla from '@/components/ResumenTabla';

function TarjetaDetail({ tarjeta }) {
  const router = useRouter();
  const [mostrarResumen, setMostrarResumen] = useState(false);

  const realizarPago = async () => {
    try {
    //   const response = await fetch('/api/realizarPago', {
    //     method: 'POST',
    //     body: JSON.stringify({ tarjetaId: tarjeta.id, monto: 100 }), // Ajusta los datos que necesites enviar
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //   });

  
      if (response.ok) {
        console.log('Pago realizado con éxito');
        router.reload();
      } else {
        console.error('Error al procesar el pago:', response.statusText);
      }
    } catch (error) {
      console.error('Error al realizar el pago:', error);
    }
  };
  

  const solicitarAumentoLimite = async () => {
    try {
      alert('Solicitud enviada');
        router.reload();
    } catch (error) {
      console.error('Error al solicitar aumento de límite:', error);
    }
    if (!tarjeta) {
        return <div>Tarjeta no encontrada</div>;
      }
  };
  

  const obtenerResumen = () => {
    setMostrarResumen(true);
  };

  return (
    <div>
      <h1>Tarjeta de Crédito</h1>
      <p>Número de Tarjeta: {tarjeta.numeroTarjeta}</p>
      <p>Fecha de Creación: {tarjeta.fechaCreacion}</p>
      <p>Fecha de Vencimiento: {tarjeta.fechaVencimiento}</p>
      <p>Código de Seguridad: {tarjeta.codigoSeguridad}</p>
      <p>Nombre del Titular: {tarjeta.nombreTitular}</p>
      <button onClick={solicitarAumentoLimite}>Solicitar Aumento de Límite</button>
      <button onClick={obtenerResumen}>Obtener Resumen</button>
      {mostrarResumen && <ResumenTabla realizarPago={realizarPago} />}
    </div>
  );
}

export async function getStaticPaths() {
    const paths = tarjetasData.map((tarjeta) => ({
      params: { id: tarjeta.id.toString() },
    }));
  
    return { paths, fallback: true };
  }
  
  export async function getStaticProps({ params }) {
    const tarjetaId = parseInt(params.id);
    const tarjeta = tarjetasData.find((t) => t.id === tarjetaId);
  
    return {
      props: {
        tarjeta,
      },
    };
  }
export default TarjetaDetail;
