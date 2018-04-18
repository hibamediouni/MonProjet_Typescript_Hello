"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Employe {
    constructor(nom, age) {
        this.nom = nom;
        this.age = age;
    }
    toString() {
        return "C est " + this.nom + " - age de :" + this.age;
    }
}
exports.Employe = Employe;
let e = new Employe("hiba mediouni Romdhani", 25);
console.log(e.toString());
