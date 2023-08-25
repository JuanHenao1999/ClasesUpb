// Numericos
const precio = 99.99;

// ** Texto, cadena de caracteres

// const nombre = "Juan";

// Boolean

const activado = true;
const descactivado = false;

// Arrays
const numeros = [1, 2, 3, 4, 5, 6, 7];
// console.log(numeros.length);

const colores = ["Rojo", "Verde", "Azul"];
// console.log(colores[1]);

for (let i = 0; i < colores.length; i++) {
  // console.log(colores[i]);
}

// Otra forma de ejecutarlo

for (const item of colores) {
  // console.log(item);
}

// colores.forEach((item) => console.log(item));

// const otrosColores = colores.map((item) => console.log(item));

// ** Objetos

const persona = {
  nombre: "Juan",
  edad: 23,
  empresa: "Mercado Libre",
};

// Agregar nuevo atributo al objeto
persona.ciudad = "Medellin";

// Eliminar un atributo
delete persona.empresa;

const masDatosDePersona = {
  ciudad: "Medellin",
  estatura: 1.72,
};

// console.log(persona.empresa);

// ** Desestructuracion
const { nombre, edad, empresa } = persona;
// console.log(`Su nombre es ${nombre}, su edad es ${edad} y trabaja en ${empresa}`);

// ** Propagacion
persona = {...persona, ...masDatosDePersona}
// console.log(persona);

//** Arreglo de objetos
const dataBanco = [
  {
    id: 1,
    cuentaAhorros: "123456",
    tipoCuenta: "Ahorros",
    monto: 3000000,
    deudaALaFecha: null,
    tarjetaCredito: false,
    tranferencias: [
      {
        id: 10,
        monto: -90000,
        de: "123456",
        para: "67800",
      },
      {
        id: 11,
        monto: 190000,
        de: "67800",
        para: "123456",
      },
    ],
  },
  {
    id: 2,
    cuentaAhorros: "56231",
    tipoCuenta: "Ahorros",
    monto: 1000000,
    deudaALaFecha: 100000,
    tarjetaCredito: false,
    tranferencias: [
      {
        id: 10,
        monto: -90000,
        de: "123456",
        para: "67800",
      },
      {
        id: 11,
        monto: 190000,
        de: "67800",
        para: "123456",
      },
    ],
  },
];

// console.log(dataBanco);

// ** Fechas, Date

const fechaActual = new Date();
const fechaEspecifica = new Date("2023-06-28");
const fechaPersonalizada = new Date(2023, 7, 24, 12, 30);

const fecha = new Date()

const anhio = fecha.getFullYear() // Obtiene el año
const mes = fecha.getMonth() // Obtiene el mes 
const dia = fecha.getDate() // Obtiene el dia 
const hora = fecha.getHours() // Obtiene la hora 
const minutos = fecha.getMinutes() // Obtiene los minutos

// console.log(anhio, mes, dia, hora, minutos);