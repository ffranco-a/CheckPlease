import currency from 'currency.js';

//? importo los sub-helpers
import calcularTotalPorCategoria from './calcularTotalPorCategoria';
import calcularCuantasPersonas from './calcularCuantasPersonas';
import calcularGastoIndividual from './calcularGastoIndividual';
import calcularConsumoIndividual from './calcularConsumoIndividual';

const calcular = (reunionTipoSalida, todesCompartenTodo, grupo, gastos, categorias) => {

  const resultados = {
    reunionTipoSalida,
    todesCompartenTodo,
  };

  //* Calculo el total gastado, sumando en un reducer todos los gastos efectuados
  const totalGastado = gastos.reduce((acc, cur) => currency(acc).add(cur.monto), 0);
  resultados.total = currency(totalGastado).format();

  //* Divido el totalGastado en la cantidad de personas que hay en el grupo para obtener la división en partes iguales
  resultados.divisionPartesIguales = totalGastado.distribute(grupo.cantidad)[0].format();

  //* CASO A1 - todes comparten todo y no hay gastos previos que computar: se requiere una simple división en partes iguales, la cuál ya se hizo, así que la devuelvo
  if (todesCompartenTodo && reunionTipoSalida) return resultados;

  //* CASO A2 y B1 - no todes comparten todo: se requiere una división más específica, así que a realizar esos cálculos:

  //* Sumo los gastos por categoría (contemplo el caso que haya más de un gasto por categoría)
  const categoriasConMonto = calcularTotalPorCategoria(gastos, categorias);

  //* Establecer cuánta gente consumió cada categoría por separado
  const categoriasConCantidad = calcularCuantasPersonas(categoriasConMonto, grupo);

  //* Dividir el total que se gastó en esa categoría entre la cantidad de personas que la compartieron
  resultados.categorias = categoriasConCantidad.map((categoria) => ({
    ...categoria,
    montoIndividual: categoria.monto.distribute(categoria.comparten.cantidad)[0].format(),
  }));

  //* Por cada persona del grupo, calcular qué compartió y qué no, para saber cuánto debe poner
  let grupoConConsumos = calcularConsumoIndividual(grupo, resultados.categorias);

  //* CASO B2 : Si NO es una reunión de tipo salida, hay gastos individuales que restar a los montos obtenidos hasta el momento
  if (!reunionTipoSalida) {
    grupoConConsumos = calcularGastoIndividual(grupoConConsumos, gastos);
  }

  resultados.grupo = grupoConConsumos;

  console.log(resultados); //! DELETE
  return resultados;
};

export default calcular;
