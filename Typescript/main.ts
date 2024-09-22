// Declaración de variable en JS
// let variable = "Raúl";

//Declaración de variable en TS
let cadenaTexto: string = "Raúl";
let numero: number = 1;
let booleano: boolean = true;

let arraycito: String[] = ["Raúl", "Javier", "Miguel"];

let arrayNumerico: number[] = [1, 2, 3, 4, 5]; 

//array numerico o string

let arrayNumString: (string | number)[] = [1, "Raúl", 2, "Javier"];

//Declaración de Tuplas
//Array con indices limitados y con sus tipos de datos declarados previamente
let datosUsuario: [string, number] = ["Raúl", 25];

//Funciones en TS

function tipoVoid(): void {
    console.log("Hola mundo");
}

function suma(num1: number, num2: number): number {
    return num1 + num2;
}

function sumarOConcatenar(): string | number {
    return 3 + 5;
}

function saludar(nombre: string): string {
    return `Hola como estas? ${nombre}`;
}


