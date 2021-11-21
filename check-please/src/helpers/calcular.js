import calcularTotalPorCategoria from './totalPorCategoria';
import calcularCuantasPersonas from './cuantasPersonas';
import calcularGastosIndividuales from './gastosIndividuales';
import currency from 'currency.js';

const calcular = (reunionTipoSalida, todesCompartenTodo, grupo, gastos, categorias) => {
  // console.log('grupo : ', grupo); // DELETE DELETE DELETE
  // console.log('gastos : ', gastos); // DELETE DELETE DELETE
  // console.log('categorias : ', categorias); // DELETE DELETE DELETE
  // console.log('todesCompartenTodo : ', todesCompartenTodo); // DELETE DELETE DELETE

  const totalGastado = gastos.reduce((acc, cur) => currency(acc).add(cur.monto), 0);
  const divisionPartesIguales = totalGastado.distribute(grupo.cantidad)[0].format();

  let resultados = {
    total: currency(totalGastado).format(),
    divisionPartesIguales,
    todesCompartenTodo,
  };

  //* CASO A - todes comparten todo: si se requiere una simple división en partes iguales, retornarla
  if (todesCompartenTodo) return resultados;

  //* CASO B - no todes comparten todo: se requiere una división más específica, así que a realizar esos cálculos:

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


  //* CASO B2 : Si NO es una reunión de tipo salida, hay gastos individuales que restar a los montos obtenidos hasta el momento
  if (!reunionTipoSalida) {
    
      const grupoConGastos = calcularGastosIndividuales(grupo, gastos);
      console.log(grupoConGastos); // DELETE DELETE DELETE

  }

  console.log(resultados); // DELETE DELETE DELETE
  return resultados;
};

export default calcular;
