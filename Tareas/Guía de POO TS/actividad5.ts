/* EJERCICIO 1. Crear una clase Cabecera Pagina, que contenga 3 métodos, el primer método que
obtenga el título, color y fuente de la página, el segundo método que indique como desea que
aparezca el título si centrado, derecha o izquierda y el tercer método que imprima todas las
propiedades.*/

class CabeceraPagina {
    private titulo: string;
    private color: string;
    private fuente: string;
    private alineacion: string;
  
    constructor(titulo: string, color: string, fuente: string) {
      this.titulo = titulo;
      this.color = color;
      this.fuente = fuente;
    }

    setAlineacion(alineacion: string): void {
        this.alineacion = alineacion;
    }

    ImprimirPropiedades(): void {
        console.log(`Título: ${this.titulo}`);
        console.log(`Color: ${this.color}`);
        console.log(`Fuente: ${this.fuente}`);
        console.log(`Alineación: ${this.alineacion}`);
    }

}

let cabecera = new CabeceraPagina("Título", "Azul", "Arial");
cabecera.setAlineacion("Derecha");
cabecera.ImprimirPropiedades();

/*EJERCICIO 2: Crear una clase Calculadora que contendrá los siguientes métodos:
• Sumar
• Restar
• Multiplicar
• Dividir
• Potencia
• Factorial */

class Calculadora {
    Sumar(a: number, b: number): number {
        return a + b;
    }

    Restar(a: number, b: number): number {
        return a - b;
    }

    Multiplicar(a: number, b: number): number {
        return a * b;
    }

    Dividir(a: number, b: number): number {
        if(b == 0){
            console.log("No se puede dividir entre 0");
            return 0;
        }
        return a / b;
    }

    Potencia(a: number, b: number): number {
        return Math.pow(a, b);
    }

    Factorial(a: number): number {
        if(a < 0){
            console.log("No se puede calcular el factorial de un número negativo");
            return 0;
        }
        let factorial = 1;
        for (let i = 1; i <= a; i++) {
            factorial = factorial * i;
        }
        return factorial;
    }
}

let calculadora = new Calculadora();
console.log(calculadora.Sumar(3, 5));
console.log(calculadora.Restar(3, 5));
console.log(calculadora.Multiplicar(3, 5));
console.log(calculadora.Dividir(3, 5));
console.log(calculadora.Potencia(3, 5));
console.log(calculadora.Factorial(5));


/*EJERCICIO 3. Crea una clase llamada Canción:
Atributos: título, género de la canción y un atributo privado que se llame autor.
Métodos:
• Crear un constructor que reciba como parámetros el título y género de la canción.
• Utiliza los métodos get y set para recibir e imprimir la propiedad autor.
• Crea un método para mostrar los datos de la canción.*/

class Cancion{
    private titulo: string;
    private genero: string;
    private autor: string;

    constructor(titulo: string, genero: string){
        this.titulo = titulo;
        this.genero = genero;
    }

    setAutor(autor: string): void {
        this.autor = autor;
    }

    getAutor(): string {
        return this.autor;
    }

    MostrarDatos(): void {
        console.log(`Título: ${this.titulo}`);
        console.log(`Género: ${this.genero}`);
        console.log(`Autor: ${this.autor}`);
    }
}

let cancion = new Cancion("Adore U", "Pop");
cancion.setAutor("Khalid");
console.log(cancion.getAutor());
cancion.MostrarDatos();

/*EJERCICIO 4. Crea una clase llamada Cuenta y va contener lo siguiente:
Atributos: nombre, cantidad, tipo de cuenta y número de cuenta.
Métodos:
• Crear un constructor que reciba como parámetros el nombre, cantidad, tipo de cuenta y
número de cuenta.
• Crea un método llamado depositar y en base a la cantidad ingresada en el constructor haz una
condición de que si la cantidad es menor a $5.00 que se imprima un mensaje que el valor a
depositar debe ser mayor a $5.00 y sino solo imprima un mensaje de que se ha depositado
correctamente y la cantidad depositada.
• Crea un método llamado retirar, que reciba un parámetro llamado valor y en base a eso tienes
que restar la cantidad menos el valor ingresado e imprimir un mensaje de lo que ha retirado y
cuanto le queda en su cuenta.
Nota: Para el método retirar debes de validar que lo que se retire sea mayor de $5.00 ya que
si no hay efectivo debes de tirar un mensaje que no hay nada en la cuenta.
• Crea un método para mostrar los datos de su nombre, tipo de cuenta y número de cuenta.
• Define un objeto de la clase Cuenta y llama sus métodos */

class Cuenta{
    private nombre: string;
    private cantidad: number;
    private tipoCuenta: string;
    private numCuenta: number;

    constructor(nombre: string, cantidad: number, tipoCuenta: string, numCuenta: number){
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.tipoCuenta = tipoCuenta;
        this.numCuenta = numCuenta;
    }

    depositar(cantidad: number): void {
        if (cantidad < 5){
            console.log("El valor a depositar debe ser mayor a $5.00");
        } else {
            this.cantidad += cantidad;
            console.log(`Se ha depositado correctamente la cantidad de $${cantidad}`);
        }
    }

    retirar(valor: number): void {
        if(valor > this.cantidad){
            console.log("No hay suficiente dinero en la cuenta");
        }
        if (valor < 5){
            console.log("No hay nada en la cuenta");
        } else {
            this.cantidad -= valor;
            console.log(`Se ha retirado la cantidad de $${valor}`);
            console.log(`Saldo restante: $${this.cantidad}`);
        }
    }

    MostrarDatos(): void {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Tipo de cuenta: ${this.tipoCuenta}`);
        console.log(`Número de cuenta: ${this.numCuenta}`);
    }
}

let cuenta = new Cuenta("Juan", 100, "Ahorros", 123456789);
cuenta.depositar(10);
cuenta.retirar(5);
cuenta.MostrarDatos();


/*EJERCICIO 5. Crear una clase abstracta Persona y va contener lo siguiente:
Atributos: nombre, apellido, dirección, teléfono y edad.
Métodos:
• Crear un método constructor para recibir los datos.
• Crea un método que en base a la edad imprima un mensaje si es mayor de edad o no.
• Crea un método para mostrar todos los datos personales (será el método abstracto).
• Crea una clase extra llamada Empleado y va contener un atributo llamado sueldo.
• En la clase Empleado añade los métodos cargar sueldo e imprimir sueldo.
• La clase Empleado va heredar de la clase Persona.
• Define un objeto de la clase Empleado y que se imprima los datos del empleado y su sueldo */

abstract class Persona {
    protected nombre: string;
    protected apellido: string;
    protected direccion: string;
    protected telefono: number;
    protected edad: number;

    constructor(nombre: string, apellido: string, direccion: string, telefono: number, edad: number){
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.telefono = telefono;
        this.edad = edad;
    }

    MayorEdad(): void {
        if(this.edad >= 18){
            console.log("Es mayor de edad");
        } else {
            console.log("No es mayor de edad");
        }
    }

    abstract MostrarDatos(): void;
}

class Empleado extends Persona {
    private sueldo: number;

    constructor(nombre: string, apellido: string, direccion: string, telefono: number, edad: number, sueldo: number){
        super(nombre, apellido, direccion, telefono, edad);
        this.sueldo = sueldo;
    }

    cargarSueldo(sueldo: number): void {
        this.sueldo = sueldo;
    }

    imprimirSueldo(): void {
        console.log(`Sueldo: $${this.sueldo}`);
    }

    MostrarDatos(): void {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Apellido: ${this.apellido}`);
        console.log(`Dirección: ${this.direccion}`);
        console.log(`Teléfono: ${this.telefono}`);
        console.log(`Edad: ${this.edad}`);
        console.log(`Sueldo: $${this.sueldo}`);
    }
}

let empleado = new Empleado("Juan", "Pérez", "Calle 1", 123456789, 25, 500);
empleado.MayorEdad();
empleado.MostrarDatos();
empleado.cargarSueldo(1000);
empleado.imprimirSueldo();


