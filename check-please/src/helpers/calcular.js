import calcularTotalPorCategoria from './totalPorCategoria';
import calcularCuantasPersonas from './cuantasPersonas';

const calcular = (grupo, gastos, categorias, todesCompartenTodo) => {
  console.log('grupo : ', grupo); // DELETE DELETE DELETE
  console.log('gastos : ', gastos); // DELETE DELETE DELETE
  console.log('categorias : ', categorias); // DELETE DELETE DELETE
  console.log('todesCompartenTodo : ', todesCompartenTodo); // DELETE DELETE DELETE
  
  const total = gastos.reduce((acc, cur) => acc + parseInt(cur.monto), 0).toFixed(2);
  const divisionTradicional = (total / grupo.cantidad).toFixed(2);

  //* si se requiere una división en partes iguales, retornarla
  if (todesCompartenTodo) {
    let resultados = {
      total,
      divisionTradicional,
      todesCompartenTodo,
    };
    console.log(resultados) // DELETE DELETE DELETE
    return resultados;
  } 

  //* si se requiere una división más específica, realizar esos cálculos
  else {

    //* De haber más de un gasto por categoría, los unifico
    const totalPorCategoria = calcularTotalPorCategoria(gastos);
  
    //* Establecer cuánta gente consumió cada categoría por separado
    const categoriasConCantidad = calcularCuantasPersonas(categorias, grupo.cantidad);
    
    const resultados = {
      total,
      divisionTradicional,
      todesCompartenTodo,
      totalPorCategoria,
      categoriasConCantidad,
    };
    
    console.log(resultados); // DELETE DELETE DELETE
    return resultados;
  }

};

export default calcular;
