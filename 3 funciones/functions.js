// function saludar(name) {
//   console.log(`Hola ${name}`);
// }

// const name = "Juancho";

// saludar(name);

// function sumar(a, b) {
//   const operacion = a + b;
//   return operacion;
// }

//const resultado = sumar(5, 10);
// console.log(resultado);

// parametro opcional
// function saludar2(nombre = "invitado") {
//   // console.log(`Hola ${nombre}`);
// }

// saludar2(); // sin parametros vale invitado

// function objeto(objetoPersona) {
//   console.log(objetoPersona);
// }

// const persona = {
//   name: "Juan",
//   edad: 23,
//   ciudad: "Betulia",
// };

// objeto(persona);

// Desestructurado

// function objeto({ nombre, edad, ciudad }) {
//   return edad;
// }

const persona = {
  nombre: "Juan",
  edad: 23,
  ciudad: "Betulia",
};

// const edad = objeto(persona);
// console.log(`La edad que estoy capturando desde la funcion es ${edad}`);

// ** function flecha

const saludar = (name) => {
  console.log(`Hola ${name}`);
};
// const name = "Jimena";
// saludar(name);

const sumar = (n1, n2) => {
  const resultado = n1 + n2;
  return resultado;
}

// const resultadoDeSuma = sumar(5, 10);
//   console.log(resultadoDeSuma);

const saludar2 = (nombre = "invitado") => {
  console.log(`Hola ${nombre}`);
}
// saludar2()

const objeto = ({ nombre, edad, ciudad }) => {
    console.log(nombre, edad, ciudad);
    return edad;
}

// <const edad = objeto(persona);
// console.log(`La edad que estoy capturando desde la funcion es ${edad}`);
// ;>

// Cuando es una linea de codigo se puede retornar en una sola linea asi:
const test = () => "Hola desde Fuction flecha una sola linea"

const saludo = test();
console.log(saludo);


