import { useRouter } from 'next/router';
import tarjetasData from './tarjetasData'; 
import { useState } from 'react';
import resumenData from './resumenData';
import ResumenTabla from '@/components/ResumenTabla';
import Image from 'next/image';


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
        <h1 style={{}}>Tarjeta de Crédito</h1>
      <div className="credit-card" style={{ boxShadow: '-4px 4px 12px 0px rgba(0,0,0,0.5)' }}>
      <Image src="/public/NovaBank.png" alt="Tarjeta de Crédito" className="credit-card-image" width={300} height={200}/>
        <p className="credit-card-detail"><b>Número de Tarjeta:</b> {tarjeta.numeroTarjeta}</p>
        <p className="credit-card-detail"><b>Fecha de Creación:</b> {tarjeta.fechaCreacion}</p>
        <p className="credit-card-detail"><b>Fecha de Vencimiento:</b> {tarjeta.fechaVencimiento}</p>
        <p className="credit-card-detail"><b>Código de Seguridad:</b> {tarjeta.codigoSeguridad}</p>
        <p className="credit-card-detail"><b>Nombre del Titular:</b> {tarjeta.nombreTitular}</p>
    </div>

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
