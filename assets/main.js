// Lista Cognomi
// chiedi all’utente il cognome
var cognomeUtente = prompt('Qual è il tuo cognome?');
// inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
var listaCognomi = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"];
listaCognomi.push(cognomeUtente)
// stampa la lista ordinata alfabeticamente
var sortedArray = listaCognomi.sort();

for (var  i = 0; i < sortedArray.length; i++) {
    var order = sortedArray[i];
    var ListElement = document.getElementById('list').innerHTML;
}
console.log(listaCognomi);
// scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova
document.getElementById('list').innerHTML = "L'attuale lista di cognomi è: " + sortedArray;
var posizioneUtente = sortedArray.indexOf(cognomeUtente);
document.getElementById('surname').innerHTML = "Il tuo cognome si trova in questa posizione: " + (posizioneUtente + 1);

