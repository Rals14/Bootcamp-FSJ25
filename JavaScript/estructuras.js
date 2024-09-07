// Estructuras de control -> Condicionales

let condicion = 10 == '10';

if (condicion) {
    console.log('Condición verdadera');
} else {
    console.log('Condición falsa');
}

/* Operadores de comapración númerico */

if (10 > 20) {
    console.log('Afirmativo');
} else {
    console.log('Negativo');
}


//Operador ternario
let resultado = 10 < 20 ? 'Afirmativo' : 'Negativo';
console.log(resultado);


//if else if

// let numero = 10;
if (numero > 10) {
    console.log('afirmativo');
} else if (numero > 5) { //realiza una segunda comparación
    console.log('si es mayor');
} else {
    console.log('negativo');
}

if (numero > 10 && numero > 5) {
    console.log('afirmativo');
} else {
    console.log('negativo');
}


let cadena = " jairo@gmail.com "

if ("jairo@gmail.com" === cadena.trim()) {
    console.log("Es true");
} else {
    console.log("Es falso");
}


// Estructuras repetitivas o Bucles

//WHILE -> MIENTRAS
//WHILE (CONDICION DE CORTE) { CODIGO A EJECUTAR}
while (numero < 10 && numero > 2) {
    console.log(numero);
    numero++;
}

// DO WHILE
// HACER MIENTRAS

do {
    console.log(numero);
    numero++;
} while (numero < 10 && numero >= 2)


let numero = 1;
//FOR 
//for(INIALIZACION ; CONDICION DE CORTE ; INCREMENTO/DECREMENTO ){ CODIGO A EJECUTAR }
for (let numero = 1; numero < 10; numero++) { //10
    console.log(numero);
}

// FASE 1 = INICIALIZACION + CONDICION DE CORTE + EJECUTAR + INCREMENTO/DECREMENTO;
// FASE 2 = CONDICION DE CORTE + EJECUTAR + INCREMENTO/DECREMENTO;

// Estructura de dato COMPLEJA
// ESTRUCTURA DE DATO SIMPLE let variable1 = "Erick";  

//ARRAY
let cohorteFSJ25 = ["Erick","Isis","Guille","Bryan","Eduardo","Karla","Claudia","Jared",23.5,true];
//console.log(variableCompleja);
console.log(cohorteFSJ25);

//Metodos de arrays
//Agregar valores al final de un array
let variableCompleja = [];
variableCompleja.push("Jairo");
variableCompleja.push(26);
variableCompleja.push("Guille");
console.log(variableCompleja);

//Eliminar el valor al final de un array
let datoEliminado = variableCompleja.pop()
console.log(variableCompleja);
console.log(datoEliminado);

//Agregar un valor al principio de un array
variableCompleja.unshift("Jorge");
console.log(variableCompleja);
 
//Eliminar el valor del principio de un array
let datoEliminadoPrincipio= variableCompleja.shift();
console.log(variableCompleja);
console.log(datoEliminadoPrincipio);

//PROPIEDAD DE ARRAY
//Averiguar el largo de un array
console.log("--- LARGO DEL ARRAY ---");
let largor =  variableCompleja.length;
console.log(largor);


