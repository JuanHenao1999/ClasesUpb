function saludar(name) {
  console.log(`Hola ${name}`);
}

const name = "Juancho";

saludar(name);

function sumar(a, b) {
  const operacion = a + b;
  return operacion;
}

const resultado = sumar(5, 10);
// console.log(resultado);

// parametro opcional
function saludar2(nombre = "invitado") {
  console.log(`Hola ${nombre}`);
}

saludar2(); // sin parametros vale invitado

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

function objeto({nombre, edad, ciudad}) {
  console.log(nombre, edad, ciudad);
}

const persona = {
  nombre: "Juan",
  edad: 23,
  ciudad: "Betulia",
};

objeto(persona);
