<template>
  <div>
    <p>
      La skill <strong>ua-accesibilidad</strong> reúne instrucciones, referencias y herramientas
      para que un agente de IA ayude a crear, revisar y corregir interfaces web accesibles.
      Se puede utilizar en <strong>Claude y Codex</strong>, tanto al desarrollar una pantalla
      como al revisar una aplicación existente.
    </p>
    <p>
      Una skill aporta al agente criterios y un procedimiento de trabajo. En este caso, le indica
      qué debe tener en cuenta al generar código, cómo revisar los ficheros y cómo ejecutar las
      comprobaciones automáticas. La revisión humana sigue siendo necesaria.
    </p>

    <h2>Instalación y primeros pasos</h2>
    <ol>
      <li>
        Accede al repositorio <strong>Skills.md del Git</strong>. Allí está ua-accesibilidad,
        junto con otras skills.
      </li>
      <li>
        Sigue las instrucciones del repositorio. Incluye scripts para instalar todas las skills;
        utiliza el que corresponda a tu entorno y al agente con el que vayas a trabajar.
      </li>
      <li>Abre el proyecto en Claude o Codex y comprueba que ua-accesibilidad está disponible.</li>
      <li>
        Indica qué quieres crear o revisar. Puedes señalar ficheros del proyecto, describir una
        pantalla o pegar las URLs que quieras comprobar.
      </li>
    </ol>
    <p>
      Para empezar, basta con nombrar la skill en la petición. Los ejemplos de esta página son
      instrucciones que puedes escribir al agente en lenguaje natural:
    </p>
    <blockquote class="border-start border-3 ps-3">
      <p>Usa la skill ua-accesibilidad para revisar el formulario de alta de este proyecto.</p>
    </blockquote>

    <h2>Generar código accesible</h2>
    <p>
      La skill ayuda a generar <strong>HTML, CSS y JavaScript accesibles</strong>, así como
      componentes Vue, vistas Razor, PHP y contenido Markdown que se renderiza como HTML.
      La accesibilidad se aplica desde la creación de la interfaz: estructura semántica,
      encabezados, etiquetas de formulario, alternativas de imágenes, teclado, foco y estados ARIA
      cuando sean necesarios.
    </p>
    <p>Por ejemplo:</p>
    <blockquote class="border-start border-3 ps-3">
      <p>
        Usa ua-accesibilidad para crear un formulario de contacto con HTML, CSS y JavaScript.
        Incluye nombre, correo y mensaje, indica los campos obligatorios y muestra errores que
        permitan identificar y corregir el problema.
      </p>
    </blockquote>
    <blockquote class="border-start border-3 ps-3">
      <p>
        Usa ua-accesibilidad para crear un componente Vue con un listado de solicitudes.
        Incluye los estados de carga, sin resultados y error, y conserva los estilos del proyecto.
      </p>
    </blockquote>
    <p>
      También aplica recomendaciones de usabilidad, textos de interfaz y diseño. Por ejemplo,
      que un botón explique la acción que realiza o que una pantalla vacía indique qué puede hacer
      el usuario a continuación.
    </p>

    <h2>Revisión estática del código</h2>
    <p>
      El agente puede leer los ficheros sin abrir un navegador ni arrancar la aplicación.
      Esta revisión permite localizar problemas en el marcado, las plantillas, los estilos y
      los textos. <strong>La revisión la hace el agente aplicando las referencias de la skill</strong>;
      no se ejecuta un validador estático propio.
    </p>
    <blockquote class="border-start border-3 ps-3">
      <p>
        Usa ua-accesibilidad para hacer una revisión estática de las vistas y componentes de
        ClientApp/src. No modifiques los ficheros. Indica cuáles has revisado y, para cada hallazgo,
        el fichero, la línea, el problema y un ejemplo de cómo corregirlo.
      </p>
    </blockquote>
    <ul>
      <li>El informe distingue errores, avisos y comprobaciones manuales pendientes.</li>
      <li>
        En Vue se revisa el contexto: un componente parcial no tiene por qué incluir el título
        principal o la región <code>main</code> si ya los aporta la página que lo contiene.
      </li>
      <li>
        La lectura del código no confirma el contraste real, el DOM final ni el comportamiento
        del foco. Esos aspectos deben comprobarse con la aplicación en ejecución.
      </li>
    </ul>
    <p>
      Si solo pides revisar, la skill indica que no se deben realizar cambios. Para aplicar las
      soluciones, pídelo expresamente:
    </p>
    <blockquote class="border-start border-3 ps-3">
      <p>Corrige los errores encontrados en el formulario y explica los cambios realizados.</p>
    </blockquote>

    <h2>Comprobar URLs con CADUA o axe</h2>
    <p>
      Para comprobar una página renderizada, la skill incluye scripts que abren el navegador y
      ejecutan <strong>CADUA</strong>, el motor utilizado por defecto. También puede ejecutar
      <strong>axe</strong> si se lo pides expresamente.
    </p>
    <p>
      Si la página es pública, puedes pegar la URL directamente. No hace falta disponer de su
      código ni preparar un fichero de rutas:
    </p>
    <blockquote class="border-start border-3 ps-3">
      <p>Usa ua-accesibilidad y revisa https://www.ua.es con CADUA. Explica los errores encontrados.</p>
    </blockquote>
    <blockquote class="border-start border-3 ps-3">
      <p>Revisa estas URLs con axe usando ua-accesibilidad: https://www.ua.es y https://www.ua.es/es/.</p>
    </blockquote>
    <p>
      También puedes proporcionar un fichero de texto con una URL por línea. Si ejecutas varios
      motores, guarda cada resultado en una carpeta distinta para que los informes no se sobrescriban.
    </p>

    <h2>Revisar una aplicación .NET: rutas y credenciales</h2>
    <p>
      En una aplicación .NET de la UA con cliente Vue, la skill puede localizar el proyecto web,
      consultar su configuración y extraer las rutas del router. La aplicación tiene que estar en
      ejecución; si no lo está, puedes pedir al agente que la inicie desde el proyecto web.
    </p>
    <blockquote class="border-start border-3 ps-3">
      <p>
        Usa ua-accesibilidad para comprobar esta aplicación .NET con CADUA. Reutiliza
        results-accesibilidad/rutas.json si existe; si no, prepara el fichero a partir del router.
        Indica las rutas comprobadas y los resultados.
      </p>
    </blockquote>
    <p>
      El fichero <code>results-accesibilidad/rutas.json</code> define las pruebas. Cada prueba
      contiene un usuario, una contraseña y las rutas que se van a visitar. Permite, por ejemplo,
      comprobar páginas públicas y repetir otras con distintos perfiles de acceso.
      Este ejemplo utiliza datos ficticios:
    </p>
    <pre class="course-code"><code>{
  "publica": {
    "usuario": "",
    "contrasena": "",
    "rutas": [
      { "url": "https://localhost:44306/miapp/" }
    ]
  },
  "gestion": {
    "usuario": "USUARIO_DE_PRUEBA",
    "contrasena": "CONTRASENA_DE_PRUEBA",
    "rutas": [
      { "url": "https://localhost:44306/miapp/solicitudes" },
      { "url": "https://localhost:44306/miapp/solicitudes/123" }
    ]
  }
}</code></pre>
    <ul>
      <li>Sustituye las URLs por las de tu aplicación y utiliza identificadores de prueba válidos.</li>
      <li>Deja usuario y contraseña vacíos para las pruebas sin autenticación.</li>
      <li>
        Para rutas protegidas, configura las credenciales de prueba localmente. La skill incluye
        instrucciones para el acceso CAS de las aplicaciones de la UA.
      </li>
      <li>
        Revisa y completa el fichero: extraer las rutas del router no garantiza que incluya todos
        los estados, parámetros o pantallas que necesitas probar.
      </li>
      <li>
        Las ejecuciones siguientes reutilizan el fichero, incluidas las rutas añadidas a mano.
        Si necesitas regenerarlo, pídelo expresamente: la regeneración reemplaza las rutas y
        conserva las credenciales.
      </li>
      <li>
        Añade <code>results-accesibilidad/</code> al <code>.gitignore</code> del proyecto.
        El fichero de credenciales es local y no debe subirse a Git ni copiarse en los informes.
      </li>
    </ul>

    <h2>Peticiones básicas para el agente</h2>
    <p>
      No necesitas ejecutar las herramientas a mano. Indica al agente el alcance de la revisión,
      el motor que quieres utilizar y si debe limitarse a informar o también corregir el código.
      Puedes utilizar estas peticiones según lo que necesites:
    </p>
    <ul>
      <li>Usa ua-accesibilidad para revisar con CADUA las URLs del fichero urls.txt.</li>
      <li>Prepara el fichero de rutas de esta aplicación para que pueda revisarlo antes de ejecutar las comprobaciones.</li>
      <li>Añade esta URL al fichero de rutas sin sustituir las que ya están guardadas.</li>
      <li>He cambiado el router. Regenera las rutas de las pruebas conservando las credenciales.</li>
      <li>Repite la revisión con axe y guarda sus resultados separados de los de CADUA.</li>
      <li>Explica los errores encontrados, con su ubicación y un ejemplo de cómo corregir cada uno.</li>
    </ul>
    <p>
      Por defecto, los resultados se guardan en <code>results-accesibilidad/</code>, dentro del
      proyecto revisado. Cuando hay varias pruebas, cada una utiliza su propia subcarpeta.
      El agente puede interpretar estos resultados y preparar un informe con la explicación
      de los problemas y sus posibles soluciones.
    </p>

    <h2>Comprobaciones avanzadas de teclado</h2>
    <p>
      Este modo se ejecuta solo cuando se pide expresamente. Recorre las rutas pulsando
      <kbd>Tab</kbd> y busca controles inalcanzables, trampas de teclado, elementos ocultos que
      reciben el foco, falta de foco visible y valores positivos de <code>tabindex</code>.
      También comprueba el contraste del indicador de foco cuando puede calcularlo.
    </p>
    <blockquote class="border-start border-3 ps-3">
      <p>
        Usa ua-accesibilidad para ejecutar la comprobación avanzada de teclado en las rutas del
        proyecto. Guarda el informe separado del de CADUA e indica qué queda pendiente de probar
        manualmente.
      </p>
    </blockquote>
    <ul>
      <li>El recorrido básico solo pulsa Tab: no activa botones ni envía formularios.</li>
      <li>
        No comprueba la navegación con flechas, las tareas completas, el foco después de operaciones
        CRUD ni los anuncios de las regiones vivas. Esas comprobaciones siguen pendientes.
      </li>
      <li>
        Puedes pedir además que compruebe los componentes. Esto permite abrir modales, desplegables y paneles declarados
        con <code>data-bs-toggle</code> y comprobar foco, Escape, retorno del foco y
        <code>aria-expanded</code>. Esta opción sí activa los controles que abren esos componentes;
        debe pedirse de forma consciente y no pulsa los controles de su interior.
      </li>
    </ul>

    <h2>Revisión de imágenes con IA: uso muy avanzado</h2>
    <p>
      El motor de evidencias recoge recortes de las imágenes y una ficha con su texto alternativo
      y contexto. Después, el agente analiza las imágenes para valorar si el texto se corresponde
      con lo que muestran. <strong>La recogida de evidencias no emite un veredicto por sí sola.</strong>
    </p>
    <p>
      Esta revisión se reserva para un <strong>uso muy avanzado y se solicita expresamente</strong>.
      El análisis de imágenes con IA consume muchos tokens, especialmente si se revisan varias
      páginas con numerosas imágenes. Conviene limitarlo a rutas o imágenes concretas.
    </p>
    <blockquote class="border-start border-3 ps-3">
      <p>
        Usa ua-accesibilidad para recoger evidencias de las imágenes de https://www.ua.es y
        revisarlas con IA. Compara los recortes con sus textos alternativos y deja los casos
        dudosos pendientes de revisión humana.
      </p>
    </blockquote>
    <ul>
      <li>Recoge imágenes con texto alternativo no vacío para compararlo con la imagen.</li>
      <li>
        Recoge aparte imágenes grandes marcadas como decorativas con <code>alt=""</code>, por si
        transmiten información que se ha dejado sin alternativa.
      </li>
      <li>
        Una redacción mejorable no es automáticamente un error. Si el texto no corresponde a la
        imagen, se documenta el problema; si hay dudas, se aporta la evidencia para que decida una persona.
      </li>
    </ul>

    <h2>Referencias que incluye la skill</h2>
    <p>
      La carpeta <code>references/</code> organiza los criterios por temas. El agente consulta los
      que necesita para la tarea; no tienes que indicarle todos los ficheros en cada petición.
      Estas referencias permiten hacerse una idea de lo que cubre:
    </p>
    <ul>
      <li><code>checklist.md</code>: guía de revisión y correspondencia con los códigos de CADUA.</li>
      <li><code>imagenes.md</code>: imágenes, iconos, SVG y textos alternativos.</li>
      <li><code>encabezados.md</code>: jerarquía, orden y uso semántico de los encabezados.</li>
      <li><code>estructura.md</code>: idioma, título, regiones y estructura HTML.</li>
      <li><code>enlaces.md</code>: textos de enlace y enlaces con imágenes o iconos.</li>
      <li><code>formularios.md</code>: etiquetas, grupos, obligatoriedad y botones.</li>
      <li><code>listas.md</code> y <code>tablas.md</code>: listas y tablas de datos.</li>
      <li><code>colores.md</code>: contraste y uso del color para transmitir información.</li>
      <li><code>componentes.md</code>: modales, pestañas, desplegables, acordeones y regiones vivas.</li>
      <li><code>plantillas-vue.md</code>: qué se puede comprobar en una plantilla Vue y qué depende de su contexto.</li>
      <li><code>spa-vue.md</code>: estructura de App.vue, router, título, foco y regiones vivas en una SPA.</li>
      <li><code>bootstrap-vue.md</code>: componentes Bootstrap dentro de Vue y comportamiento del plugin.</li>
      <li><code>cadua.md</code>: ejecución de motores, rutas, credenciales y resultados.</li>
      <li><code>proyectos-dotnet-ua.md</code>: aplicaciones .NET de la UA con Vue y autenticación CAS.</li>
      <li><code>informes.md</code>: organización y cierre del informe de revisión.</li>
      <li><code>usabilidad.md</code>: textos, estados, mensajes, prevención de errores y navegación.</li>
      <li><code>tipografia.md</code> y <code>diseno-estilos.md</code>: legibilidad, composición y estilos.</li>
    </ul>
    <p>
      Las recomendaciones de usabilidad, tipografía y diseño se presentan como avisos o sugerencias,
      diferenciadas de los errores de accesibilidad. Que una revisión de código o una prueba automática
      termine sin errores no significa que la aplicación sea accesible: hay que completar la revisión
      con teclado, lector de pantalla y tareas reales.
    </p>
  </div>
</template>
