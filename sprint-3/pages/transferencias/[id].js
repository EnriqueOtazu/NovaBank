

import { useRouter } from 'next/router';
import accountsData from './accountsData';
// Simula una lista de cuentas bancarias disponibles (esto puede provenir de tu fuente de datos real)

function AccountDetails({ account, nombreCompleto }) {
  const router = useRouter();

  // Verifica si la página se está generando en el servidor
  if (router.isFallback) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h1>Detalles de la Cuenta Bancaria</h1>
      <p>Nombre: {nombreCompleto}</p>
      <p>Saldo: ${account.saldo}</p>
      {/* Otros detalles de la cuenta */}
    </div>
  );
}

export async function getStaticPaths() {
  // Genera las rutas estáticas para cada cuenta bancaria
  const paths = accountsData.map((account) => ({
    params: { id: account.id.toString() },
  }));

  return { paths, fallback: true }; // Cambiado a true para permitir rutas dinámicas
}

export async function getStaticProps({ params }) {
  // Obtiene los detalles de la cuenta bancaria en función del parámetro de ruta 'id'
  const accountId = parseInt(params.id);
  const account = accountsData.find((acc) => acc.id === accountId);

  // Verifica si existe account y nombreCompleto en el objeto antes de retornarlos
  if (account && account.nombreCompleto) {
    return {
      props: {
        account,
        nombreCompleto: account.nombreCompleto, // Obtenido de la cuenta bancaria
      },
    };
  } else {
    // Si no se encuentra la cuenta o el nombreCompleto, puedes manejarlo de alguna manera (por ejemplo, redirigiendo a una página de error)
    return {
      notFound: true, // Otra opción podría ser: redirect: { destination: '/error', permanent: false }
    };
  }
}

export default AccountDetails;
