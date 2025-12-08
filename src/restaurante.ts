class Restaurante {

    calcularTotal(precio: number, cantidad : number): number {

    return precio * cantidad;
    }

    aplicarDescuento(total: number, descuento: number): number {

        return total - (total * descuento / 100);
    }

    calcularPropina(total: number, porcentaje: number): number {
    
        return total *(porcentaje / 100);
    }

}

const restaurante = new Restaurante ();

const totalProducto = restaurante.calcularTotal (50 , 3);
console.log ("Total del producto:" , totalProducto);

const totalConDescuento = restaurante.aplicarDescuento (totalProducto , 10);
console.log ("Total con descuento:" , totalConDescuento);

const propina = restaurante.calcularPropina (totalConDescuento , 15);
console.log ("Propina:" , propina);