// Chiedi all’utente il cognome
var cognomeUtente = prompt('Qual é il tuo cognome?');

// inseriscilo in un array con altri cognomi,

var listaCognomi = ['Rossi', 'Bianchi', 'Ferrari', 'Lombardi'];
listaCognomi.push(cognomeUtente);

var listaCognomiLower = [];
for (var i = 0; i < listaCognomi.length; i++) {
listaCognomiLower[i] = listaCognomi[i].toLowerCase();

}

// stampa la lista ordinata alfabeticamente (in html ul > li).
listaCognomiLower.sort();
console.log(listaCognomiLower);
document.getElementById('lista').innerHTML = '<li>' + listaCognomiLower + '</li>';
// Scrivi anche la posizione della lista in cui il nuovo utente si trova.
listaCognomiLower.indexOf(cognomeUtente);
console.log(listaCognomiLower.indexOf(cognomeUtente.toLowerCase()));
