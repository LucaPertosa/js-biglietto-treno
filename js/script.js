// CALCOLO PREZZO BIGLIETTO DEL TRENO

/* prezzo biglietto euro/km */
const priceKm = 0.21 ;  
/* sconto 20% > 18 anni */
const discount20 = 0.20 ;
/* sconto 40% < 65 anni */
const discount40 = 0.40 ;

// LOGICA

// Chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero
alert ('Ciao! inserisci i dati per sapere quanto costerà il tuo biglietto!')
const userDistance = prompt('Quanti km devi percorrere?')
const userAge = prompt('Quanti anni hai?')
console.log (userDistance, userAge);

if (isNaN(userDistance)) {
    document.getElementById('error').innerHTML = "Errore, inserisci i dati scrivendo solo numeri. Ricarica la pagina"
} else if (isNaN(userAge)) {
    document.getElementById('error').innerHTML = "Errore, inserisci i dati scrivendo solo numeri. Ricarica la pagina"
} else {
    // Calcolo prezzo del biglietto in base ai chilometri
    const price = userDistance * priceKm
    console.log(price);
    // Calcolo sconto in base all'età e lo applico al prezzo
    let finalPrice = '';

    if (userAge < 18){
        finalPrice = (price - (discount20 * price)).toFixed(2)
    } else if (userAge >= 65) {
        finalPrice = (price - (discount40 * price)).toFixed(2)
    } else {
        finalPrice = price.toFixed(2)
    }
    // Preparo il messaggio con il prezzo
    console.log(finalPrice);

    // Output messaggio
    document.getElementById('ticket-cost').innerHTML = `Grazie per aver utilizzato il calcolatore! Il prezzo del tuo biglietto è di € ${finalPrice} ` ; 
}