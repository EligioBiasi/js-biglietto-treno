// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
const kilometers = parseInt (prompt('inserisci i km da percorrere'));
const age = parseInt (prompt('inserisci la tua età'));
console.log(kilometers);
console.log(age);
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
let ticketCost = (kilometers * 0.21);
// va applicato uno sconto del 20% per i minorenni
if (age<18){
    ticketCost = ((20 * ticketCost) / 100);
}
// va applicato uno sconto del 40% per gli over 65.