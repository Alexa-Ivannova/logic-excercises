// # Instrucciones
//   *Obtén los correos de todos los usuarios*
//   La función getEmails() recibe como parámetro un arreglo de objetos con las propiedades email y age, tu labor es obtener todos los correos y retornarlos en un arreglo utilizando return.
// Ejemplo:
// Si el arreglo que recibe es <br>
// <pre><code>
// [
//   { name: "Erik", email: "erik@academlo.com", age: 20 },
//   { name: "Georg", email: "georg@academlo.com", age: 30 },
//   { name: "Daniel", email: "daniel@academlo.com", age: 40 }
// ]
// </code></pre>
// Deberas **retornar** el siguiente arreglo: <br>
// ["erik@academlo.com", "georg@academlo.com", "daniel@academlo.com"] <br>

// *Recuerda utilizar return para devolver tu solución. <br>
// *El arreglo que recibe la función puede tener n cantidad de usuarios.

const datos =[
    { name: "Erik", email: "erik@academlo.com", age: 20 },
      { name: "Georg", email: "georg@academlo.com", age: 30 },
      { name: "Daniel", email: "daniel@academlo.com", age: 40 }
    ]

function getEmail(datosPersonas) {
  
  let array = []
  for (const dato of datos) {

  let correosIndividual = dato.email
  array.push(correosIndividual)

}
// console.log(array);
return array
}

getEmail(datos)

