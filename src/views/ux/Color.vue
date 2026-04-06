<script setup lang="ts">
const html = `<p>En los siguientes apartados se habla de la percepción del color, el concepto de contraste de luminosidad entre color del texto y del fondo y los tipos de ceguera al color para no cometer el error de transmitir información únicamente mediante el color.</p>
<p>Contraste de luminosidad</p>
<p>Existe un porcentaje de la población con problemas para percibir los colores, ya sea a la hora de diferenciar determinados colores o porque padecen alguna forma de ceguera que solo les permite percibir un espectro reducido de colores. Por esto, es muy difícil determinar qué opciones de colores son las más idóneas a utilizar.</p>
<p>El contraste de luminosidad&nbsp;<b>entre el color del fondo y el color del texto&nbsp;</b>debe ser suficiente para garantizar una buena legibilidad del texto en situaciones desfavorables de mucha luz, pantallas con poco contraste o brillo y para personas con problemas de visión.</p>
<p>Las pautas de accesibilidad del contenido web establecen en su nivel AA los diferentes ratios mínimos de contraste según el tamaño y tipo de texto:</p>
<ul>
<li>Ratio de <b>4.5:1 </b> para textos menores a 18 puntos<span class="Apple-converted-space"> </span></li>
<li>Ratio de <b>3:1 </b>para:</li>
<ul>
<li>Texto mayor a 18 puntos</li>
<li>Texto en negrita mayor o igual a 14 puntos</li>
<li>Texto en enlaces y botones</li>
</ul>
<p>Es importante destacar que hablamos en unidades absolutas de puntos (pt) por lo que habría que hacer su conversión a su equivalente en px. Por ejemplo:</p>
<ul>
<li>18 puntos son 24px</li>
<li>14 puntos son 18,666px</li>
</ul>
<p>Podemos decir que con mayor contraste mayor facilidad de lectura del texto, con independencia de la combinación de colores. En la mayoría de las situaciones, lo más recomendable es texto negro sobre fondo blanco o colores muy cercanos a estos, como gris oscuro y tonos sepia.</p>
<p>Veamos una serie de frases de ejemplo con diferentes combinaciones de colores y su contraste:</p>
<p>&nbsp;</p>
<p>Como podemos observar, las combinaciones 1, 2 y 3 son nefastas, de difícil lectura. La combinación 4 sería el contraste mínimo recomendado y la 5 es la combinación&nbsp;más fácil de leer por su alto contraste.</p>
<p>Por otro lado,&nbsp;no se aconseja utilizar fondos degradados&nbsp;de color o con tramas ya que los cambios de tono de color podrían dificultar a algunas personas el acceso a la información del documento, sobre todo si se coloca texto sobre el color degradado.</p>
<p>Conocer el contraste de luminosidad entre colores</p>
<p>En la aplicación Accesibilidad de UAcloud está disponible la herramienta&nbsp;Comprobación del contraste entre colores&nbsp;con el objetivo de hacer un buen uso del color en tu web o documento. Es muy sencilla de utilizar, solo tienes que introducir el color de fondo y el color del texto y aparecerá el resultado. Si la ratio supera 4.5 de contraste, serán válidos los colores; en caso contrario, tendrás que modificarlos o buscar sugerencias de colores que sí lo cumplen.</p>
<p>En la captura anterior, se puede observar que el contraste entre el color de texto ydel fondo no es suficiente. Más abajo, tenemos una opción para buscar colores similares que sí cumplen los requisitos, como se puede ver en la siguiente imagen:</p>
<p>Si pulsamos en el botón Seleccionar de cada uno de los colores, podemos ver la previsualización y comprobar, que efectivamente el color es accesible, por ejemplo el primero que aparece, quedaría como se muestra en la siguiente imagen:</p>
<p>Uso semántico del color</p>
<p>Es recomendable no utilizar únicamente el color para trasmitir información. Siempre se debe incluir esta información mediante otro sistema alternativo, además del uso del color.</p>
<p>Veamos un ejemplo. Debemos corregir un examen de tipo test y escribimos lo siguiente:</p>
<p>Nota: La respuesta correcta está en color rojo.</p>
<p>Pregunta 1: Debemos transmitir información únicamente mediante el color.</p>
<p>a) Verdadero</p>
<p>b) Falso</p>
<p>En este ejemplo, una persona ciega será incapaz de saber cuáles son las respuestas correctas puesto que su lector de pantalla no puede interpretar los colores. Lo mismo ocurriría con una persona con dificultades para distinguir los colores.</p>
<p>Veamos ahora el mismo ejemplo pero utilizando una forma alternativa de transmitir la información:</p>
<p>Nota: La respuesta correcta está marcadas con un X.</p>
<p>Pregunta 1: Debemos transmitir información únicamente mediante el color.</p>
<p>a) Verdadero</p>
<p>b) X Falso</p>
<p>En este ejemplo una persona ciega conocerá las respuestas correctas cuando su lector lea la letra equis.</p>
<p>Si lo deseas, puedes consultar el apartado de&nbsp;uso del color en gráficas&nbsp;para más información y ejemplos.</p>
<p>Movimiento y parpadeos</p>
<p>Debemos evitar imágenes parpadeantes o con más de tres destellos por segundo, ya que pueden afectar a personas que sufran epilepsia foto-sensitiva.</p>
<p>Además, en el caso de que se utilicen imágenes con animaciones como ficheros GIF, no deberían durar más de 5 segundos ya que pueden dificultar la lectura del contenido del documento a personas con problemas cognitivos o con trastornos de déficit de atención e hiperactividad.</p>
<p>Simulando la ceguera al color</p>
<p>Se puede instalar en Google Chrome una extensión de navegador llamada Colorblindly que permite comprobar cómo se ven los colores de nuestra web por una persona con diferentes patologías de ceguera al color.</p>
<p>Descargar extensión colorblindly</p>
<p>Una vez instalada la extensión, y con cualquier página web abierta, podemos pulsar en el botón de la extensión y se mostrará ua ventana con una serie de filtros de color que simulan diferentes problemas de visión.</p>
<p>Aunque se pueden probar todos, nosotros nos centraremos en las de la categoría “Deuteranomaly” por ser las más extendidas, por ejemplo la de “Green blind”.</p>
<p>Veamos los esquemas de color típicos de Bootstrap, en este caso versión 5. La visión sin patologías sería:</p>
<p>Mientras que la versión con problemas de ceguera al color sería:</p>
<p>Se puede observar que tanto el verde como el rojo se ven grises. Lo que hace que que haya 3 botones con un color similar.</p>
<p>Da tiempo suficiente</p>
<p>El tiempo no puede ser un factor limitante a la hora de usar páginas y aplicaciones web. Por este motivo, es importante dar tiempo suficiente en las alertas importantes para que sean leídas.</p>
<p>El foco y mejoras de usabilidad en formularios</p>
<p>En los formularios, deberíamos llevar siempre el foco del teclado al primer campo para poder escribir directamente.</p>
<p>Además, es una buena práctica, si el formulario es muy extenso, guardar el estado de edición (por ejemplo con una variable editado) y si se intenta abandonar la página, nos alertará para prevenir la pérdida de información.</p>
<p>Todas estas mejoras de usabilidad se pueden encontrar el fichero formularios.html del repositorio en GitHub del curso en el fichero de formularios.html.</p>`
</script>

<template>
  <div v-html="html" />
</template>
