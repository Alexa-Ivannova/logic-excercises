// Instrucciones
// En este ejercicio, escribirás código para ayudar a un freelancer a comunicarse con sus clientes sobre los precios de ciertos proyectos. Escribirás algunas funciones utilitarias para calcular rápidamente los costos para los clientes.
// Calcular la tarifa diaria dada una tarifa por hora
// Un cliente contacta al freelancer para preguntar sobre sus tarifas. El freelancer explica que trabaja 8 horas al día. Sin embargo, el freelancer solo conoce sus tarifas por hora para el proyecto. Ayúdalos a estimar una tarifa diaria dada una tarifa por hora.
// dayRate(89);
// // => 712
const horasDeTrabajoPorDia = 8;
const costoHora = 89;
const presupuestoProyecto = 20000;
const diasProyecto = 230;
const descuento = 0.42;

const tarifaDiaria = (valorHora, horasDiarias) => {
    let valorDelDía = valorHora * horasDiarias;
    return valorDelDía;
};
tarifaDiaria(costoHora, horasDeTrabajoPorDia);
// console.log(tarifaDiaria(costoHora, horasDeTrabajoPorDia));


// La tarifa diaria no necesita ser redondeada ni cambiada a una precisión "fija".
// Calcular el número de días laborables dado un presupuesto fijo
// Otro día, un gerente de proyecto ofrece al freelancer trabajar en un proyecto con un presupuesto fijo. Dado el presupuesto fijo y la tarifa por hora del freelancer, ayúdalos a calcular la cantidad de días que trabajarían hasta que se agote el presupuesto. El resultado debe ser redondeado hacia abajo al número entero más cercano.
// daysInBudget(20000, 89);
// // => 28
const daysInBudget = (presupuestoTotalProyecto, pagoDiario) => Math.floor(presupuestoTotalProyecto / pagoDiario);
daysInBudget(presupuestoProyecto,tarifaDiaria(costoHora, horasDeTrabajoPorDia));
// console.log(daysInBudget(presupuestoProyecto,tarifaDiaria(costoHora, horasDeTrabajoPorDia)));


// Calcular la tarifa con descuento para proyectos grandes
// A menudo, los clientes del freelancer los contratan para proyectos que abarcan varios meses. En estos casos, el freelancer decide ofrecer un descuento por cada mes completo, y los días restantes se facturan a la tarifa diaria. Cada mes tiene 22 días facturables. Ayúdalos a estimar su costo para tales proyectos, dada una tarifa por hora, la cantidad de días que abarca el proyecto y una tasa de descuento mensual. El descuento siempre se pasa como un número, donde 42% se convierte en 0.42. El resultado debe ser redondeado hacia arriba al número entero más cercano.
// priceWithMonthlyDiscount(89, 230, 0.42);
// // => 97972
const priceWithMonthlyDiscount = (tarifa, dias, porcentajeDescuento) => {
  const diasFacturadosPorMes = 22;
  const diasSinDescuento = dias % diasFacturadosPorMes;
  const tarifaDia = tarifaDiaria(costoHora, horasDeTrabajoPorDia);
  const mesesProyecto = Math.floor(dias / diasFacturadosPorMes);
  const valorPorMes = diasFacturadosPorMes * tarifaDia;

  const valorDiasSinDescuento = diasSinDescuento * tarifaDia;
  const valorMesSinDescuento = mesesProyecto * valorPorMes;
  const valorDescuento = valorMesSinDescuento * porcentajeDescuento;
  const valorTotalMesesConDescuento = valorMesSinDescuento - valorDescuento;

  return Math.ceil(valorTotalMesesConDescuento + valorDiasSinDescuento);
// return[
//     valorDiasSinDescuento, tarifaDia, mesesProyecto
// ]
};
priceWithMonthlyDiscount(costoHora, diasProyecto, descuento);
// console.log(priceWithMonthlyDiscount(costoHora, diasProyecto, descuento));