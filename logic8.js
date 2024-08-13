// Instrucciones
// Mezclando datos de 2 arreglos
// La función mergeData() recibe como parámetros 2 arreglos:
// El primer arreglo es una lista de usuarios con una estructura como la siguiente
// [ { name: 'Georg', email: 'georg@academlo.com' },
//   { name: 'Andrea', email: 'andrea@gmail.com' }
// ]
// El segundo arreglo es una lista de asistencias con una estructura como la siguiente, donde attendance nos indica si el usuario asistió o no a sus clases de programación
// [
//   { email: 'georg@academlo.com', attendance: true },
//   { email: 'andrea@gmail.com', attendance: false }
// ]
// Tu labor es hacer una mezcla de los datos de ambos arreglos y devolver uno solo que contenga toda la información (sin datos duplicados).
// Ejemplo:
// En el caso de haber recibido los 2 arreglos mencionados anterior mente deberas retornar el siguiente arreglo:
// [
//     { name: 'Georg', email: 'georg@academlo.com', attendance: true },
//     { name: 'Andrea', email: 'andrea@gmail.com', attendance: false }
// ]
// *Recuerda utilizar return para devolver tu solución.
// *El primer arreglo que recibe la función puede tener n cantidad de usuarios.
// *El segundo arreglo que recibe la función puede tener n cantidad de asistencias.

// const userList = [
//   { name: "Georg", email: "georg@academlo.com" },
//   { name: "Andrea", email: "andrea@gmail.com" },
// ];

// const attendanceUser = [
//   { email: "georg@academlo.com", attendance: true },
//   { email: "andrea@gmail.com", attendance: false },
// ];
// const userAttendace = []

// const mergeData = (user, asistencia) => {

//   const cloneUserList = [...user];
//   const cloneAttendanceUser = [...asistencia];

//   const unionUserListAndAttendance = cloneUserList.concat(cloneAttendanceUser);

//   for (const user of unionUserListAndAttendance) {
//     console.log(user);
//     const emailUser = user.email
//     const nameUser = user.name
//     const attendanceUser = user.attendance

//     // console.log(datesUser);

//     if ( emailUser ){

//     }
//   }

// };
// mergeData(userList, attendanceUser);

const userList = [
    { name: "Georg", email: "georg@academlo.com" },
    { name: "Andrea", email: "andrea@gmail.com" },
  ];
  
  const attendanceUser = [
      { email: "andrea@gmail.com", attendance: false },
      { email: "georg@academlo.com", attendance: true },
  ];
  
const mergeData = (user, asistencia) => {
    const cloneUserList = [...user];
    const cloneAttendanceUser = [...asistencia];
  
    const correos = [];
  
    const getUserListEmail = (usersOfUserList) => {
      for (const user of usersOfUserList) {
        const emailUserList = user.email;
        correos.push(emailUserList);
      }
    };
    getUserListEmail(cloneUserList);
  
    const getAttendanceUserEmail = (usersOfAttendanceUser) => {
      for (const [i, user] of usersOfAttendanceUser.entries()) {
        const emailAttendanceUser = user.email;
        const attendanceAttendanceUser = user.attendance;
        //   console.log(correos.includes(emailAttendanceUser));
  
        if (correos.includes(emailAttendanceUser)) {
          for (const correo of correos) {
              if (correo === emailAttendanceUser ){
              }
          cloneUserList[0].attendance = attendanceAttendanceUser;
        }
    getAttendanceUserEmail(cloneAttendanceUser)
    return cloneUserList;
  };
  mergeData(userList, attendanceUser);
  console.log(mergeData(userList, attendanceUser));
  
  
  const correos = ["georg@academlo.com", "andrea@gmail.com"]
  const primerCorreo = "andrea@gmail.com" 
  
//   if ( correos.includes(primerCorreo)){
//       console.log("si existe correo de george");
//   }