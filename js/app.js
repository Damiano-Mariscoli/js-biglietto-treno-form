form.addEventListener('submit', function (event) {
    event.preventDefault();
    const ageField = document.getElementById('input-age');
    const kmField = document.getElementById('input-km');
    let prezzo = (kmField.value * 0.21)
    const age = ageField.value;
    scontoAdvanced = 0


    if (age < 18) {
        
        scontoAdvanced = (prezzo) * 20 / 100
        
        console.log('hai diritto allo sconto giovani!!')
        
    } else if (age >= 65) {
        
        scontoAdvanced = (prezzo) * 40 / 100
        
        console.log('hai diritto allo sconto over 65!!')
        
    }
    prezzo = prezzo - scontoAdvanced
    
    console.log(`il prezzo del tuo biglietto è: ${prezzo.toFixed(2)}$`)
    
})


