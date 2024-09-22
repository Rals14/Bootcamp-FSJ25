//Programación orientada a objetos
// Es una forma de programar intentando describir o pensar las cosas como si fueran objetos
//Conceptos principales de POO -> Clases y Objetos
//Clases -> Modelo a seguir
//Objetos -> Es la instancia de una clase
var Auto = /** @class */ (function () {
    function Auto() {
    }
    //metodos -> Acciones
    Auto.prototype.encender = function () {
        console.log("El auto está encendido");
    };
    Auto.prototype.apagar = function () {
        console.log("El auto está apagado");
    };
    return Auto;
}());
//Instanciar un objeto
var autito = new Auto();
autito.modelo = "Toyota";
console.log(autito);
