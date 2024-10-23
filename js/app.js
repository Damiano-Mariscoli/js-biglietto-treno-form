//richiesta del programma: immettere l'eta 






//definisci le condizioni





const form = document.getElementById('form');
console.log(form)
const ageField = document.getElementById('input-age');
const kmField = document.getElementById('input-km')
let prezzo = (kmField * 0.21)
let scontoAdvanced = 0;
form.addEventListener('submit', function (event) {
    event.preventDefault();
    const ageField = document.getElementById('input-age');
    const age = ageField.value;
    console.log(age);
    if (age < 18) {
        //const sconto = (prezzo) * 20 / 100
        scontoAdvanced = (prezzo) * 20 / 100
        //prezzo = prezzo - sconto
        console.log('hai diritto allo sconto giovani!!')
        //console.log('il prezzo del tuo biglietto è:', Number(prezzo.toFixed(2)) , '$')
        console.log('hai risparmiato:', Number(scontoAdvanced.toFixed(2)), '$')
    } else if (age >= 65) {
        //const sconto = (prezzo) * 40 / 100
        scontoAdvanced = (prezzo) * 40 / 100
        //prezzo = prezzo - sconto
        console.log('hai diritto allo sconto over 65!!')
        //console.log('il prezzo del tuo biglietto è:', Number(prezzo.toFixed(2)) , '$')
        console.log('hai risparmiato:', Number(scontoAdvanced.toFixed(2)), '$')
    }
    prezzo = prezzo - scontoAdvanced
    // console.log('non hai diritto a nessuno sconto :(')
    //console.log('il prezzo del tuo biglietto è:', prezzo.toFixed(2) , '$')
    console.log(`il prezzo del tuo biglietto è: ${prezzo.toFixed(2)}$`)
    //Ottenere il riferimento al form tramite l'id
})


