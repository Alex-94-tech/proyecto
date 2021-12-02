function cargaDatos(url) {
    return new Promise(function (resolve, reject) {
        fetch(url).then(function (response) {
            if (response.status == 200)
                resolve(response.json());
            else
                reject(error);
        })
    })
}

function cargaDatos(url){
    return new Promise(function(resolve,reject){
        fetch(url).then(function(response){
             
              resolve(response.json());
           
        });
    });
}


const cargadatos1=(url)=>{ new Promise((resolve,reject)=>{
    fetch(url).then((response)=> {

    })
})}

function verDatos(){
    cargaDatos("https://restcountries.com/v3.1/region/europe")
      .then(function(paises){
        //codigo a ejecutar
        console.log(paises)
        var ul=document.querySelector("#ul");
        paises.forEach(pais => {
            let li=document.createElement("li");
            //li.innerHTML=pais.name.common;
            let img=document.createElement("img");
            img.src=pais.flags.png;
            li.appendChild(img)
            ul.appendChild(li);
        });
    }).catch(function(error){
        console.log(error)
    })
}

verDatos();