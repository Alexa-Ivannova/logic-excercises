// Instrucciones
// * Encuentra la última palabra de un string *
// La función findLastWord() recibe como parámetro un string cualquiera, tu labor es tomar ese string y obtener la última palabra
// Ejemplo: Si el string que recibe es "Hola, me llamo Erik", deberás retornar la palabra Erik

const palabra = "Hola, me llamo Erik"
const arrayPalabra = palabra.split(" ")

function findLastWord(extraerPalabraArray) {
    const ultimaPalabra= extraerPalabraArray.at(-1)
// console.log(ultimaPalabra);
}

findLastWord(arrayPalabra)