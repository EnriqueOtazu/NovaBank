// // pages/transferencias.js

// // import { getStaticPaths, getStaticProps } from 'next';
// import { data } from 'autoprefixer';
// import TableUsuarios from '../components/TableUsuarios';
// const BasiqAPIKey = 'YzU4MzQ0ZjktNjNkZS00MzYzLWJlMzEtZjY5ODRhNWU3ZDZiOjAwM2JhNWQxLTFmMjAtNDAwNy1iOTk5LWM2ZDQ2ZjMyNmFhOA==';
// const basiqApiUrl = 'https://api.basiq.io/reference/introduction'; // Ajusta la URL según la API de Basiq

// // export async function getStaticPaths() {
// //   // Realiza una solicitud a la API de Basiq para obtener una lista de cuentas bancarias
// //   const response = await fetch(basiqApiUrl, {
// //     headers: {
// //       Authorization: `Bearer ${BasiqAPIKey}`,
// //     },
// //   });
// //   const data = await response.json();

// //   // Genera rutas estáticas para cada cuenta bancaria
// //   const paths = data.map((account) => ({
// //     params: { id: account.id.toString() },
// //   }));

// //   return { paths, fallback: false };
// // }
// const accountsData = [
//     { id: 1, nombre: 'Cuenta de Ahorro', saldo: 1000 },
//     { id: 2, nombre: 'Cuenta Corriente', saldo: 2500 },
//     { id: 3, nombre: 'Cuenta de Inversiones', saldo: 50000 },
//   ];

//   export async function getStaticPaths() {
//     // Genera las rutas estáticas para cada cuenta bancaria
//     const paths = accountsData.map((account) => ({
//       params: { id: account.id.toString() },
//     }));
//     return { paths, fallback: false };
// }

// // export async function getStaticProps({ params }) {
// //   // Aquí puedes implementar la lógica para obtener los detalles de la cuenta bancaria
// //   // utilizando el ID proporcionado en los parámetros de la ruta
// //   const alias = await
// //         fetchPostById(params.id);

// //         return {
// //             props: 
// //                 { alias },// Proporciona los detalles de la cuenta bancaria
            
// //         };
// //         }
// export async function getStaticProps({ params }) {
//     // Obtiene los detalles de la cuenta bancaria en función del parámetro de ruta 'id'
//     const accountId = parseInt(params.id);
//     const account = accountsData.find((acc) => acc.id === accountId);
  
//     return {
//       props: {
//         account,
//       },
//     };
//   }
// function Transferencias({ accounts }) {
//     <div>
//       <h1>Lista de Cuentas Bancarias Disponibles</h1>
//       <ul>
//         {accounts.map((account) => (
//           <li key={account.id}>
//             <Link href={`/transferencias/${account.id}`}>
//               <a>{account.nombre}</a>
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>;
// }

// export default Transferencias;
// // pages/transferencias.js

// import Link from 'next/link';

// // Simula una lista de cuentas bancarias disponibles (esto puede provenir de tu fuente de datos real)
// const accountsData = [
//   { id: 1, nombre: 'Cuenta de Ahorro', saldo: 1000 },
//   { id: 2, nombre: 'Cuenta Corriente', saldo: 2500 },
//   { id: 3, nombre: 'Cuenta de Inversiones', saldo: 50000 },
// ];

// function Transferencias({ accounts }) {
//   return (
//     <div>
//       <h1>Lista de Cuentas Bancarias Disponibles</h1>
//       <ul>
//         {accounts.map((account) => (
//           <li key={account.id}>
//             <Link href={`/transferencias/${account.id}`}>
//               <a>{account.nombre}</a>
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export async function getStaticPaths() {
//   // Genera las rutas estáticas para cada cuenta bancaria
//   const paths = accountsData.map((account) => ({
//     params: { id: account.id.toString() },
//   }));

//   return { paths, fallback: false };
// }

// export async function getStaticProps({ params }) {
//   // Obtiene los detalles de la cuenta bancaria en función del parámetro de ruta 'id'
//   const accountId = parseInt(params.id);
//   const account = accountsData.find((acc) => acc.id === accountId);

//   return {
//     props: {
//       account,
//     },
//   };
// }

// export default Transferencias;
// pages/transferencias.js

import Link from 'next/link';
import accountsData from './transferencias/accountsData';
  

function Transferencias() {
  return (
    <div>
      <h1>Lista de Cuentas Bancarias Disponibles</h1>
      <ul>
        {accountsData.map((account) => (
          <li key={account.id}>
            <Link href={`/transferencias/${account.id}}`}> 
            {/* <Link href={`/transferencias/${account.id}/${encodeURIComponent(account.nombreCompleto)}`}>          */}
                 {account.nombreCompleto}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Transferencias;
