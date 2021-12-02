var pais;

const continentes = [
  { value: "europe", texto: "Europa" },
  { value: "africa", texto: "Africa" },
  { value: "asia", texto: "Asia" },
  { value: "americas", texto: "America" },
  { value: "oceania", texto: "Oceania" },];

 // cargaDatos = (url) => new Promise((resolve) => fetch(url).then((response) => resolve(response.json())));


verPais=async (valorPais)=>{
  let url = `https://restcountries.com/v3.1/name/${valorPais}`;
  pais = await cargaDatos(url);
 // document.querySelector("posicion-menu").innerHTML=pais[0].name.common;
}
cargaPaisesDeContinente = async (value) => {
  let url = `https://restcountries.com/v3.1/region/${value}`;
  let paises = await cargaDatos(url);
  let selectPaises = document.querySelector("#paises");
  selectPaises.innerHTML = "";
  let opcionInicio = document.createElement("option");
  opcionInicio.value = 0;
  opcionInicio.innerHTML = "Selecciona pais....";
  selectPaises.appendChild(opcionInicio);
 
  paises.forEach((pais) => {
    let option = document.createElement("option");
    option.value = pais.name.common;
    option.innerHTML = pais.name.common;
    selectPaises.appendChild(option);
  });
};

cargaDatos = (url) => {
  return new Promise((resolve, reject) => {
    fetch(url).then((response) => {
//cambio de prueba
       // setTimeout(() => {
            resolve(response.json());
       //}, 5000);
      
    });
  });
};
cargaSelectContinentes = () => {
  let selectContinentes = document.querySelector("#continentes");
  continentes.forEach((continente) => {
    let option = document.createElement("option");
    option.value = continente.value;
    option.innerHTML = continente.texto;
    selectContinentes.appendChild(option);
  });
};
cargaBanderas = () => {
  let bandera=document.querySelector("#bandera");
  let escudo=document.querySelector("#escudo");
  bandera.classList.add("bandera");
  escudo.classList.add("escudo");
  bandera.src = pais[0].flags.png;
  escudo.src = pais[0].coatOfArms.png;
}

cargaGenerales = () => { //nombre, capital, poblacion, moneda, traducciones
  let moneda=document.querySelector("#moneda");
  let nombrePais=document.querySelector("#nombrePais");
  nombrePais.innerHTML=`El nombre del pais es: ${pais[0].name.common}`;
  let capital=document.querySelector("#capital");
  capital.innerHTML=`La capital es: ${pais[0].capital}`;
  
}

cargaGeograficos= () => {

} 

cargaTecnicos = () => {

}

cargaBanderas = () => {

}



/*
  gestionarElemento = (nombre, tipo=2) =>{
    if(tipo == 1){
        return document.createElement(nombre);
       
    }
    else{
        return document.querySelector(nombre);
    }
};*/