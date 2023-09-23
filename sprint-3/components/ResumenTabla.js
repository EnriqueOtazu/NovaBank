import resumenData from "@/pages/tarjetas/resumenData";
function ResumenTabla(props) {
    const { realizarPago } = props;

    return (
      <div>
        <h2>Resumen de Pagos</h2>
        <table>
          <thead>
            <tr>
              <th>Fecha de Pago</th>
              <th>Detalle de la Compra</th>
              <th>Monto</th>
            </tr>
          </thead>
          <tbody>
            {resumenData.map((pago, index) => (
              <tr key={index}>
                <td>{pago.fechaPago}</td>
                <td>{pago.detalleCompra}</td>
                <td>{pago.monto}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button onSubmit={realizarPago}>Realizar Pago</button>
      </div>
    );
}
export default ResumenTabla;