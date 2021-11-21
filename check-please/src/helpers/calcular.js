import calcularTotalPorCategoria from './totalPorCategoria';
import calcularCuantasPersonas from './cuantasPersonas';
import currency from 'currency.js';

const calcular = (grupo, gastos, todesCompartenTodo, categorias) => {
  // console.log('grupo : ', grupo); // DELETE DELETE DELETE
  // console.log('gastos : ', gastos); // DELETE DELETE DELETE
  // console.log('categorias : ', categorias); // DELETE DELETE DELETE
  // console.log('todesCompartenTodo : ', todesCompartenTodo); // DELETE DELETE DELETE

  const total = gastos.reduce((acc, cur) => currency(acc).add(cur.monto), 0);
  const divisionTradicional = total.distribute(grupo.cantidad)[0].format();
  
  let resultados = {
    total: currency(total).format(),
    divisionTradicional,
    todesCompartenTodo,
  };
  
  //* si se requiere una simple división en partes iguales, retornarla
  if (todesCompartenTodo) return resultados;

  //* caso contrario, se requiere una división más específica, así que a realizar esos cálculos:

  //* Sumo los gastos por categoría (contemplo el caso que haya más de un gasto por categoría)
  const categoriasConMonto = calcularTotalPorCategoria(gastos, categorias);

  //* Establecer cuánta gente consumió cada categoría por separado
  const categoriasConCantidad = calcularCuantasPersonas(categoriasConMonto, grupo);

  resultados = {
    ...resultados,
    categoriasConCantidad,
  };

  console.log(resultados); // DELETE DELETE DELETE
  return resultados;
};

export default calcular;
