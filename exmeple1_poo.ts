export class Employe {
    private nom : string;
    private age : number;
    constructor(nom:string, age:number) {
        this.nom = nom;
        this.age = age;
    }
    public toString(): string {
        return "C est "+this.nom + " - age de :"+this.age;
    }
}

let e:Employe = new Employe("hiba mediouni Romdhani",25);
console.log(e.toString());