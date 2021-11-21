const calcularCuantasPersonas = (categorias, tamañoDelGrupo) => {

  //* recorro las categorias y cuento cuanta gente las consumió
  const categoriasConCantidad = categorias.map((categoria) => {

    //* Si a la categoria la consumieron todes en el grupo, le seteo la cantidad al total del grupo
    if (categoria.todes) {
      let nuevaCategoria = {
        cantidad: tamañoDelGrupo,
        categoria,
      }
      return nuevaCategoria;
    } 
    
    //* Caso contrario, cuento cuánta gente hay en el arreglo "comparten" de la categoria
    else {
      let nuevaCategoria = {
        cantidad: categoria.comparten.length,
        categoria,
      }
      return nuevaCategoria;
    }
  })

  return categoriasConCantidad;
};

export default calcularCuantasPersonas;
