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
      La extensión de navegador de CADUA para Chrome, Edge, Brave o cualquier navegador Chromium
      comparte la base de comprobaciones de la aplicación web CADUA, pero añade pruebas que solo
      pueden ejecutarse desde el propio navegador.
    </p>
    <p>
      Al ejecutarse sobre la página ya renderizada, permite revisar estados generados por
      JavaScript, contraste de color, visibilidad real de elementos o contenidos accesibles solo
      tras autenticación. Además, puede marcar visualmente sobre la propia interfaz qué elementos
      presentan errores, lo que agiliza mucho su localización y corrección.
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
