<template>
  <div>
    <h2>Qué son las WCAG</h2>
    <p>
      Las WCAG (<i>Web Content Accessibility Guidelines</i>) son las pautas del W3C para hacer
      accesible el contenido web. Aunque nacieron para la web, hoy son también la referencia
      principal para revisar la accesibilidad de páginas, aplicaciones, documentos digitales y otros
      contenidos en este ámbito.
    </p>

    <h2>Versiones</h2>
    <ul>
      <li><strong>WCAG 1.0</strong>: publicada en 1999. Fue la primera versión.</li>
      <li><strong>WCAG 2.0</strong>: publicada en 2008. Introdujo la estructura basada en principios, pautas y criterios de conformidad.</li>
      <li><strong>WCAG 2.1</strong>: publicada en 2018. Añadió requisitos, sobre todo orientados a móvil, baja visión y aspectos cognitivos.</li>
      <li><strong>WCAG 2.2</strong>: publicada en 2023. Es la versión más reciente y la que tomamos como referencia en este curso.</li>
    </ul>

    <h2>Los cuatro principios</h2>
    <p>Las WCAG 2.2 se apoyan en cuatro principios fundamentales:</p>
    <ul>
      <li><strong>1. Perceptible</strong>: la información debe poder percibirse por distintos medios. Por ejemplo, una imagen informativa necesita texto alternativo y un vídeo puede necesitar subtítulos.</li>
      <li><strong>2. Utilizable</strong>: la interfaz debe poder manejarse. Por ejemplo, una página debe poder usarse con teclado y no solo con ratón.</li>
      <li><strong>3. Comprensible</strong>: el contenido y el funcionamiento deben entenderse con facilidad. Por ejemplo, los formularios deben estar bien etiquetados y los errores deben explicarse con claridad.</li>
      <li><strong>4. Robusto</strong>: el contenido debe estar bien construido para que navegadores y tecnologías de apoyo puedan interpretarlo correctamente.</li>
    </ul>

    <h2>Pautas</h2>
    <p>Dentro de esos principios, WCAG 2.2 agrupa <strong>13 pautas</strong>. Son los grandes bloques en los que se organiza esta norma.</p>

    <p><strong>Perceptible</strong></p>
    <ul>
      <li><strong>1.1 Alternativas textuales</strong>: ofrecer texto equivalente para imágenes y otros elementos no textuales.</li>
      <li><strong>1.2 Medios basados en el tiempo</strong>: hacer accesibles vídeos, audios y multimedia.</li>
      <li><strong>1.3 Adaptable</strong>: estructurar el contenido para que pueda presentarse de distintas formas sin perder información.</li>
      <li><strong>1.4 Distinguible</strong>: facilitar que el contenido se vea y se escuche bien, por ejemplo con contraste suficiente.</li>
    </ul>

    <p><strong>Utilizable</strong></p>
    <ul>
      <li><strong>2.1 Accesible por teclado</strong>: permitir el uso completo sin depender del ratón.</li>
      <li><strong>2.2 Tiempo suficiente</strong>: dar tiempo suficiente para leer, completar tareas o responder.</li>
      <li><strong>2.3 Convulsiones y reacciones físicas</strong>: evitar contenidos que puedan provocar reacciones físicas adversas.</li>
      <li><strong>2.4 Navegable</strong>: facilitar la orientación, la navegación y la localización del contenido.</li>
      <li><strong>2.5 Modalidades de entrada</strong>: contemplar distintas formas de interacción además del teclado clásico y el ratón.</li>
    </ul>

    <p><strong>Comprensible</strong></p>
    <ul>
      <li><strong>3.1 Legible</strong>: ayudar a que el contenido se lea y se entienda.</li>
      <li><strong>3.2 Predecible</strong>: hacer que la interfaz se comporte de forma esperable.</li>
      <li><strong>3.3 Asistencia en la entrada de datos</strong>: ayudar al usuario al rellenar formularios y corregir errores.</li>
    </ul>

    <p><strong>Robusto</strong></p>
    <ul>
      <li><strong>4.1 Compatible</strong>: asegurar que el código y los componentes puedan ser interpretados correctamente por navegadores y productos de apoyo.</li>
    </ul>

    <h2>Criterios de conformidad</h2>
    <p>
      Lo que realmente se comprueba para determinar si una web cumple WCAG son los
      <strong>criterios de conformidad</strong>. Actualmente, en WCAG 2.2 hay
      <strong>86 criterios</strong>.
    </p>
    <p>Cada criterio pertenece a una pauta concreta y tiene asignado un nivel de conformidad:</p>
    <ul>
      <li><strong>Nivel A</strong>: criterios imprescindibles. Si no se cumplen, muchas personas no podrán acceder al contenido o completar tareas básicas.</li>
      <li><strong>Nivel AA</strong>: criterios que permiten acceder y usar el contenido de una forma razonablemente accesible. En España y en la mayor parte de normativas internacionales, este es el nivel que normalmente se exige.</li>
      <li><strong>Nivel AAA</strong>: criterios de accesibilidad avanzada. Son útiles como mejora, pero difíciles de aplicar de forma general en todos los contenidos.</li>
    </ul>
    <p>
      Cumplir nivel AA significa cumplir todos los criterios de nivel A y todos los criterios de
      nivel AA que sean aplicables.
    </p>

    <p>Un ejemplo sencillo:</p>
    <ul>
      <li>Principio: <strong>Perceptible</strong>.</li>
      <li>Pauta: <strong>1.1 Alternativas textuales</strong>.</li>
      <li>Criterio: <strong>1.1.1 Contenido no textual</strong>.</li>
      <li>Nivel: <strong>A</strong>.</li>
    </ul>
    <p>
      Ese criterio significa, simplificando mucho, que si una imagen transmite información debe
      tener una alternativa textual equivalente. Si la imagen es decorativa, no necesita esa misma
      alternativa.
    </p>

    <h3>Referencias</h3>
    <ul>
      <li><a href="https://www.youtube.com/watch?v=20SHvU2PKsM" target="_blank" rel="noreferrer">W3C: Introducción a la accesibilidad y WCAG (vídeo)</a></li>
      <li><a href="https://www.w3.org/WAI/standards-guidelines/wcag/es" target="_blank" rel="noreferrer">W3C: Sumario de WCAG 2</a></li>
      <li><a href="https://www.w3.org/WAI/standards-guidelines/es" target="_blank" rel="noreferrer">W3C: Resumen de los estándares de accesibilidad de W3C</a></li>
    </ul>
  </div>
</template>
