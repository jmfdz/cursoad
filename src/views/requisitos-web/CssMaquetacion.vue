<template>
  <div>
    <p>
      La estructura semántica y el formato del texto no son suficientes por sí solos: la forma en
      que maquetamos y coloreamos una página con CSS también tiene consecuencias directas sobre su
      accesibilidad. En este apartado se reúnen las herramientas de CSS moderno, el diseño
      responsive y el uso accesible del color y del movimiento.
    </p>

    <h2>CSS moderno para maquetación</h2>
    <p>
      CSS moderno aporta herramientas de layout y estilo que evitan depender de trucos de
      maquetación:
    </p>
    <ul>
      <li><strong>Flexbox</strong> distribuye elementos en una sola dimensión (útil en barras de navegación o formularios en línea).</li>
      <li><strong>Grid</strong> distribuye en dos dimensiones a la vez (útil en maquetas de página completas).</li>
      <li>Las <strong>custom properties</strong> (variables CSS) centralizan valores reutilizables.</li>
      <li>Las <strong>container queries</strong> adaptan un componente según el tamaño de su propio contenedor en vez del viewport completo.</li>
      <li>Pseudo-clases como <code>:focus-visible</code>, <code>:has()</code>, <code>:is()</code> o <code>:where()</code> permiten seleccionar estados y estructuras complejas sin añadir clases solo para poder aplicarles estilo.</li>
    </ul>
    <p>
      En un proyecto que use <strong>Bootstrap 5</strong> como base de estilos, buena parte de
      estas cuestiones ya vienen resueltas de fábrica: sus componentes (botones, formularios,
      navegación, indicadores de foco) están construidos siguiendo estas buenas prácticas por
      defecto, así que no suele hacer falta reimplementarlas a mano salvo que se personalice el
      diseño más allá de lo que ofrece el framework. Los ejemplos de este curso parten precisamente
      de Bootstrap 5 como base de CSS y JS.
    </p>

    <h2>Diseño responsive</h2>
    <p>
      El diseño debe adaptarse a contenido, dispositivo y preferencias, no solo a puntos de corte
      por tamaño de pantalla: debe seguir funcionando con zoom, texto ampliado, distintas
      orientaciones, entrada táctil y teclado. Buenas prácticas:
    </p>
    <ul>
      <li>anchuras máximas y evitar el scroll horizontal cuando se amplía el contenido,</li>
      <li>imágenes responsivas,</li>
      <li>objetivos táctiles de tamaño suficiente,</li>
      <li>evitar alturas fijas que corten el texto.</li>
    </ul>

    <h2>Accesibilidad y CSS</h2>
    <p>Dos reglas generales conviene tener siempre presentes:</p>
    <ul>
      <li>
        no usar <code>display: none</code> ni <code>visibility: hidden</code> para ocultar solo
        visualmente un contenido que debe seguir anunciándose a las tecnologías de apoyo, ya que
        ambas propiedades lo retiran también del árbol de accesibilidad, no solo de la pantalla;
      </li>
      <li>
        respetar la preferencia <code>prefers-reduced-motion</code> de la persona usuaria,
        reduciendo o eliminando animaciones no esenciales cuando esté activada. El apartado
        «Imágenes y elementos no textuales» explica con más detalle qué contenido en movimiento
        debe poder pausarse.
      </li>
    </ul>
    <pre class="course-code"><code>@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}</code></pre>

    <h3>Orden visual con CSS y navegación por teclado</h3>
    <p>
      Los frameworks CSS permiten reordenar visualmente elementos (por ejemplo, con clases de
      utilidad de orden en Bootstrap) sin tocar el HTML. Esto puede provocar que el orden visual
      difiera del orden en el que el teclado recorre esos mismos elementos, porque el foco sigue
      el orden del documento, no el orden visual aplicado por CSS.
    </p>
    <p>
      Por ejemplo, en un grupo de botones <em>Cancelar</em> y <em>Guardar cambios</em>, si CSS
      coloca &quot;Guardar cambios&quot; primero visualmente pero en el HTML aparece después, el
      teclado seguirá pasando primero por &quot;Cancelar&quot;. El orden de foco no tiene por qué
      coincidir estrictamente con la disposición visual, pero debe seguir siendo lógico: lo más
      simple para evitar sorpresas es escribir los elementos en el HTML en el mismo orden en que
      se van a mostrar y recibir el foco.
    </p>

    <h2>Color, contraste y percepción visual</h2>
    <p>
      Existe un porcentaje de la población con problemas para percibir los colores, ya sea a la
      hora de diferenciar determinados colores o porque padece alguna forma de ceguera que solo le
      permite percibir un espectro reducido de colores.
    </p>

    <h3>Contraste de luminosidad</h3>
    <p>
      El contraste de luminosidad <strong>entre el color del fondo y el color del texto</strong>
      debe ser suficiente para garantizar una buena legibilidad del texto en situaciones
      desfavorables de mucha luz, pantallas con poco contraste o brillo y para personas con
      problemas de visión.
    </p>
    <p>
      Las pautas de accesibilidad del contenido web establecen en su nivel AA los diferentes
      ratios mínimos de contraste según el tamaño y tipo de texto:
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
      Es importante destacar que hablamos en unidades absolutas de puntos (`pt`), por lo que
      habría que hacer su conversión a su equivalente en píxeles. Por ejemplo:
    </p>
    <ul>
      <li>18 puntos son 24px.</li>
      <li>14 puntos son 18,666px.</li>
    </ul>
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

    <h3>Comprobar el contraste entre colores</h3>
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

    <h3>Uso semántico del color</h3>
    <p>
      Es recomendable no utilizar únicamente el color para transmitir información. Siempre se debe
      incluir esta información mediante otro sistema alternativo, además del uso del color.
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

    <h3>Simular la ceguera al color</h3>
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
  </div>
</template>
