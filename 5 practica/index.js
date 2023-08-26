const usuarios = [
  {
    name: "Jose",
    age: 30,
  },
  {
    name: "Jorge",
    age: 63,
  },
  {
    name: "Juan",
    age: 23,
  },
  {
    name: "Kenia",
    age: 22,
  },
];

// ** sumar las edades de todas las personas
let acumuladorEdades = 0;

// for (const item of usuarios) {
//     // acumuladorEdades = acumuladorEdades + item.age
//     acumuladorEdades += item.age
// }

// console.log("La suma de las edades es ", acumuladorEdades);

// ** Manera eficiente de sumar las edades
// const sumaEdades = usuarios.reduce(
//   (acumulador, item) => acumulador + item.age,
//   0
// );

// console.log(`La suma de las edades es ${sumaEdades}`);

// ** Buscar a jose e imprimir todo su objeto

// for (let i = 0; i < usuarios.length; i++) {
//     if( usuarios[i].name ==="Jose") {
//         console.log(usuarios[i]);
//         break
//     }
// }

// ** Manera eficiente de encontrar a Jose en el array

// const usuariosEncontrado = usuarios.find(item => item.name === "Jose")
// console.log(usuariosEncontrado);

// ** Buscar todas las personas menores de 32 años

// const resultado = []
// for (const item of usuarios) {
//     if(item.age < 32) {
//         resultado.push(item)
//     }
// }

// ** Mejor manera

// const resultado = usuarios.filter((item) => item.age < 32)
// console.log(resultado);

// ** Buscar personas que tengan la letra J
// const resultado = usuarios.filter((item) =>
//   item.name.toLowerCase().includes("J")
// );
// console.log(resultado);

// ** Buscar personas que tengan la letra g

const resultado = usuarios.filter((item) =>
  item.name.toLowerCase().includes("g")
);
console.log(resultado);