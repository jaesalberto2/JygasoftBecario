/*crear array de longitud N y que sus elementos dean numeros de 1 hasta N
 */
function crearArray(n) {
    let arr = [];
    for (let i = 1; i <= n; i++) {
        arr.push(i);
    }
    return arr;
}

let array = crearArray(5);

console.log(array);
