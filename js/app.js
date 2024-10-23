
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


    const textKm = document.createElement('p');
    textKm.textContent = `hai scelto ${kmField.value} KM`;
    document.body.appendChild(textKm);

    const textAge = document.createElement('p');
    textAge.textContent = `hai inserito ${ageField.value} anni`
    document.body.appendChild(textAge)

    const textPrice = document.createElement('p')
    textPrice.textContent = `il prezzo del tuo biglietto è ${prezzo} $`
    document.body.appendChild(textPrice)
})

