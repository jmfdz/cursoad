<script setup lang="ts">
const html = `
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
</script>

<template>
  <div v-html="html" />
</template>
