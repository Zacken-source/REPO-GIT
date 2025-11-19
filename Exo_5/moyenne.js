let listeNote = [20,18,15,17,14];
let somme = 0;
listeNote.forEach(note =>{
    somme = somme + note;
});
let resultat = somme / listeNote.length
console.log(resultat);