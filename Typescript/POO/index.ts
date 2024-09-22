//Programación orientada a objetos
// Es una forma de programar intentando describir o pensar las cosas como si fueran objetos

//Conceptos principales de POO -> Clases y Objetos
//Clases -> Modelo a seguir
//Objetos -> Es la instancia de una clase

class Auto{
    //Propiedades
    numChasis:number;
    motor:string;
    color:string;
    tipoCombustible:string;
    transmision:string;
    cantKilometraje:string;
    plazas:number;
    frenos:string;
    modelo:string;
    anioFab:number;
    
    constructor(numChasisParam:number,motorParam:string,colorParam:string,tipoCompustibleParam:string, transmisionParam:string,plazasParam:number,frenosParam:string, modeloParam:string, añoFabParam:number){
        this.numChasis = numChasisParam;
        this.motor = motorParam;
        this.color = colorParam;
        this.tipoCombustible = tipoCompustibleParam;
        this.transmision = transmisionParam;
        this.plazas = plazasParam;
        this.frenos = frenosParam;
        this.modelo = modeloParam;
        this.anioFab = añoFabParam;
    }

    //metodos -> Acciones
    encender(): void{
        console.log("El auto está encendido");
    }

    apagar(): void{
        console.log("El auto está apagado");
    }


}

//Instanciar un objeto

let autito:Auto = new Auto(123456,"v8","Azul","Gasolina","Manual",2,"ABC","Huayra",2018);
console.log(autito);

// let autito:Auto = new Auto();
// autito.modelo = "Toyota";
// console.log(autito);

// Constructor -> Metodo reservado que se ejecuta al instanciar un objeto
