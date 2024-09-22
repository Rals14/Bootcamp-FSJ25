//4 Pilares POO 

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

class Person{
    private name:string;
    private age:number;
    private dui: string;

    constructor(nameParam:string,ageParam:number,duiParam:string){
        this.name = nameParam;
        this.age = ageParam;
        this.dui = duiParam;
    }

    respirar(){
        console.log("Afff");
    }

    //Getters y Setters
    getName():string {
        return this.name;
    }

    getAge():number{
        return this.age;
    }

    getDui():string{
        return this.dui;
    }
    
    setAge(ageParam:number){
        this.age = ageParam;
    }

    
}

let personita = new Person("Jairo Vega",75,"0105080-3");
//personita.name = "Hector";
console.log(personita);
console.log(personita.getName());

class Developer extends Person{
    private exp:number;
    private techSkills:string[];
    private softSkills:string[];
    private gitUser:string;
    private area:string;
    private projects:string[];

    constructor(nameParam:string,ageParam:number,duiParam:string, expParam:number, techSkillsParam:string[], softSkillsParam:string[], gitUserParam:string, areaParam:string, projectsParam:string[]){
        super(nameParam,ageParam,duiParam);
        this.exp = expParam;
        this.techSkills = techSkillsParam;
        this.softSkills = softSkillsParam;
        this.gitUser = gitUserParam;
        this.area = areaParam;
        this.projects = projectsParam; 
    }

    getExp():number{
        return this.exp;
    }

    getTechSkills():string[]{
        return this.techSkills;
    }

    getSoftSkills():string[]{
        return this.softSkills;
    }

    getGitUser():string{
        return this.gitUser;
    }

    getArea():string{
        return this.area;
    }

    getProjects():string[]{
        return this.projects;
    }

    respirar(): void {
        console.log("Sniff Sniff");
    }

}

let developercito = new Developer("Will",19,"1234567-8", 3, ["Typescript","Bootstrap","HTML","CSS","JavaScript"], ["Trabajo en equipo","Comunicación","Proactividad"],"willdev","Backend developer",["API"]);

developercito.respirar();
