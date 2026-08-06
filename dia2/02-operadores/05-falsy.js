//shor-circuit

//falso
//false
//0
//""
//null
//undefined
//NaN

let nombre = "Alberto";
let username = nombre || 'Anonimo  ';
console.log(username);

function fn1() {
    console.log("soy funcion fn1");
    return true;
}

function fn2() {
    console.log("soy funcion fn2");
    return false;
}

let x = fn1() && fn2();