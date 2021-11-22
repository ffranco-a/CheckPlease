import currency from 'currency.js';

const calcularTotalPorCategoria = (gastos, categorias) => {

  //* declaro la propiedad `monto` en cada categoria, la inicializo en 0, ahí es donde sumaré los gastos
  let categoriasConMonto = categorias.map((categoria) => ({ ...categoria, monto: 0 }));

  //* recorro el array de gastos y sumo uno a uno sus montos a su categoría correspondiente
  gastos.forEach((gasto) => {

    //* encuentro el índice de la categoría a modificar
    let indice = categoriasConMonto.findIndex((categoria) => categoria.detalle === gasto.detalle);

    //* actualizo el monto
    categoriasConMonto[indice].monto = currency(categoriasConMonto[indice].monto).add(gasto.monto);
  });

  return categoriasConMonto;
};

export default calcularTotalPorCategoria;
