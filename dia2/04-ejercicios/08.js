/*
crear un algoritmo que tome un arrray de objetos y devuelva un array de pares */

let array = [
    {nombre: "Juan", edad: 25},
    {nombre: "María", edad: 30},
    {nombre: "Pedro", edad: 20},
    {nombre: "Ana", edad: 35},
];


function toPairs(arr) {
    let pares = [];
    for (let i = 0; i < arr.length; i++) {
        let obj = arr[i];
        let par = [obj.nombre, obj.edad];
        pares.push(par);
    }
    return pares;
}