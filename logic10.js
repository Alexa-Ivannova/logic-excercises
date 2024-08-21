// ## Instrucciones
// En este ejercicio, implementarás la lógica de misiones para un nuevo juego RPG que un amigo está desarrollando. El personaje principal del juego es Annalyn, una valiente chica con un leal y feroz perro mascota. Desafortunadamente, ocurre un desastre cuando su mejor amigo es secuestrado mientras buscaba bayas en el bosque. Annalyn intentará encontrar y liberar a su mejor amigo, opcionalmente llevando a su perro en esta misión.
// Después de un tiempo siguiendo el rastro de su mejor amigo, encuentra el campamento en el que su amigo está prisionero. Resulta que hay dos secuestradores: un poderoso caballero y un astuto arquero.
// Habiendo encontrado a los secuestradores, Annalyn considera cuál de las siguientes acciones puede llevar a cabo:
// ### Ataque rápido
// Se puede realizar un ataque rápido si el caballero está dormido, ya que le toma tiempo ponerse su armadura, por lo que estará vulnerable.
// ### Espiar
// El grupo puede ser espiado si al menos uno de ellos está despierto. De lo contrario, espiar es una pérdida de tiempo.
// ### Señalizar al prisionero
// Se puede señalizar al prisionero usando sonidos de pájaros si el prisionero está despierto y el arquero está dormido, ya que los arqueros están entrenados en señalización de pájaros y podrían interceptar el mensaje.
// ### Liberar al prisionero
// Annalyn puede intentar infiltrarse en el campamento para liberar al prisionero. Esto es algo arriesgado y solo puede tener éxito de una de dos maneras:
// - Si Annalyn lleva a su perro mascota, puede rescatar al prisionero si el arquero está dormido. El caballero tiene miedo del perro y el arquero no tendrá tiempo de prepararse antes de que Annalyn y el prisionero puedan escapar.
// - Si Annalyn no lleva a su perro, ella y el prisionero deben ser muy sigilosos. Annalyn puede liberar al prisionero si el prisionero está despierto y el caballero y el arquero están ambos dormidos, pero si el prisionero está dormido no pueden ser rescatados: el prisionero se asustaría con la aparición repentina de Annalyn y despertaría al caballero y al arquero.
// Tienes cuatro tareas: implementar la lógica para determinar si las acciones anteriores están disponibles según el estado de los tres personajes encontrados en el bosque y si el perro mascota de Annalyn está presente o no.

// ### 1. Verificar si la acción 'Ataque rápido' es posible
// Implementa una función llamada puedeEjecutarAtaqueRapido que tome un valor booleano que indique si el caballero está despierto. Esta función devuelve verdadero si la acción 'Ataque rápido' está disponible según el estado del personaje. De lo contrario, devuelve falso:
// const caballeroEstaDespierto = true;
// puedeEjecutarAtaqueRapido(caballeroEstaDespierto);
// // => false

// ESTADO DE ALERTA DE LOS PERSONAJES
const caballeroEstaDespierto = false;
const arqueroEstaDespierto = false
const prisioneroEstaDespierto = true
const perroPresente =false;

// ACCIONES JUGADOR
let ataqueRapido;
let espiar;
let señalizarPrisionero;
let liberarPrisionero;

// EJECUTAR ATAQUE RAPIDO
const puedeEjecutarAtaqueRapido = (atacar) =>{
    ataqueRapido = !atacar
}
puedeEjecutarAtaqueRapido(caballeroEstaDespierto)
// console.log(ataqueRapido);

// ### 2. Verificar si la acción 'Espiar' es posible
// Implementa una función llamada puedeEspiar que tome tres valores booleanos, indicando si el caballero, el arquero y el prisionero, respectivamente, están despiertos. La función devuelve verdadero si la acción 'Espiar' está disponible según el estado de los personajes. De lo contrario, devuelve falso:
// const caballeroEstaDespierto = false;
// const arqueroEstaDespierto = true;
// const prisioneroEstaDespierto = false;
// puedeEspiar(caballeroEstaDespierto, arqueroEstaDespierto, prisioneroEstaDespierto);
// // => true

// EJECUTAR ESPIAR
const puedeEspiar = (estadoCaballero, estadoArquero, estadoPrisionero)=> {
    espiar = estadoCaballero || estadoArquero || estadoPrisionero 
    while (estadoCaballero || estadoArquero || estadoPrisionero === true){
        espiar = !espiar
        break
    }
}
puedeEspiar(caballeroEstaDespierto, arqueroEstaDespierto, prisioneroEstaDespierto)
// console.log(espiar);

// ### 3. Verificar si la acción 'Señalizar al prisionero' es posible
// Implementa una función llamada puedeSenalizarPrisionero que tome dos valores booleanos, indicando si el arquero y el prisionero, respectivamente, están despiertos. La función devuelve verdadero si la acción 'Señalizar al prisionero' está disponible según el estado de los personajes. De lo contrario, devuelve falso:
// const arqueroEstaDespierto = false;
// const prisioneroEstaDespierto = true;
// puedeSenalizarPrisionero(arqueroEstaDespierto, prisioneroEstaDespierto);
// // => true

// SEÑALIZAR PRISIONERO
const puedeSenalizarPrisionero = (estadoArquero, estadoPrisionero) => {
    señalizarPrisionero = !estadoArquero && estadoPrisionero
}
puedeSenalizarPrisionero(arqueroEstaDespierto, prisioneroEstaDespierto)
// console.log(señalizarPrisionero);

// ### 4. Verificar si la acción 'Liberar al prisionero' es posible
// Implementa una función llamada puedeLiberarPrisionero que tome cuatro valores booleanos. Los primeros tres parámetros indican si el caballero, el arquero y el prisionero, respectivamente, están despiertos. El último parámetro indica si el perro mascota de Annalyn está presente. La función devuelve verdadero si la acción 'Liberar al prisionero' está disponible según el estado de los personajes y la presencia del perro mascota de Annalyn. De lo contrario, devuelve falso:
// const caballeroEstaDespierto = false;
// const arqueroEstaDespierto = true;
// const prisioneroEstaDespierto = false;
// const perroMascotaEstaPresente = false;
// puedeLiberarPrisionero(caballeroEstaDespierto, arqueroEstaDespierto, prisioneroEstaDespierto, perroMascotaEstaPresente);
// // => false

// LIBERAR PRISIONERO 
const puedeLiberarPrisionero = (estadoPerro, estadoPrisionero, estadoCaballero, estadoArquero ) =>{
liberarPrisionero = ( (estadoPerro && señalizarPrisionero) || (estadoPrisionero && !estadoCaballero && !estadoArquero) )
}
puedeLiberarPrisionero(perroPresente, prisioneroEstaDespierto, caballeroEstaDespierto, arqueroEstaDespierto )
// console.log(liberarPrisionero);