class Animales{
    constructor(nombre, peso, edad){
        this.nombre = nombre;
        this.peso = peso;
        this.edad = edad;
    }

}

class Perro extends Animales{
    constructor(nombre, peso, edad, raza){
        super(nombre, peso, edad);
        this.raza = raza;
    }

}    

class Gato extends Animales{
    constructor(nombre, peso, edad, sexo){
        super(nombre, peso, edad)
        this.sexo = sexo;
    }

}

class Conejo extends Animales{
    constructor(nombre, peso, edad, color){
        super(nombre, peso, edad)
        this.color = color;
    }
}

Animales.prototype.mostrarAnimales = function(){
    let perrito = `${this.nombre} ${this.peso} ${this.edad}`;
    let gatito = `${this.nombre} ${this.peso} ${this.edad}`;
    let conejito = `${this.nombre} ${this.peso} ${this.edad}`;
    
    console.log(perrito, gatito, conejito)
    return perrito, conejito, gatito;
}

let perro = new Perro("Max", 20, 10, "Doverman");
let gato = new Gato("Black", 10, 5, "Macho");
let conejo = new Conejo("Bad Bonny", 5, 1, "Blanco");

let animales = [perro, gato, conejo];


function mostrarAnimales(){
    const container = document.querySelector(".boxAnimales");
    
    for(let animalsList of animales){
        const listAnimales = document.createElement("li");
        listAnimales.innerText = animalsList.mostrarAnimales();
        container.appendChild(listAnimales);
    }
}