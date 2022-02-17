//Array

let arreglo = ["Xbox", "Playstation", "Nintendo", "Sega", "Capcom", "Riot Games"];
let GameCompanies = ["EA", "Ubisoft", "Bandai Namco", "Square Enix", "Konami"];

console.log(arreglo.concat(GameCompanies)); // Resultado => [Xbox, Playstation, ..., EA, Ubisoft, ...]

typeof arreglo // Object  array

arreglo.length // 6

let ab = [1,2,3,4, "uno", "dos", "tres"]

console.log(ab[0]) //Imprime 1
console.log(ab[4]) //Imprime uno

//Objetos

let myObject = {
    nombre: "Diego",
    edad: 21,
    carrera: "Ingenieria de Software",
    lenguaje: "Javascript",
};

typeof myObject; // Object

console.log(myObject.nombre); //Diego

console.log(`Hola soy ${myObject.nombre} y tengo ${myObject.edad} años, estoy estudiando ${myObject.carrera} 
en la Facultad de Telematica, actualmente estoy aprendiendo el lenguaje de programacion ${myObject.lenguaje}.`);


//Funciones

function saludo( nombre){
    console.log(`Hola ${nombre}`);
}

saludo("Diego");

function suma (num, num2){
    let cuenta = num + num2;
    
    return cuenta;
}

suma(21, 22);

function Mayorque(n1, n2){
    
    if(n1 > n2){
        console.log(`El número ${n1} es mayor que el número ${n2}`);
    }
    else{
        console.log(`El número ${n2} es mayor que el número ${n1}`);
    }
}

Mayorque(12,2) //12 es mayor que 2
Mayorque(34,35) //El segundo numero es mayor