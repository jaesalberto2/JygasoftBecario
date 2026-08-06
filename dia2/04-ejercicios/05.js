function mayorMenor(a, b) {
    if(a > b){
        return a + " es mayor que " + b;
    } else if(a < b){
        return a + " es menor que " + b;
    } else{
        return a + " es igual que " + b;
    }
}

let resultado = mayorMenor(5, 3);
console.log(resultado);