# Herramientas

## Revisión de accesibilidad

Para comprobar la accesibilidad no basta con una sola herramienta. Lo habitual es combinar pruebas automáticas, revisión manual y, cuando sea posible, alguna prueba con tecnologías de apoyo como un lector de pantalla.

Además, es mucho más eficiente incorporar la accesibilidad desde el principio del proyecto que intentar corregirla al final, cuando ya hay que rehacer diseño, contenidos o desarrollo.

### Pruebas automáticas

Una prueba automática analiza el código y la página ya cargada aplicando una colección de reglas. En pocos segundos puede localizar ciertos errores frecuentes: imágenes sin texto alternativo, campos de formulario sin etiqueta, problemas de contraste, estructura deficiente de encabezados o usos incorrectos de ARIA.

Son muy útiles para una primera revisión y para integrar comprobaciones recurrentes en desarrollo, pero no pueden determinar por sí solas si una página es accesible. Por ejemplo, pueden detectar que una imagen tiene texto alternativo, pero no siempre si ese texto explica correctamente la información que transmite.

### Pruebas manuales

En una prueba manual, una persona recorre la página y realiza tareas como lo haría un usuario: navega con teclado, amplía el contenido, revisa los textos o utiliza un lector de pantalla. Es imprescindible para comprobar aspectos que una herramienta no puede valorar bien, por ejemplo:

- si un texto alternativo describe de verdad lo que la imagen aporta,
- si una tabla se entiende y no solo valida,
- si los mensajes de error ayudan a corregir el problema,
- si el foco se mueve de forma lógica,
- y si una tarea completa puede realizarse cómodamente con teclado.

Por eso, las pruebas automáticas deben verse como ayuda y apoyo al análisis, no como validación completa.

## Extensión de CADUA

La extensión de CADUA permite comprobar la página abierta directamente desde Chrome y otros navegadores basados en Chromium. Al ejecutarse en el navegador, también puede revisar contenido generado con JavaScript o disponible después de iniciar sesión.

### Instalar y utilizar la extensión

1. Abre la ficha de CADUA en Chrome Web Store.
2. Pulsa **Añadir a Chrome** y confirma la instalación cuando el navegador lo solicite.
3. Abre la página que quieras revisar y pulsa el icono de CADUA para mostrar el panel con los resultados.

### Herramientas de la extensión

Además de la comprobación automática, puedes utilizar estas herramientas de apoyo:

- Jerarquía de encabezados.
- Imágenes para revisión manual.
- Enlaces.
- Atajos de teclado.

### Revisión mínima recomendable

Como pauta práctica, una revisión básica debería combinar al menos:

- una pasada con herramienta automática,
- una navegación completa por teclado,
- una comprobación de foco visible y orden de tabulación,
- una revisión de la estructura de encabezados y regiones,
- una prueba rápida con lector de pantalla,
- y una revisión humana con criterio técnico del contenido y la interacción.

De esta forma, la comprobación se acerca mucho más a la experiencia real de uso y evita la falsa sensación de conformidad que a veces puede dar un informe automático.

En este sentido, conviene recordar una idea importante: que una página cumpla parte de los requisitos o que una herramienta no detecte errores no significa automáticamente que la experiencia real de uso sea buena. La conformidad técnica ayuda mucho, pero no sustituye la revisión manual ni la comprobación de tareas reales.

## Uso de un lector de pantalla

NVDA es un lector de pantalla gratuito para Windows utilizado por personas ciegas y con baja visión para acceder al ordenador, las aplicaciones y la web.

NVDA no se limita a leer el texto visible: también comunica la estructura y la información semántica que recibe del navegador, como encabezados, botones, etiquetas o estados.

Su interés en este curso no es aprender a usarlo a fondo, sino entender qué información recibe una persona cuando la interfaz está bien o mal construida.

### Cómo hacer una prueba rápida

Para una primera toma de contacto, basta con activar el lector y hacer una navegación básica por teclado:

- **TAB** y **Shift + TAB** para recorrer enlaces, botones y campos de formulario.
- **H** para saltar entre encabezados.
- **F** para ir a formularios.
- **T** para ir a tablas.
- **INSERT + F7** para abrir listados de enlaces, encabezados y otros elementos.
- Flechas del teclado para leer el contenido de forma secuencial.

No hace falta dominar todos los comandos para que la prueba sea útil. Con muy poco ya pueden detectarse bastantes problemas.

### Qué revisar con un lector de pantalla

Al hacer una prueba rápida con lector de pantalla conviene comprobar al menos lo siguiente:

- si el título de la página y los encabezados describen bien la estructura,
- si los enlaces y botones tienen nombres comprensibles,
- si los campos del formulario anuncian su etiqueta, estado y errores,
- si las tablas y regiones se identifican correctamente,
- si los mensajes o cambios que aparecen sin recargar la página se anuncian,
- y si una tarea completa puede hacerse sin depender del ratón ni de información exclusivamente visual.

Un lector de pantalla permite descubrir enseguida cuándo una interfaz está pensada solo visualmente: encabezados simulados, iconos sin nombre, cambios dinámicos no anunciados o formularios que visualmente parecen claros, pero semánticamente no lo son.

No sustituye a las pruebas con personas usuarias, pero sí es una de las formas más rápidas de detectar problemas reales de semántica, navegación y etiquetado.

## Referencias

- [W3C: Introducción a la accesibilidad web](https://www.w3.org/WAI/fundamentals/accessibility-intro/es)
- [NV Access: Descargar NVDA (Inglés)](https://www.nvaccess.org/download/)
