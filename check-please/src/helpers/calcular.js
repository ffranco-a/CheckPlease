import calcularGastosPorCategoria from './gastosPorCategoria';

const calcular = (grupo, gastos, categorias) => {
  const total = gastos.reduce((acc, cur) => acc + parseInt(cur.monto), 0).toFixed(2);
  const divisionTradicional = (total / grupo.length).toFixed(2);

  //* De haber más de un gasto por categoría, los unifico
  const gastosPorCategoria = calcularGastosPorCategoria(gastos);

  //*

  const resultados = {
    total,
    divisionTradicional,
    gastosPorCategoria,
  };

  return resultados;
};

export default calcular;
