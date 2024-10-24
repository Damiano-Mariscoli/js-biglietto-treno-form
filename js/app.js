//definisco l'azione che viene fatta appena facciamo un submit (clicchiamo il button)


document.getElementById('btnReset').addEventListener('click', function(){
    location.reload();
})


form.addEventListener('submit', function (event) {

    //elimino il comportamento default del form

    event.preventDefault();

    //definisco le variabili

    const ageField = document.getElementById('input-age');
    const kmField = document.getElementById('input-km');
    let prezzo = (kmField.value * 0.21)
    const age = ageField.value;
    scontoAdvanced = 0
    const prova = document.getElementsByClassName('mb-3')
    const name = document.getElementById('input-name')
    console.log(name.value)
    console.log(prova)

    //condizione per calcolare il prezzo del biglietto in base all'età
    //in base ai 3 casi restituisco una frase diversa

    if (age < 18) {

        scontoAdvanced = (prezzo) * 20 / 100

        console.log('hai diritto allo sconto giovani!!')

    } else if (age >= 65) {

        scontoAdvanced = (prezzo) * 40 / 100

        console.log('hai diritto allo sconto over 65!!')

    } prezzo = prezzo - scontoAdvanced           //calcolo del prezzo (output effettivo)

    //OPZIONALE

    //definisco un ciclo for per eliminare tutti i dati gia presenti in caso di più submit
    //ogni volta che facciamo un submit cancelliamo tutti gli elementi contenuti nel node (gli elementi sono soltanto "p")
    //in caso vogliamo un biglietto in più ogni volta che facciamo il submit commentare il ciclo for

    //    nodeP = document.querySelectorAll('p')      //creo la variabile che contiene il node
    //    console.log(nodeP)                          //debug per controllare se effettivamente ad ogni submit i paragrafi rimangono uguali
    //    for (i = 0; i < nodeP.length; i++)        //per ogni elmento dentro al node 
    //        nodeP[i].remove()                   //lo rimuovo




    /* metodo alternativo al ciclo for
    document.querySelectorAll('p').forEach(p => p.remove()) //rimuove gli elementi gia presenti dallo scorso submit
    */

    //--

    console.log(`il prezzo del tuo biglietto è: ${prezzo.toFixed(2)}$`)       //stampo il prezzo come debug per vedere se è giusto
    //vado a crearmi l'output che vedrà effettivamente l'utente, e lo vado ad inserire nell' HTML

    let mainCardClone = document.getElementById('maincard').cloneNode(true);        //duplico e mostro la card ogni volta che faccio un submit
    mainCardClone.classList.remove('d-none')
    document.querySelector('section.ticket').appendChild(mainCardClone)

    const textKm = document.createElement('p');                                     //vado ad aggiungere i dati calcolati alla card generata
    textKm.className = 'text-light'
    textKm.textContent = `KM: ${kmField.value}`
    mainCardClone.querySelector('span.review-ticket').appendChild(textKm)

    const textAge = document.createElement('p');
    textAge.className = 'text-light'
    textAge.textContent = `Età: ${ageField.value}`
    mainCardClone.querySelector('span.review-ticket').appendChild(textAge)

    const textPrice = document.createElement('p');
    textPrice.className = 'text-light'
    textPrice.textContent = `Prezzo: ${prezzo.toFixed(2)} $`
    mainCardClone.querySelector('span.review-price').appendChild(textPrice)

    const textName = document.createElement('p')
    textName.className = 'text-light'
    textName.textContent = `Nome: ${name.value}`
    mainCardClone.querySelector('span.review-ticket').appendChild(textName)
})






