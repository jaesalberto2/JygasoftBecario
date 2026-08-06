function suma(a, b) {
    console.log(arguments);
    return a + b;
}

let resultado = suma(5, 3);
console.log("El resultado de la suma es: " + resultado);