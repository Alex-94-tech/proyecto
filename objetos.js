class Animal {
    constructor(especie, raza) {
        toString.especie = especie;
        toString.raza = raza;
    }
}

class Perro extends Animal {
    constructor(sonido, raza) {
        super("canina", raza);
        this.sonido = sonido;
    }

    emitirSonido() {
        return this.sonido;
    }
}

var perro = new Perro("guau, guau, guau ", "dogo");

console.log(perro.especie);
console.log(perro.raza);
console.log(perro.emitirSonido());

animal = new Animal("porcina", "iberica")

console.log(animal.especie)
console.log(animal.raza)

//perro.sonido = "nuevo soniudo"
console.log(perro.emitirSonido());

console.log("===================================")

otroperro = perro;

console.log("sin cambiar")
console.log(perro.emitirSonido)
otroperro.sonido = "soni de otro perro";
console.log("cambiado");
console.log(perro.emitirSonido());

var suma = function (a, b) {
console.log("resultado: " + (a - b));
};

var resta = function (a, b) {
    console.log("resultado: " + (a - b));
};

function operar(callback, numero1, numero2) {
    let n1 = numero1 * 2;
    let n2 = numero2 * 3;
    callback(n1, n2);
}

operar(suma, 5, 3);

operar(resta, )




























suma=(a,b) =>  a+b

console.log(`sin llaves ${(suma10, 5)}`);