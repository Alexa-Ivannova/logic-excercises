// Instrucciones:
// La novia de Lucian está en camino a casa, y él no ha cocinado la cena de aniversario.
// En este ejercicio, vas a escribir algo de código para ayudar a Lucian a cocinar una exquisita lasaña de su libro de recetas favorito.
// Tienes cuatro tareas relacionadas con el tiempo que se pasa cocinando la lasaña.

// 1) MINUTOS EN EL HORNO:
// Define la constante EXPECTED_MINUTES_IN_OVEN que representa cuántos minutos debe estar la lasaña en el horno. Debe ser exportada. Según el libro de cocina, el tiempo esperado en el horno en minutos es 40.

// 2) MINUTOS RESTANTES EN EL HORNO:
// Implementa la función remainingMinutesInOven que toma como parámetro los minutos actuales que la lasaña ha estado en el horno y devuelve cuántos minutos la lasaña debe permanecer en el horno, basado en el tiempo esperado en el horno de la tarea anterior.
// remainingMinutesInOven(30);
// // => 10

// 3) TIEMPO DE PREPARACIÓN DE LA LASAÑA EN MINUTOS (PREPARACIÓN)
// Implementa la función preparationTimeInMinutes que toma como parámetro el número de capas que has añadido a la lasaña y devuelve cuántos minutos has pasado preparando la lasaña, asumiendo que cada capa te toma 2 minutos en preparar.
// preparationTimeInMinutes(2);
// // => 4

// 4) TIEMPO TOTAL INVERTIDO EN LA PREPARACIÓN DE LA LASAÑA (PREPARACIÓN + HORNO)
// Implementa la función totalTimeInMinutes que toma dos parámetros: el parámetro numberOfLayers que es el número de capas que has añadido a la lasaña, y el parámetro actualMinutesInOven que es el número de minutos que la lasaña ha estado en el horno. La función debe devolver cuántos minutos en total has trabajado cocinando la lasaña, que es la suma del tiempo de preparación en minutos y el tiempo en minutos que la lasaña ha pasado en el horno en ese momento.

// totalTimeInMinutes(3, 20);
// // => 26


// INFORMATION ON LASAGNA PREPARATION
const numberLayersPerLasagna = 3;
const minutesPerLayer = 2;
let preparationMinutesPerLasagna;

// INFORMATION ON LASAGNA BAKING TIME
const minutesInOven = 40;
const actualMinutesInOven = 20
let remainingMinutes = minutesInOven;

let totalPreparationMinutes;

const remainingMinutesInOven = (timeElapsedInOven)=>{
    remainingMinutes = minutesInOven - timeElapsedInOven
    return remainingMinutes; 
}
remainingMinutesInOven (actualMinutesInOven)
// console.log(remainingMinutesInOven (actualMinutesInOven));

const preparationTimeInMinutes = (layerPerLasagna) =>{
    preparationMinutesPerLasagna = layerPerLasagna * minutesPerLayer
    return preparationMinutesPerLasagna
}
preparationTimeInMinutes(numberLayersPerLasagna)
// console.log(preparationTimeInMinutes(numberLayersPerLasagna));

const totalTimeInMinutes = (timePreparationPerLasagna,timeElapsedInOven) =>{
    totalPreparationMinutes = timePreparationPerLasagna + timeElapsedInOven
    return totalPreparationMinutes
}
totalTimeInMinutes (preparationTimeInMinutes(numberLayersPerLasagna, minutesPerLayer), actualMinutesInOven)
console.log(totalTimeInMinutes(preparationTimeInMinutes(numberLayersPerLasagna, minutesPerLayer), actualMinutesInOven));