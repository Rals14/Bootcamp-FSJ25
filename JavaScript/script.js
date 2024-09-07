// Imprimir todas las posiciones de un array
if (array.length < 0) {
    console.log("El array esta vacio");
}


function recorrerArray(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// recorrer un array y devolver un nuevo array con los números pares

let arraycito = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function recorrerArrayPares(arr) {
    if (arr.length < 0) { //Validación de que el array no este vacio.
        return arr; //Si esta vacio retorna el array vacio.
    }
    let i = 0;
    let arrayAux = [];

    while (i < arr.length) {
        if (arr[i] % 2 === 0) {
            arrayAux.push(arr[i]); //Array donde se guardan los numeros pares
        }
        i++;
    }
    return arrayAux;
}

console.log(recorrerArrayPares(arraycito));



