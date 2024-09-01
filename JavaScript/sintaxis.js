console.log('funciona');

// Operadores matemáticos

let suma = 2 + 2;

let resta = 4 - 2;

let multiplicacion = 1354 * 356;

let division = 135 / 5;

let residuo = 10 % 2;

// console.log(residuo);

//Concatenación -> unir dos o más cadenas de texto, solo un valor debe ser un string

// let sumafalsa = 2 + '2';

// console.log(sumafalsa);

// Operadores logicos

let igualdad = 2 == '2'; // Compara solamente el valor

// console.log(igualdad);

let igualdadEstricta = 2 === '2'; // Compara el valor y el tipo de dato

console.log(igualdadEstricta);

let desigualdad = 10 != '10'; // Compara el valor
console.log(desigualdad);

let desigualdadEstricta = 10 !== '10'; // Compara el valor y el tipo de dato
console.log(desigualdadEstricta);

//Operador and, para que sea verdadero ambas condiciones deben ser verdaderas

let operadorAnd = 10 == '10' && 10 === '10'; //primera condición es verdadera, la segunda es falsa
console.log(operadorAnd);

//Operador or, para que sea verdadero al menos una condición debe ser verdadera

let operadorOr = 10 == '10' || 10 === '10'; //primera condición es verdadera, la segunda es falsa
console.log(operadorOr);

//Funciones

//Declaración de una función
// una función es un bloque de código que se ejecuta cuando es llamado
// ventajas: reutilización de código, modularidad, simplificación de código
function saludo() {
    console.log('Hola, te saludo desde una función');
}

//Invocación de una función
saludo();

//Tipos de funciones

//Función con parámetros
// Tipo Void
function tipoVoid() {
    console.log('Soy una función tipo void');
}
// tipoVoid();

//Tipo Return
function tipoReturn() {
    return 'Soy una función tipo return';
}
let resultado = tipoReturn();
// console.log(resultado);

//
let ejecucion1 = tipoVoid();
let ejecución2 = tipoReturn();
console.log(ejecucion1);
console.log(ejecución2);

//Funciones con parametros -> Funciones que trabajan con datos que vienen de fuera
//NotANumber NaN -> No es un numero lo que se intenta aplicar a un operador matematico
function sumar(num1,num2){
    return num1+num2;
}

// let resultado = sumar(15,5);
console.log(resultado);


//Funcion flecha
//Declaracion
function funcionExpresada( ){ 

}

/*
CONSTANTE nombreFuncion asignamos parametros flecha llaves CODIGO A EJECUTAR
const       funcionFlecha  =        ()         =>   {      log()        }
*/
const funcionFlecha = (num1, num2) => {
    return num1-num2; 
}


//Callback -> RECIBE UNA FUNCION PARA PONERLA A FUNCIONAR
function funcionCallback(funcion){
    //Recibi una funcion por lo tanto la ejecuto
    funcion();
}

function funcionAuxiliar(){
    console.log("Estoy funcionando pero desde el callback");
}

funcionCallback(funcionAuxiliar);

//Callback con funcionFlecha ANONIMA
funcionCallback( () => { console.log("Te saludo desde la funcion flecha anonima jeje saludos");
});

funcionCallback(function () { console.log(
    "Holiwis desde la funcion anonima expresada");})

    