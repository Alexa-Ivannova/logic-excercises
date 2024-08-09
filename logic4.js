// Instrucciones
// Suma los elementos de un arreglo
// La función sumValues() recibe como parámetro un arreglo con 3 elementos de tipo Number, tu labor es tomar los 3 valores y sumarlos, en esta ocasión tendrás que hacer que la función sumValues los retorne utilizando return.
// Ejemplo: Si el array que recibe es [1, 2, 3], deberás utilizar return para devolver 6 que es la suma de todos los elementos.

// SOLUCIÓN 1
// const array = [1 , 3, 3]
// function sumValues(arraySumar){
//   const sumArray = arraySumar.reduce((resultAnterior, valorActual) =>{
//     return(resultAnterior + valorActual);
//   })
//   console.log(sumArray);
// }
// sumValues(array)

// SOLUCIÓN 2
// const array = [2 , 5, 3]
// function sumValues(arreglo){
//     let resultAnterior = 0

//     for (let i = 0; i < arreglo.length; i++){

//         let valorActual = arreglo.at(i)
//         let sumArray = valorActual + resultAnterior
//         resultAnterior = sumArray

//         console.log(sumArray);
//     }
// }
// sumValues(array)
// la e = elemento (recorre solito el array)

// SOLUCIÓN 3
// const array = [2, 5, 3];
// function sumValues(arraySumar) {
//     let resultadoAnterior = 0
//   arraySumar.forEach((e) => {
//     let suma = e + resultadoAnterior
//     resultadoAnterior = suma
// });
// console.log(resultadoAnterior);
// }
// sumValues(array);

// SOLUCIÓN 4
const array = [1, 2, 3];

function sumValues(arraySumar){

    let resultAnterior = 0;
    for(const num of arraySumar){
        let suma = num + resultAnterior
        resultAnterior = suma
    }
    console.log(resultAnterior);
}
sumValues(array)