// La función findLastLetter() recibe como parámetro un string cualquiera, tu labor es tomar ese string y obtener el último caracter
// Ejemplo: Si el string que recibe es "Hola, me llamo Erik", en el console.log deberás imprimir la letra k

// const cadena = "numero uno es"
//  console.log(cadena.length);
// Esto me muestra el ultimo caracter de mi string .length --> el -1 es para indicar el ultimo caracter del index, se cuenta desde 0
//  charAt me muestra el caracter
// console.log(cadena.charAt(cadena.length -1))

    const palabra = "Hola";

    function findLastLetter(p){
        const ultimaPalabra = p.charAt(p.length -1)
        console.log(ultimaPalabra);
    }
    findLastLetter(palabra)