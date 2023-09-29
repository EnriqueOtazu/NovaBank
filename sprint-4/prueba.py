import argparse
import csv
from datetime import datetime
from collections import defaultdict

# Función para cargar los datos del archivo CSV
def cargar_datos(archivo_csv):
    try:
        with open(archivo_csv, 'r', newline='', encoding='utf-8') as file:
            return list(csv.DictReader(file))
    except FileNotFoundError:
        print(f'Error: El archivo CSV {archivo_csv} no existe.')
        exit(1)
    except Exception as e:
        print(f'Error al cargar el archivo CSV: {str(e)}')
        exit(1)

# Función para validar y convertir una fecha en formato YYYY-MM-DD a timestamp
def validar_y_convertir_fecha(fecha_str):
    try:
        fecha = datetime.strptime(fecha_str, '%Y-%m-%d')
        return int(fecha.timestamp())
    except ValueError:
        print(f'Error: Fecha no válida, debe estar en formato YYYY-MM-DD.')
        exit(1)

# Función para procesar y filtrar los cheques
def procesar_cheques(cheques, dni, tipo_cheque, estado, fecha_desde, fecha_hasta):
    resultado = []

    # Crear un diccionario para rastrear cheques duplicados por cuenta
    cuentas = defaultdict(list)

    for cheque in cheques:
        if cheque['DNI'] == dni:
            if tipo_cheque == 'EMITIDO' and cheque['NumeroCuentaOrigen'] not in cuentas[cheque['DNI']]:
                cuentas[cheque['DNI']].append(cheque['NumeroCuentaOrigen'])
                if not estado or cheque['Estado'] == estado:
                    fecha_pago = int(cheque['FechaPago'])
                    if (not fecha_desde or fecha_desde <= fecha_pago) and (not fecha_hasta or fecha_hasta >= fecha_pago):
                        resultado.append(cheque)
            elif tipo_cheque == 'DEPOSITADO' and cheque['NumeroCuentaDestino'] not in cuentas[cheque['DNI']]:
                cuentas[cheque['DNI']].append(cheque['NumeroCuentaDestino'])
                if not estado or cheque['Estado'] == estado:
                    fecha_origen = int(cheque['FechaOrigen'])
                    if (not fecha_desde or fecha_desde <= fecha_origen) and (not fecha_hasta or fecha_hasta >= fecha_origen):
                        resultado.append(cheque)

    return resultado

# Función para exportar los resultados a un archivo CSV
def exportar_a_csv(cheques, dni):
    timestamp_actual = int(datetime.now().timestamp())
    nombre_archivo = f'{dni}_{timestamp_actual}.csv'

    with open(nombre_archivo, 'w', newline='', encoding='utf-8') as file:
        campos = ['NroCheque', 'CodigoBanco', 'CodigoScurusal', 'NumeroCuentaOrigen', 'NumeroCuentaDestino', 'Valor', 'FechaOrigen', 'FechaPago', 'DNI', 'Estado']
        writer = csv.DictWriter(file, fieldnames=campos)
        writer.writeheader()
        writer.writerows(cheques)

    print(f'Los resultados se han exportado a {nombre_archivo}.')

def main():
    parser = argparse.ArgumentParser(description='Consulta y filtra cheques bancarios')
    parser.add_argument('archivo_csv', type=str, help='Nombre del archivo CSV')
    parser.add_argument('dni', type=str, help='DNI del cliente')
    parser.add_argument('salida', choices=['PANTALLA', 'CSV'], help='Formato de salida')
    parser.add_argument('tipo_cheque', choices=['EMITIDO', 'DEPOSITADO'], help='Tipo de cheque')
    parser.add_argument('--estado', type=str, help='Estado del cheque (opcional)')
    parser.add_argument('--fecha-desde', type=validar_y_convertir_fecha, help='Fecha de inicio del rango (opcional)')
    parser.add_argument('--fecha-hasta', type=validar_y_convertir_fecha, help='Fecha de fin del rango (opcional)')

    args = parser.parse_args()

    cheques = cargar_datos(args.archivo_csv)
    resultado = procesar_cheques(cheques, args.dni, args.tipo_cheque, args.estado, args.fecha_desde, args.fecha_hasta)

    if args.salida == 'PANTALLA':
        for cheque in resultado:
            print(cheque)
    elif args.salida == 'CSV':
        exportar_a_csv(resultado, args.dni)

if __name__ == '__main__':
    main()
