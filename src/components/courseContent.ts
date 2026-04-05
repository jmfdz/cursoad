import type { Section } from '../content/course'

export type SectionSubheading = {
  id: string
  title: string
}

const sectionHeadings = [
  'Formato del texto',
  'Formato de párrafo',
  'Texto en imágenes',
  'Niveles de conformidad',
  'Principales criterios por principio',
  'Establecer el idioma por defecto de una página web',
  'Establecer el idioma por defecto en una parte de la página web',
  'Título de página',
  'Iconos',
  'Campos de formulario con etiqueta asociada',
  'Agrupar campos de formulario',
  'Validación de formularios',
  'Tabindex',
  'Roles',
  'Landmark roles',
  'Aria-label, aria-labelledly y aria-describedby',
  'Aria-label',
  'Aria-labelledby',
  'Aria-describedby',
  'Estados y propiedades',
  'Live regions: aria-live',
  'Contraste de luminosidad',
  'Conocer el contraste de luminosidad entre colores',
  'Uso semántico del color',
  'Movimiento y parpadeos',
  'Simulando la ceguera al color',
  'Da tiempo suficiente',
  'El foco y mejoras de usabilidad en formularios',
]

const applyReplacements = (html: string, replacements: Array<[string, string]>) =>
  replacements.reduce((value, [search, replace]) => value.split(search).join(replace), html)

const slugify = (value: string) =>
  value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')

const globalVisibleFixes: Array<[string, string]> = [
  ['<p>Además, si utilizamos menús de navegación, también deberíamos utilizar find</p>\n<p>etiquetas nav para especificar que es un menú de navegación.</p>', '<p>Además, si utilizamos menús de navegación, también deberíamos utilizar etiquetas <code class="font-monospace">nav</code> para especificar que es un menú de navegación.</p>'],
  ['Hablamos de las etiquetas h1, h2, h3, h5, h5 y h6.', 'Hablamos de las etiquetas h1, h2, h3, h4, h5 y h6.'],
  ['Accesible Rich Internet Applications', 'Accessible Rich Internet Applications'],
  ['áreas interacticas', 'áreas interactivas'],
  ['elementos de mara y maquetación', 'elementos de marca y maquetación'],
  ['la tecla TAB de nusetro teclado', 'la tecla TAB de nuestro teclado'],
  ['áreas separadas de la pagina', 'áreas separadas de la página'],
  ['Se de utilizar', 'Se debe utilizar'],
  ['los elementos que que forman', 'los elementos que forman'],
  ['la informaicón legal', 'la información legal'],
  ['arial-label=', 'aria-label='],
  ['una mejor compresión e indexación', 'una mejor comprensión e indexación'],
  ['por ejmplo es-ES', 'por ejemplo es-ES'],
  ['Víde de presentación', 'Vídeo de presentación'],
  ['no tenga u nvisor', 'no tenga un visor'],
  ['PPDI', 'PDI'],
  ['puiede eliminarse', 'puede eliminarse'],
  ['Error al enviar el formualrio', 'Error al enviar el formulario'],
  ['Todos los campos con * son obligatorios”. Y en cada etiqueta label, ponerle el *.', '“Todos los campos con * son obligatorios”. Y en cada etiqueta <code class="font-monospace">label</code>, ponerle el *.'],
  ['ya que no todos los lectores de pantalla leen ese contenido. Además, obtendremos en los validadores de accesibildiad un error de elemento vacío.', 'ya que no todos los lectores de pantalla leen ese contenido. Además, obtendremos en los validadores de accesibilidad un error de elemento vacío.'],
  ['Usar todas las técnias y herramientas', 'Usar todas las técnicas y herramientas'],
  ['se mostrará ua ventana', 'se mostrará una ventana'],
  ['Lo que hace que que haya 3 botones', 'Lo que hace que haya 3 botones'],
  ['podemos mover el ratón y leera', 'podemos mover el ratón y leerá'],
]

const addHeadingAnchors = (section: Section, html: string) => {
  let headingIndex = 0

  return html.replace(/<h2 class="mt-4 mb-3">([^<]+)<\/h2>/g, (_, headingTitle: string) => {
    headingIndex += 1
    const headingId = `${section.id}-${headingIndex}-${slugify(headingTitle)}`

    return `<h2 id="${headingId}" class="mt-4 mb-3">${headingTitle}</h2>`
  })
}

export const getSectionSubheadings = (section: Section): SectionSubheading[] => {
  const html = renderSectionHtml(section)
  const matches = html.matchAll(/<h2 id="([^"]+)" class="mt-4 mb-3">([^<]+)<\/h2>/g)

  return Array.from(matches, ([, id, title]) => ({ id, title }))
}

export const renderSectionHtml = (section: Section) => {
  let html = section.html.replace(/<p>&nbsp;<\/p>/g, '')

  html = html
    .replaceAll('<b>', '<strong>')
    .replaceAll('</b>', '</strong>')
    .replaceAll(
      '<pre class="course-code"><code>',
      '<pre class="bg-dark text-light p-3 rounded overflow-auto"><code class="font-monospace">',
    )
    .replaceAll(
      '<pre class="course-code"><code class="font-monospace">',
      '<pre class="bg-dark text-light p-3 rounded overflow-auto"><code class="font-monospace">',
    )

  html = applyReplacements(
    html,
    sectionHeadings.map((heading) => [
      `<p>${heading}</p>`,
      `<h2 class="mt-4 mb-3">${heading}</h2>`,
    ]),
  )

  html = applyReplacements(html, globalVisibleFixes)

  if (section.id === 'texto') {
    html = applyReplacements(html, [
      [
        '<pre class="bg-dark text-light p-3 rounded overflow-auto"><code class="font-monospace">body {</code></pre>\n<p>Font-family: Arial;</p>\n<pre class="bg-dark text-light p-3 rounded overflow-auto"><code class="font-monospace">}</code></pre>',
        '<pre class="bg-dark text-light p-3 rounded overflow-auto"><code class="font-monospace">body {\n  Font-family: Arial;\n}</code></pre>',
      ],
      [
        '<pre class="bg-dark text-light p-3 rounded overflow-auto"><code class="font-monospace">html {</code></pre>\n<p>Font-size: 1.166rem; /* 14 puntos */</p>\n<pre class="bg-dark text-light p-3 rounded overflow-auto"><code class="font-monospace">}</code></pre>',
        '<pre class="bg-dark text-light p-3 rounded overflow-auto"><code class="font-monospace">html {\n  Font-size: 1.166rem; /* 14 puntos */\n}</code></pre>',
      ],
      [
        '<pre class="bg-dark text-light p-3 rounded overflow-auto"><code class="font-monospace">p {\nline-height: 1.5;</code></pre>\n<p>text-align: left; /* No usar justify y no abusar de center */</p>\n<pre class="bg-dark text-light p-3 rounded overflow-auto"><code class="font-monospace">}</code></pre>',
        '<pre class="bg-dark text-light p-3 rounded overflow-auto"><code class="font-monospace">p {\n  line-height: 1.5;\n  text-align: left; /* No usar justify y no abusar de center */\n}</code></pre>',
      ],
      [
        '<pre class="bg-dark text-light p-3 rounded overflow-auto"><code class="font-monospace">p {</code></pre>\n<p>margin-bottom: 1rem;</p>\n<pre class="bg-dark text-light p-3 rounded overflow-auto"><code class="font-monospace">}</code></pre>',
        '<pre class="bg-dark text-light p-3 rounded overflow-auto"><code class="font-monospace">p {\n  margin-bottom: 1rem;\n}</code></pre>',
      ],
    ])
  }

  if (section.id === 'imagenes') {
    html = applyReplacements(html, [
      [
        '<pre class="bg-dark text-light p-3 rounded overflow-auto"><code class="font-monospace">&lt;figure&gt;\n&lt;img src=”mano-ua.png” alt=”Estatua de una mano que sostiene un lápiz apuntando al cielo en el campus de la UA” /&gt;\n&lt;figcaption&gt;</code></pre>\n<p>Descripción larga</p>\n<pre class="bg-dark text-light p-3 rounded overflow-auto"><code class="font-monospace">&lt;/figcaption&gt;\n&lt;/figure&gt;</code></pre>',
        '<pre class="bg-dark text-light p-3 rounded overflow-auto"><code class="font-monospace">&lt;figure&gt;\n  &lt;img src=”mano-ua.png” alt=”Estatua de una mano que sostiene un lápiz apuntando al cielo en el campus de la UA” /&gt;\n  &lt;figcaption&gt;Descripción larga&lt;/figcaption&gt;\n&lt;/figure&gt;</code></pre>',
      ],
    ])
  }

  if (section.id === 'enlaces-botones') {
    html = applyReplacements(html, [
      [
        '<pre class="bg-dark text-light p-3 rounded overflow-auto"><code class="font-monospace">&lt;a href=”video.mp4” download=”Víde de presentación”&gt;</code></pre>\n<p>Vídeo de presentación (MP4 300MB)</p>\n<pre class="bg-dark text-light p-3 rounded overflow-auto"><code class="font-monospace">&lt;/a&gt;</code></pre>',
        '<pre class="bg-dark text-light p-3 rounded overflow-auto"><code class="font-monospace">&lt;a href=”video.mp4” download=”Víde de presentación”&gt;\n  Vídeo de presentación (MP4 300MB)\n&lt;/a&gt;</code></pre>',
      ],
    ])
  }

  if (section.id === 'tablas') {
    html = applyReplacements(html, [
      [
        '<pre class="bg-dark text-light p-3 rounded overflow-auto"><code class="font-monospace">&lt;div class=”table-responsive”&gt;\n&lt;table&gt;</code></pre>\n<p>…</p>\n<pre class="bg-dark text-light p-3 rounded overflow-auto"><code class="font-monospace">&lt;/table&gt;\n&lt;/div&gt;</code></pre>',
        '<pre class="bg-dark text-light p-3 rounded overflow-auto"><code class="font-monospace">&lt;div class=”table-responsive”&gt;\n  &lt;table&gt;\n    …\n  &lt;/table&gt;\n&lt;/div&gt;</code></pre>',
      ],
    ])
  }

  if (section.id === 'formularios') {
    html = applyReplacements(html, [
      [
        '<pre class="bg-dark text-light p-3 rounded overflow-auto"><code class="font-monospace">&lt;form&gt;\n&lt;fieldset&gt;\n&lt;legend&gt;Datos personales&lt;/legend&gt;\n&lt;div class="mb-3"&gt;\n&lt;label for="nombre" class="form-label"&gt;Nombre:&lt;/label&gt;\n&lt;input type="text" id="nombre" class="form-control" /&gt;\n&lt;/div&gt;\n&lt;div class="mb-3"&gt;\n&lt;label for="apellidos" class="form-label"&gt;Apellidos:&lt;/label&gt;\n&lt;input type="text" id="apellidos" class="form-control" /&gt;\n&lt;/div&gt;\n&lt;div class="mb-3"&gt;\n&lt;label for="dni" class="form-label"&gt;DNI/NIE:&lt;/label&gt;\n&lt;input type="text" id=”dni" class="form-control" /&gt;\n&lt;/div&gt;\n&lt;/fieldset&gt;\n&lt;fieldset&gt;\n&lt;legend&gt;Datos académicos&lt;/legend&gt;</code></pre>\n<p>div class="mb-3"&gt;</p>\n<pre class="bg-dark text-light p-3 rounded overflow-auto"><code class="font-monospace">&lt;label for="estudio" class="form-label"&gt;Estudio&lt;/label&gt;\n&lt;input type="text" id=”estudio" class="form-control" /&gt;\n&lt;/div&gt;</code></pre>\n<p>div class="mb-3"&gt;</p>\n<pre class="bg-dark text-light p-3 rounded overflow-auto"><code class="font-monospace">&lt;label for="asignatura" class="form-label"&gt;Asignatura&lt;/label&gt;\n&lt;input type="text" id="asignatura" class="form-control"/&gt;\n&lt;/div&gt;\n&lt;/fieldset&gt;\n&lt;div class=”mb-3”&gt;\n&lt;button type=”submit”&gt;Gurdar&lt;/button&gt;\n&lt;/div&gt;\n&lt;/form&gt;</code></pre>',
        '<pre class="bg-dark text-light p-3 rounded overflow-auto"><code class="font-monospace">&lt;form&gt;\n  &lt;fieldset&gt;\n    &lt;legend&gt;Datos personales&lt;/legend&gt;\n    &lt;div class="mb-3"&gt;\n      &lt;label for="nombre" class="form-label"&gt;Nombre:&lt;/label&gt;\n      &lt;input type="text" id="nombre" class="form-control" /&gt;\n    &lt;/div&gt;\n    &lt;div class="mb-3"&gt;\n      &lt;label for="apellidos" class="form-label"&gt;Apellidos:&lt;/label&gt;\n      &lt;input type="text" id="apellidos" class="form-control" /&gt;\n    &lt;/div&gt;\n    &lt;div class="mb-3"&gt;\n      &lt;label for="dni" class="form-label"&gt;DNI/NIE:&lt;/label&gt;\n      &lt;input type="text" id="dni" class="form-control" /&gt;\n    &lt;/div&gt;\n  &lt;/fieldset&gt;\n  &lt;fieldset&gt;\n    &lt;legend&gt;Datos académicos&lt;/legend&gt;\n    &lt;div class="mb-3"&gt;\n      &lt;label for="estudio" class="form-label"&gt;Estudio&lt;/label&gt;\n      &lt;input type="text" id="estudio" class="form-control" /&gt;\n    &lt;/div&gt;\n    &lt;div class="mb-3"&gt;\n      &lt;label for="asignatura" class="form-label"&gt;Asignatura&lt;/label&gt;\n      &lt;input type="text" id="asignatura" class="form-control" /&gt;\n    &lt;/div&gt;\n  &lt;/fieldset&gt;\n  &lt;div class="mb-3"&gt;\n    &lt;button type="submit"&gt;Guardar&lt;/button&gt;\n  &lt;/div&gt;\n&lt;/form&gt;</code></pre>',
      ],
      [
        '<pre class="bg-dark text-light p-3 rounded overflow-auto"><code class="font-monospace">&lt;form&gt;\n&lt;!—Resto de campos… --&gt;\n&lt;fieldset&gt;\n&lt;legend&gt;Colectivo UA&lt;/legend&gt;\n&lt;div class=”mb-3”&gt;\n&lt;div class="form-check"&gt;\n&lt;input\nclass="form-check-input" type="radio" id="ptgas"&gt;\n&lt;label\nclass="form-check-label" for="ptgas"&gt;PTGAS&lt;/label&gt;\n&lt;/div&gt;\n&lt;/DIV&gt;\n&lt;div class=”mb-3”&gt;\n&lt;div class="form-check"&gt;\n&lt;input\nclass="form-check-input" type="radio" id="pdi"&gt;\n&lt;label\nclass="form-check-label" for="pdi"&gt;PDI&lt;/label&gt;\n&lt;/div&gt;\n&lt;/DIV&gt;\n&lt;div class=”mb-3”&gt;\n&lt;div class="form-check"&gt;\n&lt;input\nclass="form-check-input" type="radio" id="alu”&gt;\n&lt;label\nclass="form-check-label" for="alu"&gt;Alumno/a&lt;/label&gt;\n&lt;/div&gt;\n&lt;/DIV&gt;\n&lt;/fieldset&gt;\n&lt;div class=”mb-3”&gt;\n&lt;button type=”submit”&gt;Gurdar&lt;/button&gt;\n&lt;/div&gt;\n&lt;/form&gt;</code></pre>',
        '<pre class="bg-dark text-light p-3 rounded overflow-auto"><code class="font-monospace">&lt;form&gt;\n  &lt;!-- Resto de campos… --&gt;\n  &lt;fieldset&gt;\n    &lt;legend&gt;Colectivo UA&lt;/legend&gt;\n    &lt;div class="mb-3"&gt;\n      &lt;div class="form-check"&gt;\n        &lt;input class="form-check-input" type="radio" id="ptgas" name="colectivo" /&gt;\n        &lt;label class="form-check-label" for="ptgas"&gt;PTGAS&lt;/label&gt;\n      &lt;/div&gt;\n    &lt;/div&gt;\n    &lt;div class="mb-3"&gt;\n      &lt;div class="form-check"&gt;\n        &lt;input class="form-check-input" type="radio" id="pdi" name="colectivo" /&gt;\n        &lt;label class="form-check-label" for="pdi"&gt;PDI&lt;/label&gt;\n      &lt;/div&gt;\n    &lt;/div&gt;\n    &lt;div class="mb-3"&gt;\n      &lt;div class="form-check"&gt;\n        &lt;input class="form-check-input" type="radio" id="alu" name="colectivo" /&gt;\n        &lt;label class="form-check-label" for="alu"&gt;Alumno/a&lt;/label&gt;\n      &lt;/div&gt;\n    &lt;/div&gt;\n  &lt;/fieldset&gt;\n  &lt;div class="mb-3"&gt;\n    &lt;button type="submit"&gt;Guardar&lt;/button&gt;\n  &lt;/div&gt;\n&lt;/form&gt;</code></pre>',
      ],
      [
        `<pre class="bg-dark text-light p-3 rounded overflow-auto"><code class="font-monospace">&lt;form novalidate=”true” id=”mi-form”&gt;
&lt;div class=”mb-3”&gt;
&lt;label for=”nombre”&gt;Nombre&lt;/label&gt;
&lt;input type=”text” id=”nombre” name=”nombre” class=”form-control” /&gt;
&lt;/div&gt;
&lt;div class=”mb-3”&gt;
&lt;label for=”apellidos”&gt;Apellidos&lt;/label&gt;
&lt;input type=”text” id=”apellidos” name=”apellidos” class=”form-control” /&gt;
&lt;/div&gt;
&lt;div class=”mb-3”&gt;
&lt;label for=”email”&gt;E-mail (opcional)&lt;/label&gt;
&lt;input type=”email” id=”email” name=”email” class=”form-control” /&gt;
&lt;/div&gt;
&lt;!—</code></pre>
<p>Con role=”alert” un lector de pantalla lee el contenido automáticamente cuando se inserte, por ejemplos mensajes de error</p>
<p>--&gt;</p>
<pre class="bg-dark text-light p-3 rounded overflow-auto"><code class="font-monospace">&lt;div id=”mensajealerta” role=”alert”&gt;&lt;/div&gt;
&lt;div class=”mb-3”&gt;
&lt;button type=”submit” class=”btn btn-primary”&gt;Enviar&lt;/button&gt;
&lt;/div&gt;</code></pre>
<pre class="bg-dark text-light p-3 rounded overflow-auto"><code class="font-monospace">&lt;/form&gt;
&lt;!— Código JavaScript --&gt;
&lt;script&gt;
document.getElementById(“mi-form”).addEventListener(“submit”, (event) =&gt; {
event.preventDefault();</code></pre>
<pre class="bg-dark text-light p-3 rounded overflow-auto"><code class="font-monospace">const formulario = event.target;
const nombre = formulario.nombre.value.trim();
const apellidos = formulario.apellidos.value.trim();</code></pre>
<pre class="bg-dark text-light p-3 rounded overflow-auto"><code class="font-monospace">// Contenedor para los mensajes de error
const mensajeAlerta = document.getElementById("mensajealerta");
mensajeAlerta.classList.remove("alert", "alert-danger");</code></pre>
<p>mensajeAlerta.textContent = "";</p>
<pre class="bg-dark text-light p-3 rounded overflow-auto"><code class="font-monospace">// Validación simple
let errores = [];
if (!nombre) errores.push("El campo 'Nombre' es obligatorio.");
if (!apellidos) errores.push("El campo 'Apellidos' es obligatorio.");</code></pre>
<pre class="bg-dark text-light p-3 rounded overflow-auto"><code class="font-monospace">// Si hay errores, los mostramos
if (errores.length &gt; 0) {
mensajeAlerta.classList.add("alert", "alert-danger");
let texto = "&lt;p&gt;Error al enviar el formualrio, se produjeron los siguientes errores:&lt;/p&gt;&lt;ul&gt;"</code></pre>
<p>errores.forEach( (error) =&gt; {</p>
<p>texto += "&lt;li&gt;" + error + "&lt;/li&gt;";</p>
<pre class="bg-dark text-light p-3 rounded overflow-auto"><code class="font-monospace">})</code></pre>
<p>texto += "&lt;/ul&gt;"</p>
<p>mensajeAlerta.innerHTML = texto;</p>
<pre class="bg-dark text-light p-3 rounded overflow-auto"><code class="font-monospace">} else {
// En caso de no haber errores, mostramos un alert de éxito
alert("¡Enviado! Hacer algo.....");
// Aquí podrías implementar la lógica real de envío (fetch, axios, etc.)
}
});
&lt;/script&gt;</code></pre>`,
        `<pre class="bg-dark text-light p-3 rounded overflow-auto"><code class="font-monospace">&lt;form novalidate="true" id="mi-form"&gt;
  &lt;div class="mb-3"&gt;
    &lt;label for="nombre"&gt;Nombre&lt;/label&gt;
    &lt;input type="text" id="nombre" name="nombre" class="form-control" /&gt;
  &lt;/div&gt;
  &lt;div class="mb-3"&gt;
    &lt;label for="apellidos"&gt;Apellidos&lt;/label&gt;
    &lt;input type="text" id="apellidos" name="apellidos" class="form-control" /&gt;
  &lt;/div&gt;
  &lt;div class="mb-3"&gt;
    &lt;label for="email"&gt;E-mail (opcional)&lt;/label&gt;
    &lt;input type="email" id="email" name="email" class="form-control" /&gt;
  &lt;/div&gt;
  &lt;!--
    Con role="alert" un lector de pantalla lee el contenido automáticamente cuando se inserte, por ejemplo mensajes de error
  --&gt;
  &lt;div id="mensajealerta" role="alert"&gt;&lt;/div&gt;
  &lt;div class="mb-3"&gt;
    &lt;button type="submit" class="btn btn-primary"&gt;Enviar&lt;/button&gt;
  &lt;/div&gt;
&lt;/form&gt;

&lt;!-- Código JavaScript --&gt;
&lt;script&gt;
  document.getElementById("mi-form").addEventListener("submit", (event) =&gt; {
    event.preventDefault();

    const formulario = event.target;
    const nombre = formulario.nombre.value.trim();
    const apellidos = formulario.apellidos.value.trim();

    // Contenedor para los mensajes de error
    const mensajeAlerta = document.getElementById("mensajealerta");
    mensajeAlerta.classList.remove("alert", "alert-danger");
    mensajeAlerta.textContent = "";

    // Validación simple
    let errores = [];
    if (!nombre) errores.push("El campo 'Nombre' es obligatorio.");
    if (!apellidos) errores.push("El campo 'Apellidos' es obligatorio.");

    // Si hay errores, los mostramos
    if (errores.length &gt; 0) {
      mensajeAlerta.classList.add("alert", "alert-danger");
      let texto = "&lt;p&gt;Error al enviar el formulario, se produjeron los siguientes errores:&lt;/p&gt;&lt;ul&gt;";
      errores.forEach((error) =&gt; {
        texto += "&lt;li&gt;" + error + "&lt;/li&gt;";
      });
      texto += "&lt;/ul&gt;";
      mensajeAlerta.innerHTML = texto;
    } else {
      alert("¡Enviado! Hacer algo.....");
      // Aquí podrías implementar la lógica real de envío (fetch, axios, etc.)
    }
  });
&lt;/script&gt;</code></pre>`,
      ],
      ['<p>Componentes interactivos</p>', ''],
    ])

    html = html.replace(
      /<pre class="bg-dark text-light p-3 rounded overflow-auto"><code class="font-monospace">&lt;form novalidate[\s\S]*?&lt;\/script&gt;<\/code><\/pre>/,
      `<pre class="bg-dark text-light p-3 rounded overflow-auto"><code class="font-monospace">&lt;form novalidate="true" id="mi-form"&gt;
  &lt;div class="mb-3"&gt;
    &lt;label for="nombre"&gt;Nombre&lt;/label&gt;
    &lt;input type="text" id="nombre" name="nombre" class="form-control" /&gt;
  &lt;/div&gt;
  &lt;div class="mb-3"&gt;
    &lt;label for="apellidos"&gt;Apellidos&lt;/label&gt;
    &lt;input type="text" id="apellidos" name="apellidos" class="form-control" /&gt;
  &lt;/div&gt;
  &lt;div class="mb-3"&gt;
    &lt;label for="email"&gt;E-mail (opcional)&lt;/label&gt;
    &lt;input type="email" id="email" name="email" class="form-control" /&gt;
  &lt;/div&gt;
  &lt;!--
    Con role="alert" un lector de pantalla lee el contenido automaticamente cuando se inserte, por ejemplo mensajes de error
  --&gt;
  &lt;div id="mensajealerta" role="alert"&gt;&lt;/div&gt;
  &lt;div class="mb-3"&gt;
    &lt;button type="submit" class="btn btn-primary"&gt;Enviar&lt;/button&gt;
  &lt;/div&gt;
&lt;/form&gt;

&lt;!-- Código JavaScript --&gt;
&lt;script&gt;
  document.getElementById("mi-form").addEventListener("submit", (event) =&gt; {
    event.preventDefault();

    const formulario = event.target;
    const nombre = formulario.nombre.value.trim();
    const apellidos = formulario.apellidos.value.trim();

    // Contenedor para los mensajes de error
    const mensajeAlerta = document.getElementById("mensajealerta");
    mensajeAlerta.classList.remove("alert", "alert-danger");
    mensajeAlerta.textContent = "";

    // Validación simple
    let errores = [];
    if (!nombre) errores.push("El campo 'Nombre' es obligatorio.");
    if (!apellidos) errores.push("El campo 'Apellidos' es obligatorio.");

    // Si hay errores, los mostramos
    if (errores.length &gt; 0) {
      mensajeAlerta.classList.add("alert", "alert-danger");
      let texto = "&lt;p&gt;Error al enviar el formulario, se produjeron los siguientes errores:&lt;/p&gt;&lt;ul&gt;";
      errores.forEach((error) =&gt; {
        texto += "&lt;li&gt;" + error + "&lt;/li&gt;";
      });
      texto += "&lt;/ul&gt;";
      mensajeAlerta.innerHTML = texto;
    } else {
      alert("¡Enviado! Hacer algo.....");
      // Aquí podrías implementar la lógica real de envío (fetch, axios, etc.)
    }
  });
&lt;/script&gt;</code></pre>`,
    )
  }

  if (section.id === 'wai-aria') {
    html = applyReplacements(html, [
      [
        '<pre class="bg-dark text-light p-3 rounded overflow-auto"><code class="font-monospace">&lt;button id="toggleButton"\naria-expanded="false" aria-controls="panel"&gt;</code></pre>\n<p>Mostrar panel</p>\n<pre class="bg-dark text-light p-3 rounded overflow-auto"><code class="font-monospace">&lt;/button&gt;\n&lt;div id="panel"&gt;\n&lt;p&gt;Este es el contenido del panel desplegable.&lt;/p&gt;\n&lt;/div&gt;\n&lt;script&gt;\nconst button = document.getElementById(\'toggleButton\');\nconst panel = document.getElementById(\'panel\');</code></pre>\n<p>button.addEventListener(\'click\', () =&gt; {</p>\n<pre class="bg-dark text-light p-3 rounded overflow-auto"><code class="font-monospace">const isExpanded = button.getAttribute(\'aria-expanded\') === \'true\';</code></pre>\n<p>button.setAttribute(\'aria-expanded\', String(!isExpanded));</p>\n<pre class="bg-dark text-light p-3 rounded overflow-auto"><code class="font-monospace">panel.setAttribute(\'aria-hidden\', String(isExpanded));\n});\n&lt;/script&gt;</code></pre>',
        '<pre class="bg-dark text-light p-3 rounded overflow-auto"><code class="font-monospace">&lt;button id="toggleButton"\n  aria-expanded="false"\n  aria-controls="panel"&gt;\n  Mostrar panel\n&lt;/button&gt;\n&lt;div id="panel"&gt;\n  &lt;p&gt;Este es el contenido del panel desplegable.&lt;/p&gt;\n&lt;/div&gt;\n&lt;script&gt;\n  const button = document.getElementById(\'toggleButton\');\n  const panel = document.getElementById(\'panel\');\n\n  button.addEventListener(\'click\', () =&gt; {\n    const isExpanded = button.getAttribute(\'aria-expanded\') === \'true\';\n    button.setAttribute(\'aria-expanded\', String(!isExpanded));\n    panel.setAttribute(\'aria-hidden\', String(isExpanded));\n  });\n&lt;/script&gt;</code></pre>',
      ],
      [
        '<pre class="bg-dark text-light p-3 rounded overflow-auto"><code class="font-monospace">aria-live permite identificar una zona dinámica de nuestro contenido que se actualiza automáticamente, de esta manera los cambios se anunciarán al usuario de los productos de apoyo. En función de su valor (off, polite, assertive) indicaremos cuándo queremos que se anuncie la actualización.</code></pre>',
        '<p>aria-live permite identificar una zona dinámica de nuestro contenido que se actualiza automáticamente, de esta manera los cambios se anunciarán al usuario de los productos de apoyo. En función de su valor (off, polite, assertive) indicaremos cuándo queremos que se anuncie la actualización.</p>',
      ],
    ])
  }

  return addHeadingAnchors(section, html)
}
