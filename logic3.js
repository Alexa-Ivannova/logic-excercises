// * Encuentra la segunda palabra de un string *
// La función findSecondWord() recibe como parámetro un string cualquiera, tu labor es tomar ese string, obtener la segunda palabra e imprimirla usando console.log()
// Ejemplo: Si el string que recibe es "Hola, me llamo Erik" deberás retornar la palabra me 

const palabra = "Hola, me llamo erik"
const arrayPalabra = palabra.split(" ")
const indexBuscar = 2

function findSecondWord(indexArray){
    const index = indexBuscar -1
    indexArray = arrayPalabra.at(index)

    // console.log(indexArray);
}

findSecondWord(arrayPalabra)

