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
      <li>Ratio de <strong>4.5:1</strong> para textos menores a 18 puntos.</li>
      <li>Ratio de <strong>3:1</strong> para texto mayor a 18 puntos, texto en negrita mayor o igual a 14 puntos y texto en enlaces y botones.</li>
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
      Podemos decir que a mayor contraste, mayor facilidad de lectura del texto, con independencia
      de la combinación de colores. En la mayoría de las situaciones, lo más recomendable es texto
      negro sobre fondo blanco o colores muy cercanos a estos, como gris oscuro y tonos sepia.
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
    <p>
      Si la ratio supera 4.5 de contraste, los colores serán válidos. En caso contrario, tendrás
      que modificarlos o buscar sugerencias de colores que sí lo cumplan.
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
    <p>a) Verdadero</p>
    <p>b) Falso</p>
    <p>
      En este ejemplo, una persona ciega será incapaz de saber cuáles son las respuestas correctas,
      puesto que su lector de pantalla no puede interpretar los colores. Lo mismo ocurriría con una
      persona con dificultades para distinguir los colores.
    </p>
    <p>Veamos ahora el mismo ejemplo utilizando una forma alternativa de transmitir la información:</p>
    <p>Nota: La respuesta correcta está marcada con una X.</p>
    <p>Pregunta 1: Debemos transmitir información únicamente mediante el color.</p>
    <p>a) Verdadero</p>
    <p>b) X Falso</p>
    <p>
      En este ejemplo una persona ciega conocerá las respuestas correctas cuando su lector lea la
      letra equis.
    </p>

    <h2>Movimiento y parpadeos</h2>
    <p>
      Debemos evitar imágenes parpadeantes o con más de tres destellos por segundo, ya que pueden
      afectar a personas que sufran epilepsia fotosensitiva.
    </p>
    <p>
      Además, en el caso de que se utilicen imágenes con animaciones como ficheros GIF, no
      deberían durar más de 5 segundos ya que pueden dificultar la lectura del contenido del
      documento a personas con problemas cognitivos o con trastornos de déficit de atención e
      hiperactividad.
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
      Aunque se pueden probar todos, el curso se centra en la categoría “Deuteranomaly”, por ser
      una de las más extendidas, por ejemplo la variante “Green blind”.
    </p>
    <p>
      En los ejemplos de Bootstrap del curso se puede observar cómo, bajo este tipo de simulación,
      el verde y el rojo llegan a percibirse de forma muy parecida. Eso confirma por qué no debe
      dependerse solo del color para distinguir estados o acciones.
    </p>

  </div>
</template>
