//Boolean

var bool = true;
var flag = false;

bool == flag
0 == null

var num = 1;
var numero = 12;
num == numero //false
typeof num == typeof numero // true

null == undefined // true
null === undefined // false

var hola = "HOLA";
var str = "hola";
hola == str // false
hola === str // false

if(13 > 12){
    console.log(true)
}
else{
    console.log(false)
}


// Number

var q = 123;
var fifty = 50;

typeof fifty; // Number

var suma = q + fifty;
var sum = 34 + 45;

Number.MAX_VALUE //1.7976931348623157e+308
Number.MIN_VALUE //5e-324

Infinity // Infinito positivo
-Infinity // Infinito negativo
isFinite(q) // true, porque q(123) es un valor finito
isFinite(Infinity) // false, porque Infinity es infinito
360 / 0 //Infinito
360 / -0 //Infinito

0/0 //NaN = Not a number
"string" / 1 // NaN


//String

var texto = "JavaScript";
var zero = 0;
typeof texto;

var str = `Estoy aprendiendo ${texto}, desde ${zero}`;

var vacio = "";
vacio.length; // 0

var char = "qwerty"
char.length; // 6

var name = "diego";
name.toUpperCase(); 


//Undefined

var und; // esta es una variable indefinida
typeof und;

typeof undefined === typeof null // false

function text (letra){
    console.log( typeof letra);
}

text(); // Imprime undefine

var u = undefined /* Para declarar una variable vacia lo 
                    recomendable es declararla como null*/
                    
                
// Null

var nula = null; // Variable vacia

nula.length; // Da error
nula.toUpperCase(); //Da error

typeof nula;  // Object por que es un bug


//Symbol
var s1 = Symbol();
typeof s1; // Symbol

//var s2 = new Symbol()  => Forma incorrecta de declararlo

var sing = Symbol("descripcion");
var sing2 = Symbol("descripcion");

sing === sing2 // false

//Un simbolo solo es igual a si mismo

var m = Symbol.for("hola");
var desc = Symbol.keyFor(m);
console.log(desc) // Imprime la descripcion "hola" del Symbol

//Ejemplo de como se usan los symbols 
var validEmail = Symbol("valid a email");

function validation(user){
  if(!user[validEmail]){
      if(user.email.endsWith("@gmail.com")){
          user[validEmail] = true;
      }
  }
}


//BigInt

var bigNumber = 123423543465667n
typeof bigNumber // bigint

var big = BigInt("12446576876867787")
typeof big; // bigint

var s = big + 100 // Dara error porque no son el mismo tipo de dato
