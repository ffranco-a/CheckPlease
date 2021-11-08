const calcular = (grupo, gastos, categorias) => {
  const total = gastos.reduce((acc, cur) => acc + parseInt(cur.monto), 0).toFixed(2);
  const divisionTradicional = (total / grupo.length).toFixed(2);

  //* De haber más de un gasto por categoría, los sumo
  let gastosPorCategoria = [];
  let gastosDetalle = [];
  gastos.forEach((gasto) => {
    if (gastosDetalle.includes(gasto.detalle))
      gastosPorCategoria = gastosPorCategoria.map((categoria) => {
        if (categoria.detalle === gasto.detalle) {
          categoria.monto += parseInt(gasto.monto);
        }
        return categoria;
      });
    else {
      gastosPorCategoria.push({...gasto, monto: parseInt(gasto.monto)});
      gastosDetalle.push(gasto.detalle);
    }
  });

  const resultados = {
    total,
    divisionTradicional,
    gastosPorCategoria,
  };

  console.log(gastosPorCategoria); // DELETE DELETE DELETE
  console.log(resultados); // DELETE DELETE DELETE

  return resultados;
};

module.exports = calcular;
