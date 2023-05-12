// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
const kilometers = parseInt (prompt('inserisci i km da percorrere'));
const age = parseInt (prompt('inserisci la tua età'));
console.log(kilometers);
console.log(age);

// il prezzo del biglietto è definito in base ai km (0.21 € al km)
let ticketCost = (kilometers * 0.21);
let discount;

// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
if (age<18){
    discount = ((20 * ticketCost) / 100);
} else if (age>65){
    discount = ((40 * ticketCost) / 100);
} else (age>=18 && age<=65);{
    discount = 0;
};


const ticketCostFinal = ticketCost - discount;

document.getElementById('cost').innerHTML+=ticketCostFinal + '€';