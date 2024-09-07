/* EJERCICIO 1: Crear una función que en base a la edad que ingreso el usuario devolver un
mensaje si la persona es mayor de edad o no. Utilizar para la condición el operador ternario */

function mayorEdad(edad) {
    return edad >= 18 ? 'Es mayor de edad' : 'No es mayor de edad';
}

console.log(mayorEdad(16));

/*EJERCICIO 2: Crear una función que determine la nota final de un alumno, la cual depende
de lo siguiente:
• Examen =20%
• tareas = 40%
• asistencia = 10%
• investigación = 30%
Al final deberá mostrar los datos del alumno, nombre, carnet y nota final.*/

function notaFinal(examen, tareas, asistencia, investigacion, nombre, carnet) {
    let notaFinal = examen * 0.2 + tareas * 0.4 + asistencia * 0.1 + investigacion * 0.3;
    return `Nombre: ${nombre}, Carnet: ${carnet}, Nota Final: ${notaFinal}`;
}

console.log(notaFinal(80, 90, 100, 70, 'Juan', '00155820'));

/*EJERCICIO 3:
CATEGORIA AUMENTO
A 15%
B 30%
C 10%
D 20%
Calcular el aumento de trabajador tomando en cuenta la tabla de categorías de aumento.
Para este ejercicio deberá de asignar las siguientes variables: nombre, salario, categoría y
aumento. Deberá demostrar los datos del empleado y el aumento salarial. */

function aumento(nombre, salario, categoria){
    let aumento;
    switch(categoria){
        case 'A':
            aumento = salario * 0.15;
            break;
        case 'B':
            aumento = salario * 0.3;
            break;
        case 'C':
            aumento = salario * 0.1;
            break;
        case 'D':
            aumento = salario * 0.2;
            break;
    }
    return `El nuevo salario de ${nombre} es de ${salario + aumento}`;
}

console.log(aumento('Juan', 1000, 'B'));

/*EJERCICIO 4: Crear una función que en base a 2 números enteros que ingrese el usuario,
calcular cual número es el mayor y devolverlo.*/

function numeroMayor(num1, num2){
    num1 === num2 ? console.log('Los números son iguales') :
    num1 > num2 ? console.log(`El número mayor es ${num1}`) : console.log(`El número mayor es ${num2}`);
}

numeroMayor(12, 10);


/*EJERCICIO 5: Realizar una función para una tienda de coches en donde se deberá calcular:
Si el coche a la venta es un FORD FIESTA, aplicar un 5% de descuento en la compra. Si el
coche a la venta es un FORD FOCUS, el descuento será del 10% y si es un FORD ESCAPE
el descuento será del 20%. Mostrar en html el coche seleccionado y el descuento que se
aplicara en base a lo que selecciono el usuario.*/

function descuento(modelo){
    let descuento;
    switch(modelo){
        case 'FIESTA':
            descuento = 0.05;
            break;
        case 'FOCUS':
            descuento = 0.1;
            break;
        case 'ESCAPE':
            descuento = 0.2;
            break;
    }
    
    return descuento;
    
}

document.getElementById('btn').addEventListener('click', () => {
    const modelo = document.getElementById('carro').value;
    const descuentoAplicado = descuento(modelo);
    document.getElementById('resultado').innerHTML = `El descuento aplicado es de ${descuentoAplicado}`;
});

/*EJERCICIO 6: Crear una Función para calcular el descuento en viajes turísticos tomando
en cuenta lo siguiente:
Si el usuario introduce como origen la ciudad de Palma y como destino La costa del Sol, el
descuento será de 5%, si el destino es Panchimalco el descuento será del 10% y si el destino
es Puerto el Triunfo el descuento será del 15%.*/

function descuentoViaje(origen, destino){
    let descuento;
    if(origen === 'Palma' && destino === 'Costa del Sol'){
        descuento = 0.05;
    } else if(origen == 'palma' && destino === 'Panchimalco'){
        descuento = 0.1;
    } else if(origen == 'palma' && destino === 'Puerto el Triunfo'){
        descuento = 0.15;
    }
    return descuento;
}

console.log(descuentoViaje('Palma', 'Costa del Sol'));

/*Se realiza la carga de 10 valores enteros por teclado. Se desea conocer:
• La cantidad de valores negativos ingresados.
• La cantidad de valores positivos ingresados.
• La cantidad de múltiplos de 15.
• El valor acumulado de los números ingresados que son pares. */

const array = [-5, 7, 12, -15, 30, 42, -60, 91, -100, 150];
function valores(array){
    let negativos = 0;
    let positivos = 0;
    let multiplos = 0;
    let acumulado = 0;
    for(let i = 0; i < array.length ; i++){
        if(array[i] < 0){
            negativos++;
        } else if(array[i] > 0){
            positivos++;
        }
        if(array[i] % 15 === 0){
            multiplos++;
        }
        if(array[i] % 2 === 0){
            acumulado += array[i];
        }
    }
    return `Negativos: ${negativos}, Positivos: ${positivos}, Multiplos de 15: ${multiplos}, Acumulado de pares: ${acumulado}`;
}
console.log(valores(array));


/*EJERCICIO 8:
Escriba un programa que muestre la tabla de multiplicar del 1 al 10 del número ingresado
por el usuario.*/

function tablaMultiplicar(numero){
    for(let i = 1; i <= 10; i++){
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}

tablaMultiplicar(7);

/*EJERCICIO 9:
Crear programa donde se introduce una temperatura en Celsius y salga el resultado en
Fahrenheit, una vez teniendo la temperatura en Fahrenheit deberá devolver lo siguiente:
• Si ºF está entre 14 y 32, sale la frase “Temperatura baja”
• Si ºF está entre 32 y 68, sale la frase “Temperatura adecuada”
• Si ºF está entre 68 y 96, sale la frase “Temperatura alta”
• Si no está entre ningún caso anterior la frase “Temperatura desconocida*/

function temperatura(celsius){
    let fahrenheit = celsius * 1.8 + 32;
    if(fahrenheit >= 14 && fahrenheit <= 32){
        return 'Temperatura baja';
    } else if(fahrenheit > 32 && fahrenheit <= 68){
        return 'Temperatura adecuada';
    } else if(fahrenheit > 68 && fahrenheit <= 96){
        return 'Temperatura alta';
    } else {
        return 'Temperatura desconocida';
    }
}

console.log(temperatura(0));


/*EJERCICIO 10:
Se cuenta con la siguiente información:
• Las edades de 5 estudiantes del turno mañana.
• Las edades de 6 estudiantes del turno tarde.
• Las edades de 11 estudiantes del turno noche.
Nota: Las edades de cada estudiante se deberán ingresar por la web.
Lo que queremos devolver:
• Obtener el promedio de las edades de cada turno (tres promedios).
• Imprimir dichos promedios (promedio de cada turno).
• Mostrar por pantalla un mensaje que indique cuál de los tres turnos tiene un
promedio de edades mayor. */

function edades(){
    let mañana = [25, 23, 22, 27, 24];
    let tarde = [25, 26, 31, 28, 29, 20];
    let noche = [19, 22, 23, 34, 25, 36, 27, 18, 22, 20, 21];
    let promedioMañana = 0;
    let promedioTarde = 0;
    let promedioNoche = 0;
    let sumaMañana = 0;
    let sumaTarde = 0;
    let sumaNoche = 0;
    for(let i = 0; i < mañana.length; i++){
        sumaMañana += mañana[i];
    }
    for(let i = 0; i < tarde.length; i++){
        sumaTarde += tarde[i];
    }
    for(let i = 0; i < noche.length; i++){
        sumaNoche += noche[i];
    }

    promedioMañana = sumaMañana / mañana.length;
    promedioTarde = sumaTarde / tarde.length;
    promedioNoche = sumaNoche / noche.length;

    if(promedioMañana > promedioTarde && promedioMañana > promedioNoche){
        return `El promedio de edades mayor es el de la mañana: ${promedioMañana}`;
    } else if(promedioTarde > promedioMañana && promedioTarde > promedioNoche){
        return `El promedio de edades mayor es el de la tarde: ${promedioTarde}`;
    } else {
        return `El promedio de edades mayor es el de la noche: ${promedioNoche}`;
    }

}

console.log(edades());