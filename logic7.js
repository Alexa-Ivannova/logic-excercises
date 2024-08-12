// Instrucciones
// Elimina un usuario del arreglo
// La función deleteUser() recibe 2 parámetros:
// users: Un arreglo de usuarios
// email: Un correo
// Tu labor es encontrar en el arreglo users al usuario que tenga el correo recibido y eliminarlo, finalmente tienes que usar return para devolver el arreglo users sin el usuario eliminado.
// Ejemplo: Recibimos los siguientes parámetros
//     users = [{ name: 'Erik', email: 'erik@academlo.com' }, { name: 'Georg', email: 'georg@academlo.com' }, { name: 'Andrea', email: 'andrea@gmail.com' }];
// email = "erik@academlo.com"
// El arreglo que debemos retornar es:
//     [{ name: 'Georg', email: 'georg@academlo.com' }, { name: 'Andrea', email: 'andrea@gmail.com' }]
// Ya que eliminamos el al usuario con el correo "erik@academlo.com".

const users = [
  { name: "Erik", email: "erik@academlo.com" },
  { name: "Georg", email: "georg@academlo.com" },
  { name: "Andrea", email: "andrea@gmail.com" },
];

const eliminarCorreo = "andrea@gmail.com";

const deleteUser = (datosPersonas, eliminarDatoPersona) => {
  const usersClon = structuredClone(datosPersonas);
  const array = [];

  for (const user of usersClon) {
    let correosUsuarios = user.email;

    if (correosUsuarios === eliminarDatoPersona) {
      delete user.email;
    }

    if (user.email !== undefined) {
      array.push(user);
    }
  }
  console.log(array);
  return array;
};
deleteUser(users, eliminarCorreo);

const deleteUser2 = (datos, correoEliminar) => {
  const cloneUsers = [...datos];

  for (const [i, user] of cloneUsers.entries()) {
    if (correoEliminar === user.email) {
      datos.splice(i, 1);
    }
  }
  return datos;
};
deleteUser2(users, eliminarCorreo);
console.log(deleteUser2(users, eliminarCorreo));