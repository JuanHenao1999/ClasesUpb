// ** convertir una cadena o sring a minusculas
// const texto = "Hola Mundo"
// const enMinusculas = texto.toLowerCase()
// console.log(enMinusculas);

// ** convertir una cadena o sring a mayusculas
// const enMayusculas = texto.toUpperCase()
// console.log(enMayusculas);

// ** convertir a numero entero
// const numeroEntero = "123"
// const numero = parseInt(numeroEntero)
// console.log(numero);

// ** convertir a numero flotante
// const textoNumero = "3.14"
// const numero= parseFloat(textoNumero)
// console.log(numero);

// ** convertir un valor numerico a String mas utilizado
// const numero = 42
// const texto = numero.toString()
// console.log(typeof(texto)); // ver que tipo de dato es typeOf()

// ** convertir un valor nuemrico a String
// const numero = 42
// const texto = String(numero)
// console.log(texto);

// ** Convertir a un valor booleano
// const numero = 1
// const esVerdadero = Boolean(numero)
// console.log(esVerdadero);

// ** Convertir Date a string
// const fecha = new Date()
// console.log(fecha);
// const fechaString = fecha.toString()
// console.log(fechaString);

// ** Convertir a array
// const texto = "Hola";
// const arreglo = Array.from(texto);
// console.log(arreglo.length);

// ** Convertir un string a valor numerico 
// const textoNumero = "42"
// const numero = Number(textoNumero)
// console.log(numero);
// const numero = +textoNumero
// console.log(numero);

const personas = [
    {
        nombre:"Jose",
        edad: 30,
        profesion: "Sin empleo"
    },
    {
        nombre:"Juan",
        edad: 23,
        profesion: "Ingeniero de sistemas"
    }
]

// console.log(JSON.stringify(personas));

const perosnasJson ='[{"nombre": "Jose","edad": 30,"profesion": "Sin empleo"},{"nombre": "Juan","edad": 23,"profesion": "Ingeniero de sistemas"}]'

// console.log(perosnasJson);
const data = JSON.parse(perosnasJson);
console.log(data);