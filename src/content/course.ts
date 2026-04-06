export type Figure = {
  src: string
  alt: string
  caption: string
}

export type SectionExample = {
  title: string
  href: string
  description: string
}

export type SectionShowcase = {
  title: string
  summary: string
  code: string
  previewHtml: string
  notes?: string[]
}

export type Section = {
  id: string
  title: string
  html: string
  figure?: Figure
  gallery?: Figure[]
  examples?: SectionExample[]
  showcase?: SectionShowcase
}

export type Block = {
  slug: string
  shortTitle: string
  title: string
  route: string
  menuDescription: string
  homeSummary?: string
  introHtml?: string
  sections: Section[]
}

export const courseTitle = 'Accesibilidad digital, usabilidad y UX'

export const courseAuthor = 'José María Fernández Gil'

export const courseLastRevision = '6 de abril de 2026'

export const courseLinks = [
  {
    label: 'Repositorio GitHub',
    href: 'https://github.com/jmfdz/cursoad/',
  },
  {
    label: 'Web de ejemplos',
    href: 'https://jmfdz.github.io/cursoad/',
  },
]

export const originalTableOfContents = [
  { title: 'Accesibilidad digital, usabilidad y UX', page: 1 },
  { title: 'Fundamentos de la accesibilidad digital', page: 3 },
  { title: 'Introducción a la accesibilidad digital', page: 3 },
  { title: 'Tipos de discapacidad', page: 4 },
  { title: 'Pautas de Accesibilidad para el Contenido web (WCAG)', page: 5 },
  { title: 'Criterios de las WCAG y niveles de accesibilidad', page: 6 },
  { title: 'Legislación aplicable', page: 7 },
  { title: 'Extensión de navegador de CADUA', page: 9 },
  { title: 'Uso de un lector de pantalla', page: 11 },
  { title: 'Requisitos web', page: 13 },
  { title: 'Texto', page: 13 },
  { title: 'Idioma', page: 16 },
  { title: 'Estructura y semántica', page: 18 },
  { title: 'Estructura de una página web', page: 19 },
  { title: 'Encabezados', page: 21 },
  { title: 'Imágenes y elementos no textuales', page: 22 },
  { title: 'Enlaces y botones', page: 24 },
  { title: 'Tablas', page: 25 },
  { title: 'Formularios', page: 26 },
  { title: 'Componentes interactivos', page: 33 },
  { title: 'WAI-ARIA', page: 33 },
  { title: 'Ejemplos de componentes', page: 40 },
  { title: 'Usabilidad y UX', page: 41 },
  { title: 'Principios de diseño inclusivo', page: 41 },
  { title: 'Usabilidad', page: 42 },
  { title: 'Experiencia de usuario (UX)', page: 42 },
  { title: 'Técnicas y herramientas comunes en usabilidad y UX', page: 43 },
  { title: 'Leyes UX', page: 44 },
  { title: 'Correcto uso del color', page: 44 },
  { title: 'Ejemplos de diseño', page: 51 },
]

const uxLawsHtml = `
<p>Laws of UX es una colección de principios psicológicos y heurísticas de diseño aplicables a interfaces digitales. En este apartado se recopilan sus 30 leyes en español, con una explicación breve y un ejemplo orientado a desarrollo web e interfaces. La referencia original puede consultarse en <a href="https://lawsofux.com/es/" target="_blank" rel="noreferrer">Laws of UX</a>.</p>

<h2 class="mt-4 mb-3">Percepción visual y organización</h2>

<h3>Atención selectiva</h3>
<p>Las personas solo atienden a una parte de los estímulos disponibles y suelen centrarse en lo que les ayuda a cumplir su objetivo.</p>
<p><strong>Ejemplo:</strong> en un formulario, el botón principal y los errores deben destacar más que los enlaces auxiliares o notas secundarias.</p>
<p><strong>Referencias:</strong> <a href="https://lawsofux.com/es/atencion-selectiva/" target="_blank" rel="noreferrer">Laws of UX: Atención selectiva</a>.</p>

<h3>Efecto de estética-usabilidad</h3>
<p>Una interfaz visualmente agradable suele percibirse como más fácil de usar y más fiable.</p>
<p><strong>Ejemplo:</strong> una pantalla de acceso limpia, bien espaciada y con buena tipografía reduce la fricción inicial.</p>
<p><strong>Referencias:</strong> <a href="https://lawsofux.com/es/efecto-de-estetica-usabilidad/" target="_blank" rel="noreferrer">Laws of UX: Efecto de estética-usabilidad</a>.</p>

<h3>Efecto de posición en serie</h3>
<p>Recordamos mejor los primeros y los últimos elementos de una secuencia que los intermedios.</p>
<p><strong>Ejemplo:</strong> en una navegación principal conviene colocar las acciones clave al principio o al final.</p>
<p><strong>Referencias:</strong> <a href="https://lawsofux.com/es/efecto-de-posicion-en-serie/" target="_blank" rel="noreferrer">Laws of UX: Efecto de posición en serie</a>.</p>

<h3>Efecto Von Restorff</h3>
<p>Un elemento distinto del resto tiene más probabilidades de ser percibido y recordado.</p>
<p><strong>Ejemplo:</strong> un botón de “Guardar” puede destacar claramente frente a otras acciones secundarias.</p>
<p><strong>Referencias:</strong> <a href="https://lawsofux.com/es/efecto-von-restorff/" target="_blank" rel="noreferrer">Laws of UX: Efecto Von Restorff</a>.</p>

<h3>Ley de Conectividad Uniforme</h3>
<p>Los elementos conectados visualmente se perciben como relacionados.</p>
<p><strong>Ejemplo:</strong> una línea entre pasos de un proceso ayuda a entender que forman parte de un flujo único.</p>
<p><strong>Referencias:</strong> <a href="https://lawsofux.com/es/ley-de-conectividad-uniforme/" target="_blank" rel="noreferrer">Laws of UX: Ley de Conectividad Uniforme</a>.</p>

<h3>Ley de la Semejanza</h3>
<p>Los elementos con apariencia similar se interpretan como pertenecientes al mismo grupo o función.</p>
<p><strong>Ejemplo:</strong> si todos los enlaces comparten color y subrayado, el usuario aprende rápido qué puede pulsar.</p>
<p><strong>Referencias:</strong> <a href="https://lawsofux.com/es/ley-de-la-semejanza/" target="_blank" rel="noreferrer">Laws of UX: Ley de la Semejanza</a>.</p>

<h3>Ley de Proximidad</h3>
<p>Los elementos cercanos entre sí tienden a percibirse como relacionados.</p>
<p><strong>Ejemplo:</strong> la ayuda de un campo debe estar junto al campo y no separada en otra zona de la pantalla.</p>
<p><strong>Referencias:</strong> <a href="https://lawsofux.com/es/ley-de-proximidad/" target="_blank" rel="noreferrer">Laws of UX: Ley de Proximidad</a>.</p>

<h3>Ley de Prägnanz</h3>
<p>Las personas interpretan formas ambiguas o complejas de la manera más simple posible.</p>
<p><strong>Ejemplo:</strong> una interfaz con alineaciones claras y pocos adornos se entiende antes que otra recargada.</p>
<p><strong>Referencias:</strong> <a href="https://lawsofux.com/es/ley-de-pragnanz/" target="_blank" rel="noreferrer">Laws of UX: Ley de Prägnanz</a>.</p>

<h3>Ley de Región Común</h3>
<p>Los elementos encerrados dentro de un mismo límite visual se perciben como un grupo.</p>
<p><strong>Ejemplo:</strong> agrupar filtros relacionados en una tarjeta ayuda a entenderlos como una sola unidad.</p>
<p><strong>Referencias:</strong> <a href="https://lawsofux.com/es/ley-de-region-comun/" target="_blank" rel="noreferrer">Laws of UX: Ley de Región Común</a>.</p>

<h2 class="mt-4 mb-3">Memoria, aprendizaje y carga mental</h2>

<h3>Carga Cognitiva</h3>
<p>Cuanto más esfuerzo mental exige una interfaz, más difícil es comprenderla y usarla con soltura.</p>
<p><strong>Ejemplo:</strong> una pantalla de configuración avanzada debe dividirse en bloques en lugar de mostrar veinte opciones de golpe.</p>
<p><strong>Referencias:</strong> <a href="https://lawsofux.com/es/carga-cognitiva/" target="_blank" rel="noreferrer">Laws of UX: Carga Cognitiva</a>.</p>

<h3>Fragmentación</h3>
<p>La información se procesa mejor cuando se divide en bloques pequeños y significativos.</p>
<p><strong>Ejemplo:</strong> una dirección se rellena mejor separando calle, ciudad, código postal y provincia que con un único campo largo.</p>
<p><strong>Referencias:</strong> <a href="https://lawsofux.com/es/fragmentacion/" target="_blank" rel="noreferrer">Laws of UX: Fragmentación</a>.</p>

<h3>La memoria de Trabajo</h3>
<p>La memoria de trabajo retiene temporalmente la información necesaria para completar una tarea, pero su capacidad es limitada.</p>
<p><strong>Ejemplo:</strong> si el usuario debe introducir un código, conviene mantenerlo visible mientras rellena el formulario.</p>
<p><strong>Referencias:</strong> <a href="https://lawsofux.com/es/la-memoria-de-trabajo/" target="_blank" rel="noreferrer">Laws of UX: La memoria de Trabajo</a>.</p>

<h3>Ley de Miller</h3>
<p>La memoria a corto plazo solo puede manejar un número reducido de elementos a la vez.</p>
<p><strong>Ejemplo:</strong> una página de administración debe agrupar acciones por categorías en vez de mostrar decenas de accesos sueltos.</p>
<p><strong>Referencias:</strong> <a href="https://lawsofux.com/es/ley-de-miller/" target="_blank" rel="noreferrer">Laws of UX: Ley de Miller</a>.</p>

<h3>Modelo Mental</h3>
<p>Las personas anticipan cómo funciona un sistema según experiencias previas con productos similares.</p>
<p><strong>Ejemplo:</strong> el logo suele llevar al inicio; si no lo hace, se rompe una expectativa muy asentada.</p>
<p><strong>Referencias:</strong> <a href="https://lawsofux.com/es/modelo-mental/" target="_blank" rel="noreferrer">Laws of UX: Modelo Mental</a>.</p>

<h3>Sesgo Cognitivo</h3>
<p>La percepción y la toma de decisiones están influidas por atajos mentales y por el contexto en que se presenta la información.</p>
<p><strong>Ejemplo:</strong> marcar una opción como “recomendada” condiciona la elección aunque el usuario no compare todo con detalle.</p>
<p><strong>Referencias:</strong> <a href="https://lawsofux.com/es/sesgo-cognitivo/" target="_blank" rel="noreferrer">Laws of UX: Sesgo Cognitivo</a>.</p>

<h3>La Navaja de Occam</h3>
<p>Cuando varias soluciones explican o resuelven lo mismo, suele ser preferible la más simple.</p>
<p><strong>Ejemplo:</strong> si un filtro básico resuelve la búsqueda, no hace falta obligar a pasar por una búsqueda avanzada compleja.</p>
<p><strong>Referencias:</strong> <a href="https://lawsofux.com/es/la-navaja-de-occam/" target="_blank" rel="noreferrer">Laws of UX: La Navaja de Occam</a>.</p>

<h2 class="mt-4 mb-3">Decisión y comportamiento</h2>

<h3>Efecto de Tendencia a la Meta</h3>
<p>La motivación aumenta cuando la persona percibe que está cerca de completar una meta.</p>
<p><strong>Ejemplo:</strong> un asistente de varios pasos funciona mejor si muestra claramente el progreso y el paso actual.</p>
<p><strong>Referencias:</strong> <a href="https://lawsofux.com/es/efecto-de-tendencia-a-la-meta/" target="_blank" rel="noreferrer">Laws of UX: Efecto de Tendencia a la Meta</a>.</p>

<h3>Efecto Zeigarnik</h3>
<p>Las tareas incompletas se recuerdan mejor que las completadas.</p>
<p><strong>Ejemplo:</strong> mostrar “tienes un borrador pendiente” ayuda a retomar una solicitud dejada a medias.</p>
<p><strong>Referencias:</strong> <a href="https://lawsofux.com/es/efecto-zeigarnik/" target="_blank" rel="noreferrer">Laws of UX: Efecto Zeigarnik</a>.</p>

<h3>Ley de Hick</h3>
<p>El tiempo para decidir aumenta cuando crecen el número y la complejidad de las opciones.</p>
<p><strong>Ejemplo:</strong> es mejor acotar un menú por contexto que presentar una lista gigantesca desde el principio.</p>
<p><strong>Referencias:</strong> <a href="https://lawsofux.com/es/ley-de-hick/" target="_blank" rel="noreferrer">Laws of UX: Ley de Hick</a>.</p>

<h3>Ley de Parkinson</h3>
<p>Las tareas tienden a expandirse hasta ocupar todo el tiempo disponible.</p>
<p><strong>Ejemplo:</strong> un proceso sin pasos claros ni señales de cierre da sensación de no terminar nunca.</p>
<p><strong>Referencias:</strong> <a href="https://lawsofux.com/es/ley-de-parkinson/" target="_blank" rel="noreferrer">Laws of UX: Ley de Parkinson</a>.</p>

<h3>Paradoja del Usuario Activo</h3>
<p>Los usuarios rara vez leen manuales antes de empezar: prueban y aprenden haciendo.</p>
<p><strong>Ejemplo:</strong> una herramienta debe permitir realizar la tarea principal sin depender de una guía larga previa.</p>
<p><strong>Referencias:</strong> <a href="https://lawsofux.com/es/paradoja-del-usuario-activo/" target="_blank" rel="noreferrer">Laws of UX: Paradoja del Usuario Activo</a>.</p>

<h3>Principio de Pareto</h3>
<p>En muchos sistemas, una pequeña parte de las causas o acciones produce la mayor parte de los resultados.</p>
<p><strong>Ejemplo:</strong> si unas pocas funciones concentran la mayoría del uso, deben estar visibles y muy pulidas.</p>
<p><strong>Referencias:</strong> <a href="https://lawsofux.com/es/principio-de-pareto/" target="_blank" rel="noreferrer">Laws of UX: Principio de Pareto</a>.</p>

<h3>Regla de fin de pico</h3>
<p>Las personas recuerdan una experiencia por su momento más intenso y por cómo termina, más que por el promedio total.</p>
<p><strong>Ejemplo:</strong> un trámite largo se recordará mejor si termina con una confirmación clara y útil.</p>
<p><strong>Referencias:</strong> <a href="https://lawsofux.com/es/regla-de-fin-de-pico/" target="_blank" rel="noreferrer">Laws of UX: Regla de fin de pico</a>.</p>

<h3>Sobrecarga de Opciones</h3>
<p>Demasiadas alternativas pueden bloquear la decisión y aumentar la insatisfacción.</p>
<p><strong>Ejemplo:</strong> tres planes claramente diferenciados suelen funcionar mejor que doce tarifas parecidas.</p>
<p><strong>Referencias:</strong> <a href="https://lawsofux.com/es/sobrecarga-de-opciones/" target="_blank" rel="noreferrer">Laws of UX: Sobrecarga de Opciones</a>.</p>

<h2 class="mt-4 mb-3">Interacción y rendimiento</h2>

<h3>Fluir</h3>
<p>El flujo aparece cuando una persona puede concentrarse en su tarea sin interrupciones ni fricciones innecesarias.</p>
<p><strong>Ejemplo:</strong> un editor con autoguardado y respuesta inmediata ayuda a mantener la concentración.</p>
<p><strong>Referencias:</strong> <a href="https://lawsofux.com/es/fluir/" target="_blank" rel="noreferrer">Laws of UX: Fluir</a>.</p>

<h3>Ley de Fitts</h3>
<p>Cuanto más grande y cercano esté un objetivo, más fácil y rápido será interactuar con él.</p>
<p><strong>Ejemplo:</strong> los botones táctiles deben tener buen tamaño y suficiente separación en móvil.</p>
<p><strong>Referencias:</strong> <a href="https://lawsofux.com/es/ley-de-fitts/" target="_blank" rel="noreferrer">Laws of UX: Ley de Fitts</a>.</p>

<h3>Ley de Jakob</h3>
<p>Las personas esperan que un sitio funcione de forma parecida a otros que ya conocen.</p>
<p><strong>Ejemplo:</strong> la lupa suele abrir la búsqueda y el carrito mostrar la compra; cambiar eso genera fricción.</p>
<p><strong>Referencias:</strong> <a href="https://lawsofux.com/es/ley-de-jakob/" target="_blank" rel="noreferrer">Laws of UX: Ley de Jakob</a>.</p>

<h3>Ley de Postel</h3>
<p>Un sistema debe ser flexible al aceptar entradas y conservador al generar salidas consistentes.</p>
<p><strong>Ejemplo:</strong> un campo de teléfono puede aceptar espacios o guiones, pero al guardar debe normalizar el formato.</p>
<p><strong>Referencias:</strong> <a href="https://lawsofux.com/es/ley-de-postel/" target="_blank" rel="noreferrer">Laws of UX: Ley de Postel</a>.</p>

<h3>Ley de Tesler</h3>
<p>Siempre existe una cantidad de complejidad que no se puede eliminar; solo se puede decidir dónde recae.</p>
<p><strong>Ejemplo:</strong> un configurador complejo debería asumir parte de la lógica en el sistema, no trasladarla toda al usuario.</p>
<p><strong>Referencias:</strong> <a href="https://lawsofux.com/es/ley-de-tesler/" target="_blank" rel="noreferrer">Laws of UX: Ley de Tesler</a>.</p>

<h3>Umbral de Doherty</h3>
<p>La productividad mejora cuando el sistema responde tan rápido que la persona no percibe esperas significativas.</p>
<p><strong>Ejemplo:</strong> una búsqueda que responde en menos de 400 ms se siente fluida y anima a seguir explorando.</p>
<p><strong>Referencias:</strong> <a href="https://lawsofux.com/es/umbral-de-doherty/" target="_blank" rel="noreferrer">Laws of UX: Umbral de Doherty</a>.</p>

<p>Estas leyes no sustituyen a la accesibilidad ni a la validación con usuarios reales, pero sí ofrecen un marco muy útil para diseñar interfaces más comprensibles, eficientes y previsibles.</p>
`

export const courseBlocks: Block[] = [
  {
    slug: "fundamentos",
    shortTitle: "Fundamentos",
    title: "Fundamentos",
    route: "/fundamentos",
    menuDescription: "Conceptos básicos, WCAG, legislación y comprobación de accesibilidad.",
    homeSummary: "Introduce la accesibilidad digital, a quién beneficia, las WCAG, la legislación aplicable y las bases para validar con herramientas y lector de pantalla.",
    introHtml: "<p>En este bloque se presenta la base de trabajo del curso: qué entendemos por accesibilidad digital, a quién beneficia, qué marco técnico y normativo la sostiene y cómo empezar a revisarla en la práctica.</p>\n<p>La idea es dejar claro desde el principio que accesibilidad, usabilidad y experiencia de uso están relacionadas, pero no son exactamente lo mismo: una interfaz puede ser vistosa o cómoda para parte de sus usuarios y seguir excluyendo a otros si no cumple unos mínimos de percepción, manejo y comprensión.</p>",
    sections: [
      {
        "id": "introduccion",
        "title": "Introducción a la accesibilidad digital",
        "html": "<h2 class=\"mt-4 mb-3\">Qué es la accesibilidad digital</h2>\n<p>Podemos definir la accesibilidad digital como el grado en el que todas las personas pueden <b>percibir, comprender, utilizar y navegar</b> por un contenido o servicio digital independientemente de sus capacidades <b>físicas, sensoriales o cognitivas</b>, del dispositivo que utilicen o del contexto en el que accedan.</p>\n<p>La Web nació con vocación universal. Cuando una página, una aplicación o un documento respetan ese objetivo y no dejan fuera a parte de sus usuarios, podemos decir que son accesibles.</p>\n<h2 class=\"mt-4 mb-3\">Por qué es importante</h2>\n<p>La accesibilidad no es un añadido ni una capa de calidad opcional. Es una condición básica para que la información y los servicios puedan usarse de forma real por todas las personas.</p>\n<p>Esto tiene consecuencias muy concretas en varios niveles:</p>\n<ul>\n<li><b>Personas</b>: facilita el acceso a información, trámites, formación, salud, empleo y servicios.</li>\n<li><b>Organizaciones</b>: mejora la calidad del producto, amplía el alcance, reduce incidencias y ayuda a cumplir la normativa.</li>\n<li><b>Sociedad</b>: reduce barreras y favorece una participación más igualitaria en el entorno digital.</li>\n</ul>\n<p>Además, muchas decisiones de accesibilidad mejoran también la <b>usabilidad</b>: contenidos más claros, formularios mejor etiquetados, navegación más predecible o contrastes más legibles suelen beneficiar a todo el mundo.</p>\n<h2 class=\"mt-4 mb-3\">A quién beneficia</h2>\n<p>Solemos agrupar las necesidades de accesibilidad en cuatro grandes bloques, aunque en la práctica el impacto es mucho más amplio:</p>\n<ul>\n<li><b>Visual</b>: ceguera, baja visión, visión reducida, sensibilidad al contraste o dificultad para distinguir determinados colores.</li>\n<li><b>Auditiva</b>: sordera total o parcial, dificultad para entender el habla o dependencia de subtítulos y transcripciones.</li>\n<li><b>Motora</b>: limitaciones en el uso de manos, brazos o voz, movilidad reducida o necesidad de navegar sin ratón.</li>\n<li><b>Cognitiva</b>: dificultades de comprensión, memoria, atención, aprendizaje o lectura.</li>\n</ul>\n<p>Pero también beneficia a muchas situaciones de uso no permanentes:</p>\n<ul>\n<li>Personas mayores cuyas capacidades cambian con la edad.</li>\n<li>Personas con limitaciones temporales, por ejemplo un brazo inmovilizado o la pérdida de unas gafas.</li>\n<li>Personas con limitaciones situacionales, como estar al sol, en un entorno ruidoso o usando el móvil con una sola mano.</li>\n<li>Personas con mala conexión, pantallas pequeñas o dispositivos de entrada distintos al teclado y ratón tradicionales.</li>\n</ul>\n<h2 class=\"mt-4 mb-3\">Cómo acceden las personas al contenido</h2>\n<p>Las personas con discapacidad utilizan productos de apoyo o funciones de accesibilidad del sistema para acceder al contenido digital. No son casos raros ni excepcionales: forman parte del uso real de la tecnología.</p>\n<ul>\n<li>Si no puedo ver, puedo utilizar un lector de pantalla.</li>\n<li>Si veo con dificultad, puedo utilizar ampliación, alto contraste o ajustes de tamaño y espaciado.</li>\n<li>Si no puedo escuchar un vídeo, necesito subtítulos o transcripción.</li>\n<li>Si no puedo usar bien las manos, puedo navegar con teclado, conmutadores, dictado o control por voz.</li>\n<li>Si me cuesta comprender lo que leo, necesito contenido más claro, bien estructurado y predecible.</li>\n</ul>\n<h2 class=\"mt-4 mb-3\">Tecnologías de apoyo que hoy utilizamos todos</h2>\n<p>Muchas soluciones nacidas como apoyo a la discapacidad forman parte ya del uso cotidiano:</p>\n<ul>\n<li>Síntesis de voz en GPS, asistentes o lectores automáticos.</li>\n<li>Reconocimiento del habla para dictar o lanzar acciones.</li>\n<li>Subtítulos automáticos o manuales en vídeos y reuniones.</li>\n<li>Opciones de zoom, modo oscuro, ajuste de tamaño de texto o filtros de color.</li>\n</ul>\n<p>Por eso conviene entender la accesibilidad no solo como atención a un colectivo concreto, sino como una mejora general de acceso, comprensión y comodidad de uso.</p>\n<h2 class=\"mt-4 mb-3\">Qué implica en una web real</h2>\n<p>Llevado a la práctica, hablar de accesibilidad significa comprobar cosas bastante concretas:</p>\n<ul>\n<li>que la estructura del contenido sea clara y semántica,</li>\n<li>que las imágenes y elementos no textuales tengan alternativa cuando la necesiten,</li>\n<li>que los formularios, enlaces y botones se entiendan y se puedan usar bien,</li>\n<li>que toda la interfaz funcione con teclado,</li>\n<li>que el foco, los mensajes y los cambios dinámicos se perciban correctamente,</li>\n<li>y que el contenido resulte legible, comprensible y predecible.</li>\n</ul>\n<p>La accesibilidad no se limita a añadir un texto alternativo o pasar una herramienta, sino a construir bien el contenido, la interacción y la semántica desde el principio.</p>\n<h2 class=\"mt-4 mb-3\">Barreras frecuentes y situación actual</h2>\n<p>El estado actual de accesibilidad en la web sigue siendo claramente mejorable. El informe WebAIM Million 2025, basado en el análisis de un millón de páginas de inicio, muestra algunos datos bastante claros:</p>\n<ul>\n<li>El 94,8% de las páginas analizadas presentaba fallos automáticos de WCAG.</li>\n<li>La media era de 51 errores detectados por página de inicio.</li>\n<li>El 96% de los errores detectados se concentraba en solo seis tipos de problema.</li>\n</ul>\n<p>Los fallos más frecuentes eran:</p>\n<ul>\n<li>Contraste insuficiente en textos.</li>\n<li>Imágenes sin texto alternativo.</li>\n<li>Campos de formulario sin etiquetas correctas.</li>\n<li>Enlaces vacíos.</li>\n<li>Botones vacíos.</li>\n<li>Idioma del documento sin marcar.</li>\n</ul>\n<p>Esto es importante porque muestra que gran parte de la inaccesibilidad no viene de problemas exóticos o muy avanzados, sino de errores repetidos de contenido, estructura y semántica. Precisamente por eso tiene sentido revisar estos puntos de forma sistemática desde el principio.</p>\n<h3 class=\"mt-4 mb-3\">Referencias</h3>\n<ul>\n<li><a href=\"https://www.w3.org/WAI/fundamentals/accessibility-intro/es\" target=\"_blank\" rel=\"noreferrer\">W3C: Introducción a la accesibilidad web</a></li>\n<li><a href=\"https://webaim.org/projects/million/2025\" target=\"_blank\" rel=\"noreferrer\">WebAIM Million 2025</a></li>\n</ul>",
        "figure": {
          "src": "/curso-media/image1.jpeg",
          "alt": "Web de la Universidad de Alicante mostrada en móvil y ordenador.",
          "caption": "Ejemplo de visualización de una misma web en móvil y ordenador."
        }
      },
      {
        "id": "wcag",
        "title": "Pautas de Accesibilidad para el Contenido web (WCAG)",
        "html": "<h2 class=\"mt-4 mb-3\">Qué son las WCAG</h2>\n<p>Las WCAG (<i>Web Content Accessibility Guidelines</i>) son las pautas del W3C para hacer accesible el contenido web. No son una guía de estilo ni una colección de trucos aislados, sino un marco técnico de referencia para revisar si un contenido puede percibirse, manejarse y entenderse correctamente.</p>\n<p>Aunque nacieron para la web, hoy se utilizan como base también para documentos, aplicaciones y otros productos digitales porque describen requisitos bastante estables y desligados de una tecnología concreta.</p>\n<h2 class=\"mt-4 mb-3\">Cómo se estructuran</h2>\n<p>Las WCAG 2 se organizan en varios niveles:</p>\n<ul>\n<li>4 principios fundamentales.</li>\n<li>13 pautas.</li>\n<li>Criterios de conformidad verificables.</li>\n<li>Niveles de conformidad A, AA y AAA.</li>\n</ul>\n<p>Esto es importante porque, aunque solemos hablar de cumplimiento de WCAG, el cumplimiento real se determina sobre los <b>criterios de conformidad</b>.</p>\n<h2 class=\"mt-4 mb-3\">Los cuatro principios</h2>\n<ul>\n<li><b>Perceptible</b>: la información y los componentes de interfaz deben poder percibirse.</li>\n<li><b>Operable</b>: la interfaz debe poder manejarse, por ejemplo con teclado y sin barreras de interacción.</li>\n<li><b>Comprensible</b>: tanto el contenido como el funcionamiento deben resultar entendibles y previsibles.</li>\n<li><b>Robusto</b>: el contenido debe estar construido de forma compatible con navegadores y tecnologías de apoyo.</li>\n</ul>\n<p>Este esquema suele resumirse como <b>POUR</b> y es útil porque ayuda a entender de dónde sale cada requisito técnico que veremos después en el curso.</p>\n<h2 class=\"mt-4 mb-3\">Versiones 2.0, 2.1 y 2.2</h2>\n<ul>\n<li><b>WCAG 2.0</b> se publicó en 2008.</li>\n<li><b>WCAG 2.1</b> se publicó en 2018 y amplió requisitos, sobre todo en móvil, baja visión y aspectos cognitivos.</li>\n<li><b>WCAG 2.2</b> se publicó en 2023 y añade nuevos criterios orientados principalmente a mejorar la interacción y determinados componentes.</li>\n</ul>\n<p>W3C recomienda trabajar con la versión más reciente, es decir, WCAG 2.2. Además, un contenido que cumple WCAG 2.2 también cubre los requisitos anteriores de WCAG 2.1 y 2.0.</p>\n<h2 class=\"mt-4 mb-3\">Niveles de conformidad</h2>\n<ul>\n<li><b>Nivel A</b>: requisitos imprescindibles para que no existan barreras graves de acceso.</li>\n<li><b>Nivel AA</b>: nivel normalmente exigido porque permite un acceso y un uso razonablemente accesibles.</li>\n<li><b>Nivel AAA</b>: nivel más alto, útil como objetivo de mejora, pero difícil de cumplir de forma completa en todos los contenidos.</li>\n</ul>\n<p>Cuando se exige nivel AA, eso significa cumplir todos los criterios de nivel A y todos los de nivel AA.</p>\n<h2 class=\"mt-4 mb-3\">Qué conviene retener</h2>\n<p>Más que memorizar todos los criterios, interesa quedarse con la lógica que hay detrás:</p>\n<ul>\n<li>Si una imagen transmite información, necesita alternativa textual.</li>\n<li>Si una tarea puede hacerse con ratón, debe poder hacerse también con teclado.</li>\n<li>Si una interfaz cambia, debe anunciarlo o dejarlo claro.</li>\n<li>Si el contenido está mal estructurado o mal etiquetado, los productos de apoyo no podrán interpretarlo correctamente.</li>\n</ul>\n<p>Como veremos a lo largo del curso, muchos de los requisitos concretos de texto, formularios, tablas, foco, navegación o componentes nacen precisamente de estos criterios.</p>\n<h3 class=\"mt-4 mb-3\">Referencias</h3>\n<ul>\n<li><a href=\"https://www.w3.org/WAI/standards-guidelines/wcag/\" target=\"_blank\" rel=\"noreferrer\">W3C: WCAG 2 Overview</a></li>\n<li><a href=\"https://www.w3.org/WAI/WCAG22/quickref/\" target=\"_blank\" rel=\"noreferrer\">W3C: How to Meet WCAG 2.2</a></li>\n</ul>"
      },
      {
        "id": "legislacion",
        "title": "Legislación aplicable",
        "html": "<p>Existe numerosa legislación española, europea e internacional relacionada con la accesibilidad, pero en este curso nos centraremos en las referencias más relevantes para entender por qué la accesibilidad digital no es solo una buena práctica técnica.</p>\n<h2 class=\"mt-4 mb-3\">Convención internacional de la ONU</h2>\n<p>La Convención sobre los derechos de las personas con discapacidad, ratificada por España en 2007, es un punto de partida importante. En su artículo 9 reconoce la accesibilidad como condición necesaria para acceder en igualdad de condiciones a la información, las comunicaciones y los servicios.</p>\n<p>Esto deja clara una idea de fondo: la accesibilidad digital no es un extra técnico ni un embellecimiento del producto, sino una parte del derecho de acceso.</p>\n<h2 class=\"mt-4 mb-3\">Directiva (UE) 2016/2102 y Real Decreto 1112/2018</h2>\n<p>En el ámbito público, la referencia central es la Directiva (UE) 2016/2102, trasladada al ordenamiento español mediante el Real Decreto 1112/2018.</p>\n<p>Esta norma regula la accesibilidad de sitios web y aplicaciones móviles del sector público y, además del cumplimiento técnico, exige una serie de obligaciones organizativas:</p>\n<ul>\n<li>cumplir los requisitos de accesibilidad aplicables,</li>\n<li>publicar una declaración de accesibilidad,</li>\n<li>ofrecer un mecanismo de comunicación y reclamación,</li>\n<li>realizar revisiones periódicas,</li>\n<li>y articular responsabilidades internas sobre accesibilidad.</li>\n</ul>\n<h2 class=\"mt-4 mb-3\">Norma europea EN 301 549</h2>\n<p>El estándar técnico europeo de referencia es la EN 301 549, que recoge requisitos de accesibilidad para productos y servicios TIC.</p>\n<p>Es importante matizar algo: la versión armonizada vigente de EN 301 549 utilizada en este contexto europeo sigue apoyándose en <b>WCAG 2.1</b> para web, documentos y aplicaciones. Aun así, desde el punto de vista técnico tiene sentido trabajar ya con <b>WCAG 2.2</b> como referencia de mejora, porque amplía criterios y no contradice lo anterior.</p>\n<p>Además, EN 301 549 no se limita a páginas web. También cubre otros entornos y productos digitales, por lo que actúa como marco más amplio cuando hablamos de accesibilidad en TIC.</p>\n<h2 class=\"mt-4 mb-3\">Qué implica en la práctica</h2>\n<p>En la práctica, cumplir la normativa no consiste solo en pasar un validador. Implica diseñar, desarrollar, mantener y revisar los contenidos con criterios de accesibilidad, documentar el estado real del servicio y ofrecer vías para que un usuario pueda comunicar barreras o solicitar alternativas.</p>\n<p>Por eso conviene leer la legislación junto con las WCAG: una marca el marco de obligación y la otra concreta buena parte de los requisitos técnicos que luego hay que verificar.</p>\n<h3 class=\"mt-4 mb-3\">Referencias</h3>\n<ul>\n<li><a href=\"https://www.un.org/disabilities/documents/convention/convoptprot-s.pdf\" target=\"_blank\" rel=\"noreferrer\">ONU: Convención sobre los derechos de las personas con discapacidad</a></li>\n<li><a href=\"https://eur-lex.europa.eu/eli/dir/2016/2102/oj\" target=\"_blank\" rel=\"noreferrer\">Directiva (UE) 2016/2102</a></li>\n<li><a href=\"https://www.boe.es/eli/es/rd/2018/09/07/1112\" target=\"_blank\" rel=\"noreferrer\">BOE: Real Decreto 1112/2018</a></li>\n<li><a href=\"https://www.etsi.org/human-factors-accessibility/en-301-549-v3-the-harmonized-european-standard-for-ict-accessibility\" target=\"_blank\" rel=\"noreferrer\">ETSI: EN 301 549</a></li>\n</ul>",
        "figure": {
          "src": "/curso-media/image2.jpeg",
          "alt": "Mapa de Europa con referencias a normativa europea y española sobre accesibilidad.",
          "caption": "Imagen usada en el documento para contextualizar la legislación aplicable."
        }
      },
      {
        "id": "lector",
        "title": "Uso de un lector de pantalla",
        "html": "<h2 class=\"mt-4 mb-3\">Qué es</h2>\n<p>NVDA es un lector de pantalla gratuito para Windows utilizado por personas ciegas y con baja visión para acceder al ordenador y a la web.</p>\n<p>Su interés en este curso no es aprender a usarlo a fondo, sino entender qué información recibe una persona cuando la interfaz está bien o mal construida.</p>\n<h2 class=\"mt-4 mb-3\">Cómo hacer una prueba rápida</h2>\n<p>Para una primera toma de contacto, basta con activar el lector y probar una navegación básica por teclado:</p>\n<ul>\n<li><b>TAB</b> y <b>Shift + TAB</b> para recorrer enlaces, botones y campos de formulario.</li>\n<li><b>H</b> para saltar entre encabezados.</li>\n<li><b>F</b> para ir a formularios.</li>\n<li><b>T</b> para ir a tablas.</li>\n<li><b>INSERT + F7</b> para abrir listados de enlaces, encabezados y otros elementos.</li>\n<li>Flechas del teclado para leer el contenido en secuencia.</li>\n</ul>\n<p>No hace falta dominar todos los comandos para que la prueba sea útil. Con muy poco ya se detectan bastantes problemas.</p>\n<h2 class=\"mt-4 mb-3\">Qué revisar con él</h2>\n<p>Al hacer una prueba rápida con lector de pantalla conviene comprobar al menos lo siguiente:</p>\n<ul>\n<li>si el título de la página y los encabezados describen bien la estructura,</li>\n<li>si los enlaces y botones tienen nombres comprensibles,</li>\n<li>si los campos del formulario anuncian su etiqueta, estado y errores,</li>\n<li>si las tablas y regiones se identifican correctamente,</li>\n<li>y si el recorrido completo puede hacerse sin depender del ratón.</li>\n</ul>\n<p>Un lector de pantalla permite descubrir enseguida cuándo una interfaz estaba pensada solo visualmente: encabezados simulados, iconos sin nombre, cambios dinámicos no anunciados o formularios que visualmente parecen claros pero semánticamente no lo son.</p>\n<p>No sustituye a las pruebas con personas usuarias, pero sí es una de las formas más rápidas de detectar problemas reales de semántica, navegación y etiquetado.</p>\n<h3 class=\"mt-4 mb-3\">Referencias</h3>\n<ul>\n<li><a href=\"https://www.nvaccess.org/download/\" target=\"_blank\" rel=\"noreferrer\">NV Access: Descargar NVDA</a></li>\n</ul>"
      },
      {
        "id": "cadua",
        "title": "Pruebas de accesibilidad: automáticas y manuales",
        "html": "<p>Para comprobar la accesibilidad no basta con una sola herramienta. Lo habitual es combinar pruebas automáticas, revisión manual y, cuando sea posible, alguna prueba con productos de apoyo como un lector de pantalla.</p>\n<p>Además, es mucho más eficiente incorporar la accesibilidad desde el principio del proyecto que intentar corregirla al final, cuando ya hay que rehacer diseño, contenidos o desarrollo.</p>\n<h2 class=\"mt-4 mb-3\">Pruebas automáticas</h2>\n<p>Las herramientas automáticas detectan con rapidez ciertos errores frecuentes: imágenes sin texto alternativo, campos de formulario sin etiqueta, problemas de contraste, estructura deficiente de encabezados o usos incorrectos de ARIA.</p>\n<p>Son muy útiles para una primera revisión y para integrar comprobaciones recurrentes en desarrollo, pero no pueden decidir por sí solas si una página es accesible. Que una herramienta no marque errores no significa que la experiencia sea correcta.</p>\n<h2 class=\"mt-4 mb-3\">Pruebas manuales</h2>\n<p>La revisión manual es imprescindible para comprobar aspectos que una herramienta no puede valorar bien:</p>\n<ul>\n<li>si un texto alternativo describe de verdad lo que la imagen aporta,</li>\n<li>si una tabla se entiende y no solo valida,</li>\n<li>si los mensajes de error ayudan a corregir el problema,</li>\n<li>si el foco se mueve de forma lógica,</li>\n<li>y si una tarea completa puede realizarse cómodamente con teclado.</li>\n</ul>\n<p>Por eso, las pruebas automáticas deben verse como ayuda y acelerador, no como validación completa.</p>\n<h2 class=\"mt-4 mb-3\">Ejemplo: extensión de CADUA</h2>\n<p>La extensión de navegador de CADUA para Chrome, Edge, Brave o cualquier navegador Chromium comparte la base de comprobaciones de la aplicación web CADUA, pero añade pruebas que solo pueden ejecutarse desde el propio navegador.</p>\n<p>Al ejecutarse sobre la página ya renderizada, permite revisar estados generados por JavaScript, contraste de color, visibilidad real de elementos o contenidos accesibles solo tras autenticación. Además, puede marcar visualmente sobre la propia interfaz qué elementos presentan errores, lo que agiliza mucho la localización y corrección.</p>\n<h2 class=\"mt-4 mb-3\">Revisión mínima recomendable</h2>\n<p>Como pauta práctica, una revisión básica debería combinar al menos:</p>\n<ul>\n<li>una pasada con herramienta automática,</li>\n<li>una navegación completa por teclado,</li>\n<li>una comprobación de foco visible y orden de tabulación,</li>\n<li>una lectura de la estructura de encabezados y regiones,</li>\n<li>una prueba rápida con lector de pantalla,</li>\n<li>y una revisión humana con criterio técnico del contenido y la interacción.</li>\n</ul>\n<p>De esta forma, la comprobación se acerca mucho más a la experiencia real de uso y evita la falsa sensación de conformidad que a veces da un informe automático.</p>\n<h3 class=\"mt-4 mb-3\">Referencias</h3>\n<ul>\n<li><a href=\"https://www.w3.org/WAI/fundamentals/accessibility-intro/es\" target=\"_blank\" rel=\"noreferrer\">W3C: Introducción a la accesibilidad web</a></li>\n</ul>",
        "figure": {
          "src": "/curso-media/image3.png",
          "alt": "Captura de pantalla de la extensión CADUA mostrando errores de lista vacía y tabla sin título.",
          "caption": "Resultados de la extensión de navegador de CADUA."
        }
      }
    ],
  },
  {
    slug: "requisitos-web",
    shortTitle: "Requisitos",
    title: "Requisitos web",
    route: "/requisitos-web",
    menuDescription: "Texto, semántica, formularios, tablas, componentes y ARIA.",
    homeSummary: "Recoge los requisitos técnicos que deben cumplir las páginas y aplicaciones web: texto, idioma, estructura, imágenes, enlaces, tablas, formularios y componentes accesibles.",
    introHtml: "<p>En este bloque se reúnen los requisitos técnicos de accesibilidad aplicados a la web: contenido, estructura, interacción y componentes.</p>",
    sections: [
      {
        "id": "texto",
        "title": "Texto",
        "html": "<p>Antes de comenzar a elaborar un contenido, debemos pensar en el tipo de personas a las que se dirige, las ideas más importantes&nbsp;a transmitir y&nbsp;su estructura.&nbsp;Para ello utilizaremos un <b>lenguaje&nbsp;sencillo</b>,&nbsp;prescindiendo de estructuras gramaticales complejas&nbsp;y usando frases cortas. El&nbsp;<b>mensaje</b>&nbsp;que queremos transmitir con nuestro texto debe ser&nbsp;<b>detectado&nbsp;de forma clara por los usuarios</b>.</p>\n<p>Formato del texto</p>\n<p>La tipografía utilizada es un elemento fundamental de nuestro documento. Es aconsejable utilizar fuentes de tipo San Serif, como, por ejemplo:&nbsp;<b>Arial o Verdana&nbsp;</b>ya que favorecen la legibilidad del texto y por tanto su comprensión por parte de varios colectivos de personas con discapacidad.</p>\n<p>El término&nbsp;<b>“sans serif”</b>&nbsp;procede del francés y significa “sin remates\".</p>\n<p>Debemos utilizar tipos de fuentes que estén&nbsp;<b>presentes en la mayoría de Sistemas Operativos</b>, para garantizar así la interoperabilidad de nuestros contenidos.</p>\n<p>En el caso de que utilicemos tipos de fuente específicos, como en el caso de la UA que utiliza en la nueva web Atkinson Hyperlegible Next y no está instalada en los sistemas por defecto, deberemos incluirla como fuente por ejemplo desde Google Fonts.</p>\n<p>Veamos como definir la fuente con CSS para toda una página web:</p>\n<pre class=\"course-code\"><code>body {</code></pre>\n<p>Font-family: Arial;</p>\n<pre class=\"course-code\"><code>}</code></pre>\n<p>El<b>&nbsp;tamaño de la fuente</b>&nbsp;debe ser suficiente, no aconsejándose bajar de 12 puntos y recomendándose utilizar el tamaño de&nbsp;<b>14 puntos</b>.</p>\n<p>En el desarrollo web debemos utilizar siempre <b>unidades relativas</b> para especificar el tamaño. De esta forma el contenido escalará de forma proporcional y se respetará la configuración que pueda tener el usuario.</p>\n<p>En la mayoría de navegadores actuales el tamaño por defecto es de 16px, equivalente a 12 puntos o 1rem/1em.</p>\n<p>Como hemos dicho, si quisiéramos cambiar el tamaño y subirlo a 14 puntos, serían aproximadamente 18px, pero especificando en unidades relativas serían 1.166rem/em.</p>\n<p>Veamos como definir el tamaño para todo el contenido, en este caso debemos hacerlo sobre la etiqueta HTML:</p>\n<pre class=\"course-code\"><code>html {</code></pre>\n<p>Font-size: 1.166rem; /* 14 puntos */</p>\n<pre class=\"course-code\"><code>}</code></pre>\n<p>Si por ejemplo utilizamos una librería CSS como Bootstrap, al aplicar esta regla, todos los tamaños de encabezados, listas, etc., escalarán al mismo tiempo.</p>\n<p>Por otro lado,&nbsp;<b>no es aconsejable abusar del texto en mayúsculas,&nbsp;</b>debido a que su legibilidad es más baja y además, en casos de usuarios de líneas braille como personas ciegas es menos cómoda la lectura de letras mayúsculas que minúsculas.</p>\n<p>Por último, debemos evitar utilizar los estilos o etiquetas de énfasis &lt;em&gt; y el tachado &lt;s&gt;, ya que, al cambiar la forma del texto, dificulta mucho su lectura.</p>\n<p>Formato de párrafo</p>\n<p>Lo primero que tener en cuenta es que todo texto debe estar incluido en una etiqueta semántica, ya sean botones, enlaces, párrafos, encabezados, etc. Esto quiere decir que etiquetas de maquetación no deben tener texto directamente, ya que su función es maquetar contenido, no texto, veamos un ejemplo:</p>\n<pre class=\"course-code\"><code>&lt;div&gt;¡Hola mundo!&lt;/div&gt; &lt;!—Mal --&gt;\n&lt;div&gt;&lt;p&gt;¡Hola mundo!&lt;/p&gt; &lt;/div&gt; &lt;!— Bien --&gt;</code></pre>\n<p>Tampoco debemos utilizar las etiquetas &lt;br&gt; para incluir saltos de línea, ya que debemos estructurar el texto con párrafos, listas y otros elementos semánticos. En el caso de querer incluir márgenes, debemos realizarlos con reglas CSS.</p>\n<p>Respecto a la&nbsp;<b>alineación del texto&nbsp;</b>debemos tener en cuenta una serie de consideraciones:</p>\n<ul>\n<li>Si pensamos centrar contenido , este debe ser corto y no ocupar más de un par de líneas, en caso contrario puede resultar más difícil su lectura.</li>\n<li><b>No se debe justificar el texto del contenido a ambos lados de la pantalla</b>, este formato dificulta su lectura y por tanto, su legibilidad. Es el caso, por ejemplo, en personas con dislexia, puesto que al alinear el texto justificado a cada extremo del documento se crean una serie de 'ríos' en el contenido que impiden una fácil comprensión.</li>\n</ul>\n<p>&nbsp;</p>\n<ul>\n<li>Incluir un <b>interlineado </b>suficiente que mejore la lectura de las frases.  Vamos a poner a los párrafos del contenido un interlineado de 1,5 líneas y además, indicar que el texto debe estar alineado a la izquierda:</li>\n</ul>\n<pre class=\"course-code\"><code>p {\nline-height: 1.5;</code></pre>\n<p>text-align: left; /* No usar justify y no abusar de center */</p>\n<pre class=\"course-code\"><code>}</code></pre>\n<ul>\n<li>Agregar un espaciado suficiente entre los diferentes bloques de texto (párrafos, elementos de lista…). Veamos un ejemplo para establecer un espaciado inferior después de cada párrafo:</li>\n</ul>\n<pre class=\"course-code\"><code>p {</code></pre>\n<p>margin-bottom: 1rem;</p>\n<pre class=\"course-code\"><code>}</code></pre>\n<p>Texto en imágenes</p>\n<p><b>No es aconsejable incluir texto en imágenes</b>&nbsp;debido a que dificulta su legibilidad. En este caso, podríamos tener problemas con el contraste entre colores de fondo y texto de la imagen cuando la imagen se amplía, y por tanto, resultará más complicada su lectura para personas con baja visión que utilicen un magnificador de pantalla a niveles altos de ampliación.</p>",
        "figure": {
          "src": "/curso-media/image4.jpeg",
          "alt": "Ejemplo de texto incorrecto justificado y otro correcto alineado a la izquierda.",
          "caption": "Comparativa del documento sobre maquetación de texto incorrecta y correcta."
        }
      },
      {
        "id": "idioma",
        "title": "Idioma",
        "html": "<p>Tanto si trabajamos páginas web con varios idiomas o tan solo aparecen términos de otra lengua, deberemos&nbsp;<b>marcar siempre el idioma al que pertenece cada parte del texto</b>. Esto es de vital importancia debido a que los lectores de pantalla que utilizan por ejemplo, las personas ciegas, necesitan conocer el idioma del texto para realizar una correcta pronunciación.</p>\n<p>Es el caso, también, de los buscadores como Google, que necesitan saber el idioma de la página para una mejor compresión e indexación de los contenidos.</p>\n<p>Pongamos el ejemplo de que escribiendo un texto en castellano, introducimos la palabra People, para referirnos a la revista con dicho nombre. Si no indicamos de una manera correcta que ese texto está en inglés, el lector de pantalla pronunciará 'people' mientras que, si lo hemos marcado correctamente en su idioma, en este caso el inglés, el lector de pantalla pronunciará 'pipol'.</p>\n<p>A continuación, veremos como realizar esta tarea de varias formas y con diferente alcance en Word.</p>\n<p>Establecer el idioma por defecto de una página web</p>\n<p>Para especificar los idiomas en HTML5 disponemos del atributo Lang, que se puede aplicar a cualquier etiqueta. En la etiqueta debemos pasarle el código del idioma o el locale, por ejmplo es-ES para español de España.</p>\n<p>Para indicar que el contenido de la web es en español, escribiríamos:</p>\n<pre class=\"course-code\"><code>&lt;!DOCTYPE html&gt;\n&lt;html lang=”es”&gt;\n&lt;head&gt;..&lt;/head&gt;\n&lt;body&gt;...&lt;/body&gt;\n&lt;/html&gt;</code></pre>\n<p>Establecer el idioma por defecto en una parte de la página web</p>\n<p>Para marcar que un fragmento de texto está en otro idioma, lo hacemos directamente en el texto deseado. Por ejemplo marcando la palabra “People” como palabra inglesa:</p>\n<pre class=\"course-code\"><code>&lt;!DOCTYPE html&gt;\n&lt;html lang=”es”&gt;\n&lt;head&gt;..&lt;/head&gt;\n&lt;body&gt;\n&lt;p&gt;Gente en inglés es &lt;span <b>lang=”en”</b>&gt;People&lt;/span&gt;&lt;/p&gt;\n&lt;/body&gt;\n&lt;/html&gt;</code></pre>"
      },
      {
        "id": "estructura",
        "title": "Estructura y semántica",
        "html": "<p>Debemos considerar que cada página web es la suma de diferentes elementos, que cada uno tiene una relación y a su vez se relacionan entre sí. Esto es, un documento cuenta con listas ordenadas, párrafos, encabezados, tablas y muchos más tipos de elementos que definen la estructura del mismo.</p>\n<p>Para estructurar nuestra página web de manera correcta debemos dotar de semántica a los elementos que lo componen y de esta manera trasmitirán aparte del contenido, su significado y relación con los demás elementos.</p>\n<p>Pongamos un ejemplo de lista con los colores corporativos UA, podemos hacerla escribiendo en cada línea:</p>\n<pre class=\"course-code\"><code>&lt;p&gt;1. Azul&lt;/p&gt;\n&lt;p&gt;2. Naranja&lt;/p&gt;\n&lt;p&gt;3. Gris&lt;/p&gt;</code></pre>\n<p>El problema es que estaremos simulando una lista, cuando en realidad son tres párrafos. Sin embargo, si utilizamos una lista ordenada, ni si quiera necesitamos escribir los números:</p>\n<pre class=\"course-code\"><code>&lt;ol&gt;\n&lt;li&gt;Azul&lt;/li&gt;\n&lt;li&gt;Naranja&lt;/li&gt;\n&lt;li&gt;Gris&lt;/li&gt;\n&lt;/ol&gt;</code></pre>\n<p>Utilizando los elementos de lista sí estaremos dotando al elemento de semántica, y un lector de pantallas para personas ciegas avisará, antes de leer los elementos, que es una lista.</p>\n<p>Otra mala práctica es crear títulos cambiando el aspecto visual, por ejemplo a un párrafo para hacerlo más grande y que visualmente parezca un título en lugar de utilizar las etiquetas de encabezado (h1, h2, h3…)</p>\n<p>En definitiva, y como hemos visto en este apartado, nunca debemos simular elementos y deberemos crearlos de la forma correcta para que todos los elementos tengan un significado más allá del contenido que contienen.</p>"
      },
      {
        "id": "pagina-web",
        "title": "Estructura de una página web",
        "html": "<p>Siguiendo con la función semántica de las etiquetas HTML, deberíamos especificar un esqueleto de nuestra página web que separe las diferentes secciones y elementos de la página.</p>\n<p>Es imprescindible al menos, de incluir las secciones de cabecera y contenido principal con las etiquetas header y main. También se pueden incluir otras etiquetas como footer para el pie de página.</p>\n<p>Además, si utilizamos menús de navegación, también deberíamos utilizar find</p>\n<p>etiquetas nav para especificar que es un menú de navegación.</p>\n<p>Título de página</p>\n<p>Otro requisito de accesibilidad es que todo documento web tenga definido un título con la etiqueta &lt;title&gt; dentro del &lt;head&gt;. Este título se aconseja que:</p>\n<ul>\n<li>Sea descriptivo y conciso: Para no tener que leer mucho contenido</li>\n<li>Ser único en las diferentes páginas del sitio: Para saber en qué página estamos</li>\n<li>Coincida con el h1 de la página: Para evitar confusiones</li>\n</ul>\n<p>Pongamos el ejemplo de una web en la que tiene el mismo título en las dos páginas: Una es la página de inicio de la UA y la otra, la de Actualidad Universitaria. ¿Qué ocurre si las dos tienen el mismo title “Universidad de Alicante”?</p>\n<p>Veamos una captura de pantalla de las pestañas de un navegador, ahí se puede leer el title, al ser diferentes, podremos diferenciarlas, en otro caso, no sabremos en qué pestaña está cada contenido:</p>\n<p>Veamos un ejemplo completo con título, cabecera, contenido principal y pie de página.</p>\n<pre class=\"course-code\"><code>&lt;!DOCTYPE html&gt;\n&lt;html lang=”es”&gt;\n&lt;head&gt;\n&lt;title&gt;Bienvenido/a a la UA&lt;/title&gt;\n&lt;/head&gt;\n&lt;body&gt;\n&lt;header&gt;\n&lt;a href=”/”&gt;\n&lt;img src=”imagen.png” alt=”Universidad de Alicante” /&gt;\n&lt;/a&gt;\n&lt;nav&gt;\n&lt;ul&gt;\n&lt;li&gt;&lt;a href=”estudiantes.html”&gt;Estudiantes&lt;/a&gt;&lt;/li&gt;\n&lt;li&gt;&lt;a href=”pdi.html”&gt;PDI&lt;/a&gt;&lt;/li&gt;\n&lt;li&gt;&lt;a href=”ptgas.html”&gt;PTGAS&lt;a&gt;&lt;/li&gt;</code></pre>\n<pre class=\"course-code\"><code>&lt;/ul&gt;\n&lt;/nav&gt;\n&lt;main&gt;\n&lt;h1&gt;Bienvenido/a a la UA&lt;/h1&gt;\n&lt;!—Contenido de la página --&gt;\n&lt;/main&gt;\n&lt;footer&gt;\n&lt;p&gt;Universidad de Alicante 2025&lt;/p&gt;\n&lt;/footer&gt;\n&lt;/header&gt;\n&lt;/body&gt;\n&lt;/html&gt;</code></pre>",
        "figure": {
          "src": "/curso-media/image5.png",
          "alt": "Captura de Chrome con dos pestañas con títulos diferentes.",
          "caption": "Ejemplo usado para explicar por qué cada página debe tener un título único."
        }
      },
      {
        "id": "encabezados",
        "title": "Encabezados",
        "html": "<p>Los encabezados son uno de los elementos más importantes para darle una estructura coherente a una página web.</p>\n<p>Hablamos de las etiquetas h1, h2, h3, h5, h5 y h6. Debe fomentarse su uso en lugar de otros elementos para marcar las diferentes secciones de una web.</p>\n<p>Como comentábamos en la sección anterior, toda página debe tener un h1 único dentro de todas las páginas web y a partir de ahí, deberíamos incluir diferentes apartados usando los siguientes niveles, por ejemplo, el segundo nivel, h2.</p>\n<p>No se deben saltar niveles, es decir, si tenemos un h1, no podemos poner como siguiente nivel un h3.</p>\n<p>Tampoco se deben crear encabezados consecutivos del mismo nivel y que no tengan elementos entre ellos, pues su función es encabezar una sección, por ejemplo,estaría mal:</p>\n<pre class=\"course-code\"><code>&lt;h1&gt;Web UA&lt;/h1&gt;\n&lt;p&gt;Descubre la web de la UA…&lt;/p&gt;\n&lt;h2&gt;Noticias&lt;/h2&gt;\n&lt;h2&gt;Eventos&lt;/h2&gt;</code></pre>\n<p>Ahora, veamos una estructura de la web de la UA, con la sección de noticias y eventos de forma correcta:</p>\n<pre class=\"course-code\"><code>&lt;h1&gt;Web UA&lt;/h1&gt;\n&lt;p&gt;Descubre la web de la UA…&lt;/p&gt;\n&lt;h2&gt;Noticias&lt;/h2&gt;\n&lt;h3&gt;Enlace a noticia 1&lt;/h3&gt;\n&lt;p&gt;Descripción noticia 1&lt;/p&gt;\n&lt;h3&gt;Enlace a noticia 2&lt;/h3&gt;\n&lt;p&gt;Descripción noticia 2&lt;/p&gt;\n&lt;h3&gt;Enlace a noticia 3&lt;/h3&gt;\n&lt;p&gt;Descripción noticia 3&lt;/p&gt;</code></pre>\n<pre class=\"course-code\"><code>&lt;h2&gt;Eventos&lt;/h2&gt;\n&lt;ul&gt;\n&lt;li&gt;Evento 1&lt;/li&gt;\n&lt;li&gt;Evento 2&lt;/li&gt;\n&lt;li&gt;Evento 3&lt;/li&gt;\n&lt;/ul&gt;\n&lt;h2&gt;La UA en Cifras&lt;/h2&gt;</code></pre>"
      },
      {
        "id": "imagenes",
        "title": "Imágenes y elementos no textuales",
        "html": "<p>Todos los elementos no textuales como imágenes, gráficos, fórmulas matemáticas, cuadros de texto, etc. Deben disponer de un texto alternativo que describa el contenido o lo que queremos transmitir con ellos, ya que estos elementos no son accesibles mediante los productos de apoyo que utilizan personas con discapacidad.</p>\n<p>Debemos introducir una alternativa textual a la imagen, como si estuviésemos describiendo la imagen a otra persona, incluso aquello que nos transmite esa imagen.</p>\n<p>En el caso de que un elemento sea meramente decorativo, se deberá dejar la etiqueta de texto alternativo vacía.&nbsp;</p>\n<p>Para incluir la descripción de una imagen en una web debemos incluir el atributo alt, que es obligatorio. Veamos dos ejemplos, una imagen con descripción y otra decorativa:</p>\n<pre class=\"course-code\"><code>&lt;img src=”mano-ua.png” alt=”Estatua de una mano que sostiene un lápiz apuntando al cielo es un símbolo de la libertad de expresión de la UA”/&gt;\n&lt;!— Imagen decorativa --&gt;\n&lt;img src=”fondo-decorativo.png” alt=””/&gt;</code></pre>\n<p>Si el texto alternativo es útil para todo el mundo, deberíamos incluirlo también con el atributo title:</p>\n<pre class=\"course-code\"><code>&lt;img src=”mano-ua.png” alt=”Estatua de una mano que sostiene un lápiz apuntando al cielo es un símbolo de la libertad de expresión de la UA” title=”Estatua de una mano que sostiene un lápiz apuntando al cielo es un símbolo de la libertad de expresión de la UA” /&gt;</code></pre>\n<p>No se deben superar los 150 caracteres en el texto alternativo. Si la descripción es muy larga, debemos valorar si incluirla dentro del contenido de la página.</p>\n<p>Otra forma de incluir una descripción larga es mediante la etiqueta figcaption dentro de figure en HTML5, veamos un ejemplo:</p>\n<pre class=\"course-code\"><code>&lt;figure&gt;\n&lt;img src=”mano-ua.png” alt=”Estatua de una mano que sostiene un lápiz apuntando al cielo en el campus de la UA” /&gt;\n&lt;figcaption&gt;</code></pre>\n<p>Descripción larga</p>\n<pre class=\"course-code\"><code>&lt;/figcaption&gt;\n&lt;/figure&gt;</code></pre>\n<p>Iconos</p>\n<p>Los iconos, como otro elemento no textual, debe describirse para proporcionar indicaciones claras de qué propósito tiene ya sea incluyéndolo con una etiqueta &lt;i&gt; &lt;svg&gt; o &lt;img&gt;.</p>\n<p>En este caso no hace falta describir, por ejemplo “icono de un lápiz” si el icono tiene la edición de editar, por lo que su descripción será “Editar”.</p>\n<p>En el caso de las imágenes es fácil, porque contamos con el atributo alt, pero, ¿y en los iconos? No se puede incluir la etiqeuta alt, entra en juego las atributos ARIA, concretamente veremos el atributo aria-label.</p>\n<p>Aria-label permite darle una descripción accesible a cualquier elemento, sobre-escribiendo el texto que haya dentro. Pero además, debe incluirse el atributo title para quién use un ratón pueda descubrir qué propósito tiene.</p>\n<p>Veamos un ejemplo de un icono de editar:</p>\n<pre class=\"course-code\"><code>&lt;i class=”icon icon-edit”\naria-label=”Editar” title=”Editar”&gt;&lt;/i&gt;</code></pre>\n<p>De esta forma, un lector de pantalla, al llegar al elemento leerá “Editar” y si pasamos el ratón por encima podremos ver “Editar”.</p>\n<p>En ningún caso podemos dejar solamente el atributo title y ninguna información más, ya que no todos los lectores de pantalla leen ese contenido. Además, obtendremos en los validadores de accesibildiad un error de elemento vacío.</p>"
      },
      {
        "id": "enlaces-botones",
        "title": "Enlaces y botones",
        "html": "<p>Los enlaces y botones deben transmitir claramente qué ocurrirá cuando pulsemos en ellos. Deben ser cortos y concisos, por ejemplo: “Procesar imagen”, “Descargar documento”, etc.</p>\n<p>No podemos utilizar como texto de enlaces palabras como “aquí”, “pulsa aquí”, “enlace”, etc.</p>\n<p>Si van a provocar un cambio de contesto deberíamos indicarlo en el title, por ejemplo, si es un enlace de YouTube, ponerle: title=”Se abrirá en YouTube”.</p>\n<p>Si el enlace descargará un fichero, por ejemplo un documento de Word o PowerPoint, es altamente aconsejable incluir la extensión y el tamaño del enlace, por ejemplo para un vídeo MP4:</p>\n<pre class=\"course-code\"><code>&lt;a href=”video.mp4” download=”Víde de presentación”&gt;</code></pre>\n<p>Vídeo de presentación (MP4 300MB)</p>\n<pre class=\"course-code\"><code>&lt;/a&gt;</code></pre>\n<p>De esta forma, estamos alertando al usuario del formato del documento, que dependiendo del dispositivo que esté usando, no tenga u nvisor para ese formato y el tamaño, que si es muy grande, si estamos fuera de casa con datos, seguramente deseemos descargarlo cuando estemos en casa con conexión Wi-Fi.</p>\n<p>Los enlaces y botones no pueden estar vacíos, siempre deben tener un texto, ya sea visible o no. En este sentido, si el enlace o botón solo incluye una imagen o icono, deben tener texto alternativo o aria-label.</p>\n<p>Por último, en aplicaciones que tienen un alto uso de peticiones Ajax, debemos considerar que los botones deben utilizarse en estos casos y utilizar siempre botones para recargar páginas o procesar información. Los enlaces, sin embargo, están pensados para probar cambio de página.</p>"
      },
      {
        "id": "tablas",
        "title": "Tablas",
        "html": "<p>Las tablas son para estructurar datos, NO para maquetar contenido. Para eso están los div.</p>\n<p>No hay que dividir ni combinar celdas. Por lo que las tablas deben ser uniformes.</p>\n<p>Deben tener un título que las titule con la etiqueta &lt;caption&gt;. Por defecto, la etiqueta caption se muestra visualmente debajo de la tabla, pero es mejor tocar el CSS para que el título salga encima de la tabla.</p>\n<p>Debe diferenciarse claramente cuáles son los encabezados de fila o columna, a poder ser con contraste más alto.</p>\n<p>Veamos un ejemplo de tabla:</p>\n<pre class=\"course-code\"><code>&lt;table class=”table”&gt;\n&lt;caption&gt;Notas de la asignatura de accesibilidad&lt;/caption&gt;\n&lt;thead&gt;\n&lt;!—Cabecera en azul con texto blanco para resaltar --&gt;\n&lt;tr style=”background:blue; color:white;”&gt;\n&lt;th&gt;Nombre&lt;/th&gt;\n&lt;th&gt;Nota&lt;/th&gt;\n&lt;/tr&gt;\n&lt;/thead&gt;\n&lt;tbody&gt;\n&lt;tr&gt;\n&lt;th&gt;Alberto&lt;/th&gt;\n&lt;th&gt;8&lt;/th&gt;\n&lt;/tr&gt;\n&lt;tr&gt;\n&lt;th&gt;Alba&lt;/th&gt;\n&lt;th&gt;9&lt;/th&gt;\n&lt;/tr&gt;\n&lt;/tbody&gt;\n&lt;/table&gt;</code></pre>\n<p>Si la tabla es muy ancha, se recomienda hacerla adaptable con la clase de Bootstrap table-responsive para poder desplazarnos con scroll horizontal en dispositivos móviles:</p>\n<pre class=\"course-code\"><code>&lt;div class=”table-responsive”&gt;\n&lt;table&gt;</code></pre>\n<p>…</p>\n<pre class=\"course-code\"><code>&lt;/table&gt;\n&lt;/div&gt;</code></pre>",
        "showcase": {
          "title": "Ejemplo de tabla",
          "summary": "Este es el ejemplo del curso que antes estaba en `ejemplos/tablas.html`, integrado directamente en el tema para poder explicarlo y verlo en el mismo contexto.",
          "code": "<h3>Lista de Solicitudes</h3>\n<div class=\"table-responsive\">\n  <table class=\"table table-striped\">\n    <caption>Tabla de ejemplo con datos de solicitudes</caption>\n    <thead class=\"table-dark\">\n      <tr>\n        <th scope=\"col\">Nombre</th>\n        <th scope=\"col\">DNI</th>\n        <th scope=\"col\">Género</th>\n        <th scope=\"col\">Solicita</th>\n        <th scope=\"col\">Respuesta(s)</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>\n          Juan Pérez\n          <div class=\"dropdown d-inline-block ms-2\">\n            <button class=\"btn btn-sm p-0\" type=\"button\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\" aria-label=\"Acciones de Juan Pérez\">⋮</button>\n            <ul class=\"dropdown-menu\">\n              <li><a class=\"dropdown-item\" href=\"#\">Editar</a></li>\n              <li><a class=\"dropdown-item\" href=\"#\">Ver</a></li>\n              <li><a class=\"dropdown-item\" href=\"#\">Borrar</a></li>\n            </ul>\n          </div>\n        </td>\n        <td>12345678A</td>\n        <td>Hombre</td>\n        <td>Quiero información</td>\n        <td>Email, UACloud</td>\n      </tr>\n      <tr>\n        <td>Marta González</td>\n        <td>23456789B</td>\n        <td>Mujer</td>\n        <td>Solicitud de beca</td>\n        <td>Teléfono</td>\n      </tr>\n      <tr>\n        <td>Carlos López</td>\n        <td>34567890C</td>\n        <td>Hombre</td>\n        <td>Renovación matrícula</td>\n        <td>Email</td>\n      </tr>\n      <tr>\n        <td>Ana Martínez</td>\n        <td>45678901D</td>\n        <td>Mujer</td>\n        <td>Reclamación de nota</td>\n        <td>Teléfono, UACloud</td>\n      </tr>\n      <tr>\n        <td>David Ramírez</td>\n        <td>56789012E</td>\n        <td>Hombre</td>\n        <td>Modificación de horario</td>\n        <td>UACloud</td>\n      </tr>\n    </tbody>\n  </table>\n</div>",
          "previewHtml": "<div><h3 class=\"h4 mb-3\">Lista de Solicitudes</h3><div class=\"table-responsive\"><table class=\"table table-striped\"><caption>Tabla de ejemplo con datos de solicitudes</caption><thead class=\"table-dark\"><tr><th scope=\"col\">Nombre</th><th scope=\"col\">DNI</th><th scope=\"col\">Género</th><th scope=\"col\">Solicita</th><th scope=\"col\">Respuesta(s)</th></tr></thead><tbody><tr><td>Juan Pérez <div class=\"dropdown d-inline-block ms-2\"><button class=\"btn btn-sm p-0\" type=\"button\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\" aria-label=\"Acciones de Juan Pérez\">⋮</button><ul class=\"dropdown-menu\"><li><a class=\"dropdown-item\" href=\"#\">Editar</a></li><li><a class=\"dropdown-item\" href=\"#\">Ver</a></li><li><a class=\"dropdown-item\" href=\"#\">Borrar</a></li></ul></div></td><td>12345678A</td><td>Hombre</td><td>Quiero información</td><td>Email, UACloud</td></tr><tr><td>Marta González</td><td>23456789B</td><td>Mujer</td><td>Solicitud de beca</td><td>Teléfono</td></tr><tr><td>Carlos López</td><td>34567890C</td><td>Hombre</td><td>Renovación matrícula</td><td>Email</td></tr><tr><td>Ana Martínez</td><td>45678901D</td><td>Mujer</td><td>Reclamación de nota</td><td>Teléfono, UACloud</td></tr><tr><td>David Ramírez</td><td>56789012E</td><td>Hombre</td><td>Modificación de horario</td><td>UACloud</td></tr></tbody></table></div></div>",
          "notes": [
            "La clase `table-responsive` envuelve la tabla para permitir scroll horizontal en móvil cuando no caben todas las columnas.",
            "La clase `table` aplica la maquetación base y `table-striped` alterna el fondo de las filas para mejorar el seguimiento visual.",
            "La cabecera usa `table-dark`, que en el ejemplo original del curso resaltaba claramente los encabezados.",
            "El `caption` da nombre a la tabla y los `scope=\"col\"` identifican cada encabezado de columna.",
            "La acción por fila está dentro de un `dropdown`, de modo que varias operaciones caben en una sola celda sin saturar la tabla."
          ]
        }
      },
      {
        "id": "formularios",
        "title": "Formularios",
        "html": "<p>Los formularios tienen como finalidad proporcionar interactividad a los sitios y aplicaciones web, esto es, dados una serie de datos, procesarlos de alguna forma para obtener resultados. Ya sean filtrar listados, enviar peticiones al servidor, producir cambios en la interfaz, etc.</p>\n<p>Campos de formulario con etiqueta asociada</p>\n<p>Todo campo de formulario debe estar <b>dentro</b> de una etiqueta de formulario &lt;form&gt;, de la misma forma que un elemento de lista &lt;li&gt; debe de estar dentro de una etiqueta de lista &lt;ul&gt;.</p>\n<pre class=\"course-code\"><code>&lt;form&gt;\n&lt;!-- Campos de formulario --&gt;\n&lt;/form&gt;</code></pre>\n<p>Los campos de formulario pueden ser de varios tipos, como texto, número, fecha, archivo, etc. Cada tipo de campo tiene un comportamiento y apariencia diferente, y se pueden personalizar con atributos y estilos.</p>\n<p>Campos de formulario con etiqueta asociada</p>\n<p>Todo campo de formulario debe estar asociado con una etiqueta &lt;label&gt; que lo describa. Para ello, debemos incluir un atributo id=\"nombreCampoFormulario\" en el campo de formulario y luego en una etiqueta &lt;label&gt; referenciarla en el atributo for=\"nombreCampoFormulario\". Veamos varios ejemplos:</p>\n<pre class=\"course-code\"><code>&lt;form&gt;\n&lt;div class=\"mb-3\"&gt;\n&lt;label for=\"nombre\" class=\"form-label\"&gt;Nombre:&lt;/label&gt;\n&lt;input type=\"text\" id=\"nombre\" class=\"form-control w-25\" /&gt;\n&lt;/div&gt;\n&lt;div class=\"mb-3\"&gt;\n&lt;label for=\"colectivo\" class=\"form-label\"&gt;Colectivo UA&lt;/label&gt;\n&lt;select id=\"colectivo\" class=\"form-select w-25\"&gt;\n&lt;option value=\"alumno\"&gt;Alumno&lt;/option&gt;\n&lt;option value=\"pdi\"&gt;PPDI&lt;/option&gt;\n&lt;option value=\"ptgas\"&gt;PTGAS&lt;/option&gt;\n&lt;/select&gt;\n&lt;/div&gt;\n&lt;/form&gt;</code></pre>\n<p>Agrupar campos de formulario</p>\n<p>Hay dos ocasiones en las que debemos agrupar campos de formulario utilizando &lt;fieldset&gt;&lt;legend&gt;:</p>\n<ul>\n<li>Cuando el formulario es muy largo (más de 5 campos): Debemos agrupar campos de formulario relacionados. Por ejemplo: Datos personales, Datos académicos, etc.</li>\n<li>Cuando utilizamos campos checkbox o radio: Para darles una etiqueta descriptiva en conjunto. Por ejemplo: género, colectivo, etc.</li>\n</ul>\n<p>Ejemplo en caso 1: Campos de formulario agrupados por relación cuando el formulario es muy largo:</p>\n<pre class=\"course-code\"><code>&lt;form&gt;\n&lt;fieldset&gt;\n&lt;legend&gt;Datos personales&lt;/legend&gt;\n&lt;div class=\"mb-3\"&gt;\n&lt;label for=\"nombre\" class=\"form-label\"&gt;Nombre:&lt;/label&gt;\n&lt;input type=\"text\" id=\"nombre\" class=\"form-control\" /&gt;\n&lt;/div&gt;\n&lt;div class=\"mb-3\"&gt;\n&lt;label for=\"apellidos\" class=\"form-label\"&gt;Apellidos:&lt;/label&gt;\n&lt;input type=\"text\" id=\"apellidos\" class=\"form-control\" /&gt;\n&lt;/div&gt;\n&lt;div class=\"mb-3\"&gt;\n&lt;label for=\"dni\" class=\"form-label\"&gt;DNI/NIE:&lt;/label&gt;\n&lt;input type=\"text\" id=”dni\" class=\"form-control\" /&gt;\n&lt;/div&gt;\n&lt;/fieldset&gt;\n&lt;fieldset&gt;\n&lt;legend&gt;Datos académicos&lt;/legend&gt;</code></pre>\n<p>div class=\"mb-3\"&gt;</p>\n<pre class=\"course-code\"><code>&lt;label for=\"estudio\" class=\"form-label\"&gt;Estudio&lt;/label&gt;\n&lt;input type=\"text\" id=”estudio\" class=\"form-control\" /&gt;\n&lt;/div&gt;</code></pre>\n<p>div class=\"mb-3\"&gt;</p>\n<pre class=\"course-code\"><code>&lt;label for=\"asignatura\" class=\"form-label\"&gt;Asignatura&lt;/label&gt;\n&lt;input type=\"text\" id=\"asignatura\" class=\"form-control\"/&gt;\n&lt;/div&gt;\n&lt;/fieldset&gt;\n&lt;div class=”mb-3”&gt;\n&lt;button type=”submit”&gt;Gurdar&lt;/button&gt;\n&lt;/div&gt;\n&lt;/form&gt;</code></pre>\n<p>Ejemplo de caso 2: Campos checkbox/radio agrupados:</p>\n<pre class=\"course-code\"><code>&lt;form&gt;\n&lt;!—Resto de campos… --&gt;\n&lt;fieldset&gt;\n&lt;legend&gt;Colectivo UA&lt;/legend&gt;\n&lt;div class=”mb-3”&gt;\n&lt;div class=\"form-check\"&gt;\n&lt;input\nclass=\"form-check-input\" type=\"radio\" id=\"ptgas\"&gt;\n&lt;label\nclass=\"form-check-label\" for=\"ptgas\"&gt;PTGAS&lt;/label&gt;\n&lt;/div&gt;\n&lt;/DIV&gt;\n&lt;div class=”mb-3”&gt;\n&lt;div class=\"form-check\"&gt;\n&lt;input\nclass=\"form-check-input\" type=\"radio\" id=\"pdi\"&gt;\n&lt;label\nclass=\"form-check-label\" for=\"pdi\"&gt;PDI&lt;/label&gt;\n&lt;/div&gt;\n&lt;/DIV&gt;\n&lt;div class=”mb-3”&gt;\n&lt;div class=\"form-check\"&gt;\n&lt;input\nclass=\"form-check-input\" type=\"radio\" id=\"alu”&gt;\n&lt;label\nclass=\"form-check-label\" for=\"alu\"&gt;Alumno/a&lt;/label&gt;\n&lt;/div&gt;\n&lt;/DIV&gt;\n&lt;/fieldset&gt;\n&lt;div class=”mb-3”&gt;\n&lt;button type=”submit”&gt;Gurdar&lt;/button&gt;\n&lt;/div&gt;\n&lt;/form&gt;</code></pre>\n<p>Validación de formularios</p>\n<p>La primera cuestión que debemos plantearnos es cómo señalizar los campos que son obligatorios u opcionales.</p>\n<p>En general, según los estudios, hay dos enfoques:</p>\n<ul>\n<li>Poner al inicio del formulario: “Todos los campos con * son obligatorios”. Y en cada etiqueta label, ponerle el *.</li>\n<li>No poner nada al inicio del formulario dando a entender que todos los campos son obligatorios, y los que no lo sean, poner en la etiqeuta, al lado del nombre. La palabra (opcional).</li>\n</ul>\n<p>En general, se recomienda la segunda aproximación cuando hay pocos campos o la mayoría son obligatorios. De esta forma, se reduce la carga cognitiva a los usuarios. Además que el * por ejemplo, a un lector de pantalla, sólo se lee como “asterisco”.</p>\n<p>En esta línea, es recomendable utilizar el atributo required en los campos de formulario, ya que indica la semántica por ejemplo, a un lector de pantalla. Aunque usemos el atributo novalidate=”true” en el formulario hay que volver a validar siempre los datos de los campos del formulario, ya que el atributo required puiede eliminarse desde las propiedades del navegador y nos podría ocasionar un problema de seguridad.</p>\n<p>Finalmente, la forma de mostrar los mensajes de error de la validación depende de la tipología de la petición:</p>\n<ul>\n<li>Si es una petición Ajax, se recomienda mostrar los errores entre el último campo del formulario y y el botón de enviar.<span class=\"Apple-converted-space\"> </span></li>\n<li>Si la petición se procesará en el servidor, los errores deben mostrarse al principio del formulario.</li>\n</ul>\n<p>De esta forma, nos aseguramos que siempre se muestran los errores en primer plano.</p>\n<p>Veamos un ejemplo de validación de un formulario mediante Ajax que efectúa los cambios en el cliente.</p>\n<pre class=\"course-code\"><code>&lt;form novalidate=”true” id=”mi-form”&gt;\n&lt;div class=”mb-3”&gt;\n&lt;label for=”nombre”&gt;Nombre&lt;/label&gt;\n&lt;input type=”text” id=”nombre” name=”nombre” class=”form-control” /&gt;\n&lt;/div&gt;\n&lt;div class=”mb-3”&gt;\n&lt;label for=”apellidos”&gt;Apellidos&lt;/label&gt;\n&lt;input type=”text” id=”apellidos” name=”apellidos” class=”form-control” /&gt;\n&lt;/div&gt;\n&lt;div class=”mb-3”&gt;\n&lt;label for=”email”&gt;E-mail (opcional)&lt;/label&gt;\n&lt;input type=”email” id=”email” name=”email” class=”form-control” /&gt;\n&lt;/div&gt;\n&lt;!—</code></pre>\n<p>Con role=”alert” un lector de pantalla lee el contenido automáticamente cuando se inserte, por ejemplos mensajes de error</p>\n<p>--&gt;</p>\n<pre class=\"course-code\"><code>&lt;div id=”mensajealerta” role=”alert”&gt;&lt;/div&gt;\n&lt;div class=”mb-3”&gt;\n&lt;button type=”submit” class=”btn btn-primary”&gt;Enviar&lt;/button&gt;\n&lt;/div&gt;</code></pre>\n<pre class=\"course-code\"><code>&lt;/form&gt;\n&lt;!— Código JavaScript --&gt;\n&lt;script&gt;\ndocument.getElementById(“mi-form”).addEventListener(“submit”, (event) =&gt; {\nevent.preventDefault();</code></pre>\n<pre class=\"course-code\"><code>const formulario = event.target;\nconst nombre = formulario.nombre.value.trim();\nconst apellidos = formulario.apellidos.value.trim();</code></pre>\n<pre class=\"course-code\"><code>// Contenedor para los mensajes de error\nconst mensajeAlerta = document.getElementById(\"mensajealerta\");\nmensajeAlerta.classList.remove(\"alert\", \"alert-danger\");</code></pre>\n<p>mensajeAlerta.textContent = \"\";</p>\n<pre class=\"course-code\"><code>// Validación simple\nlet errores = [];\nif (!nombre) errores.push(\"El campo 'Nombre' es obligatorio.\");\nif (!apellidos) errores.push(\"El campo 'Apellidos' es obligatorio.\");</code></pre>\n<pre class=\"course-code\"><code>// Si hay errores, los mostramos\nif (errores.length &gt; 0) {\nmensajeAlerta.classList.add(\"alert\", \"alert-danger\");\nlet texto = \"&lt;p&gt;Error al enviar el formualrio, se produjeron los siguientes errores:&lt;/p&gt;&lt;ul&gt;\"</code></pre>\n<p>errores.forEach( (error) =&gt; {</p>\n<p>texto += \"&lt;li&gt;\" + error + \"&lt;/li&gt;\";</p>\n<pre class=\"course-code\"><code>})</code></pre>\n<p>texto += \"&lt;/ul&gt;\"</p>\n<p>mensajeAlerta.innerHTML = texto;</p>\n<pre class=\"course-code\"><code>} else {\n// En caso de no haber errores, mostramos un alert de éxito\nalert(\"¡Enviado! Hacer algo.....\");\n// Aquí podrías implementar la lógica real de envío (fetch, axios, etc.)\n}\n});\n&lt;/script&gt;</code></pre>\n<p>En el fichero de formularios.html del repositorio GitHub se pueden encontrar más ejemplos de validación, como, por ejemplo, el tamaño máximo de un fichero y su extensión requerida.</p>\n<p>En el apartado de usabilidad, veremos más acciones interesantes para hacer los formularios más usables y accesibles.</p>\n<p>Componentes interactivos</p>",
        "examples": [
          {
            "title": "Ejemplo de formularios",
            "href": "/ejemplos/formularios.html",
            "description": "Formulario completo con agrupaciones, ayudas, validación y mejoras de usabilidad incluido en el curso."
          }
        ]
      },
      {
        "id": "wai-aria",
        "title": "WAI-ARIA",
        "html": "<p>WAI-ARIA (Web Accessibility Initiative - Accesible Rich Internet Applications) es una especificación del W3C, recomendación desde el 20 de marzo de 2014. La versión actual es la 1.1.</p>\n<p>WAI-ARIA (ARIA y los controles desarrollados con Ajax, HTML, Javascript y sus tecnologías relacionadas.</p>\n<p>WAI-ARIA (ARIA en adelante) está pensado para hacer más accesible el contenido dinámico –principalmente JavaScript y Ajax- transmitiendo a las APIs de accesibilidad de los navegadores web información sobre el comportamiento de la interfaz y su estructura, para que los productos de apoyo puedan acceder a dicha información.</p>\n<p>Ejemplos de componentes que necesitan atributos WAI-ARIA son los cuadros modales, carruseles, áreas interacticas en las que se recarga el contenido dinámicamente, menús desplegables, etc.</p>\n<p>En los siguientes apartados se describen los principales atributos y propiedades de WAI-ARIA.</p>\n<p>&nbsp;</p>\n<p>Tabindex</p>\n<p>Es conveniente recordar que en HTML sólo pueden recibir el foco del teclado los enlaces, botones y elementos de formulario.</p>\n<p>Por el contrario los elementos HTML tales como listas, párrafos, capas div o span, etc nunca recibirán el foco del teclado al tratarse de elementos con un propósito diferente: marcar y maquetar el contenido.</p>\n<p>Por este motivo, no se debe incluir nunca eventos javascript tales como onclick u onkeypress en elementos de mara y maquetación, puesto que estaríamos dejando fuera a los usuarios que acceden sin ratón, como pueden ser usuarios de lectores de pantalla o el robot de búsqueda de Google</p>\n<p>Veamos un ejemplo: si incluímos un evento onclick en un elemento div:</p>\n<pre class=\"course-code\"><code>&lt;div onclick=\"alert('¡Saludo!');\"&gt;Púlsame&lt;/div&gt;</code></pre>\n<p>Lo que estamos haciendo es crear una capa div que simula el comportamiento de un enlace o un botón, que no es su propósito y además, jamás se podrá acceder por teclado ya que este elemento nunca recibirá el foco.</p>\n<p>Por esta razón, no deberíamos agregar eventos javascript a elementos que no sean enlaces, botones u elementos de formulario.</p>\n<p>Dicho lo anterior, en ocasiones se hace necesario utilizar elementos de marca y maquetación como div o li para realizar acciones dinámicas, en estos cosas podemos utilizar el atributo de WAI-ARIA&nbsp;<b>tabindex&nbsp;</b>&nbsp;para informar a los navegadores web que ese elemento puede recibir el foco y por tanto, ejecutar eventos como onclick.</p>\n<p>Siguiendo el ejemplo anterior del div con onclick, le añadiríamos el atributo tabindex con el valor 0 para indicar que el elemento puede recibir el foco:</p>\n<pre class=\"course-code\"><code>&lt;div onclick=\"alert('¡Saludo!');\" tabindex=\"0\"&gt;Púlsame&lt;/div&gt;</code></pre>\n<p>De esta manera, si en un navegador web, vamos pulsando la tecla TAB de nusetro teclado, el foco se irá colocando sobre los enlaces, botones, elementos de formulario y los elementos marcados con tabindex=\"0\".</p>\n<p>El atributo tabindex puede utilizarse para varios cometidos dependiendo del valor que le asignemos:</p>\n<ul>\n<li>tabindex=\"0\": como hemos visto en el ejemplo permite que un elemento de marca o maquetación como div, p, li, ..., que no pueden recibir el foco por defecto, puedan recibirlo. De esta forma se podrá acceder con el tabulador hasta él y el orden en el que se incorpora en la página es el lugar que ocupa en el código HTML.</li>\n<li>tabindex=\"-1\": se diferencia del caso anterior en que no podremos tabular hasta el elemento. Lo que permite es que pueda coger el foco mediante JavasScript con la función focus(), para hacer scroll a una parte de la página.</li>\n<ul>\n<li>Un ejemplo de uso real sería para un cuadro de diálogo DIV (&lt;div id=\"cuadro-modal\" tabindex=\"-1\"&gt;...&lt;/div&gt;): al pulsar el botón de abrir diálogo, el foco deberá moverse al elemento que hemos marcado con tabindex=\"-1\" y al cerrarla deberá volver al enlace o botón que la abrió.</li>\n</ul>\n<li>tabindex=”x” donde x es un número entero. Define un orden de tabulación explícito: 1,2, 3, etc. Esto quiere decir que si ponemos un elemento &lt;div tabindex=\"1\"&gt;...&lt;/div&gt;, aunque el código en la página HTML esté al final, cuando pulsemos tabulador será el primer elemento que recibe el foco del teclado.</li>\n<ul>\n<li>No se recomienda su uso pues puede crear confusión.</li>\n</ul>\n<p>Roles</p>\n<p>Incluir información sobre el rol o función de un elemento de nuestra página mediante ARIA es tan sencillo como añadir a la etiqueta del elemento role=”[nombre_del_rol]”.</p>\n<p>Por ejemplo:</p>\n<pre class=\"course-code\"><code>&lt;div role=”progressbar”&gt;\n&lt;ul role=”tree”&gt;,\n&lt;li role=”treeitem”&gt;\n&lt;ul role=”nav”&gt;\n&lt;div role=”application”&gt;</code></pre>\n<p>No se debe cambiar dinámicamente el rol de un elemento, este es fijo. Si se quiere cambiar habría que eliminar del DOM el elemento y crear uno nuevo con el nuevo rol.</p>\n<p>Puedes consultar todos los roles en&nbsp;Roles of WAI-ARIA 1.1 (en inglés)&nbsp;.</p>\n<p>Existen dos tipos de roles, aquellos que definen elementos de la interfaz (árboles, alertas, sliders, etc.) y los que definen la estructura de la página (cabecera, navegación, pie).</p>\n<p>Landmark roles</p>\n<p>Dentro de los que definen la estructura de la página se distinguen los landmark roles, que se usan para identificar áreas separadas de la pagina y transmitir la naturaleza de las mismas.</p>\n<p>Se trata de añadir características útiles de navegación global, consistentes en cualquier documento (X)HTML, que transmiten información de la estructura de la página e información semántica sobre estas zonas.</p>\n<p>Los roles de estructura y su función son:</p>\n<ul>\n<li>role=”banner”. Sólo debe existir uno en la página y es para marcar generalmente la cabecera de la página web donde se encuentra el título, logo, etc.</li>\n<li>role=”navigation”. Se de utilizar para marcar los elementos que que forman un menú, por ejemplo una lista ul.</li>\n<li>role=”main”.Marca donde está el contenido principal de la página.</li>\n<li>role=”complementary”. Contenidos que no son imprescindibles el contenido, por ejemplo un slider, barra lateral con publicidad, etc.</li>\n<li>role=”contentinfo”. Para marcar una zona en la que hay información sobre la página y que se repite en todas, por ejemplo la informaicón legal, enlaces de navegación de un sitio y demás información que generalmente se ubica en la parte inferior de la página web..</li>\n<li>role=”search.Para marcar las zonas donde hay un buscador en la página.</li>\n<li>role=”form”. Para marcar las zonas donde hay formularios.</li>\n<li>role=”application”. Se marca esta zona si hay una aplicación web interactiva, como juegos y similar que cambian las reglas del uso normal del teclado.</li>\n</ul>\n<p>En general, es recomendable utilizar las etiquetas nativas de HTML5 para marcar zonas de un sitio web como puede ser &lt;nav&gt;, &lt;header&gt;...</p>\n<p>Pero si las utilizamos, no se debe poner la etiqeuta y role juntos por redundancia, por ejemplo:</p>\n<pre class=\"course-code\"><code>&lt;nav role=\"navigation\"&gt;...&lt;/nav&gt; MAL</code></pre>\n<p>Por último, y no menos importante, para los roles de estructura, es necesario incluir el atributo aria-label (que veremos a continuación) para indicar el título de la zona. Por ejemplo:</p>\n<pre class=\"course-code\"><code>&lt;div role=\"navigation\" arial-label=\"Menú principal\"&gt;&lt;ul&gt;...&lt;/ul&gt;&lt;/div&gt;</code></pre>\n<p>&nbsp;</p>\n<p>Aria-label, aria-labelledly y aria-describedby</p>\n<p>Estos atributos nos permiten dar un nombre accesible, etiquetar o dar una descripción a los elementos HTML que lo necesiten. En la referencia puedes encontrar&nbsp;todos los atributos y su propósito (en inglés)&nbsp;.</p>\n<p>Aria-label</p>\n<p>Sirve para dar nombre accesible a un elemento. Debe usarse sólo en ocasiones que lo requieran, por defecto el nombre de un elemento debe ser su contenido.</p>\n<p>Ejemplo, si tenemos un enlace que cierra un cuadro modal y lo escribimos con una X, el nombre accesible debería ser cerrar.</p>\n<pre class=\"course-code\"><code>&lt;a href=\"#\" aria-label=\"Cerrar\"&gt;x&lt;/a&gt;</code></pre>\n<p>Aria-labelledby</p>\n<p>Como aria-label, sirve para dar un nombre a un elemento HTML, la diferencia es que con aria-label indicas directamente el texto y con aria-labelledby el id/ids del elemento/s de la página que actúa/n como contenido.</p>\n<p>Ejemplo:</p>\n<pre class=\"course-code\"><code>&lt;p id=\"titulo-informe\"&gt;Descargar el informe de accesibilidad en:&nbsp;\n&lt;a aria-labelledby=\"titulo-informe pdf\" href=\"pdf.pdf\" id=\"pdf\"&gt;PDF&lt;/a&gt; |&nbsp;\n&lt;a aria-labelledby=\"titulo-informe docx\" href=\"word.docx\" id=\"docx\"&gt;Word&lt;/a&gt; |&nbsp;\n&lt;a aria-labelledby=\"report-title pptx\" href=\"ppt.pptx\" id=\"pptx\"&gt;Powerpoint&lt;/a&gt;&lt;/p&gt;</code></pre>\n<p>Aria-describedby</p>\n<p>Por otro lado, aria-describedby permite asociar una descripción larga a un elemento indicando el id del elemento que proporciona la descripción.</p>\n<p>&nbsp;</p>\n<p>Estados y propiedades</p>\n<p>Los elementos dinámicos cambian de estado, por ejemplo un menú desplegable puede estar plegado o desplegado. ARIA permite definir las propiedades y estados de los elementos.</p>\n<pre class=\"course-code\"><code>&lt;li role=\"treeitem\" aria-expanded=\"false\" tabindex=\"0\" onclick=\"a()\" onkeypress=\"a()\"&gt;Lenguajes&lt;/li&gt;</code></pre>\n<p>En este ejemplo se indica que el elemento del árbol \"Lenguajes\" está plegado. Cuando el usuario lo despliegue deberás cambiar dinámicamente su estado mediante javascript para que los productos de apoyo puedan transmitir el cambio al usuario.</p>\n<pre class=\"course-code\"><code>$id.attr('aria-expanded', 'true');</code></pre>\n<p>Por tanto, el rol es fijo, no se cambia, los estados y propiedades son dinámicos.</p>\n<p>Lo más importante, y que no debes olvidar, es que no solo tienes que indicar el estado y propiedades iniciales, sino que debes modificarlos dinámicamente por javacript cuando estos cambien, de modo que el usuario de productos de apoyo conozca siempre su estado actual. Los roles no se actualizan, los estados y propiedades sí.</p>\n<p>Veamos un ejemplo del típico “dropdown” o elemento desplegable, deberíamos hacerlo así:</p>\n<pre class=\"course-code\"><code>&lt;button id=\"toggleButton\"\naria-expanded=\"false\" aria-controls=\"panel\"&gt;</code></pre>\n<p>Mostrar panel</p>\n<pre class=\"course-code\"><code>&lt;/button&gt;\n&lt;div id=\"panel\"&gt;\n&lt;p&gt;Este es el contenido del panel desplegable.&lt;/p&gt;\n&lt;/div&gt;\n&lt;script&gt;\nconst button = document.getElementById('toggleButton');\nconst panel = document.getElementById('panel');</code></pre>\n<p>button.addEventListener('click', () =&gt; {</p>\n<pre class=\"course-code\"><code>const isExpanded = button.getAttribute('aria-expanded') === 'true';</code></pre>\n<p>button.setAttribute('aria-expanded', String(!isExpanded));</p>\n<pre class=\"course-code\"><code>panel.setAttribute('aria-hidden', String(isExpanded));\n});\n&lt;/script&gt;</code></pre>\n<p>&nbsp;</p>\n<p>Live regions: aria-live</p>\n<pre class=\"course-code\"><code>aria-live permite identificar una zona dinámica de nuestro contenido que se actualiza automáticamente, de esta manera los cambios se anunciarán al usuario de los productos de apoyo. En función de su valor (off, polite, assertive) indicaremos cuándo queremos que se anuncie la actualización.</code></pre>\n<p>Se combina con aria-atomic para indicar si queremos que se anuncie toda la región o solo las partes que cambian, y con aria-relevant para indicar el tipo de actualización que queremos que se anuncie.</p>\n<p>También se puede utilizar la versión moderna e integrada de role=”alert”, que es equivalente a aria-live=”assertive”.</p>"
      },
      {
        "id": "componentes-ejemplos",
        "title": "Ejemplos de componentes",
        "html": "<p>Como hemos visto en el apartado anterior, crear componentes interactivos accesibles tiene una gran complejidad. En nuestro caso, tenemos la suerte de utilizar la librería Bootstrap, que proporciona unos componentes muy accesibles desde la base.</p>\n<p>En el repositorio de GitHub del curso se puede consultar el fichero componentes.html con ejemplos de cuadros modales, acordeones, desplegables, pestañas, etc.</p>",
        "examples": [
          {
            "title": "Ejemplo de componentes",
            "href": "/ejemplos/componentes.html",
            "description": "Incluye ejemplos reales de modales, acordeones, menús desplegables, pestañas y otros componentes interactivos."
          }
        ]
      }
    ],
  },
  {
    slug: "ux",
    shortTitle: "Usabilidad y UX",
    title: "Usabilidad y UX",
    route: "/ux",
    menuDescription: "Diseño inclusivo, usabilidad, UX, color y patrones de diseño.",
    homeSummary: "Reúne principios de diseño inclusivo, usabilidad, experiencia de usuario, color y patrones aplicados al diseño e implementación de interfaces.",
    introHtml: "<p>En este bloque se trabajan los conceptos de diseño inclusivo, usabilidad y experiencia de usuario, así como el uso del color y varios patrones de diseño.</p>",
    sections: [
      {
        "id": "diseno-inclusivo",
        "title": "Principios de diseño inclusivo",
        "html": "<p>El diseño inclusivo es una metodología creada para “habilitar y apoyarse en toda la diversidad humana” al concebir productos y servicios, de modo que funcionen para personas con diferentes capacidades, contextos y experiencias. Microsoft la impulsó públicamente en 2015 al publicar su Inclusive Design Toolkit, convirtiéndola desde entonces en práctica interna para más de 80 000 empleados y en referencia para miles de profesionales y universidades. La propuesta parte de entender la discapacidad como un desajuste entre la persona y el entorno, y anima a quienes diseñan a detectar esos desajustes desde el inicio del proceso –no como un añadido posterior– para que la accesibilidad se traduzca en mejores experiencias para todas las personas.</p>\n<p>El marco de Microsoft se articula en tres principios clave:</p>\n<ul>\n<li>Reconocer la exclusión: mapear dónde y por qué un sistema deja fuera a alguien;</li>\n<li>Aprender de la diversidad: incorporar las perspectivas de quienes viven esas exclusiones para revelar soluciones creativas;</li>\n<li>Crear para uno, extender a muchos: resolver bien un caso extremo (por ejemplo, alguien con movilidad limitada) y escalar la solución porque beneficiará a un espectro amplio de usuarios. A estos se suman pautas operativas como “pensar de forma universal” y “diseñar con múltiples formas de participación” que guían a los equipos durante todo el ciclo de vida del producto. <span class=\"Apple-converted-space\"> </span></li>\n</ul>"
      },
      {
        "id": "usabilidad",
        "title": "Usabilidad",
        "html": "<p>La usabilidad se refiere cómo de <b>fácil, eficiente y satisfactoria</b> es la interacción del usuario con un sitio web o aplicación. Una interfaz usable permite al usuario lograr sus objetivos con <b>rapidez, sin errores ni frustraciones</b>.</p>\n<p>Principios clave de la usabilidad:</p>\n<ul>\n<li>Facilidad de aprendizaje: El usuario entiende rápidamente cómo usar el sistema.</li>\n<li>Eficiencia: Una vez aprendido, el sistema permite realizar tareas rápidamente.</li>\n<li>Memorabilidad: El usuario puede recordar cómo usarlo tras un tiempo sin utilizarlo.</li>\n<li>Bajo índice de errores: Pocos errores y fáciles de corregir.</li>\n<li>Satisfacción: El uso del sistema resulta agradable.</li>\n</ul>"
      },
      {
        "id": "ux",
        "title": "Experiencia de usuario (UX)",
        "html": "<p>La experiencia de usuario es más amplia: engloba todas las <b>emociones, percepciones y reacciones </b>que una persona tiene al interactuar con una página web o aplicación.</p>\n<p>La UX abarca la usabilidad, pero también considera:</p>\n<ul>\n<li>El diseño visual</li>\n<li>El contenido</li>\n<li>La accesibilidad</li>\n<li>La credibilidad</li>\n<li>El rendimiento</li>\n<li>Las emociones que genera</li>\n</ul>"
      },
      {
        "id": "tecnicas",
        "title": "Técnicas y herramientas comunes en usabilidad y UX",
        "html": "<p>Para asegurar de que nuestros diseños son usables y tienen una buena experiencia de usuario, hay diferentes técnicas y herramientas que podemos utilizar:</p>\n<ul>\n<li><b>Tests de usuario</b>: Observar cómo personas reales interactúan con el sitio.</li>\n<li><b>Análisis de tareas</b>: Identificar los pasos necesarios para completar una tarea.</li>\n<li><b>Prototipos</b>: Diseño preliminar para probar la estructura antes de desarrollar.</li>\n<li><b>Mapas de calor: </b>Visualizar dónde hacen clic y se enfocan los usuarios.</li>\n<li><b>Encuestas y entrevistas</b>: Recopilar opiniones y emociones.</li>\n<li><b>A/B testing</b>: Comparar dos versiones para ver cuál rinde mejor.</li>\n<li><b>Personas</b>: Perfiles ficticios que representan usuarios reales para diseñar pensando en sus necesidades.</li>\n</ul>\n<p>Usar todas las técnias y herramientas es muy complicado, a no ser que seamos corporaciones muy grandes con equipos específicos. Por ejemplo en empresas como Spotify hay equipos de decenas de personas sólo para estudiar la mejor ubicación de botones, la mejor forma de crear un formulario o simular perfiles de personas para mejorar el proceso de suscripción a su servicio.</p>"
      },
      {
        "id": "leyes-ux",
        "title": "Leyes UX",
        "html": uxLawsHtml
      },
      {
        "id": "color",
        "title": "Correcto uso del color",
        "html": "<p>En los siguientes apartados se habla de la percepción del color, el concepto de contraste de luminosidad entre color del texto y del fondo y los tipos de ceguera al color para no cometer el error de transmitir información únicamente mediante el color.</p>\n<p>Contraste de luminosidad</p>\n<p>Existe un porcentaje de la población con problemas para percibir los colores, ya sea a la hora de diferenciar determinados colores o porque padecen alguna forma de ceguera que solo les permite percibir un espectro reducido de colores. Por esto, es muy difícil determinar qué opciones de colores son las más idóneas a utilizar.</p>\n<p>El contraste de luminosidad&nbsp;<b>entre el color del fondo y el color del texto&nbsp;</b>debe ser suficiente para garantizar una buena legibilidad del texto en situaciones desfavorables de mucha luz, pantallas con poco contraste o brillo y para personas con problemas de visión.</p>\n<p>Las pautas de accesibilidad del contenido web establecen en su nivel AA los diferentes ratios mínimos de contraste según el tamaño y tipo de texto:</p>\n<ul>\n<li>Ratio de <b>4.5:1 </b> para textos menores a 18 puntos<span class=\"Apple-converted-space\"> </span></li>\n<li>Ratio de <b>3:1 </b>para:</li>\n<ul>\n<li>Texto mayor a 18 puntos</li>\n<li>Texto en negrita mayor o igual a 14 puntos</li>\n<li>Texto en enlaces y botones</li>\n</ul>\n<p>Es importante destacar que hablamos en unidades absolutas de puntos (pt) por lo que habría que hacer su conversión a su equivalente en px. Por ejemplo:</p>\n<ul>\n<li>18 puntos son 24px</li>\n<li>14 puntos son 18,666px</li>\n</ul>\n<p>Podemos decir que con mayor contraste mayor facilidad de lectura del texto, con independencia de la combinación de colores. En la mayoría de las situaciones, lo más recomendable es texto negro sobre fondo blanco o colores muy cercanos a estos, como gris oscuro y tonos sepia.</p>\n<p>Veamos una serie de frases de ejemplo con diferentes combinaciones de colores y su contraste:</p>\n<p>&nbsp;</p>\n<p>Como podemos observar, las combinaciones 1, 2 y 3 son nefastas, de difícil lectura. La combinación 4 sería el contraste mínimo recomendado y la 5 es la combinación&nbsp;más fácil de leer por su alto contraste.</p>\n<p>Por otro lado,&nbsp;no se aconseja utilizar fondos degradados&nbsp;de color o con tramas ya que los cambios de tono de color podrían dificultar a algunas personas el acceso a la información del documento, sobre todo si se coloca texto sobre el color degradado.</p>\n<p>Conocer el contraste de luminosidad entre colores</p>\n<p>En la aplicación Accesibilidad de UAcloud está disponible la herramienta&nbsp;Comprobación del contraste entre colores&nbsp;con el objetivo de hacer un buen uso del color en tu web o documento. Es muy sencilla de utilizar, solo tienes que introducir el color de fondo y el color del texto y aparecerá el resultado. Si la ratio supera 4.5 de contraste, serán válidos los colores; en caso contrario, tendrás que modificarlos o buscar sugerencias de colores que sí lo cumplen.</p>\n<p>En la captura anterior, se puede observar que el contraste entre el color de texto ydel fondo no es suficiente. Más abajo, tenemos una opción para buscar colores similares que sí cumplen los requisitos, como se puede ver en la siguiente imagen:</p>\n<p>Si pulsamos en el botón Seleccionar de cada uno de los colores, podemos ver la previsualización y comprobar, que efectivamente el color es accesible, por ejemplo el primero que aparece, quedaría como se muestra en la siguiente imagen:</p>\n<p>Uso semántico del color</p>\n<p>Es recomendable no utilizar únicamente el color para trasmitir información. Siempre se debe incluir esta información mediante otro sistema alternativo, además del uso del color.</p>\n<p>Veamos un ejemplo. Debemos corregir un examen de tipo test y escribimos lo siguiente:</p>\n<p>Nota: La respuesta correcta está en color rojo.</p>\n<p>Pregunta 1: Debemos transmitir información únicamente mediante el color.</p>\n<p>a) Verdadero</p>\n<p>b) Falso</p>\n<p>En este ejemplo, una persona ciega será incapaz de saber cuáles son las respuestas correctas puesto que su lector de pantalla no puede interpretar los colores. Lo mismo ocurriría con una persona con dificultades para distinguir los colores.</p>\n<p>Veamos ahora el mismo ejemplo pero utilizando una forma alternativa de transmitir la información:</p>\n<p>Nota: La respuesta correcta está marcadas con un X.</p>\n<p>Pregunta 1: Debemos transmitir información únicamente mediante el color.</p>\n<p>a) Verdadero</p>\n<p>b) X Falso</p>\n<p>En este ejemplo una persona ciega conocerá las respuestas correctas cuando su lector lea la letra equis.</p>\n<p>Si lo deseas, puedes consultar el apartado de&nbsp;uso del color en gráficas&nbsp;para más información y ejemplos.</p>\n<p>Movimiento y parpadeos</p>\n<p>Debemos evitar imágenes parpadeantes o con más de tres destellos por segundo, ya que pueden afectar a personas que sufran epilepsia foto-sensitiva.</p>\n<p>Además, en el caso de que se utilicen imágenes con animaciones como ficheros GIF, no deberían durar más de 5 segundos ya que pueden dificultar la lectura del contenido del documento a personas con problemas cognitivos o con trastornos de déficit de atención e hiperactividad.</p>\n<p>Simulando la ceguera al color</p>\n<p>Se puede instalar en Google Chrome una extensión de navegador llamada Colorblindly que permite comprobar cómo se ven los colores de nuestra web por una persona con diferentes patologías de ceguera al color.</p>\n<p>Descargar extensión colorblindly</p>\n<p>Una vez instalada la extensión, y con cualquier página web abierta, podemos pulsar en el botón de la extensión y se mostrará ua ventana con una serie de filtros de color que simulan diferentes problemas de visión.</p>\n<p>Aunque se pueden probar todos, nosotros nos centraremos en las de la categoría “Deuteranomaly” por ser las más extendidas, por ejemplo la de “Green blind”.</p>\n<p>Veamos los esquemas de color típicos de Bootstrap, en este caso versión 5. La visión sin patologías sería:</p>\n<p>Mientras que la versión con problemas de ceguera al color sería:</p>\n<p>Se puede observar que tanto el verde como el rojo se ven grises. Lo que hace que que haya 3 botones con un color similar.</p>\n<p>Da tiempo suficiente</p>\n<p>El tiempo no puede ser un factor limitante a la hora de usar páginas y aplicaciones web. Por este motivo, es importante dar tiempo suficiente en las alertas importantes para que sean leídas.</p>\n<p>El foco y mejoras de usabilidad en formularios</p>\n<p>En los formularios, deberíamos llevar siempre el foco del teclado al primer campo para poder escribir directamente.</p>\n<p>Además, es una buena práctica, si el formulario es muy extenso, guardar el estado de edición (por ejemplo con una variable editado) y si se intenta abandonar la página, nos alertará para prevenir la pérdida de información.</p>\n<p>Todas estas mejoras de usabilidad se pueden encontrar el fichero formularios.html del repositorio en GitHub del curso en el fichero de formularios.html.</p>",
        "examples": [
          {
            "title": "Ejemplo de contraste y estilos corporativos",
            "href": "/ejemplos/bs3/colores.html",
            "description": "Ejemplo con colores corporativos y ajustes de contraste sobre Bootstrap 3."
          },
          {
            "title": "Ejemplo de formularios usables",
            "href": "/ejemplos/formularios.html",
            "description": "Ejemplo relacionado con foco inicial, alertas, validación y otras mejoras de usabilidad en formularios."
          }
        ],
        "figure": {
          "src": "/curso-media/image7.png",
          "alt": "Herramienta de contraste de color con ratio 3.83, insuficiente.",
          "caption": "Captura de la herramienta de comprobación del contraste entre colores."
        },
        "gallery": [
          {
            "src": "/curso-media/image6.png",
            "alt": "Cinco ejemplos de combinaciones de color con distintos ratios de contraste.",
            "caption": "Ejemplos de combinaciones de color y su ratio de contraste."
          },
          {
            "src": "/curso-media/image8.png",
            "alt": "Listado de colores alternativos que sí cumplen contraste mínimo.",
            "caption": "Propuesta de colores alternativos accesibles."
          },
          {
            "src": "/curso-media/image9.png",
            "alt": "Herramienta de contraste con combinación ajustada que alcanza ratio 4.50.",
            "caption": "La misma herramienta tras elegir una combinación accesible."
          },
          {
            "src": "/curso-media/image10.png",
            "alt": "Extensión Colorblindly con la opción Green-Blind seleccionada.",
            "caption": "Simulación de ceguera al color con Colorblindly."
          },
          {
            "src": "/curso-media/image11.png",
            "alt": "Botones de Bootstrap con visión estándar.",
            "caption": "Esquema de color típico de Bootstrap 5 sin patologías de visión cromática."
          },
          {
            "src": "/curso-media/image12.png",
            "alt": "Botones de Bootstrap simulando problemas de ceguera al color.",
            "caption": "Comparativa de botones con problemas de ceguera al color."
          }
        ]
      },
      {
        "id": "ejemplos-diseno",
        "title": "Ejemplos de diseño",
        "html": "<p>En el repositorio de GitHub del curso, se mostraron diferentes ejemplos de diseños que van más allá de la típica tabla de administración o formulario que ocupa toda la pantalla.</p>\n<p>En general, la idea es aprovechar siempre la pantalla, utilizando varias secciones.</p>\n<p>Ejemplos de diseños vistos:</p>\n<ul>\n<li>Utilizar 2 columnas en escritorio y 1 en móvil. En la parte izquierda tenemos la interacción y en la derecha los resultados:</li>\n</ul>\n<ul>\n<li>Formulario en una columna que ocupa menos ancho para que los input no sean tan largos y un panel de más información:</li>\n</ul>\n<ul>\n<li>Formulario centrado en la pantalla para que ocupen menos ancho los campos, al estilo Google / Microsoft Forms:</li>\n</ul>\n<ul>\n<li>Formulario o asistente por pasos:</li>\n</ul>\n<ul>\n<li>Con paneles tipo Trello para las solicitudes uA:</li>\n</ul>\n<ul>\n<li>¿Cómo podría ser Vértice?</li>\n</ul>\n<ul>\n<li>Se proporcionaron hojas de estilo para usar los colores corporativos y mejorar el contraste de Bootstrap 3 y 4 y ser igual de accesibles que Bootstrap 5.</li>\n<li>Se proporciona una hoja de estilo que maqueta con colores de la UA los diferentes componetes, así como bordes y espaciados de formularios.</li>\n</ul>",
        "examples": [
          {
            "title": "Diseño a dos columnas",
            "href": "/ejemplos/2columnas.html",
            "description": "Patrón de escritorio con interacción a la izquierda y resultado a la derecha, colapsando a una columna en móvil."
          },
          {
            "title": "Formulario centrado",
            "href": "/ejemplos/centrado.html",
            "description": "Composición de anchura limitada para mejorar legibilidad y reducir la longitud de línea de los campos."
          },
          {
            "title": "Asistente por pasos",
            "href": "/ejemplos/pasos.html",
            "description": "Ejemplo de flujo guiado por pasos con progresión visual."
          },
          {
            "title": "Paneles tipo Trello",
            "href": "/ejemplos/paneles.html",
            "description": "Distribución en paneles para trabajo operativo y seguimiento de solicitudes."
          },
          {
            "title": "Propuesta de Vértice",
            "href": "/ejemplos/vertice.html",
            "description": "Captura navegable del concepto visual utilizado para explorar una posible evolución de Vértice."
          }
        ],
        "gallery": [
          {
            "src": "/curso-media/image13.png",
            "alt": "Diseño en dos columnas con un traductor: entrada a la izquierda y resultado a la derecha.",
            "caption": "Ejemplo de diseño a dos columnas en escritorio y una en móvil."
          },
          {
            "src": "/curso-media/image14.png",
            "alt": "Formulario con una columna principal y panel lateral de más información.",
            "caption": "Ejemplo de formulario con panel adicional de información."
          },
          {
            "src": "/curso-media/image15.png",
            "alt": "Formulario centrado en la pantalla con anchura limitada.",
            "caption": "Ejemplo de formulario centrado al estilo Google o Microsoft Forms."
          },
          {
            "src": "/curso-media/image16.png",
            "alt": "Pantalla de un asistente por pasos con el segundo paso activo.",
            "caption": "Ejemplo de formulario o asistente por pasos."
          },
          {
            "src": "/curso-media/image17.png",
            "alt": "Vista tipo Trello con solicitudes en columnas de estado.",
            "caption": "Ejemplo de paneles tipo Trello para solicitudes."
          },
          {
            "src": "/curso-media/image18.png",
            "alt": "Pantalla de Vértice con tabla de vídeos, filtros y metadatos.",
            "caption": "Captura incluida en el documento para mostrar cómo podría ser Vértice."
          }
        ]
      }
    ],
  },
  {
    slug: "documentos",
    shortTitle: "Documentos",
    title: "Documentos",
    route: "/documentos",
    menuDescription: "Word, PowerPoint, PDF y contenidos multimedia.",
    homeSummary: "Agrupa criterios y buenas prácticas para aplicar la accesibilidad a documentos ofimáticos, PDF y materiales multimedia.",
    introHtml: "<p>La accesibilidad digital no se limita a las páginas web. Los mismos principios deben aplicarse a documentos Word, presentaciones PowerPoint, PDF y contenidos multimedia.</p>\n<p>Este bloque reúne una base de trabajo para revisar esos soportes con la misma lógica de estructura, alternativas textuales, navegación y comprensión.</p>",
    sections: [
      {
        "id": "word",
        "title": "Word",
        "html": "<p>Los documentos Word deben construirse con estructura real y no solo con formato visual. Es necesario usar estilos de encabezado, listas, tablas correctamente marcadas, texto alternativo en imágenes e idioma definido.</p>\n<p>También conviene revisar el orden de lectura, el contraste, el significado de los enlaces y la correcta exportación posterior si el documento se transformará en PDF.</p>"
      },
      {
        "id": "powerpoint",
        "title": "PowerPoint",
        "html": "<p>En PowerPoint deben revisarse el orden de lectura de cada diapositiva, el uso correcto de títulos, el contraste, el tamaño de texto y la accesibilidad de gráficos, imágenes y elementos incrustados.</p>\n<p>Las diapositivas no deberían depender solo de la exposición oral para ser comprendidas, y los contenidos complejos deben acompañarse de una explicación textual suficiente.</p>"
      },
      {
        "id": "pdf",
        "title": "PDF",
        "html": "<p>Un PDF accesible necesita etiquetas estructurales, idioma, título, orden de lectura correcto, texto alternativo, enlaces identificables y formularios navegables por teclado cuando existan.</p>\n<p>La accesibilidad del PDF depende en gran parte del documento de origen, por lo que la preparación previa en Word, PowerPoint u otra herramienta resulta clave.</p>"
      },
      {
        "id": "multimedia",
        "title": "Multimedia",
        "html": "<p>Los contenidos multimedia deben incorporar alternativas equivalentes, como subtítulos, transcripciones y, cuando sea necesario, audiodescripción.</p>\n<p>También deben evitar barreras relacionadas con reproducción automática, controles inaccesibles, contrastes insuficientes o dependencia exclusiva del audio o del color para transmitir información.</p>"
      }
    ],
  }
]

export const getBlockBySlug = (slug: string) =>
  courseBlocks.find((block) => block.slug === slug)

export const getBlockPath = (slug: string) => `/${slug}`

export const getSectionPath = (blockSlug: string, sectionId: string) =>
  `${getBlockPath(blockSlug)}/${sectionId}`

export const getSectionBySlug = (blockSlug: string, sectionId: string) =>
  getBlockBySlug(blockSlug)?.sections.find((section) => section.id === sectionId)
