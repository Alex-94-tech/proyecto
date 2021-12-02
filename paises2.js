const continentes = [
    { value: "europe", texto: "Europa" },
    { value: "africa", texto: "Africa" },
    { value: "asia", texto: "Asia" },
    { value: "americas", texto: "America" },
    { value: "oceania", texto: "Oceania" },
  ];
  
  verPais=async (valorPaIS)=>{
    let url = `https://restcountries.com/v3.1/name/${valorPaIS}`;
    let pais = await cargaDatos(url);
    document.querySelector("posicion-menu").innerHTML=pais[0].name.common;
  }
  cargaPaisesDeContinente = async (value) => {
    let url = `https://restcountries.com/v3.1/region/${value}`;
    let paises = await cargaDatos(url);
    let selectPaises = document.querySelector("#paises");
    selectPaises.innerHTML = "";
    let opttioInicio = document.createElement("option");
    opttioInicio.value = 0;
    opttioInicio.innerHTML = "Selecciona pais....";
    selectPaises.appendChild(opttioInicio);
   
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
  
  cargaPais=async (nombrePais)=>{
    let url = `https://restcountries.com/v3.1/name/${nombrePais}`;
    let pais=await cargaDatos(url);
    let bandera=document.querySelector("#bandera")
    let escudo=document.querySelector("#escudo")
  
  bandera.src=pais[0].flags.png;
  escudo.src=pais[0].coatOfArms.png
  let moneda = Object.getOwnPropertyNames(pais[0].currencies);
  moneda.innerHTML=pais[0].currencies.eval(moneda1);

} 