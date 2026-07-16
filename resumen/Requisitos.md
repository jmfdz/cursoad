# Requisitos web

## Estructura semántica de una página web

Debemos considerar que cada página web es la suma de diferentes elementos, que cada uno tiene una relación y a su vez se relacionan entre sí. Esto es, un documento cuenta con listas ordenadas, párrafos, encabezados, tablas y muchos más tipos de elementos que definen la estructura del mismo.

Para estructurar nuestra página web de manera correcta debemos dotar de semántica a los elementos que la componen y de esta manera transmitirán, aparte del contenido, su significado y relación con los demás elementos.

### Semántica de los elementos

Pongamos un ejemplo de lista con los colores corporativos UA. Podemos hacerla escribiendo en cada línea:

```html
<p>1. Azul</p>
<p>2. Naranja</p>
<p>3. Gris</p>
```

El problema es que estaremos simulando una lista, cuando en realidad son tres párrafos. Sin embargo, si utilizamos una lista ordenada, ni siquiera necesitamos escribir los números:

```html
<ol>
<li>Azul</li>
<li>Naranja</li>
<li>Gris</li>
</ol>
```

Utilizando los elementos de lista sí estaremos dotando al elemento de semántica, y un lector de pantallas para personas ciegas avisará, antes de leer los elementos, que es una lista.

Otra mala práctica es crear títulos cambiando el aspecto visual, por ejemplo a un párrafo para hacerlo más grande y que visualmente parezca un título en lugar de utilizar las etiquetas de encabezado (`h1`, `h2`, `h3`...).

### Estructura de una página web

Siguiendo con la función semántica de las etiquetas HTML, deberíamos especificar un esqueleto de nuestra página web que separe las diferentes secciones y elementos de la página.

El contenido principal debe identificarse con la etiqueta `main`. Si la página tiene una cabecera común, conviene marcarla con `header`; también se pueden incluir otras etiquetas como `footer` para el pie de página.

Además, si utilizamos menús de navegación, también deberíamos utilizar etiquetas `nav` para especificar que es un menú de navegación.

En la etiqueta `html` también debemos indicar el idioma principal de la página, por ejemplo `<html lang="es">` para español. Este requisito se explicará con más detalle en el apartado de idioma.

### Título de página

Otro requisito de accesibilidad es que todo documento web tenga definido un título con la etiqueta `<title>` dentro del `<head>`. Este título se aconseja que:

- sea descriptivo y conciso, para no tener que leer mucho contenido,
- sea único en las diferentes páginas del sitio, para saber en qué página estamos,
- coincida con el `h1` de la página, para evitar confusiones.

Veamos un ejemplo completo con título, cabecera, contenido principal y pie de página:

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <title>Bienvenido/a a la UA</title>
</head>
<body>
  <header>
    <a href="/">
      <img src="imagen.png" alt="Universidad de Alicante" />
    </a>
    <nav>
      <ul>
        <li><a href="estudiantes.html">Estudiantes</a></li>
        <li><a href="pdi.html">PDI</a></li>
        <li><a href="ptgas.html">PTGAS</a></li>
      </ul>
    </nav>
  </header>
  <main>
    <h1>Bienvenido/a a la UA</h1>
    <!-- Contenido de la página -->
  </main>
  <footer>
    <p>Universidad de Alicante 2025</p>
  </footer>
</body>
</html>
```

### Encabezados

Los encabezados son uno de los elementos más importantes para darle una estructura coherente a una página web.

Hablamos de las etiquetas `h1`, `h2`, `h3`, `h4`, `h5` y `h6`. Debe fomentarse su uso en lugar de otros elementos para marcar las diferentes secciones de una web.

Como comentábamos en la sección anterior, conviene que cada página tenga un `h1` que identifique su tema principal y, a partir de ahí, incluir los diferentes apartados usando los siguientes niveles, por ejemplo el segundo nivel `h2`.

Conviene no saltar niveles sin una relación clara entre apartados. Por ejemplo, después de un `h1` normalmente aparecerá un `h2`, no un `h3`.

Tampoco se deben crear encabezados consecutivos del mismo nivel y que no tengan elementos entre ellos, pues su función es encabezar una sección.

Por ejemplo, estaría mal:

```html
<h1>Web UA</h1>
<p>Descubre la web de la UA…</p>
<h2>Noticias</h2>
<h2>Eventos</h2>
```

Ahora veamos una estructura de la web de la UA, con la sección de noticias y eventos de forma correcta:

```html
<h1>Web UA</h1>
<p>Descubre la web de la UA…</p>
<h2>Noticias</h2>
<h3>Enlace a noticia 1</h3>
<p>Descripción noticia 1</p>
<h3>Enlace a noticia 2</h3>
<p>Descripción noticia 2</p>
<h3>Enlace a noticia 3</h3>
<p>Descripción noticia 3</p>
<h2>Eventos</h2>
<ul>
  <li>Evento 1</li>
  <li>Evento 2</li>
  <li>Evento 3</li>
</ul>
<h2>La UA en cifras</h2>
<p>Datos destacados de la Universidad de Alicante.</p>
```

En definitiva, nunca debemos simular elementos y deberemos crearlos de la forma correcta para que todos los elementos tengan un significado más allá del contenido que contienen.

## Texto e idioma

Antes de comenzar a elaborar un contenido, debemos pensar en el tipo de personas a las que se dirige, las ideas más importantes a transmitir y su estructura. Para ello utilizaremos un **lenguaje sencillo**, prescindiendo de estructuras gramaticales complejas y usando frases cortas. El **mensaje** que queremos transmitir con nuestro texto debe ser **detectado de forma clara por los usuarios**.

### Formato de párrafo

Lo primero que debemos tener en cuenta es que cada texto debe incluirse en el elemento que corresponda a su función: párrafo, encabezado, enlace, botón, etc. Un `div` puede contener texto, pero no indica que ese texto sea un párrafo. Veamos un ejemplo:

```html
<div>¡Hola mundo!</div> <!-- Sin semántica de párrafo -->
<p>¡Hola mundo!</p> <!-- Párrafo -->
```

No debemos utilizar `<br>` para separar párrafos o crear márgenes. Para ello utilizaremos elementos semánticos y reglas CSS. El salto de línea sí puede emplearse cuando forma parte del contenido, por ejemplo en una dirección postal.

Respecto a la **alineación del texto** debemos tener en cuenta una serie de consideraciones:

- Si pensamos centrar contenido, este debe ser corto y no ocupar más de un par de líneas. En caso contrario puede resultar más difícil su lectura.
- **No se debe justificar el texto del contenido a ambos lados de la pantalla**, este formato dificulta su lectura y por tanto su legibilidad.
- Conviene incluir un **interlineado suficiente** que mejore la lectura de las frases.
- También conviene agregar un espaciado suficiente entre los diferentes bloques de texto.

```css
p {
  line-height: 1.5;
  text-align: left; /* No usar justify y no abusar de center */
  margin-bottom: 1rem;
}
```

### Idioma del contenido

Tanto si trabajamos con páginas web en varios idiomas como si aparecen fragmentos en otra lengua, deberemos **marcar el idioma al que pertenece cada parte del texto**. Los lectores de pantalla necesitan conocerlo para realizar una pronunciación correcta.

Es el caso también de los buscadores como Google, que necesitan saber el idioma de la página para una mejor comprensión e indexación de los contenidos.

Para especificar los idiomas en HTML5 disponemos del atributo `lang`, que se puede aplicar a cualquier etiqueta. Como valor utilizaremos el código de idioma, por ejemplo `es` para español o `es-ES` para español de España.

Para indicar que el contenido de la web es en español, escribiríamos:

```html
<!DOCTYPE html>
<html lang="es">
<head>...</head>
<body>...</body>
</html>
```

Para marcar que un fragmento de texto está en otro idioma, lo hacemos directamente en el texto deseado. Por ejemplo, marcando la palabra *People* como palabra inglesa:

```html
<!DOCTYPE html>
<html lang="es">
<head>...</head>
<body>
  <p>Gente en inglés es <span lang="en">People</span></p>
</body>
</html>
```

## Imágenes y elementos no textuales

Los elementos no textuales, como imágenes, gráficos o fórmulas matemáticas, deben disponer de una alternativa que transmita su información o su función a quienes no pueden percibirlos.

En una imagen, el texto alternativo debe explicar lo que aporta dentro de ese contexto, sin limitarse a enumerar todo lo que aparece visualmente.

En el caso de que un elemento sea meramente decorativo, se deberá dejar la etiqueta de texto alternativo vacía.

### Texto alternativo

Para incluir la descripción de una imagen en una web debemos incluir el atributo `alt`, que es obligatorio. Veamos dos ejemplos, una imagen con descripción y otra decorativa:

```html
<img src="mano-ua.png" alt="Estatua de una mano con un lápiz que simboliza la libertad de expresión de la UA" />
<!-- Imagen decorativa -->
<img src="fondo-decorativo.png" alt="" />
```

No existe un límite fijo de caracteres, pero el texto alternativo debe ser conciso. Si la descripción necesaria es muy larga, conviene incluirla dentro del contenido de la página.

Otra forma de incluir una descripción larga es mediante la etiqueta `figcaption` dentro de `figure` en HTML5. Veamos un ejemplo:

```html
<figure>
  <img src="mano-ua.png" alt="Estatua de la Mano de la UA" />
  <figcaption>La Mano de la UA simboliza la libertad de expresión y sostiene un lápiz que apunta al cielo.</figcaption>
</figure>
```

### Iconos

Cuando un icono transmite información o permite realizar una acción, debe comunicarse su propósito. Si es decorativo o repite un texto visible, debe ocultarse a los productos de apoyo.

En este caso no hace falta describir, por ejemplo, “icono de un lápiz” si el icono tiene la acción de editar, por lo que su descripción será “Editar”.

Si el icono se encuentra dentro de un botón, el nombre accesible debe aplicarse al botón y el icono debe ocultarse a los productos de apoyo. Siempre que sea posible, es preferible incluir texto visible. Si el diseño utiliza únicamente el icono, podemos proporcionar el nombre mediante `aria-label`.

Veamos un ejemplo de un botón con un icono de editar:

```html
<button type="button" aria-label="Editar">
  <i class="icon icon-edit" aria-hidden="true"></i>
</button>
```

En ningún caso podemos dejar solamente el atributo `title` y ninguna información más, ya que no todos los lectores de pantalla leen ese contenido.

### Imágenes SVG

Si un SVG funciona como una imagen informativa, debemos marcarlo con `role="img"` y proporcionarle un nombre accesible mediante un elemento `title` interno o con `aria-label` en el propio SVG. No existe el rol `image`; el valor correcto es `img`.

Si el SVG es decorativo, o ya está acompañado por un texto que transmite la misma información, utilizaremos `aria-hidden="true"`.

```html
<!-- SVG informativo con title -->
<svg role="img" focusable="false">
  <title>Estado completado</title>
  ...
</svg>

<!-- Alternativa con aria-label -->
<svg role="img" aria-label="Estado completado" focusable="false">
  ...
</svg>

<!-- SVG decorativo -->
<svg aria-hidden="true" focusable="false">
  ...
</svg>
```

## Enlaces y botones

Los enlaces y botones deben transmitir claramente qué ocurrirá cuando pulsemos en ellos. Deben ser cortos y concisos, por ejemplo: “Procesar imagen”, “Descargar documento”, etc.

No podemos utilizar como texto de enlaces palabras como “aquí”, “pulsa aquí”, “enlace”, etc.

Si van a provocar un cambio de contexto debemos indicarlo en el texto del enlace o en su nombre accesible.

```html
<!-- Texto poco descriptivo -->
<a href="admision.html">Pulsa aquí</a>

<!-- El destino se entiende de forma aislada -->
<a href="admision.html">Consultar información de admisión</a>

<a href="video.html" target="_blank" rel="noreferrer">
  Ver el vídeo de presentación (se abre en una ventana nueva)
</a>
```

### Enlaces a descargas

Si el enlace descarga un fichero, conviene indicar su formato y tamaño:

```html
<a href="video.mp4" download>
  Vídeo de presentación (MP4, 300 MB)
</a>
```

### Texto accesible

Los enlaces y botones no pueden estar vacíos, siempre deben tener un texto, ya sea visible o no. En este sentido, si el enlace o botón solo incluye una imagen o icono, deben tener texto alternativo o `aria-label`.

```html
<a href="inicio.html">
  <img src="logo-ua.svg" alt="Ir a la página de inicio de la UA">
</a>

<a href="configuracion.html" aria-label="Abrir configuración">
  <svg aria-hidden="true" focusable="false">...</svg>
</a>
```

Por último, en aplicaciones que tienen un alto uso de peticiones Ajax, debemos considerar que los botones deben utilizarse en estos casos y utilizar siempre botones para recargar páginas o procesar información. Los enlaces, sin embargo, están pensados para provocar cambio de página.

```html
<a href="resultados.html">Consultar resultados</a>
<button type="button">Actualizar resultados</button>
```

## Navegación por teclado y foco

Una página web no debe depender exclusivamente del ratón. Debe poder recorrerse y utilizarse también con teclado, ya que muchas personas navegan de esta forma de manera habitual o la necesitan como única vía de acceso.

### Recorrido con teclado

Al pulsar la tecla `TAB`, el foco del teclado va avanzando por los enlaces, botones, campos de formulario y otros elementos interactivos. Ese recorrido debe seguir una lógica clara y no obligar al usuario a saltar de una zona a otra sin sentido.

En general, el orden del foco debería corresponderse con el orden natural del contenido en la página. Si el usuario ve una secuencia y el teclado sigue otra distinta, la navegación se vuelve confusa.

Los enlaces de salto permiten ir directamente al contenido principal:

```html
<a class="skip-link" href="#contenido">Saltar al contenido principal</a>
<main id="contenido">...</main>
```

### Foco visible

No basta con que el foco exista, también debe verse con claridad. El usuario necesita saber en todo momento sobre qué elemento está situado para poder continuar la navegación o activar una acción.

Por este motivo, no se debe eliminar el contorno de foco que trae el navegador salvo que se sustituya por otro estilo claramente visible y con contraste suficiente.

```css
:focus-visible {
  outline: 3px solid #005fcc;
  outline-offset: 3px;
}
```

### Controles interactivos reales

Los elementos que realizan acciones o cambian de pantalla deben construirse con los controles adecuados: enlaces para navegar y botones para ejecutar acciones. No deberíamos usar `div`, `span` u otros elementos de maquetación para simular su comportamiento.

Si un elemento parece interactivo, pero no recibe foco, no puede activarse con teclado o no muestra su estado de forma clara, parte de los usuarios quedará fuera.

```html
<!-- Evitar -->
<div onclick="guardar()">Guardar</div>

<!-- Correcto -->
<button type="button" onclick="guardar()">Guardar</button>
```

### Problemas habituales

Entre los fallos más frecuentes relacionados con teclado y foco están los siguientes:

- enlaces, botones o iconos que solo funcionan con ratón,
- focos invisibles o con contraste insuficiente,
- orden de tabulación ilógico,
- cuadros modales o menús desplegables que no gestionan bien el foco,
- componentes creados con JavaScript que visualmente parecen correctos, pero no son utilizables con teclado.

En definitiva, si una funcionalidad no puede utilizarse correctamente con teclado, no puede considerarse accesible.

## Formularios

Los formularios tienen como finalidad proporcionar interactividad a los sitios y aplicaciones web, esto es, dados una serie de datos, procesarlos de alguna forma para obtener resultados, ya sean filtrar listados, enviar peticiones al servidor o producir cambios en la interfaz.

En este apartado nos centramos en los requisitos de accesibilidad del formulario. Más adelante, en usabilidad y UX, veremos patrones y decisiones de diseño orientadas a mejorar también la experiencia de uso.

### Campos de formulario con etiqueta asociada

Cuando los campos forman parte de un envío o una operación conjunta, deben estar dentro de una etiqueta `<form>`. Hay controles autónomos, como algunos filtros que se aplican al cambiar su valor, que no necesitan enviar un formulario.

```html
<form>
  <!-- Campos de formulario -->
</form>
```

Todo campo de formulario debe estar asociado con una etiqueta `<label>` que lo describa. Para ello, debemos incluir un atributo `id="nombreCampoFormulario"` en el campo de formulario y luego en una etiqueta `<label>` referenciarla en el atributo `for="nombreCampoFormulario"`.

```html
<form>
  <div class="mb-3">
    <label for="nombre" class="form-label">Nombre:</label>
    <input type="text" id="nombre" class="form-control w-25" />
  </div>
  <div class="mb-3">
    <label for="colectivo" class="form-label">Colectivo UA</label>
    <select id="colectivo" class="form-select w-25">
      <option value="alumno">Alumno</option>
      <option value="pdi">PDI</option>
      <option value="ptgas">PTGAS</option>
    </select>
  </div>
</form>
```

### Agrupar campos de formulario

Hay dos ocasiones en las que debemos agrupar campos de formulario utilizando `fieldset` y `legend`:

- Cuando el formulario es muy largo, para agrupar campos de formulario relacionados.
- Cuando utilizamos campos `checkbox` o `radio`, para darles una etiqueta descriptiva en conjunto.

Ejemplo en el caso de un formulario largo, agrupando por relación:

```html
<form>
  <fieldset>
    <legend>Datos personales</legend>
    <div class="mb-3">
      <label for="nombre" class="form-label">Nombre:</label>
      <input type="text" id="nombre" class="form-control" />
    </div>
    <div class="mb-3">
      <label for="apellidos" class="form-label">Apellidos:</label>
      <input type="text" id="apellidos" class="form-control" />
    </div>
    <div class="mb-3">
      <label for="dni" class="form-label">DNI/NIE:</label>
      <input type="text" id="dni" class="form-control" />
    </div>
  </fieldset>

  <fieldset>
    <legend>Datos académicos</legend>
    <div class="mb-3">
      <label for="estudio" class="form-label">Estudio</label>
      <input type="text" id="estudio" class="form-control" />
    </div>
    <div class="mb-3">
      <label for="asignatura" class="form-label">Asignatura</label>
      <input type="text" id="asignatura" class="form-control" />
    </div>
  </fieldset>

  <div class="mb-3">
    <button type="submit">Guardar</button>
  </div>
</form>
```

Ejemplo de campos `checkbox` o `radio` agrupados:

```html
<form>
  <!-- Resto de campos... -->
  <fieldset>
    <legend>Colectivo UA</legend>
    <div class="mb-3">
      <div class="form-check">
        <input class="form-check-input" type="radio" id="ptgas" name="colectivo" />
        <label class="form-check-label" for="ptgas">PTGAS</label>
      </div>
    </div>
    <div class="mb-3">
      <div class="form-check">
        <input class="form-check-input" type="radio" id="pdi" name="colectivo" />
        <label class="form-check-label" for="pdi">PDI</label>
      </div>
    </div>
    <div class="mb-3">
      <div class="form-check">
        <input class="form-check-input" type="radio" id="alu" name="colectivo" />
        <label class="form-check-label" for="alu">Alumno/a</label>
      </div>
    </div>
  </fieldset>
</form>
```

### Validación de formularios

La primera cuestión que debemos plantearnos es cómo señalizar los campos que son obligatorios u opcionales.

En general, según los estudios, hay dos enfoques:

- Poner al inicio del formulario “Todos los campos con * son obligatorios” y en cada etiqueta añadir el asterisco.
- No poner nada al inicio, dando a entender que todos los campos son obligatorios, y los que no lo sean marcarlo en la etiqueta con la palabra “opcional”.

En general, se recomienda la segunda aproximación cuando hay pocos campos o la mayoría son obligatorios. De esta forma, se reduce la carga cognitiva a los usuarios. Además, el `*` a un lector de pantalla solo se lee como “asterisco”.

En esta línea, es recomendable utilizar el atributo `required` en los campos de formulario, ya que indica la semántica a un lector de pantalla. Aunque usemos el atributo `novalidate`, hay que validar siempre los datos también en el servidor. La validación realizada en el navegador mejora la experiencia, pero no es una medida de seguridad.

Finalmente, la forma de mostrar los mensajes de error de la validación depende de la tipología de la petición:

- Si es una petición Ajax, se recomienda mostrar el resumen de errores después del botón de enviar y anunciarlo con `role="alert"`.
- Si la petición se procesa en el servidor y recarga la página, los errores deben mostrarse antes del formulario.

De esta forma, nos aseguramos de que siempre se muestran los errores en primer plano.

Además, los mensajes deben ser claros y útiles. No basta con indicar que hay un error: hay que explicar qué campo ha fallado y, si es posible, cómo corregirlo.

### Ejemplo de validación Ajax

Veamos un ejemplo de validación de un formulario mediante Ajax que efectúa los cambios en el cliente:

```html
<form novalidate id="mi-form">
  <div class="mb-3">
    <label for="nombre">Nombre</label>
    <input type="text" id="nombre" name="nombre" class="form-control" required />
  </div>
  <div class="mb-3">
    <label for="apellidos">Apellidos</label>
    <input type="text" id="apellidos" name="apellidos" class="form-control" required />
  </div>
  <div class="mb-3">
    <label for="email">E-mail (opcional)</label>
    <input type="email" id="email" name="email" class="form-control" />
  </div>
  <div class="mb-3">
    <button type="submit" class="btn btn-primary">Enviar</button>
  </div>
  <!-- Con role="alert" un lector de pantalla lee el contenido automáticamente cuando se inserte -->
  <div id="mensajealerta" role="alert" tabindex="-1"></div>
</form>
```

```html
<script>
document.getElementById("mi-form").addEventListener("submit", (event) => {
  event.preventDefault();

  const formulario = event.target;
  const nombre = formulario.nombre.value.trim();
  const apellidos = formulario.apellidos.value.trim();

  const mensajeAlerta = document.getElementById("mensajealerta");
  mensajeAlerta.classList.remove("alert", "alert-danger");
  mensajeAlerta.textContent = "";
  formulario.nombre.removeAttribute("aria-invalid");
  formulario.apellidos.removeAttribute("aria-invalid");

  const errores = [];
  if (!nombre) {
    errores.push("El campo 'Nombre' es obligatorio.");
    formulario.nombre.setAttribute("aria-invalid", "true");
  }
  if (!apellidos) {
    errores.push("El campo 'Apellidos' es obligatorio.");
    formulario.apellidos.setAttribute("aria-invalid", "true");
  }

  if (errores.length > 0) {
    mensajeAlerta.classList.add("alert", "alert-danger");
    let texto = "<p>Error al enviar el formulario, se produjeron los siguientes errores:</p><ul>";
    errores.forEach((error) => {
      texto += "<li>" + error + "</li>";
    });
    texto += "</ul>";
    mensajeAlerta.innerHTML = texto;
    mensajeAlerta.focus();
  } else {
    alert("¡Enviado! Hacer algo...");
  }
});
</script>
```

## Tablas

Las tablas son para estructurar datos, no para maquetar o colocar contenido visualmente.

Conviene evitar dividir o combinar celdas cuando no sea necesario, para mantener las tablas sencillas de entender.

Deben tener un título con la etiqueta `caption`, que se muestra visualmente asociado a la tabla. Si el diseño lo necesita, se puede ajustar su posición con CSS sin perder esa asociación.

Los encabezados de fila o columna deben marcarse con `th` y asociarse mediante `scope="row"` o `scope="col"`. También deben diferenciarse visualmente con contraste suficiente.

### Ejemplo de tabla

```html
<table class="table">
  <caption>Notas de la asignatura de accesibilidad</caption>
  <thead>
    <!-- Cabecera en azul con texto blanco para resaltar -->
    <tr style="background: blue; color: white;">
      <th scope="col">Nombre</th>
      <th scope="col">Nota</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Alberto</th>
      <td>8</td>
    </tr>
    <tr>
      <th scope="row">Alba</th>
      <td>9</td>
    </tr>
  </tbody>
</table>
```

### Tablas adaptables

Si la tabla es muy ancha, se recomienda hacerla adaptable con la clase de Bootstrap `table-responsive`. El contenedor debe poder recibir el foco para que también pueda desplazarse con teclado:

```html
<div class="table-responsive" tabindex="0" role="region" aria-label="Notas de la asignatura">
  <table>
    ...
  </table>
</div>
```

## WAI-ARIA

WAI-ARIA (*Web Accessibility Initiative - Accessible Rich Internet Applications*) es una especificación del W3C. Está pensada para hacer más accesible el contenido dinámico, principalmente JavaScript y Ajax, transmitiendo a las APIs de accesibilidad de los navegadores web información sobre el comportamiento de la interfaz y su estructura.

Ahora bien, ARIA no sustituye al HTML nativo ni corrige por sí sola una interacción mal construida. Si un componente no puede usarse bien con teclado o no tiene una estructura correcta, añadir atributos ARIA no resolverá el problema de base.

Ejemplos de componentes que necesitan atributos WAI-ARIA son los cuadros modales, carruseles, áreas interactivas en las que se recarga el contenido dinámicamente, menús desplegables, etc.

### Tabindex

Es conveniente recordar que los enlaces, botones y elementos de formulario, entre otros controles nativos, pueden recibir el foco del teclado sin añadir `tabindex`.

Por el contrario, elementos HTML como listas, párrafos, capas `div` o `span` nunca reciben el foco del teclado al tratarse de elementos con un propósito diferente: marcar y maquetar el contenido.

Por este motivo, no se deben incluir eventos JavaScript tales como `onclick` u `onkeypress` en elementos de marca y maquetación, puesto que estaríamos dejando fuera a los usuarios que acceden sin ratón.

Veamos un ejemplo:

```html
<div onclick="alert('¡Saludo!');">Púlsame</div>
```

Lo que estamos haciendo es crear una capa `div` que simula el comportamiento de un enlace o un botón, que no es su propósito y además jamás se podrá acceder por teclado ya que este elemento nunca recibirá el foco.

Si por compatibilidad no podemos sustituir un elemento simulado por un control nativo, hay que completar manualmente su comportamiento: foco, rol y activación con teclado. Por eso se debe preferir un enlace o botón nativo siempre que sea posible.

```html
<div role="button" tabindex="0" onclick="saludar()"
  onkeydown="if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); saludar(); }">
  Púlsame
</div>
```

El atributo `tabindex` puede utilizarse para varios cometidos dependiendo del valor asignado:

- `tabindex="0"` permite que un elemento que no puede recibir el foco por defecto pueda recibirlo siguiendo el orden natural del HTML.
- `tabindex="-1"` permite que el elemento pueda coger el foco mediante JavaScript con la función `focus()`, aunque no podamos llegar a él con tabulación normal.
- Un valor positivo, como `tabindex="1"`, define un orden de tabulación explícito. No se recomienda su uso porque puede crear confusión.

### Roles

Incluir información sobre el rol o función de un elemento de nuestra página mediante ARIA es tan sencillo como añadir a la etiqueta del elemento `role="[nombre_del_rol]"`.

Por ejemplo:

```html
<div role="progressbar" aria-label="Progreso" aria-valuemin="0" aria-valuemax="100" aria-valuenow="60">
  60 %
</div>

<ul role="tree" aria-label="Contenido">
  <li role="treeitem" aria-level="1">Tema 1</li>
</ul>
```

No se debe cambiar dinámicamente el rol de un elemento, este es fijo. Si se quiere cambiar habría que eliminar del DOM el elemento y crear uno nuevo con el nuevo rol.

### Landmark roles

Dentro de los roles que definen la estructura de la página se distinguen los *landmark roles*, que se usan para identificar áreas separadas de la página y transmitir la naturaleza de las mismas.

Los roles de estructura y su función son:

- `role="banner"` para la cabecera principal.
- `role="navigation"` para los menús de navegación.
- `role="main"` para marcar dónde está el contenido principal de la página.
- `role="complementary"` para contenidos no imprescindibles, por ejemplo una barra lateral.
- `role="contentinfo"` para la información repetida del pie.
- `role="search"` para las zonas donde hay un buscador.
- `role="form"` para una zona de formulario identificada con un nombre accesible.
- `role="application"` si hay una aplicación web interactiva que cambia las reglas normales de teclado.

En general, es recomendable utilizar las etiquetas nativas de HTML5 para marcar zonas de un sitio web como `nav`, `header` o `main`. Si las utilizamos, no se debe poner etiqueta nativa y `role` juntos por redundancia.

```html
<nav role="navigation">...</nav> <!-- Mal por redundancia -->
```

Para los roles de estructura, además, puede ser necesario incluir `aria-label` para indicar el título de la zona. Por ejemplo:

```html
<div role="navigation" aria-label="Menú principal">
  <ul>...</ul>
</div>
```

### aria-label, aria-labelledby y aria-describedby

Estos atributos nos permiten dar un nombre accesible, etiquetar o dar una descripción a los elementos HTML que lo necesiten.

`aria-label` sirve para dar nombre accesible a un elemento. Debe usarse solo en ocasiones que lo requieran; por defecto, el nombre de un elemento debe ser su contenido.

```html
<button type="button" aria-label="Cerrar">×</button>
```

`aria-labelledby` también sirve para dar un nombre a un elemento HTML, con la diferencia de que aquí referenciamos el `id` de otro elemento que actúa como etiqueta.

```html
<section aria-labelledby="titulo-informe">
  <h3 id="titulo-informe">Informe de accesibilidad</h3>
  ...
</section>
```

`aria-describedby` permite asociar una descripción larga a un elemento indicando el `id` del elemento que proporciona la descripción.

```html
<label for="usuario">Usuario</label>
<input id="usuario" aria-describedby="ayuda-usuario">
<p id="ayuda-usuario">Escribe tu dirección de correo sin @ua.es.</p>
```

### Estados y propiedades

Los elementos dinámicos cambian de estado, por ejemplo un menú desplegable puede estar plegado o desplegado. ARIA permite definir las propiedades y estados de los elementos.

```html
<ul role="tree" aria-label="Categorías">
  <li role="treeitem" aria-expanded="false" tabindex="0">
    Lenguajes
  </li>
</ul>
```

En este ejemplo se indica que el elemento del árbol “Lenguajes” está plegado. Cuando el usuario lo despliegue deberás cambiar dinámicamente su estado mediante JavaScript para que los productos de apoyo puedan transmitir el cambio al usuario.

```js
$id.attr('aria-expanded', 'true');
```

Por tanto, el rol es fijo, no se cambia; los estados y propiedades son dinámicos y sí deben actualizarse.

Esto es especialmente importante en componentes interactivos y en cambios parciales de la interfaz, por ejemplo al abrir un desplegable, mostrar un panel, actualizar resultados o insertar un mensaje de error o confirmación.

Veamos un ejemplo del típico desplegable:

```html
<button id="toggleButton" aria-expanded="false" aria-controls="panel">
  Mostrar panel
</button>
<div id="panel" hidden>
  <p>Este es el contenido del panel desplegable.</p>
</div>
<script>
const button = document.getElementById('toggleButton');
const panel = document.getElementById('panel');

button.addEventListener('click', () => {
  const isExpanded = button.getAttribute('aria-expanded') === 'true';
  button.setAttribute('aria-expanded', String(!isExpanded));
  panel.hidden = isExpanded;
});
</script>
```

### Live regions: aria-live

`aria-live` permite identificar una zona dinámica de nuestro contenido que se actualiza automáticamente. De esta manera los cambios se anunciarán al usuario de los productos de apoyo. En función de su valor (`off`, `polite`, `assertive`) indicaremos cuándo queremos que se anuncie la actualización.

`role="alert"` crea una región de aviso urgente con un comportamiento equivalente a `aria-live="assertive"`.

```html
<!-- Mensaje informativo: se anuncia cuando cambia -->
<p id="estado" aria-live="polite"></p>

<!-- Error urgente insertado dinámicamente -->
<div role="alert">No se ha podido guardar el formulario.</div>
```

En cualquier caso, esto debe aplicarse sobre componentes que además sean utilizables con teclado, tengan foco visible y una estructura correcta. ARIA complementa la interacción, pero no sustituye una base bien construida.

## Componentes interactivos

Como hemos visto en el apartado anterior, crear componentes interactivos accesibles tiene una gran complejidad. Utilizar una librería como Bootstrap aporta componentes con una buena base, pero hay que mantener su estructura y comprobar su uso en cada caso.

En el repositorio de GitHub del curso se puede consultar el fichero `componentes.html` con ejemplos de cuadros modales, acordeones, desplegables, pestañas, etc.

### Qué debe cumplir un componente interactivo

Aunque cada componente tenga sus particularidades, en general todos deberían cumplir una serie de requisitos comunes:

- poder utilizarse con teclado,
- mostrar un foco visible y mantenerlo en un lugar lógico,
- tener un nombre accesible claro,
- reflejar correctamente su estado, por ejemplo abierto o cerrado,
- y anunciar o hacer perceptibles los cambios importantes cuando el contenido se actualiza.

### Ejemplos habituales

Entre los componentes que suelen exigir más cuidado están los cuadros modales, los desplegables, los acordeones, las pestañas o cualquier panel que muestra y oculta contenido con JavaScript.

En todos estos casos no basta con que el componente se vea bien. También debe responder bien al teclado, indicar su estado y permitir que el usuario entienda qué acaba de cambiar en la interfaz.

- **Modal**: debe tener un título, mantener el foco dentro mientras está abierto y devolverlo al control que lo abrió al cerrar.
- **Desplegable o acordeón**: el botón debe indicar si está abierto y qué panel controla.
- **Pestañas**: deben identificar la pestaña seleccionada, su panel asociado y permitir la navegación por teclado.

Por ejemplo, el botón de un panel desplegable debe exponer su estado:

```html
<button type="button" aria-expanded="false" aria-controls="panel-ayuda">
  Mostrar ayuda
</button>
<div id="panel-ayuda" hidden>
  ...
</div>
```

### Errores frecuentes

- iconos sin nombre accesible,
- controles simulados que no reciben foco o no funcionan con teclado,
- paneles que se abren sin gestionar bien el foco,
- estados de carga, éxito o error que solo se perciben visualmente,
- y componentes que cambian el contenido, pero no dejan claro qué ha ocurrido.

Por eso conviene revisar estos ejemplos no solo desde el punto de vista visual, sino también desde la interacción real, la semántica y la percepción de cambios.
