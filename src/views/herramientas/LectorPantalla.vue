<template>
  <div>
    <p>
      Probar una página con un lector de pantalla es la forma más directa de comprobar si la
      semántica que hemos escrito sirve para algo. Es también la prueba que más intimida y la que
      menos se hace, cuando en realidad con cinco teclas ya se detectan bastantes problemas.
    </p>

    <h2>Qué es un lector de pantalla</h2>
    <p>
      Un lector de pantalla es un programa que transmite por voz, o por una línea braille, lo que
      ocurre en la pantalla. En este curso usamos <strong>NVDA</strong>, un lector de pantalla
      gratuito para Windows utilizado por personas ciegas y con baja visión para acceder al
      ordenador, las aplicaciones y la web.
    </p>
    <p>No es el único, y conviene saber que existen otros, porque no todos se comportan igual:</p>
    <ul>
      <li><strong>VoiceOver</strong>, incluido en macOS, iOS y iPadOS.</li>
      <li><strong>TalkBack</strong>, incluido en Android.</li>
      <li><strong>JAWS</strong>, de pago y muy extendido en entornos profesionales de Windows.</li>
      <li><strong>Narrador</strong>, incluido en Windows.</li>
    </ul>
    <p>
      Cada uno se combina habitualmente con un navegador: NVDA con Firefox o Chrome, VoiceOver con
      Safari. Que algo funcione con una combinación no garantiza que funcione con todas, así que una
      prueba con un solo lector detecta problemas, pero no demuestra conformidad.
    </p>
    <p>
      NVDA no se limita a leer el texto visible: también comunica la estructura y la información
      semántica que recibe del navegador, como encabezados, botones, etiquetas o estados.
    </p>
    <p>
      Su interés en este curso no es aprender a usarlo a fondo, sino entender qué información
      recibe una persona cuando la interfaz está bien o mal construida.
    </p>

    <h2>Cómo hacer una prueba rápida</h2>
    <p>
      Para una primera toma de contacto, basta con activar el lector y hacer una navegación básica
      por teclado. En NVDA, la tecla modificadora se denomina <strong>NVDA</strong>; normalmente
      es <strong>INSERT</strong> o <strong>BLOQ MAYÚS</strong>, según la configuración.
    </p>
    <ul>
      <li><strong>TAB</strong> y <strong>Shift + TAB</strong> para recorrer enlaces, botones y campos de formulario.</li>
      <li><strong>H</strong> para saltar entre encabezados.</li>
      <li><strong>F</strong> para ir a formularios.</li>
      <li><strong>T</strong> para ir a tablas.</li>
      <li><strong>K</strong> para saltar entre enlaces.</li>
      <li><strong>NVDA + F7</strong> para abrir listados de enlaces, encabezados y otros elementos.</li>
      <li>Flechas del teclado para leer el contenido de forma secuencial.</li>
    </ul>
    <p>
      Estas teclas de una letra funcionan en el modo exploración de NVDA. Al editar un campo de
      texto escriben su carácter, por lo que no deben utilizarse como atajos en ese momento.
    </p>
    <p>No hace falta dominar todos los comandos para que la prueba sea útil. Con muy poco ya pueden detectarse bastantes problemas.</p>
    <p>
      Un consejo que cambia por completo el resultado de la prueba: <strong>apaga la pantalla o
      cierra los ojos</strong>. Mientras se ve la página, el cerebro rellena los huecos y no se
      percibe lo que falta; escuchando a ciegas se nota enseguida cuándo un botón se anuncia como
      «botón» sin más, o cuándo un cambio en la página no se dice.
    </p>

    <h2>Qué revisar con un lector de pantalla</h2>
    <p>Al hacer una prueba rápida con lector de pantalla conviene comprobar al menos lo siguiente:</p>
    <ul>
      <li>si el título de la página y los encabezados describen bien la estructura,</li>
      <li>si los enlaces y botones tienen nombres comprensibles,</li>
      <li>si los campos del formulario anuncian su etiqueta, estado y errores,</li>
      <li>si las tablas y regiones se identifican correctamente,</li>
      <li>si los mensajes o cambios que aparecen sin recargar la página se anuncian,</li>
      <li>y si una tarea completa puede hacerse sin depender del ratón ni de información exclusivamente visual.</li>
    </ul>
    <p>
      Un lector de pantalla permite descubrir enseguida cuándo una interfaz está pensada solo
      visualmente: encabezados simulados, iconos sin nombre, cambios dinámicos no anunciados o
      formularios que visualmente parecen claros, pero semánticamente no lo son.
    </p>
    <p>
      No sustituye a las pruebas con personas usuarias, pero sí es una de las formas más rápidas de
      detectar problemas reales de semántica, navegación y etiquetado.
    </p>

    <p>
      Puede descargarse desde
      <a href="https://www.nvaccess.org/download/" target="_blank" rel="noreferrer">NV Access: Descargar NVDA (Inglés)</a>.
    </p>
  </div>
</template>
