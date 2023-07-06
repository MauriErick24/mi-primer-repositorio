let nombre='Maria'
let espacio= ' '
let pais='Bolivia'
let ciudad='La Paz'

//! Concatenacion de cadenas
let persona1= nombre+espacio+pais+espacio+ciudad
console.log(persona1);
let persona2= 'Persona 2: '+' '+nombre+' '+pais+' '+ciudad
console.log(persona2);
//! Bactiks
let persona3= `Persona 3: ${nombre} ${pais} ${ciudad}`
console.log(persona3);

let a=6
let b=3
console.log(`${a} es mas grande que  ${b}? : ${a>b}`)

//! Metodos de cadenas
// * una cadena es tipo de dato primitivo; tiene muchos metodos de cadenas. 

//? length = tamanio de la cadena
let js = 'javascript'
console.log(js.length);

let nombre1 = 'Erick'
console.log(nombre1[0])

let string = 'javascript'
let primerCaracter = string[0];
console.log(primerCaracter) 

//! toUpperCase : cambia las letras a letras mayusculas
let string1 = 'javascript'
console.log(string1.toUpperCase());
//! toLowerCase : cambia las letras a letras minusculas
let string2 = 'JAVASCRIPT'
console.log(string2.toLowerCase());

//! substring() este metodo toma dos argumentos - el indice inicial y el indice final, 
//! pero no incluye el caracter del indice final

let string3 = 'JavaScript'
console.log(string3.substring(0, 3));

//! split(): este metodo divide una cadena en un lugar especifico
let string4 = 'Evolutech te capacita JavaScript y React'
console.log(string4.split(' '))

//! trim() : eliminar el espacio al principio o al final de una cadena. 

let string7 = '   Evolutech te capacita, en JavaScript, y react   '
console.log(string7)
console.log(string7.trim(' '))

//! includes() : este metodo toma un argumento de subcadena y verifica si existe el argumento de la subcadena
//! en la cadena. 
//! Devuelve un valor booleano. Si existe una subcadena en una cadena devuelve verdadero, de lo contrario falso

let string8 = 'Evolutech te capacita JavaScript y React'
console.log(string8.includes('Evolutech'))

//! replace(): toma como parametro la subcadena anterior y una nueva subcadena
let string9 = 'Evolutech te capacita, JavaScript, y React'
console.log(string9.replace('JavaScript', 'Python'))

//! charAt(): toma el indice y devuelve el valor de ese indice. 

//! indexOf() : toma una subcadena y si la subcadena existe en una cadena devuelve la primera
//! posicion de la subcadena, si no existe devuelve -1

//! lastIndexOf() : toma una subcadena y si la subcadena existe en una cadena devuelve la ultima
//! posicion de la subcadena, si no existe devuelve -1

//! concat() : toma muchas subcadenas y los va a unir 

//! startsWith(): toma una subcadena como argumento y verifica si la cadena comienza con esa subcadena
//! devuelve un valor booleano 













