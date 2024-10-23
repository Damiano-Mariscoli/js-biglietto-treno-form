//definisco l'azione che viene fatta appena facciamo un submit (clicchiamo il button)

form.addEventListener('submit', function (event) {

    //elimino il comportamento default del form

    event.preventDefault();

    //definisco le variabili

    const ageField = document.getElementById('input-age');
    const kmField = document.getElementById('input-km');
    let prezzo = (kmField.value * 0.21)
    const age = ageField.value;
    scontoAdvanced = 0


    //condizione per calcolare il prezzo del biglietto in base all'età
    //in base ai 3 casi restituisco una frase diversa

    if (age < 18) {

        scontoAdvanced = (prezzo) * 20 / 100

        console.log('hai diritto allo sconto giovani!!')

    } else if (age >= 65) {

        scontoAdvanced = (prezzo) * 40 / 100

        console.log('hai diritto allo sconto over 65!!')

    } prezzo = prezzo - scontoAdvanced           //calcolo del prezzo (output effettivo)


    //definisco un ciclo for per eliminare tutti i dati gia presenti in caso di più submit
    //ogni volta che facciamo un submit cancelliamo tutti gli elementi contenuti nel node (gli elementi sono soltanto "p")
    //in caso vogliamo un biglietto in più ogni volta che facciamo il submit commentare il ciclo for

    // nodeP = document.querySelectorAll('p')      //creo la variabile che contiene il node
    // console.log(nodeP)                          //debug per controllare se effettivamente ad ogni submit i paragrafi rimangono uguali
    // for (i = 0; i < nodeP.length; i++)        //per ogni elmento dentro al node 
    //     nodeP[i].textContent = ''                       //lo rimuovo




    /* metodo alternativo al ciclo for
    document.querySelectorAll('p').forEach(p => p.remove()) //rimuove gli elementi gia presenti dallo scorso submit
    */



    console.log(`il prezzo del tuo biglietto è: ${prezzo.toFixed(2)}$`)       //stampo il prezzo come debug per vedere se è giusto


    //vado a crearmi l'output che vedrà effettivamente l'utente, e lo vado ad inserire nell' HTML

    const container = document.createElement('div')         //creo la struttura html: container > row > card > col
    container.className = 'container'                       //assegno le classi per cambiare la posizione agli elementi
    document.body.appendChild(container)

    const card = document.createElement('div');             
    card.className = 'card mt-3 p-3 bg-dark'
    container.appendChild(card)

    const row = document.createElement('div');
    row.className = 'row d-flex'
    card.appendChild(row)
   
    const colInfo = document.createElement('div');
    colInfo.className = 'col'
    row.appendChild(colInfo)

    const colPrice = document.createElement('div');
    colPrice.className = 'col'
    row.appendChild(colPrice)

    const textKm = document.createElement('p');
    textKm.className = 'text-light'                         //inserisco l'output del programma
    textKm.textContent = `KM: ${kmField.value}`             //in questo caso sono 3 paragrafi 2 inseriti nella prima colonna e 1 inserito nella seconda colonna
    colInfo.appendChild(textKm)

    const textAge = document.createElement('p');
    textAge.className = 'text-light'   
    textAge.textContent = `Età: ${ageField.value}`
    colInfo.appendChild(textAge)

    const textPrice = document.createElement('p')
    textPrice.className = 'text-light'   
    textPrice.textContent = `Prezzo: ${prezzo.toFixed(2)} $`
    colPrice.appendChild(textPrice)



})

