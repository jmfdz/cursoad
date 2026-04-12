<template>
  <div>
    <p>
      Una vez entendido que no todas las personas acceden al contenido de la misma forma, conviene
      conocer algunas de las tecnologías de apoyo, funciones de accesibilidad y ajustes del sistema
      más habituales con los que muchas personas navegan por la web.
    </p>
    <p>
      El objetivo no es aprender a utilizarlos a fondo, sino tener una visión práctica de qué hacen
      y qué necesita una página web para funcionar bien con ellos.
    </p>
    <p>
      Algunas son tecnologías de apoyo propiamente dichas, como los lectores de pantalla. Otras son
      funciones o ajustes incluidos en el sistema operativo o en el navegador, como el zoom, el alto
      contraste o el control por voz. Todas ellas tienen algo en común: dependen de que la interfaz
      esté bien construida.
    </p>

    <h2>Dónde encontrar estas funciones en sistemas y navegadores</h2>
    <p>
      Todos los sistemas operativos y navegadores actuales incorporan funcionalidades de
      accesibilidad que facilitan acceder al contenido a muchos usuarios. No siempre aparecen con el
      mismo nombre, pero suelen estar agrupadas en menús de Accesibilidad, Pantalla, Visión o
      similares.
    </p>
    <ul>
      <li><strong>iOS y iPadOS</strong>: <code>Ajustes &gt; Accesibilidad</code>.</li>
      <li><strong>Android</strong>: normalmente <code>Ajustes &gt; Accesibilidad</code>.</li>
      <li><strong>Windows</strong>: <code>Configuración &gt; Accesibilidad</code>.</li>
      <li><strong>macOS</strong>: <code>Ajustes del sistema &gt; Accesibilidad</code>.</li>
      <li><strong>Linux</strong>: depende del entorno de escritorio, pero suelen encontrarse en <code>Configuración</code> o <code>Ajustes &gt; Accesibilidad</code>.</li>
      <li><strong>Navegadores</strong>: además de las opciones del sistema, muchas pruebas pueden hacerse con el zoom, el tamaño de letra o los ajustes propios del navegador.</li>
    </ul>
    <p>
      Tener ubicadas estas opciones ayuda bastante a probar una web en condiciones de uso más reales
      y a entender mejor qué ajustes puede estar utilizando una persona cuando navega. En los
      siguientes apartados se verán algunas de estas funciones con más detalle.
    </p>

    <h2>Navegación por teclado</h2>
    <p>
      Muchas personas no utilizan ratón, o no pueden utilizarlo con precisión o de forma continuada.
      Por eso navegan únicamente con el teclado, moviéndose entre enlaces, botones, campos de
      formulario y otros controles.
    </p>
    <p>
      Para que esta forma de interacción funcione bien, la página debe tener un orden lógico de foco,
      permitir acceder a todos los controles sin trampas de teclado y mostrar claramente dónde está el
      foco en cada momento.
    </p>
    <p>
      Es una de las comprobaciones más sencillas y útiles durante el desarrollo: basta con recorrer la
      página con la tecla Tab, Shift + Tab, Intro, Espacio y las flechas cuando proceda.
    </p>

    <h2>Lectores de pantalla</h2>
    <p>
      Los lectores de pantalla convierten en voz o braille la información que la interfaz expone al
      sistema. Son esenciales para muchas personas ciegas y también útiles en algunos casos de baja
      visión o dificultades de lectura.
    </p>
    <p>
      Para que funcionen bien, la página necesita estructura semántica, encabezados jerárquicos,
      enlaces y botones con nombres claros, formularios correctamente etiquetados y cambios de estado
      que puedan transmitirse al usuario.
    </p>
    <p>
      Algunos nombres habituales son Narrador en Windows, VoiceOver en macOS y iOS, TalkBack en
      Android y Orca en muchas distribuciones Linux.
    </p>

    <h2>Ampliación y zoom</h2>
    <p>
      Otras personas necesitan ampliar mucho el contenido para leerlo o interactuar con él. Esto puede
      hacerse con el zoom del navegador, con funciones de ampliación del sistema o con ampliadores de
      pantalla específicos.
    </p>
    <p>
      Una web compatible con esta forma de uso no debería perder contenido ni funcionalidad al ampliar,
      ni obligar a desplazamientos innecesarios en varias direcciones. Los textos deben poder crecer y
      la interfaz debe adaptarse sin romperse.
    </p>

    <p>
      En las pruebas es habitual comprobar al menos el zoom del navegador y, cuando sea posible,
      funciones como Lupa en Windows o Zoom en macOS e iOS.
    </p>

    <h2>Movimiento, animaciones y reducción de efectos</h2>
    <p>
      Algunas personas son especialmente sensibles a animaciones intensas, desplazamientos automáticos,
      parpadeos o efectos visuales continuos. En determinados casos, estos elementos pueden resultar
      molestos, dificultar la concentración o incluso provocar malestar.
    </p>
    <p>
      Por eso conviene que una web no dependa de animaciones para entenderse o utilizarse, que evite
      efectos innecesarios y que respete, cuando sea posible, la preferencia del usuario de reducir el
      movimiento.
    </p>
    <p>
      En la práctica, esto puede comprobarse revisando si hay carruseles que se mueven solos,
      transiciones excesivas, vídeos que se reproducen automáticamente o desplazamientos animados que no
      aportan nada. Muchos sistemas incluyen esta opción en apartados de Accesibilidad o Pantalla, con
      nombres como Reducir movimiento o similares.
    </p>

    <h2>Contraste y otros ajustes visuales</h2>
    <p>
      Muchas personas modifican la presentación visual para percibir mejor el contenido: cambian el
      contraste, usan modos oscuros o claros, aumentan el tamaño del texto o activan ajustes de color
      y transparencia del sistema.
    </p>
    <p>
      Esto exige que la información no dependa solo del color, que el contraste entre texto y fondo
      sea suficiente y que la interfaz siga siendo comprensible cuando cambian los colores o se aplican
      configuraciones visuales diferentes.
    </p>
    <p>
      Según el sistema, estas opciones pueden encontrarse en apartados como Accesibilidad, Pantalla,
      Visión o similares, tanto en Windows como en macOS, Linux, iOS y Android.
    </p>

    <h2>Dictado y control por voz</h2>
    <p>
      Algunas personas interactúan hablando, ya sea para escribir texto mediante dictado o para abrir,
      pulsar y activar controles mediante comandos de voz.
    </p>
    <p>
      Para que esto funcione bien, los controles deben tener nombres accesibles claros y coherentes con
      lo que se muestra en pantalla. Si un botón visualmente parece decir una cosa, pero su nombre
      accesible dice otra, el control por voz puede volverse confuso o incluso imposible de usar.
    </p>
    <p>
      Entre las funciones conocidas están Acceso por voz o reconocimiento de voz en distintos sistemas,
      además del dictado integrado en Windows, macOS, iOS y Android.
    </p>

    <h2>Subtítulos y transcripciones</h2>
    <p>
      Cuando una web incorpora contenido de audio o vídeo, muchas personas necesitan subtítulos,
      transcripciones o ambas cosas para acceder a la información. No se trata solo de personas sordas:
      también pueden ser útiles en entornos ruidosos, en contenidos técnicos o cuando se quiere buscar
      o repasar información con rapidez.
    </p>
    <p>
      Para que estas alternativas sean realmente útiles, deben ser completas, estar bien sincronizadas
      en el caso del vídeo y recoger la información relevante del contenido sonoro.
    </p>
    <p>
      En algunos contenidos también puede ser necesaria la audiodescripción o alguna alternativa
      equivalente cuando hay información visual importante que no se entiende solo con el audio.
    </p>

    <h2>Qué conviene recordar al hacer pruebas</h2>
    <p>
      Ninguna de estas formas de acceso depende únicamente de que la página se vea bien. Lo importante
      es que pueda percibirse, recorrerse y utilizarse de formas distintas.
    </p>
    <p>
      Si una página solo puede entenderse viendo el color, pulsando con el ratón o interpretando una
      distribución visual muy concreta, parte de los usuarios quedará fuera aunque el contenido esté
      visualmente bien presentado.
    </p>
    <p>
      Por eso es tan importante que la estructura sea semántica, que el foco del teclado sea visible,
      que los controles tengan nombre accesible y que los contenidos multimedia incorporen alternativas
      equivalentes.
    </p>
  </div>
</template>
