<template>
  <div>
    <p>
      En los siguientes apartados se habla de la percepción del color, el concepto de contraste de
      luminosidad entre color del texto y del fondo y los tipos de ceguera al color para no
      cometer el error de transmitir información únicamente mediante el color.
    </p>

    <h2>Contraste de luminosidad</h2>
    <p>
      Existe un porcentaje de la población con problemas para percibir los colores, ya sea a la
      hora de diferenciar determinados colores o porque padece alguna forma de ceguera que solo le
      permite percibir un espectro reducido de colores.
    </p>
    <p>
      El contraste de luminosidad <strong>entre el color del fondo y el color del texto</strong>
      debe ser suficiente para garantizar una buena legibilidad del texto en situaciones
      desfavorables de mucha luz, pantallas con poco contraste o brillo y para personas con
      problemas de visión.
    </p>
    <p>
      Las pautas de accesibilidad del contenido web establecen en su nivel AA los diferentes ratios
      mínimos de contraste según el tamaño y tipo de texto:
    </p>
    <ul>
      <li>Ratio de <strong>4.5:1</strong> para texto normal, incluidos los enlaces y botones cuando contienen texto normal.</li>
      <li>Ratio de <strong>3:1</strong> para texto grande: a partir de 18 puntos en peso normal o 14 puntos en negrita.</li>
      <li>Ratio de <strong>3:1</strong> para componentes no textuales necesarios, como el borde, el icono o el indicador de foco de un control.</li>
    </ul>
    <p>
      Es importante destacar que hablamos en unidades absolutas de puntos (`pt`), por lo que habría
      que hacer su conversión a su equivalente en píxeles. Por ejemplo:
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

    <h2>Comprobar el contraste entre colores</h2>
    <p>
      En la aplicación Accesibilidad de UACloud está disponible la herramienta Comprobación del
      contraste entre colores con el objetivo de hacer un buen uso del color en tu web o documento.
      Solo tienes que introducir el color de fondo y el color del texto y aparecerá el resultado.
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

    <h2>Uso semántico del color</h2>
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
      En este ejemplo, una persona ciega será incapaz de saber cuáles son las respuestas correctas,
      puesto que su lector de pantalla no puede interpretar los colores. Lo mismo ocurriría con una
      persona con dificultades para distinguir los colores.
    </p>
    <p>Veamos ahora el mismo ejemplo utilizando una forma alternativa de transmitir la información:</p>
    <p>Nota: La respuesta correcta se indica también mediante texto.</p>
    <p>Pregunta 1: Debemos transmitir información únicamente mediante el color.</p>
    <ol type="a">
      <li>Verdadero</li>
      <li><strong>Respuesta correcta:</strong> Falso</li>
    </ol>
    <p>
      En este ejemplo, la respuesta puede identificarse sin necesidad de percibir el color.
    </p>

    <h2>Movimiento y parpadeos</h2>
    <p>
      Debemos evitar contenidos con más de tres destellos en un segundo, ya que pueden afectar a
      personas con epilepsia fotosensible.
    </p>
    <p>
      Además, cuando se utilicen animaciones que se inician automáticamente y duran más de cinco
      segundos, debe existir una forma de pausarlas, detenerlas u ocultarlas, salvo que el
      movimiento sea imprescindible para la actividad. Esto también se aplica a GIF y contenidos
      que se actualizan automáticamente.
    </p>

    <h2>Simular la ceguera al color</h2>
    <p>
      Se puede instalar en Google Chrome una extensión de navegador llamada Colorblindly que
      permite comprobar cómo se ven los colores de nuestra web por una persona con diferentes
      patologías de ceguera al color.
    </p>
    <p>
      Una vez instalada la extensión y con cualquier página web abierta, podemos pulsar en el
      botón de la extensión y se mostrará una ventana con una serie de filtros de color que simulan
      diferentes problemas de visión.
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
