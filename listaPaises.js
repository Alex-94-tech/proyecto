function cargarDatos(url) {
    return new Promise(function (resolve, reject) {
        fetch(url).then(function (response) {
            if (response.status == 200)
                resolve(response.json());
            else
                reject(error);
        });
    })
}

const verDatos = () => {
    cargarDatos("https://restcountries.com/v3.1/region/europe").then((paises => {
        console.log(paises)
        var url = document.querySelector("#ul");
        paises.forEach((pais) => {
            let li = document.createElement("li");
            li.innerHTML = pais.name.common;
            let img = document.createElement("img");
            ul.appendChild(li);
            li.appendChild(img);
        })
    }))}