/*array de objetos a partir de un array de pares 
 */

function toCollections(arr) {
    let colecciones = [];
    for (let i = 0; i < arr.length; i++) {
        let par = arr[i];
        let obj = {nombre: par[0], edad: par[1]};
        colecciones.push(obj);
    }
    return colecciones;
}

let array = [
    ["Juan", 25],
    ["María", 30],
    ["Pedro", 20],
    ["Ana", 35],
];
let colecciones = toCollections(array);
console.log(colecciones);
