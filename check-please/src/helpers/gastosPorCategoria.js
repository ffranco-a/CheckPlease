const calcularGastosPorCategoria = (gastos) => {
  let gastosPorCategoria = [];
  let gastosDetalle = [];

  //* recorro el array de gastos y compruebo uno a uno si es una categoría es nueva o si ya existe en el array
  gastos.forEach((gasto) => {

    //* si ya existe sólo debo aumentar su monto
    if (gastosDetalle.includes(gasto.detalle))
      gastosPorCategoria = gastosPorCategoria.map((categoria) => {
        if (categoria.detalle === gasto.detalle) {
          categoria.monto += parseInt(gasto.monto);
        }
        return categoria;
      });
      
    //* si es una categoría es nueva la agrego a `gastosPorCategoria`
    else {
      let categoria = {
        id: gastosPorCategoria.length,
        monto: parseInt(gasto.monto),
        detalle: gasto.detalle,
      };
      gastosPorCategoria.push(categoria);
      gastosDetalle.push(gasto.detalle);
    }
  });

  return gastosPorCategoria;
};

export default calcularGastosPorCategoria;
