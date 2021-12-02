function esPrimo(numero) {
    for (let i = 2; i < numero; i++) {
        if (numero % i == 0)
            return false

    }
    return true
}


function verPrimos(cantidad) {
    let lista = document.querySelector("#lista")
    let fila = 0;
    for (i = 1; i <= cantidad; i++)
        if (esPrimo(i)) {
            let li = document.createElement("li");
            li.innerHTML = i;
            lista.appendChild(li);
            if (fila % 2 == 0)
                li.classList.add("rojo");
            else
                li.classList.add("azul");
            fila++;
        }
    //console.log(i)
}

