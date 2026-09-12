<template>
  <div>
    <p>
      Existe un porcentaje de la población con problemas para percibir los colores, ya sea a la
      hora de diferenciar determinados colores o porque padece alguna forma de ceguera que solo le
      permite percibir un espectro reducido de colores.
    </p>
    <p>
      A ellas se suman las personas con baja visión y, sobre todo, cualquier persona en una
      situación desfavorable: un móvil a pleno sol, una pantalla vieja con poco contraste o un
      proyector mal calibrado. Por eso el color no es una decisión únicamente estética: condiciona
      quién puede leer el contenido y quién no.
    </p>
    <p>En este apartado se tratan tres cuestiones distintas y complementarias:</p>
    <ul>
      <li>que exista <strong>contraste suficiente</strong> entre el texto y su fondo,</li>
      <li>que el color <strong>no sea el único medio</strong> para transmitir una información,</li>
      <li>cómo <strong>comprobar</strong> ambas cosas antes de publicar.</li>
    </ul>

    <h2>Contraste de luminosidad</h2>
    <p>
      El contraste de luminosidad <strong>entre el color del fondo y el color del texto</strong>
      debe ser suficiente para garantizar una buena legibilidad del texto en situaciones
      desfavorables de mucha luz, pantallas con poco contraste o brillo y para personas con
      problemas de visión.
    </p>
    <p>
      Las pautas de accesibilidad del contenido web establecen en su nivel AA los diferentes
      ratios mínimos de contraste según el tamaño y tipo de texto. Corresponden a los criterios
      <a href="https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html" rel="noreferrer">1.4.3 Contraste (mínimo)</a>
      y
      <a href="https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html" rel="noreferrer">1.4.11 Contraste no textual</a>:
    </p>
    <ul>
      <li>Ratio de <strong>4.5:1</strong> para texto normal, incluidos los enlaces y botones cuando contienen texto normal.</li>
      <li>Ratio de <strong>3:1</strong> para texto grande: a partir de 18 puntos en peso normal o 14 puntos en negrita.</li>
      <li>Ratio de <strong>3:1</strong> para componentes no textuales necesarios, como el borde, el icono o el indicador de foco de un control.</li>
    </ul>
    <p>
      Conviene no confundir estos dos últimos: el 3:1 de un icono o un borde no sustituye al
      4,5:1 del texto cuando ambos están presentes en el mismo elemento. Un botón con fondo de
      color y texto dentro necesita cumplir las dos cosas a la vez: el texto necesita 4,5:1 frente
      a su fondo, y si además el botón se reconoce visualmente por su forma o su fondo (sin
      depender del texto para saber dónde empieza y termina), ese fondo necesita 3:1 frente a lo
      que lo rodea. El 3:1 solo sustituye al 4,5:1 cuando no hay texto que valorar, por ejemplo un
      botón formado únicamente por un icono.
    </p>
    <p>
      Es importante destacar que el umbral de «texto grande» se expresa en unidades absolutas de
      puntos (<code>pt</code>), por lo que habría que hacer su conversión a su equivalente en
      píxeles. Por ejemplo:
    </p>
    <ul>
      <li>18 puntos son 24px.</li>
      <li>14 puntos son 18,666px.</li>
    </ul>
    <p>
      La equivalencia entre puntos, píxeles y <code>rem</code> se explica con detalle en el
      apartado «Texto, tipografía e idioma». Lo que interesa retener aquí es que un texto no se
      considera grande por parecerlo: hay que comprobar su tamaño real antes de aplicarle el
      umbral de 3:1.
    </p>
    <p>
      Un contraste suficiente facilita la lectura, pero no existe una única combinación adecuada
      para todas las personas. Además de cumplir los mínimos, conviene comprobar el resultado con
      los colores, tamaños y estados reales de la interfaz.
    </p>
    <p>
      Como podemos observar en los ejemplos del curso, las combinaciones con poco contraste son de
      difícil lectura. El mínimo recomendable sería la combinación que alcanza 4.5:1 y, cuanto más
      alto es el contraste, más fácil resulta la lectura.
    </p>
    <p>
      Por otro lado, no se aconseja utilizar fondos degradados de color o con tramas, ya que los
      cambios de tono de color podrían dificultar el acceso a la información del documento, sobre
      todo si se coloca texto sobre ese fondo.
    </p>
    <p>
      Conviene revisar también los <strong>estados</strong> de los elementos, no solo su aspecto en
      reposo: el texto deshabilitado, el texto de sugerencia de un campo
      (<code>placeholder</code>), el color de un enlace ya visitado o el fondo de una fila
      resaltada suelen ser los puntos donde se pierde el contraste sin que nadie se dé cuenta.
    </p>

    <h2>Comprobar el contraste entre colores</h2>
    <p>
      En la aplicación Accesibilidad de UACloud está disponible la herramienta Comprobación del
      contraste entre colores con el objetivo de hacer un buen uso del color en tu web o
      documento. Solo tienes que introducir el color de fondo y el color del texto y aparecerá el
      resultado.
    </p>
    <figure class="my-4">
      <img
        src="/curso-media/image7.png"
        alt="Herramienta de contraste de color con ratio 3.83, insuficiente."
        class="figure-img img-fluid rounded-4 border shadow-sm"
        loading="lazy"
      />
      <figcaption>Ejemplo de una combinación que no alcanza el contraste mínimo.</figcaption>
    </figure>
    <p>
      Si la ratio alcanza 4.5:1, la combinación cumple el mínimo para texto normal. Para texto
      grande o componentes no textuales el mínimo es 3:1. En caso contrario, tendrás que
      modificar los colores o buscar sugerencias que sí lo cumplan.
    </p>
    <p>
      En las capturas del tema se puede observar un caso en el que el contraste no es suficiente y
      cómo la propia herramienta propone colores alternativos accesibles para corregirlo.
    </p>
    <p>
      Una forma cómoda de trabajar es definir la paleta una sola vez con
      <strong>custom properties</strong> y comprobar únicamente esas combinaciones, en lugar de ir
      revisando color a color por toda la hoja de estilos:
    </p>
    <pre class="course-code" tabindex="0"><code>:root {
  --color-texto: #000000;
  --color-fondo: #f1f5f8;
  --color-primario: #005682; /* 7.2:1 sobre blanco */
}</code></pre>
    <p>
      Además de la herramienta de UACloud, el propio navegador ayuda: las herramientas de
      desarrollo de Chrome y Firefox muestran la ratio de contraste al inspeccionar un texto y
      permiten corregir el color desde el mismo panel.
    </p>

    <h2>Uso semántico del color</h2>
    <p>
      Es recomendable no utilizar únicamente el color para transmitir información. Siempre se debe
      incluir esta información mediante otro sistema alternativo, además del uso del color. Es el
      criterio
      <a href="https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html" rel="noreferrer">1.4.1 Uso del color</a>,
      de nivel A.
    </p>
    <p>Veamos un ejemplo incorrecto:</p>
    <p>Nota: La respuesta correcta está en color rojo.</p>
    <p>Pregunta 1: Debemos transmitir información únicamente mediante el color.</p>
    <ol type="a">
      <li>Verdadero</li>
      <li class="text-danger">Falso</li>
    </ol>
    <p>
      En este ejemplo, una persona ciega será incapaz de saber cuáles son las respuestas
      correctas, puesto que su lector de pantalla no puede interpretar los colores. Lo mismo
      ocurriría con una persona con dificultades para distinguir los colores.
    </p>
    <p>Veamos ahora el mismo ejemplo utilizando una forma alternativa de transmitir la información:</p>
    <p>Nota: La respuesta correcta se indica también mediante texto.</p>
    <p>Pregunta 1: Debemos transmitir información únicamente mediante el color.</p>
    <ol type="a">
      <li>Verdadero</li>
      <li><strong>Respuesta correcta:</strong> Falso</li>
    </ol>
    <p>En este ejemplo, la respuesta puede identificarse sin necesidad de percibir el color.</p>
    <p>
      La misma regla se aplica a muchos casos habituales de una aplicación de gestión, en los que
      basta con acompañar el color de un texto o un icono con su alternativa textual:
    </p>
    <ul>
      <li>los <strong>estados de una tabla</strong> (una fila roja de «rechazada» necesita además la palabra «Rechazada»),</li>
      <li>los <strong>campos con error</strong> de un formulario, que no pueden marcarse solo con un borde rojo,</li>
      <li>las <strong>leyendas de un gráfico</strong>, que además del color pueden distinguirse por forma, trama o etiqueta,</li>
      <li>los <strong>enlaces dentro de un párrafo</strong>, que necesitan algo más que un color distinto al del texto: lo habitual es el subrayado.</li>
    </ul>
    <p>
      Este último caso es el que más se incumple sin querer al retirar el subrayado por motivos de
      diseño. Si se quita, el enlace debe distinguirse del texto que lo rodea con una ratio de
      3:1 <em>y</em> ofrecer alguna señal adicional al pasar el ratón o al recibir el foco.
    </p>

    <h2>Simular la ceguera al color</h2>
    <p>
      Se puede instalar en Google Chrome una extensión de navegador llamada Colorblindly que
      permite comprobar cómo se ven los colores de nuestra web por una persona con diferentes
      patologías de ceguera al color.
    </p>
    <p>
      Una vez instalada la extensión y con cualquier página web abierta, podemos pulsar en el
      botón de la extensión y se mostrará una ventana con una serie de filtros de color que
      simulan diferentes problemas de visión.
    </p>
    <p>
      Conviene probar varios filtros, por ejemplo los relacionados con la dificultad para percibir
      determinados tonos verdes. Estas simulaciones ayudan a detectar problemas, pero no sustituyen
      las pruebas con personas usuarias.
    </p>
    <p>
      En los ejemplos de Bootstrap del curso se puede observar cómo, bajo este tipo de simulación,
      el verde y el rojo llegan a percibirse de forma muy parecida. Eso confirma por qué no debe
      dependerse solo del color para distinguir estados o acciones.
    </p>
    <p>
      Las herramientas de desarrollo de Chrome incluyen también esta simulación sin instalar nada:
      en el panel <em>Rendering</em> se puede activar <em>Emulate vision deficiencies</em> y probar
      protanopía, deuteranopía, tritanopía y visión borrosa.
    </p>
  </div>
</template>
