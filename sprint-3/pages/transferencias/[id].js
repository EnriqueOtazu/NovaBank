import { useRouter } from 'next/router';
import accountsData from './accountsData';
import Link from 'next/link';
import TransferForm from '@/components/TransferForm';

function AccountDetails({ account }) {
  const router = useRouter();

  // Verifica si la página se está generando en el servidor
  if (router.isFallback) {
    return <div>Cargando...</div>;
  }

  return (
    <div className='container w-50 mt-5 mb-5 justify-content-center p-5 rounded shadow' style={{ boxShadow: '-4px 4px 12px 0px rgba(0,0,0,0.5)' }}>
      <h1>Detalles de la Cuenta Bancaria</h1>
      <p><b>Nombre:</b> {account.nombreCompleto}</p>
      <p><b>Alias:</b> {account.aliasBancario}</p>
      <p><b>CBU:</b> {account.cbu}</p>
      <p><b>Banco de Origen:</b> {account.nombreBanco}</p>
      <Link href={`/transferir?cuenta=${JSON.stringify(account)}`} className="btn btn-primary" style={{ fontSize: '20px' }}>
        Realizar una Transferencia
      </Link>
    </div>
  );
}

export async function getStaticPaths() {
  // Genera las rutas estáticas para cada cuenta bancaria
  const paths = accountsData.map((account) => ({
    params: { id: account.id.toString() },
  }));

  return { paths, fallback: true }; 
}

export async function getStaticProps({ params }) {
  // Obtiene los detalles de la cuenta bancaria en función del parámetro de ruta 'id'
  const accountId = parseInt(params.id);
  const account = accountsData.find((acc) => acc.id === accountId);

  // Verifica si existe la cuenta en el objeto antes de retornarla
  if (!account) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      account,
    },
  };
}

export default AccountDetails;
