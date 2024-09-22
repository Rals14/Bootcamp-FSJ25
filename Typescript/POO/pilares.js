//4 Pilares POO 
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*
    Herencia -> heredar atributos y metodos de una clase padre a una clase hija
    Polimorfismo -> Capacidad de un objeto de comportarse de diferentes formas

    Encapsulamiento -> Limitar el acceso a algo a traves de MODIFICADORES DE ACCESO
    Abstraccion -> Nos da herramientas para interactuar con lo que este limitado de una clase
*/
/*
    Modificadores de acceso
    Public -> Todo el mundo puede acceder
    Private -> Solo ella misma va a tener acceso
    Protected -> Va a tener acceso la misma clase y sus hijos
*/
var Person = /** @class */ (function () {
    function Person(nameParam, ageParam, duiParam) {
        this.name = nameParam;
        this.age = ageParam;
        this.dui = duiParam;
    }
    Person.prototype.respirar = function () {
        console.log("Afff");
    };
    //Getters y Setters
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.getAge = function () {
        return this.age;
    };
    Person.prototype.getDui = function () {
        return this.dui;
    };
    Person.prototype.setAge = function (ageParam) {
        this.age = ageParam;
    };
    return Person;
}());
var personita = new Person("Jairo Vega", 75, "0105080-3");
//personita.name = "Hector";
console.log(personita);
console.log(personita.getName());
var Developer = /** @class */ (function (_super) {
    __extends(Developer, _super);
    function Developer(nameParam, ageParam, duiParam, expParam, techSkillsParam, softSkillsParam, gitUserParam, areaParam, projectsParam) {
        var _this = _super.call(this, nameParam, ageParam, duiParam) || this;
        _this.exp = expParam;
        _this.techSkills = techSkillsParam;
        _this.softSkills = softSkillsParam;
        _this.gitUser = gitUserParam;
        _this.area = areaParam;
        _this.projects = projectsParam;
        return _this;
    }
    Developer.prototype.getExp = function () {
        return this.exp;
    };
    Developer.prototype.getTechSkills = function () {
        return this.techSkills;
    };
    Developer.prototype.getSoftSkills = function () {
        return this.softSkills;
    };
    Developer.prototype.getGitUser = function () {
        return this.gitUser;
    };
    Developer.prototype.getArea = function () {
        return this.area;
    };
    Developer.prototype.getProjects = function () {
        return this.projects;
    };
    Developer.prototype.respirar = function () {
        console.log("Sniff Sniff");
    };
    return Developer;
}(Person));
var developercito = new Developer("Will", 19, "1234567-8", 3, ["Typescript", "Bootstrap", "HTML", "CSS", "JavaScript"], ["Trabajo en equipo", "Comunicación", "Proactividad"], "willdev", "Backend developer", ["API"]);
developercito.respirar();
