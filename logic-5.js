// # Instrucciones
//   *Obtén el correo de un usuario*
//   La función getEmail() recibe como parámetro un objeto con las propiedades email y age, tu labor es obtener el correo y retornarlo utilizando return.
// Ejemplo:
// Si el objeto que recibe es <br>
// { name: "Erik", email: "erik@academlo.com" } <br>
// deberás utilizar return para devolver "erik@academlo.com".


// SOLUCIÓN SIN FUNCIÓN:
// const datosPersona = { 
//     name: "Erik", 
//     email: "erik@academlo.com" 
// }
// console.log(datosPersona.email);


// FUNCIÓN:
const datosPersona = { 
    name: "Erik", 
    email: "erik@academlo.com" 
    
}

function getEmail(emailPersona) {

const email = emailPersona.email

return email;
}
let valorFuncion = getEmail(datosPersona)

// console.log(valorFuncion);