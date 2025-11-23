
/*exercic 3  */
const user = { name: "Noor", age: 10, city: "Tunis" };
console.log(user.name, user.age);

/*exercice 4*/
var t=[1,2,3,4];
var t2=[5,6,7,8];
var fusion = [...t, ...t2];
console.log(fusion);

var userCopy = { ...user,age: 20 };
console.log(userCopy);
/*exercice 5*/
let livre = {
  titre: "",
  auteur: "",
  annee: null,
  getInfo: function () {
    return "ce livre s'appelle " + this.titre + " ecrit par " + this.auteur + " en " + this.annee;
  }
};
/*exercice 6*/
let etudiant = {
  nom: "",
  note: 0,
  getMention: function() {
    switch (true) {
      case (this.note < 10):
        return "refusé";
      case (this.note >= 10 && this.note < 12):
        return "passable";
      case (this.note >= 12 && this.note < 14):
        return "assez bien";
      case (this.note >= 14 && this.note < 16):
        return "bien";
      case (this.note >= 16):
        return "très bien";
    }
  }
};

let e1 = Object.create(etudiant); 
e1.nom = "Hend";
e1.note = 15;

console.log(e1.nom + " : " + e1.getMention());
let e2 = Object.create(etudiant);
e2.nom = "mootaz";
e2.note = 8;

console.log(e2.nom + " : " + e2.getMention());
let e3 = Object.create(etudiant);
e3.nom = "ayoub";
e3.note = 12;
console.log(e3.nom + " : " + e3.getMention());
/*exercice 7*/
const notes = [12, 5, 17, 9, 20];
let somme = notes.reduce((acc, val) => acc + val);

console.log(somme / notes.length);

