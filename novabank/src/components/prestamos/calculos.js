export function calcularTotal(cantidad, plazo){
    const cantidadInt = parseInt(cantidad);
    const plazoInt = parseInt(plazo);

    let totalCantidad;
    if(cantidadInt <= 1000){
        totalCantidad = cantidadInt * 0.25;
    }else if(cantidadInt > 1000 && cantidadInt <= 5000){
        totalCantidad = cantidadInt * 0.20;
    }else if(cantidadInt > 5000 && cantidadInt <= 10000){
        totalCantidad = cantidadInt * 0.15;
    }else {
        totalCantidad = cantidadInt * 0.10;
    }
    
    console.log(totalCantidad);
}