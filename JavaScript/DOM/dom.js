console.log("Desde DOM/dom.js");

//agarrar un elemento del DOM

let elementoDOM = document.getElementById("textoSaludo");
console.log(elementoDOM);

//Propiedades mas utilizadas

console.log(elementoDOM.innerHTML); //extrae todo el contenido HTML de la etiqueta
console.log(elementoDOM.innerText); //extrae todo el contenido de texto de la etiqueta

elementoDOM.innerText = "Hola desde el DOM"; //modifica el contenido HTML de la etiqueta
console.log(elementoDOM.innerHTML);

elementoDOM.innerHTML = "<span>Modificando desde el DOM</span>"; //modifica el contenido de texto de la etiqueta    
console.log(elementoDOM.innerHTML);

//Agarrar otro elemento del HTML
const contenido = document.querySelector('#content')
console.log(contenido);

contenido.innerHTML = '<article><h1> Ingresado desde JS</h1> <h2>Y soy el hermano</h2></article> '
console.log(contenido);

/*
    Realiza una funcion que reciba un array NUMERICO y retorne un array completamente nuevo solamente con los 
    numeros que sean multiplo de 3 y que la suma de todos sus numeros de menos de 100.
*/

const arrayNumerico = [1, 3, 7, 9, 13, 15, 19, 21, 25, 27, 31, 33, 36];
function multiploDeTres(array) {
    if(array.length <= 1) return array;

    let nuevoArray = [];
    let suma = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 3 === 0) {
            suma += array[i];
            nuevoArray.push(array[i]);
        }
        if (suma >= 100) {
            suma -= array[i];
            nuevoArray.pop();
        }
    }
    return nuevoArray;

}
console.log(multiploDeTres(arrayNumerico));

//Agarramos el boton
const btnApretable = document.getElementById('btnMagia');

btnApretable.addEventListener('click', () => {
    alert('Avada kedavra');
    console.log("Despues del alert, COPPERFIELD");
})

function apretandoBoton() {
    let nombre = prompt("Ingresa tu nombre");
    let apellido = prompt("Ingresa tu apellido");
    alert(`Hola ${nombre} ${apellido}`);
}

function cambiandoImput(e){
    console.log(e.target.value);
}


