const calcularCuantasPersonas = (categorias, grupo) => {
  
  //* recorro las categorias y cuento cuanta gente las consumió
  const categoriasConCantidad = categorias.map((categoria) => {

    //* Si a la categoria la consumieron todes en el grupo, le seteo la cantidad al total del grupo
    if (categoria.todes) {
      let nuevaCategoria = {
        ...categoria,
        comparten: {
          personas: grupo.personas.map((persona) => persona.nombre),
          cantidad: grupo.cantidad,
        },
      };
      return nuevaCategoria;
    }

    //* Caso contrario, cuento cuánta gente hay en el arreglo "comparten" de la categoria
    else {
      let nuevaCategoria = {
        ...categoria,
        comparten: {
          personas: categoria.comparten,
          cantidad: categoria.comparten.length,
        },
      };
      return nuevaCategoria;
    }
  });

  return categoriasConCantidad;
};

export default calcularCuantasPersonas;
