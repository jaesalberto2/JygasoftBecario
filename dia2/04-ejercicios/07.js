function precioCompleto(precio, impuesto) {
    let total = precio + (precio * impuesto);
    return total;
}   
let resultado = precioCompleto(100, 0.15);
console.log("El precio completo es: " + resultado);
