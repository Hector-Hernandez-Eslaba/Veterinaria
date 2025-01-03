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
        this._raza = raza;
    }
    
    get raza(){
        return this._raza;
    }

    set raza(newRaza){
        this._raza = newRaza;
    }

    mostrarAnimales () {
       return `${this.nombre} ${this.peso} ${this.edad} ${this._raza}`;
    }
}    

class Gato extends Animales{
    constructor(nombre, peso, edad, sexo){
        super(nombre, peso, edad)
        this._sexo = sexo;
    }
    get sexo(){
        return this._sexo;
    }

    set sexo(newSexo){
        this._sexo = newSexo;

    }
    mostrarAnimales (){
       return `${this.nombre} ${this.peso} ${this.edad} ${this._sexo}`;
    }
    
}

class Conejo extends Animales{
    constructor(nombre, peso, edad, color){
        super(nombre, peso, edad)
        this._color = color;
    }
    get color(){
        return this._color;
    }

    set color(newColor){
        this._color = newColor;
    }

    mostrarAnimales (){
        return `${this.nombre} ${this.peso} ${this.edad} ${this._color}`;
    
    }
}

//Animales.prototype.mostrarAnimales = function(){
//    let perrito = `${this.nombre} ${this.peso} ${this.edad} ${this._raza}`;
//    let gatito = `${this.nombre} ${this.peso} ${this.edad} ${this._sexo}`;
//    let conejito = `${this.nombre} ${this.peso} ${this.edad} ${this._color}`;
    
//    console.log(perrito, gatito, conejito)
//    return perrito, conejito, gatito;
    
//}


let perro = new Perro("Max", 20, 10, "Doberman");
let gato = new Gato("Black", 10, 5, "Macho");
let conejo = new Conejo("Bad Bonny", 5, 1, "Blanco");

let animales = [perro, gato, conejo];
console.log(perro)


function mostrarAnimales(){
    const container = document.querySelector(".boxAnimales");
    
    for(let animalsList of animales){
        const listAnimales = document.createElement("li");
        listAnimales.innerText = animalsList.mostrarAnimales();
        container.appendChild(listAnimales);
    }
}

