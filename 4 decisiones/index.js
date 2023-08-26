// ** Operador == (igualdad debil)
// ** Operador === (igualdad estricta)
// ** Operador !== (Desigualdad estricta)
// ** Operador > (Mayor que)
// ** Operador < (Menor que)
// ** Operador >= (Mayor o igual que)
// ** Operador <= (Menor o igual que)
// ** Operador && (AND)
// ** Operador || (OR)
// ** Operador ! (NOT): El operador ! niega el valor de un operando. Si el operando 
// ** es true, ! lo convierte en false y viceversa
// ** Operador Ternario
// ** Operador ?? (Nullish Coalescing)


// ** Operador == (igualdad debil)
const numero = 5
const textoNumero = "5"

// if ( numero == textoNumero) {
//     console.log("son iguales (conversion automatica)");
// }else {
//     console.log("no son iguales");
// }

// ** Operador === (igualdad estricta)
// if (numero === textoNumero){
//     console.log("Son inguales (mismo tipo de dato)");
// } else {
//     console.log("No son iguales");
// }

// ** Operador !== (Desigualdad estricta)

// const edad = 18
// const textoEdad = "18"

// if (edad !== textoEdad) {
//     console.log("Son diferentes");
// } else {
//     console.log("Son iguales");
// }

// ** Operador > (Mayor que)
// const edad = 25

// if ( edad > 18) {
//     console.log("Es mayor de edad");
// }else {
//     console.log("Es menor de edad");
// }

// ** Operador < (Menor que)
// const precio = 150

// if (precio < 100) {
//     console.log("Esun precio bajo");
// } else {
//     console.log("Es un precio alto");
// }

// ** Operador >= (Mayor o igual que)
// const saldo = 500

// if(saldo >= 100) {
//     console.log("Tiene un saldo suficiente");
// }else {
//     console.log("El saldo es insuficiente");
// }

// ** Operador <= (Menor o igual que)
// const cantidad = 5

// if(cantidad <= 5) {
//     console.log("Es una cantidad pequeña");
// } else {
//     console.log("Es una cantidad alta");
// }

// ** Operador && (AND)
// const edad = 23
// const tieneLicencia = true

// if( edad >= 18 && tieneLicencia) {
//     console.log("Puede conducir legalmente");
// } else {
//     console.log("No puede conducir");
// }

// ** Operador || (OR)
// const esEstudiante = false
// const esEmpleado =false

// if(esEstudiante || esEmpleado) {
//     console.log("Tiene acceso a el descuento");
// } else {
//     console.log("No tiene descuento");
// }

// const usuario  = null
// const nombre = usuario  || "Invitado desde OR"
// console.log(nombre);

// ** Operador ! (NOT): El operador ! niega el valor de un operando. 
// ** Si el operando es true, ! lo convierte en false y viceversa

// const esDiaLaboral = true

// if(!esDiaLaboral){
//     console.log("Hoy es dia libre!!!!");
// } else {
//     console.log("Es dia laboral");
// }

// const user = null

// if (!user) {
//     console.log("El usuario no exite en la base de datos");
// } else {
//     console.log(`Usuario encontrado ${user}`);
// }

// ** Vamos a combinar varios operadores logicos para crear condiciones mas complejas. aqui hay un ejemplo ue combina && y ||

// const tieneTerjeta = true
// const tieneCreditoSuficiente = false
// const esClientePremium = false;

// if (tieneTerjeta && (tieneCreditoSuficiente || esClientePremium)){
//     console.log("Puede realizar la compra");
// } else {
//     console.log("No puede realizar la compra");
// }

// ** Operador Ternario ? : &&
// const edad = 18

// edad >= 18 
// ? console.log("Puede beber Alcohol") 
// : console.log("No puede beber Alcohol");

// ** Esta forma es para cuando solo queramos el if y no el else
// edad >= 18 
// && console.log("Puede beber Alcohol");

// ** Operador ?? (Nullish Coalescing)
// const usuario = null

// const nombre = usuario ?? "Invitado"
// console.log(nombre);

// ** INICIO DE ALGORITMO
// const edad = 23
//  const tieneLicencia = true

//  if( edad >= 18 && tieneLicencia) {
//     console.log("Puede conducir legalmente");
//     return
// } else {
//      console.log("No puede conducir");
// }

// console.log("Estoy ejecutando mas codigo");
// console.log("Estoy ejecutando mas codigo");

// ** FIN DE ALGORITMO

// ** opcion 1
const isAuth = true
const isFreeUser = true
const hasPaid = false

// if ( isAuth){
//     if (isFreeUser) {
//         if (hasPaid){
//             console.log("ERES PREMIUM");
//         } else {
//             console.log("estas en version free y no se ha confirmado el pago para ser premium");
//         }
//     }else {
//         console.log("Ya eres premium");
//     }
// }else {
//     console.log("Debes iniciar sesion");
// }

// ** opcion 3 operacion ternaria

// !isAuth
//     ? console.log("debe iniciar sesion")
//     : !isFreeUser
//     ? console.log("Ya eres premium")
//     : !hasPaid
//     ? console.log("estas en version free y no se ha confirmado el pago para ser premium")
//     : console.log("Ahora ya eres premium");

// ** opcion 2 

if (!isAuth){
    console.log("Debes iniciar sesion");
    return
}

if (!isFreeUser) {
    console.log("Ya eres premium");
    return
}

if (!hasPaid){
    console.log("estas en version free y no se ha confirmado el pago para ser premium");
    return
}

console.log("Ya eres premium");