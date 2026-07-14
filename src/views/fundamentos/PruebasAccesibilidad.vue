<template>
  <div>
    <p>
      Para comprobar la accesibilidad no basta con una sola herramienta. Lo habitual es combinar
      pruebas automáticas, revisión manual y, cuando sea posible, alguna prueba con tecnologías de
      apoyo como un lector de pantalla.
    </p>
    <p>
      Además, es mucho más eficiente incorporar la accesibilidad desde el principio del proyecto
      que intentar corregirla al final, cuando ya hay que rehacer diseño, contenidos o desarrollo.
    </p>

    <h2>Pruebas automáticas</h2>
    <p>
      Las herramientas automáticas detectan con rapidez ciertos errores frecuentes: imágenes sin
      texto alternativo, campos de formulario sin etiqueta, problemas de contraste, estructura
      deficiente de encabezados o usos incorrectos de ARIA.
    </p>
    <p>
      Son muy útiles para una primera revisión y para integrar comprobaciones recurrentes en
      desarrollo, pero no pueden determinar por sí solas si una página es accesible. Que una
      herramienta no marque errores no significa que la experiencia sea correcta.
    </p>

    <h2>Pruebas manuales</h2>
    <p>La revisión manual es imprescindible para comprobar aspectos que una herramienta no puede valorar bien, por ejemplo:</p>
    <ul>
      <li>si un texto alternativo describe de verdad lo que la imagen aporta,</li>
      <li>si una tabla se entiende y no solo valida,</li>
      <li>si los mensajes de error ayudan a corregir el problema,</li>
      <li>si el foco se mueve de forma lógica,</li>
      <li>y si una tarea completa puede realizarse cómodamente con teclado.</li>
    </ul>
    <p>Por eso, las pruebas automáticas deben verse como ayuda y apoyo al análisis, no como validación completa.</p>

    <h2>Ejemplo: extensión de CADUA</h2>
    <p>
      CADUA cuenta ahora con una extensión de navegador que permite comprobar la accesibilidad de
      sitios web y aplicaciones mientras se navega. Está disponible para Chrome, Edge, Brave y
      otros navegadores basados en Chromium.
    </p>
    <p>
      Pulsa el icono de la extensión para comprobar la página abierta. La comprobación se refresca
      automáticamente mientras navegas y, si cierras el panel, el icono seguirá apareciendo en el
      margen derecho para volver a abrirlo. Para detener las comprobaciones, vuelve a pulsar el
      botón de la extensión.
    </p>

    <p>
      <a
        href="https://chromewebstore.google.com/detail/cadua/dkdoelfmjnclpchkhfghgeabpkbjkigj?authuser=0&amp;hl=es"
        target="_blank"
        rel="noreferrer"
      >Instalar la extensión CADUA desde Chrome Web Store</a>
    </p>

    <p>
      <strong>Importante:</strong> si has iniciado sesión en el navegador con tu cuenta de GCloud,
      Chrome Web Store puede indicar que no tienes acceso. Cierra sesión con esa cuenta o utiliza
      otro perfil del navegador para instalar la extensión.
    </p>

    <h3>Instalar la extensión desde Chrome Web Store</h3>
    <ol>
      <li>Abre la ficha de CADUA en Chrome Web Store desde el enlace anterior.</li>
      <li>Pulsa <strong>Añadir a Chrome</strong> y confirma la instalación cuando el navegador lo solicite.</li>
      <li>Abre una página web, pulsa el icono de CADUA en la barra del navegador y ejecuta la comprobación de accesibilidad.</li>
    </ol>

    <h3>Herramientas de la extensión</h3>
    <p>Además de la comprobación de accesibilidad, puedes utilizar estas herramientas:</p>
    <ul>
      <li>Jerarquía de encabezados.</li>
      <li>Imágenes para revisión manual.</li>
      <li>Enlaces.</li>
      <li>Atajos de teclado.</li>
    </ul>
    <p>
      También puedes configurar si la extensión permanece activa en una pestaña o en todo el
      navegador, y definir el retardo para iniciar las comprobaciones en una web.
    </p>

    <h2>Revisión mínima recomendable</h2>
    <p>Como pauta práctica, una revisión básica debería combinar al menos:</p>
    <ul>
      <li>una pasada con herramienta automática,</li>
      <li>una navegación completa por teclado,</li>
      <li>una comprobación de foco visible y orden de tabulación,</li>
      <li>una revisión de la estructura de encabezados y regiones,</li>
      <li>una prueba rápida con lector de pantalla,</li>
      <li>y una revisión humana con criterio técnico del contenido y la interacción.</li>
    </ul>
    <p>
      De esta forma, la comprobación se acerca mucho más a la experiencia real de uso y evita la
      falsa sensación de conformidad que a veces puede dar un informe automático.
    </p>
    <p>
      En este sentido, conviene recordar una idea importante: que una página cumpla parte de los
      requisitos o que una herramienta no detecte errores no significa automáticamente que la
      experiencia real de uso sea buena. La conformidad técnica ayuda mucho, pero no sustituye la
      revisión manual ni la comprobación de tareas reales.
    </p>

    <h3>Referencias</h3>
    <ul>
      <li><a href="https://www.w3.org/WAI/fundamentals/accessibility-intro/es" target="_blank" rel="noreferrer">W3C: Introducción a la accesibilidad web</a></li>
    </ul>
  </div>
</template>
