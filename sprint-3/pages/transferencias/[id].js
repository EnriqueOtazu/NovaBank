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
    <div>
      <h1>Detalles de la Cuenta Bancaria</h1>
      <p>Nombre: {account.nombreCompleto}</p>
      <p>Alias: {account.aliasBancario}</p>
      <p>CBU: {account.cbu}</p>
      <p>Banco de Origen: {account.nombreBanco}</p>
      <Link href={`/transferir?cuenta=${JSON.stringify(account)}`}>
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
