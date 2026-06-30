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

Es imprescindible, al menos, incluir las secciones de cabecera y contenido principal con las etiquetas `header` y `main`. También se pueden incluir otras etiquetas como `footer` para el pie de página.

Además, si utilizamos menús de navegación, también deberíamos utilizar etiquetas `nav` para especificar que es un menú de navegación.

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

### Título de página

Otro requisito de accesibilidad es que todo documento web tenga definido un título con la etiqueta `<title>` dentro del `<head>`. Este título se aconseja que:

- sea descriptivo y conciso, para no tener que leer mucho contenido,
- sea único en las diferentes páginas del sitio, para saber en qué página estamos,
- coincida con el `h1` de la página, para evitar confusiones.

### Encabezados

Los encabezados son uno de los elementos más importantes para darle una estructura coherente a una página web.

Hablamos de las etiquetas `h1`, `h2`, `h3`, `h4`, `h5` y `h6`. Debe fomentarse su uso en lugar de otros elementos para marcar las diferentes secciones de una web.

Como comentábamos en la sección anterior, toda página debe tener un `h1` único dentro de la propia página web y a partir de ahí deberíamos incluir diferentes apartados usando los siguientes niveles, por ejemplo el segundo nivel `h2`.

No se deben saltar niveles, es decir, si tenemos un `h1`, no podemos poner como siguiente nivel un `h3`.

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
```

```html
<h2>Eventos</h2>
<ul>
  <li>Evento 1</li>
  <li>Evento 2</li>
  <li>Evento 3</li>
</ul>
<h2>La UA en Cifras</h2>
```

En definitiva, nunca debemos simular elementos y deberemos crearlos de la forma correcta para que todos los elementos tengan un significado más allá del contenido que contienen.

## Texto e idioma

Antes de comenzar a elaborar un contenido, debemos pensar en el tipo de personas a las que se dirige, las ideas más importantes a transmitir y su estructura. Para ello utilizaremos un **lenguaje sencillo**, prescindiendo de estructuras gramaticales complejas y usando frases cortas. El **mensaje** que queremos transmitir con nuestro texto debe ser **detectado de forma clara por los usuarios**.

### Formato de párrafo

Lo primero que tener en cuenta es que todo texto debe estar incluido en una etiqueta semántica, ya sean botones, enlaces, párrafos, encabezados, etc. Esto quiere decir que etiquetas de maquetación no deben tener texto directamente, ya que su función es maquetar contenido, no texto. Veamos un ejemplo:

```html
<div>¡Hola mundo!</div> <!-- Mal -->
<div><p>¡Hola mundo!</p></div> <!-- Bien -->
```

Tampoco debemos utilizar las etiquetas `<br>` para incluir saltos de línea, ya que debemos estructurar el texto con párrafos, listas y otros elementos semánticos. En el caso de querer incluir márgenes, debemos realizarlos con reglas CSS.

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

Tanto si trabajamos páginas web con varios idiomas o tan solo aparecen términos de otra lengua, deberemos **marcar siempre el idioma al que pertenece cada parte del texto**. Esto es de vital importancia debido a que los lectores de pantalla necesitan conocer el idioma del texto para realizar una correcta pronunciación.

Es el caso también de los buscadores como Google, que necesitan saber el idioma de la página para una mejor comprensión e indexación de los contenidos.

Para especificar los idiomas en HTML5 disponemos del atributo `lang`, que se puede aplicar a cualquier etiqueta. En la etiqueta debemos pasarle el código del idioma o el locale, por ejemplo `es-ES` para español de España.

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

Todos los elementos no textuales como imágenes, gráficos, fórmulas matemáticas, cuadros de texto, etc. deben disponer de un texto alternativo que describa el contenido o lo que queremos transmitir con ellos, ya que estos elementos no son accesibles mediante los productos de apoyo que utilizan personas con discapacidad.

Debemos introducir una alternativa textual a la imagen, como si estuviésemos describiendo la imagen a otra persona, incluso aquello que nos transmite esa imagen.

En el caso de que un elemento sea meramente decorativo, se deberá dejar la etiqueta de texto alternativo vacía.

### Texto alternativo

Para incluir la descripción de una imagen en una web debemos incluir el atributo `alt`, que es obligatorio. Veamos dos ejemplos, una imagen con descripción y otra decorativa:

```html
<img src="mano-ua.png" alt="Estatua de una mano que sostiene un lápiz apuntando al cielo es un símbolo de la libertad de expresión de la UA" />
<!-- Imagen decorativa -->
<img src="fondo-decorativo.png" alt="" />
```

No se deben superar los 150 caracteres en el texto alternativo. Si la descripción es muy larga, debemos valorar si incluirla dentro del contenido de la página.

Otra forma de incluir una descripción larga es mediante la etiqueta `figcaption` dentro de `figure` en HTML5. Veamos un ejemplo:

```html
<figure>
  <img src="mano-ua.png" alt="Estatua de una mano que sostiene un lápiz apuntando al cielo en el campus de la UA" />
  <figcaption>Descripción larga</figcaption>
</figure>
```

### Iconos

Los iconos, como otro elemento no textual, deben describirse para proporcionar indicaciones claras de qué propósito tienen, ya sea incluyéndolos con una etiqueta `<i>`, `<svg>` o `<img>`.

En este caso no hace falta describir, por ejemplo, “icono de un lápiz” si el icono tiene la acción de editar, por lo que su descripción será “Editar”.

En ningún caso podemos dejar solamente el atributo `title` y ninguna información más, ya que no todos los lectores de pantalla leen ese contenido. Además, obtendremos en los validadores de accesibilidad un error de elemento vacío.

Veamos un ejemplo de un icono de editar:

```html
<i class="icon icon-edit" aria-label="Editar" title="Editar"></i>
```

## Enlaces y botones

Los enlaces y botones deben transmitir claramente qué ocurrirá cuando pulsemos en ellos. Deben ser cortos y concisos, por ejemplo: “Procesar imagen”, “Descargar documento”, etc.

No podemos utilizar como texto de enlaces palabras como “aquí”, “pulsa aquí”, “enlace”, etc.

Si van a provocar un cambio de contexto deberíamos indicarlo en el `title`; por ejemplo, si es un enlace de YouTube, ponerle `title="Se abrirá en YouTube"`.

### Texto accesible

Los enlaces y botones no pueden estar vacíos, siempre deben tener un texto, ya sea visible o no. En este sentido, si el enlace o botón solo incluye una imagen o icono, deben tener texto alternativo o `aria-label`.

Por último, en aplicaciones que tienen un alto uso de peticiones Ajax, debemos considerar que los botones deben utilizarse en estos casos y utilizar siempre botones para recargar páginas o procesar información. Los enlaces, sin embargo, están pensados para provocar cambio de página.

## Navegación por teclado y foco

Una página web no debe depender exclusivamente del ratón. Debe poder recorrerse y utilizarse también con teclado, ya que muchas personas navegan de esta forma de manera habitual o la necesitan como única vía de acceso.

### Recorrido con teclado

Al pulsar la tecla `TAB`, el foco del teclado va avanzando por los enlaces, botones, campos de formulario y otros elementos interactivos. Ese recorrido debe seguir una lógica clara y no obligar al usuario a saltar de una zona a otra sin sentido.

En general, el orden del foco debería corresponderse con el orden natural del contenido en la página. Si el usuario ve una secuencia y el teclado sigue otra distinta, la navegación se vuelve confusa.

### Foco visible

No basta con que el foco exista, también debe verse con claridad. El usuario necesita saber en todo momento sobre qué elemento está situado para poder continuar la navegación o activar una acción.

Por este motivo, no se debe eliminar el contorno de foco que trae el navegador salvo que se sustituya por otro estilo claramente visible y con contraste suficiente.

### Controles interactivos reales

Los elementos que realizan acciones o cambian de pantalla deben construirse con los controles adecuados: enlaces para navegar y botones para ejecutar acciones. No deberíamos usar `div`, `span` u otros elementos de maquetación para simular su comportamiento.

Si un elemento parece interactivo, pero no recibe foco, no puede activarse con teclado o no muestra su estado de forma clara, parte de los usuarios quedará fuera.

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

Todo campo de formulario debe estar dentro de una etiqueta de formulario `<form>`, de la misma forma que un elemento de lista `<li>` debe estar dentro de una etiqueta de lista `<ul>`.

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
        <input class="form-check-input" type="radio" id="ptgas" />
        <label class="form-check-label" for="ptgas">PTGAS</label>
      </div>
    </div>
    <div class="mb-3">
      <div class="form-check">
        <input class="form-check-input" type="radio" id="pdi" />
        <label class="form-check-label" for="pdi">PDI</label>
      </div>
    </div>
    <div class="mb-3">
      <div class="form-check">
        <input class="form-check-input" type="radio" id="alu" />
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

En esta línea, es recomendable utilizar el atributo `required` en los campos de formulario, ya que indica la semántica a un lector de pantalla. Aunque usemos el atributo `novalidate`, hay que volver a validar siempre los datos de los campos del formulario, ya que el atributo `required` puede eliminarse desde el navegador y nos podría ocasionar un problema de seguridad.

Finalmente, la forma de mostrar los mensajes de error de la validación depende de la tipología de la petición:

- Si es una petición Ajax, se recomienda mostrar los errores entre el último campo del formulario y el botón de enviar.
- Si la petición se procesará en el servidor, los errores deben mostrarse al principio del formulario.

De esta forma, nos aseguramos de que siempre se muestran los errores en primer plano.

Además, los mensajes deben ser claros y útiles. No basta con indicar que hay un error: hay que explicar qué campo ha fallado y, si es posible, cómo corregirlo.

### Ejemplo de validación Ajax

Veamos un ejemplo de validación de un formulario mediante Ajax que efectúa los cambios en el cliente:

```html
<form novalidate id="mi-form">
  <div class="mb-3">
    <label for="nombre">Nombre</label>
    <input type="text" id="nombre" name="nombre" class="form-control" />
  </div>
  <div class="mb-3">
    <label for="apellidos">Apellidos</label>
    <input type="text" id="apellidos" name="apellidos" class="form-control" />
  </div>
  <div class="mb-3">
    <label for="email">E-mail (opcional)</label>
    <input type="email" id="email" name="email" class="form-control" />
  </div>
  <!-- Con role="alert" un lector de pantalla lee el contenido automáticamente cuando se inserte -->
  <div id="mensajealerta" role="alert"></div>
  <div class="mb-3">
    <button type="submit" class="btn btn-primary">Enviar</button>
  </div>
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

  const errores = [];
  if (!nombre) errores.push("El campo 'Nombre' es obligatorio.");
  if (!apellidos) errores.push("El campo 'Apellidos' es obligatorio.");

  if (errores.length > 0) {
    mensajeAlerta.classList.add("alert", "alert-danger");
    let texto = "<p>Error al enviar el formulario, se produjeron los siguientes errores:</p><ul>";
    errores.forEach((error) => {
      texto += "<li>" + error + "</li>";
    });
    texto += "</ul>";
    mensajeAlerta.innerHTML = texto;
  } else {
    alert("¡Enviado! Hacer algo...");
  }
});
</script>
```

## Tablas

Las tablas son para estructurar datos, no para maquetar contenido. Para eso están los `div`.

No hay que dividir ni combinar celdas, por lo que las tablas deben ser uniformes.

Deben tener un título que las titule con la etiqueta `caption`. Por defecto, la etiqueta `caption` se muestra visualmente debajo de la tabla, pero es mejor tocar el CSS para que el título salga encima de la tabla.

Debe diferenciarse claramente cuáles son los encabezados de fila o columna, a poder ser con contraste más alto.

### Ejemplo de tabla

```html
<table class="table">
  <caption>Notas de la asignatura de accesibilidad</caption>
  <thead>
    <!-- Cabecera en azul con texto blanco para resaltar -->
    <tr style="background: blue; color: white;">
      <th>Nombre</th>
      <th>Nota</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Alberto</th>
      <th>8</th>
    </tr>
    <tr>
      <th>Alba</th>
      <th>9</th>
    </tr>
  </tbody>
</table>
```

### Tablas adaptables

Si la tabla es muy ancha, se recomienda hacerla adaptable con la clase de Bootstrap `table-responsive` para poder desplazarnos con scroll horizontal en dispositivos móviles:

```html
<div class="table-responsive">
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

Es conveniente recordar que en HTML solo pueden recibir el foco del teclado los enlaces, botones y elementos de formulario.

Por el contrario, elementos HTML como listas, párrafos, capas `div` o `span` nunca reciben el foco del teclado al tratarse de elementos con un propósito diferente: marcar y maquetar el contenido.

Por este motivo, no se deben incluir eventos JavaScript tales como `onclick` u `onkeypress` en elementos de marca y maquetación, puesto que estaríamos dejando fuera a los usuarios que acceden sin ratón.

Veamos un ejemplo:

```html
<div onclick="alert('¡Saludo!');">Púlsame</div>
```

Lo que estamos haciendo es crear una capa `div` que simula el comportamiento de un enlace o un botón, que no es su propósito y además jamás se podrá acceder por teclado ya que este elemento nunca recibirá el foco.

En ocasiones se hace necesario utilizar elementos de marca y maquetación como `div` o `li` para realizar acciones dinámicas. En estos casos podemos utilizar el atributo `tabindex` para informar a los navegadores web de que ese elemento puede recibir el foco.

```html
<div onclick="alert('¡Saludo!');" tabindex="0">Púlsame</div>
```

El atributo `tabindex` puede utilizarse para varios cometidos dependiendo del valor asignado:

- `tabindex="0"` permite que un elemento que no puede recibir el foco por defecto pueda recibirlo siguiendo el orden natural del HTML.
- `tabindex="-1"` permite que el elemento pueda coger el foco mediante JavaScript con la función `focus()`, aunque no podamos llegar a él con tabulación normal.
- `tabindex="x"` donde `x` es un número entero define un orden de tabulación explícito. No se recomienda su uso porque puede crear confusión.

### Roles

Incluir información sobre el rol o función de un elemento de nuestra página mediante ARIA es tan sencillo como añadir a la etiqueta del elemento `role="[nombre_del_rol]"`.

Por ejemplo:

```html
<div role="progressbar">
<ul role="tree">
<li role="treeitem">
<div role="application">
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
- `role="form"` para las zonas donde hay formularios.
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
<a href="#" aria-label="Cerrar">x</a>
```

`aria-labelledby` también sirve para dar un nombre a un elemento HTML, con la diferencia de que aquí referenciamos el `id` de otro elemento que actúa como etiqueta.

`aria-describedby` permite asociar una descripción larga a un elemento indicando el `id` del elemento que proporciona la descripción.

### Estados y propiedades

Los elementos dinámicos cambian de estado, por ejemplo un menú desplegable puede estar plegado o desplegado. ARIA permite definir las propiedades y estados de los elementos.

```html
<li role="treeitem" aria-expanded="false" tabindex="0" onclick="a()" onkeypress="a()">
  Lenguajes
</li>
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
<div id="panel">
  <p>Este es el contenido del panel desplegable.</p>
</div>
<script>
const button = document.getElementById('toggleButton');
const panel = document.getElementById('panel');

button.addEventListener('click', () => {
  const isExpanded = button.getAttribute('aria-expanded') === 'true';
  button.setAttribute('aria-expanded', String(!isExpanded));
  panel.setAttribute('aria-hidden', String(isExpanded));
});
</script>
```

### Live regions: aria-live

`aria-live` permite identificar una zona dinámica de nuestro contenido que se actualiza automáticamente. De esta manera los cambios se anunciarán al usuario de los productos de apoyo. En función de su valor (`off`, `polite`, `assertive`) indicaremos cuándo queremos que se anuncie la actualización.

También se puede utilizar la versión moderna e integrada de `role="alert"`, que es equivalente a `aria-live="assertive"`.

En cualquier caso, esto debe aplicarse sobre componentes que además sean utilizables con teclado, tengan foco visible y una estructura correcta. ARIA complementa la interacción, pero no sustituye una base bien construida.

## Componentes interactivos

Como hemos visto en el apartado anterior, crear componentes interactivos accesibles tiene una gran complejidad. En nuestro caso, tenemos la suerte de utilizar la librería Bootstrap, que proporciona unos componentes muy accesibles desde la base.

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

### Errores frecuentes

- iconos sin nombre accesible,
- botones o enlaces que visualmente parecen correctos, pero no reciben foco,
- paneles que se abren sin gestionar bien el foco,
- estados de carga, éxito o error que solo se perciben visualmente,
- y componentes que cambian el contenido, pero no dejan claro qué ha ocurrido.

Por eso conviene revisar estos ejemplos no solo desde el punto de vista visual, sino también desde la interacción real, la semántica y la percepción de cambios.
