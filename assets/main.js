// Lista Cognomi
// chiedi all’utente il cognome
var userLastname = prompt('Qual è il tuo cognome?');
// inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
var lastnames = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"];
lastnames.push(userLastname);
console.log(lastnames.push(userLastname));
// stampa la lista ordinata alfabeticamente
var lastnamesSorted = lastnames.slice();
console.log(lastnamesSorted).sort();
var listElement = document.getElementById('lista').innerHTML;

for (var i = 0; i < lastnamesSorted; i++) {
    var lastname = lastnamesSorted[i];
    document.getElementById('lista').innerHTML += listElement + '<li>' + lastname + '</li>';
}
// scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova
console.log(lastnamesSorted);
var position = lastnamesSorted.indexOf(userLastname) + 1;
console.log(position);

