# Check please!

## User Stories

- Un único tipo de usuario:

1. Puede añadir personas
   - Puede añadir un número ilimitado de personas
   - Puede identificar a cada persona con un nombre
   - **_(Magia)_** Puede, si prefiere, poner el número de personas presentes en el grupo y ya (para los casos en que todo el mundo compartió todo, donde es innecesario identificar individualmente a las personas)

<br />

2. Puede añadir gastos realizados
   - Puede establecer el monto del gasto ( `$` núm )
   - Puede asignar el detalle del gasto ( `qué` se compró )
   - Puede asignar un gasto a una persona ( `quién` lo gastó )
   - Puede cambiar la asignación de un gasto a otra persona (si originalmente se equivocó, por ej)
   - **_(Magia)_** Puede asignar quiénes consumieron qué de los gastos (para luego realizar la división correspondiente)

<br />

3. Una vez ingresada toda la información, puede "Calcular" y ver el detalle de todo:
   - **Gasto total** (suma de todos los gastos combinados)
   - **Monto por categoría** (desglose de gastos por categorías)
   - **División individual del monto por categoría** (Estilo _"si consumiste `categoría` deberías poner `cociente`"_ - división del monto de esa categoría entre las personas que la consumieron)
   - **Cálculo individual** (cuánto debe poner cada une y quién(es) debe(n) recibir el dinero. _El cálculo individual se realiza teniendo en cuenta 1-Cuánto dinero ya puso esa persona y 2-Qué cosas consumió y cuáles no)_
   - **_(Magia)_** Puede optar por una opción que facilite el proceso de devolución, y establezca exactamente quién devuelve cuánto a quién (que en ciertos contextos puede ser muy engorroso)
   - _Promedio (división básica normal, para comparar y ver lo útil de la herramienta)_
   - Puede volver a la página principal donde aún estará cargada toda la información, para hacer cambios de último momento si lo necesitase
   - Puede descargar un archivito con todos los detalles para enviar a sus amigues, si así lo prefiere

<br />

> > Puede mostrar un video brevísimo que explique por qué conviene usar CheckPlease

<br />

- Para usuarios recurrentes:
   - Puede guardar grupos de amigues y con un solo click ya cargar a esas personas (de todas formas, es editable)
   - Puede ver historial de cálculos (o al menos los últimos)  

<br />

<hr />

## TODO

### Landing: crear una landing page con bienvenida y preguntas mínimas para ajustar la interfaz a la situación:

> ¿Qué tipo de reunión es?
>
> > **SALIDA** (hay que pagar una cuenta de un restaurante por ejemplo (no hubieron gastos individuales))
>
> > **JUNTADA** (algunas personas compraron y llevaron productos que luego fueron consumidos por el grupo (hubieron gastos individuales que deben ser divididos entre más de una persona))

> ¿Todas las personas consumieron todo?
>
> > **Sí** (la cuenta se dividirá en partes iguales)
>
> > **No** (permite establecer quiénes consumieron qué de la cuenta para luego hacer la división correspondiente por categoría)

### CALCULAR:

preguntar si todes consumieron todo (dividir la cuenta en partes iguales, tantas como personas haya en el grupo) y en base a eso:

- Caso que sí:
  - sumar todos los gastos
  - dividirlos en la cantidad de personas
  - devolver eso y ya. _Ready but boringgggg, esta app da para más!_  
    <br />
- Caso que no:
  - unificar gastos por categoría y almacenar en una variable `total por categoría`
  - establecer, de cada categoría, cuánta gente consumió esa categoría (verificar la propiedad "todes" de cada categoría) y almacenarlo en variable `cuantas`
  - dividir el `total por categoría` entre `cuantas` para obtener la `división` de cada categoría (el monto que debería poner una persona si consumió esa categoría)
    <br /> <br />
  - corroborar qué cosas consumió cada persona individualmente
  - por cada una de ellas, sumar la `división` correspontiente (montos individuales) y almacenar ese resultado en una variable `total de consumo individual`
  - _(sólo en tipo REUNIONES)_ sumar el `total de gastos individuales` realizado por cada persona y restarlo al `total de consumo individual` anterior, resultando en el monto definitivo de una persona, almacenarlo en `total definitivo individual`
    - si `total definitivo individual` es **positivo** ( consumió más de lo que pagó ) entonces esa persona debe poner ese total a un fondo común
    - si `total definitivo individual` es **negativo** ( pagó más de lo que consumió ) esa persona debe recibir parte del fondo común

<hr />

## Ideas

- Linkear con "Adventure Time Check pleeease"
- Linkear con _How to split the check w/John Wilson_

<hr />

## Bugs

- Versión beta: crear un gasto y no asignarlo a nadie, al momento de calcular rompe.

<hr />

<!--
opciones paleta de colores 

#303841 #47555E #345B63 #E8ECF1 ( #556E53 #515748 )
#303841 #47555E #1E5F74 #E8ECF1 ( #556E53 #515748 )


#769FCD #B9D7EA #D6E6F2 #F7FBFC
https://colorhunt.co/palette/f7fbfcd6e6f2b9d7ea769fcd

#6C737E #7393A7 #B5CFD8 #E8ECF1
https://colorhunt.co/palette/e8ecf1b5cfd87393a76c737e


#112031 #152D35 #345B63 #D4ECDD
https://colorhunt.co/palette/d4ecdd345b63152d35112031


#27332D #515748 #FADB3F #ECF7C5
https://colorhunt.co/palette/fadb3fecf7c551574827332d

#4B6587 #C8C6C6 #F0E5CF #F7F6F2
https://colorhunt.co/palette/f0e5cff7f6f2c8c6c64b6587

#334257 #476072 #548CA8 #EEEEEE
https://colorhunt.co/palette/334257476072548ca8eeeeee

#233b6e #415f9d #d3d6db #eff0f4
https://colorhunt.co/palette/eff0f4d3d6db415f9d233b6e

#303841 #47555E #7AA5D2 #EEEEEE
https://colorhunt.co/palette/30384147555e7aa5d2eeeeee

#152A38 #29435C #556E53 #D1D4C9
https://colorhunt.co/palette/152a3829435c556e53d1d4c9

#303841 #47555E #29435C #E8ECF1



#1E5F74

#D89216

#E79E4F

#FA7D09

#FDB827
-->
