// Estructuras de control -> Condicionales

let condicion = 10 == '10';

if(condicion){
    console.log('Condición verdadera');
}else{
    console.log('Condición falsa');
}

/* Operadores de comapración númerico */

if (10 > 20) {
    console.log('Afirmativo');
}else{
    console.log('Negativo');
}


//Operador ternario
let resultado = 10 < 20 ? 'Afirmativo' : 'Negativo';
console.log(resultado);


//if else if

let numero = 10;
if(numero > 10){
    console.log('afirmativo');
}else if(numero > 5 ){ //realiza una segunda comparación
    console.log('si es mayor');
}else{  
    console.log('negativo');
}

if (numero > 10 && numero > 5) {
    console.log('afirmativo');
}else{
    console.log('negativo');
}

