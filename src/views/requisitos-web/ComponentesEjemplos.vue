<template>
  <div class="lh-lg">
    <p>
      Como hemos visto en el apartado anterior, crear componentes interactivos accesibles tiene una
      gran complejidad. En nuestro caso, tenemos la suerte de utilizar la librería Bootstrap, que
      proporciona unos componentes muy accesibles desde la base.
    </p>
    <p>
      En el repositorio de GitHub del curso se puede consultar el fichero `componentes.html` con
      ejemplos de cuadros modales, acordeones, desplegables, pestañas, etc.
    </p>

    <h2 class="mt-4 mb-3">Qué debe cumplir un componente interactivo</h2>
    <p>
      Aunque cada componente tenga sus particularidades, en general todos deberían cumplir una serie
      de requisitos comunes:
    </p>
    <ul>
      <li>poder utilizarse con teclado,</li>
      <li>mostrar un foco visible y mantenerlo en un lugar lógico,</li>
      <li>tener un nombre accesible claro,</li>
      <li>reflejar correctamente su estado, por ejemplo abierto o cerrado,</li>
      <li>y anunciar o hacer perceptibles los cambios importantes cuando el contenido se actualiza.</li>
    </ul>

    <h2 class="mt-4 mb-3">Ejemplos habituales</h2>
    <p>
      Entre los componentes que suelen exigir más cuidado están los cuadros modales, los
      desplegables, los acordeones, las pestañas o cualquier panel que muestra y oculta contenido
      con JavaScript.
    </p>
    <p>
      En todos estos casos no basta con que el componente se vea bien. También debe responder bien
      al teclado, indicar su estado y permitir que el usuario entienda qué acaba de cambiar en la
      interfaz.
    </p>

    <h2 class="mt-4 mb-3">Errores frecuentes</h2>
    <ul>
      <li>iconos sin nombre accesible,</li>
      <li>botones o enlaces que visualmente parecen correctos, pero no reciben foco,</li>
      <li>paneles que se abren sin gestionar bien el foco,</li>
      <li>estados de carga, éxito o error que solo se perciben visualmente,</li>
      <li>y componentes que cambian el contenido, pero no dejan claro qué ha ocurrido.</li>
    </ul>
    <p>
      Por eso conviene revisar estos ejemplos no solo desde el punto de vista visual, sino también
      desde la interacción real, la semántica y la percepción de cambios.
    </p>
  </div>
</template>
