<script setup lang="ts">
const html = `<p>WAI-ARIA (Web Accessibility Initiative - Accesible Rich Internet Applications) es una especificación del W3C, recomendación desde el 20 de marzo de 2014. La versión actual es la 1.1.</p>
<p>WAI-ARIA (ARIA y los controles desarrollados con Ajax, HTML, Javascript y sus tecnologías relacionadas.</p>
<p>WAI-ARIA (ARIA en adelante) está pensado para hacer más accesible el contenido dinámico –principalmente JavaScript y Ajax- transmitiendo a las APIs de accesibilidad de los navegadores web información sobre el comportamiento de la interfaz y su estructura, para que los productos de apoyo puedan acceder a dicha información.</p>
<p>Ejemplos de componentes que necesitan atributos WAI-ARIA son los cuadros modales, carruseles, áreas interacticas en las que se recarga el contenido dinámicamente, menús desplegables, etc.</p>
<p>En los siguientes apartados se describen los principales atributos y propiedades de WAI-ARIA.</p>
<p>&nbsp;</p>
<p>Tabindex</p>
<p>Es conveniente recordar que en HTML sólo pueden recibir el foco del teclado los enlaces, botones y elementos de formulario.</p>
<p>Por el contrario los elementos HTML tales como listas, párrafos, capas div o span, etc nunca recibirán el foco del teclado al tratarse de elementos con un propósito diferente: marcar y maquetar el contenido.</p>
<p>Por este motivo, no se debe incluir nunca eventos javascript tales como onclick u onkeypress en elementos de mara y maquetación, puesto que estaríamos dejando fuera a los usuarios que acceden sin ratón, como pueden ser usuarios de lectores de pantalla o el robot de búsqueda de Google</p>
<p>Veamos un ejemplo: si incluímos un evento onclick en un elemento div:</p>
<pre class="course-code"><code>&lt;div onclick="alert('¡Saludo!');"&gt;Púlsame&lt;/div&gt;</code></pre>
<p>Lo que estamos haciendo es crear una capa div que simula el comportamiento de un enlace o un botón, que no es su propósito y además, jamás se podrá acceder por teclado ya que este elemento nunca recibirá el foco.</p>
<p>Por esta razón, no deberíamos agregar eventos javascript a elementos que no sean enlaces, botones u elementos de formulario.</p>
<p>Dicho lo anterior, en ocasiones se hace necesario utilizar elementos de marca y maquetación como div o li para realizar acciones dinámicas, en estos cosas podemos utilizar el atributo de WAI-ARIA&nbsp;<b>tabindex&nbsp;</b>&nbsp;para informar a los navegadores web que ese elemento puede recibir el foco y por tanto, ejecutar eventos como onclick.</p>
<p>Siguiendo el ejemplo anterior del div con onclick, le añadiríamos el atributo tabindex con el valor 0 para indicar que el elemento puede recibir el foco:</p>
<pre class="course-code"><code>&lt;div onclick="alert('¡Saludo!');" tabindex="0"&gt;Púlsame&lt;/div&gt;</code></pre>
<p>De esta manera, si en un navegador web, vamos pulsando la tecla TAB de nusetro teclado, el foco se irá colocando sobre los enlaces, botones, elementos de formulario y los elementos marcados con tabindex="0".</p>
<p>El atributo tabindex puede utilizarse para varios cometidos dependiendo del valor que le asignemos:</p>
<ul>
<li>tabindex="0": como hemos visto en el ejemplo permite que un elemento de marca o maquetación como div, p, li, ..., que no pueden recibir el foco por defecto, puedan recibirlo. De esta forma se podrá acceder con el tabulador hasta él y el orden en el que se incorpora en la página es el lugar que ocupa en el código HTML.</li>
<li>tabindex="-1": se diferencia del caso anterior en que no podremos tabular hasta el elemento. Lo que permite es que pueda coger el foco mediante JavasScript con la función focus(), para hacer scroll a una parte de la página.</li>
<ul>
<li>Un ejemplo de uso real sería para un cuadro de diálogo DIV (&lt;div id="cuadro-modal" tabindex="-1"&gt;...&lt;/div&gt;): al pulsar el botón de abrir diálogo, el foco deberá moverse al elemento que hemos marcado con tabindex="-1" y al cerrarla deberá volver al enlace o botón que la abrió.</li>
</ul>
<li>tabindex=”x” donde x es un número entero. Define un orden de tabulación explícito: 1,2, 3, etc. Esto quiere decir que si ponemos un elemento &lt;div tabindex="1"&gt;...&lt;/div&gt;, aunque el código en la página HTML esté al final, cuando pulsemos tabulador será el primer elemento que recibe el foco del teclado.</li>
<ul>
<li>No se recomienda su uso pues puede crear confusión.</li>
</ul>
<p>Roles</p>
<p>Incluir información sobre el rol o función de un elemento de nuestra página mediante ARIA es tan sencillo como añadir a la etiqueta del elemento role=”[nombre_del_rol]”.</p>
<p>Por ejemplo:</p>
<pre class="course-code"><code>&lt;div role=”progressbar”&gt;
&lt;ul role=”tree”&gt;,
&lt;li role=”treeitem”&gt;
&lt;ul role=”nav”&gt;
&lt;div role=”application”&gt;</code></pre>
<p>No se debe cambiar dinámicamente el rol de un elemento, este es fijo. Si se quiere cambiar habría que eliminar del DOM el elemento y crear uno nuevo con el nuevo rol.</p>
<p>Puedes consultar todos los roles en&nbsp;Roles of WAI-ARIA 1.1 (en inglés)&nbsp;.</p>
<p>Existen dos tipos de roles, aquellos que definen elementos de la interfaz (árboles, alertas, sliders, etc.) y los que definen la estructura de la página (cabecera, navegación, pie).</p>
<p>Landmark roles</p>
<p>Dentro de los que definen la estructura de la página se distinguen los landmark roles, que se usan para identificar áreas separadas de la pagina y transmitir la naturaleza de las mismas.</p>
<p>Se trata de añadir características útiles de navegación global, consistentes en cualquier documento (X)HTML, que transmiten información de la estructura de la página e información semántica sobre estas zonas.</p>
<p>Los roles de estructura y su función son:</p>
<ul>
<li>role=”banner”. Sólo debe existir uno en la página y es para marcar generalmente la cabecera de la página web donde se encuentra el título, logo, etc.</li>
<li>role=”navigation”. Se de utilizar para marcar los elementos que que forman un menú, por ejemplo una lista ul.</li>
<li>role=”main”.Marca donde está el contenido principal de la página.</li>
<li>role=”complementary”. Contenidos que no son imprescindibles el contenido, por ejemplo un slider, barra lateral con publicidad, etc.</li>
<li>role=”contentinfo”. Para marcar una zona en la que hay información sobre la página y que se repite en todas, por ejemplo la informaicón legal, enlaces de navegación de un sitio y demás información que generalmente se ubica en la parte inferior de la página web..</li>
<li>role=”search.Para marcar las zonas donde hay un buscador en la página.</li>
<li>role=”form”. Para marcar las zonas donde hay formularios.</li>
<li>role=”application”. Se marca esta zona si hay una aplicación web interactiva, como juegos y similar que cambian las reglas del uso normal del teclado.</li>
</ul>
<p>En general, es recomendable utilizar las etiquetas nativas de HTML5 para marcar zonas de un sitio web como puede ser &lt;nav&gt;, &lt;header&gt;...</p>
<p>Pero si las utilizamos, no se debe poner la etiqeuta y role juntos por redundancia, por ejemplo:</p>
<pre class="course-code"><code>&lt;nav role="navigation"&gt;...&lt;/nav&gt; MAL</code></pre>
<p>Por último, y no menos importante, para los roles de estructura, es necesario incluir el atributo aria-label (que veremos a continuación) para indicar el título de la zona. Por ejemplo:</p>
<pre class="course-code"><code>&lt;div role="navigation" arial-label="Menú principal"&gt;&lt;ul&gt;...&lt;/ul&gt;&lt;/div&gt;</code></pre>
<p>&nbsp;</p>
<p>Aria-label, aria-labelledly y aria-describedby</p>
<p>Estos atributos nos permiten dar un nombre accesible, etiquetar o dar una descripción a los elementos HTML que lo necesiten. En la referencia puedes encontrar&nbsp;todos los atributos y su propósito (en inglés)&nbsp;.</p>
<p>Aria-label</p>
<p>Sirve para dar nombre accesible a un elemento. Debe usarse sólo en ocasiones que lo requieran, por defecto el nombre de un elemento debe ser su contenido.</p>
<p>Ejemplo, si tenemos un enlace que cierra un cuadro modal y lo escribimos con una X, el nombre accesible debería ser cerrar.</p>
<pre class="course-code"><code>&lt;a href="#" aria-label="Cerrar"&gt;x&lt;/a&gt;</code></pre>
<p>Aria-labelledby</p>
<p>Como aria-label, sirve para dar un nombre a un elemento HTML, la diferencia es que con aria-label indicas directamente el texto y con aria-labelledby el id/ids del elemento/s de la página que actúa/n como contenido.</p>
<p>Ejemplo:</p>
<pre class="course-code"><code>&lt;p id="titulo-informe"&gt;Descargar el informe de accesibilidad en:&nbsp;
&lt;a aria-labelledby="titulo-informe pdf" href="pdf.pdf" id="pdf"&gt;PDF&lt;/a&gt; |&nbsp;
&lt;a aria-labelledby="titulo-informe docx" href="word.docx" id="docx"&gt;Word&lt;/a&gt; |&nbsp;
&lt;a aria-labelledby="report-title pptx" href="ppt.pptx" id="pptx"&gt;Powerpoint&lt;/a&gt;&lt;/p&gt;</code></pre>
<p>Aria-describedby</p>
<p>Por otro lado, aria-describedby permite asociar una descripción larga a un elemento indicando el id del elemento que proporciona la descripción.</p>
<p>&nbsp;</p>
<p>Estados y propiedades</p>
<p>Los elementos dinámicos cambian de estado, por ejemplo un menú desplegable puede estar plegado o desplegado. ARIA permite definir las propiedades y estados de los elementos.</p>
<pre class="course-code"><code>&lt;li role="treeitem" aria-expanded="false" tabindex="0" onclick="a()" onkeypress="a()"&gt;Lenguajes&lt;/li&gt;</code></pre>
<p>En este ejemplo se indica que el elemento del árbol "Lenguajes" está plegado. Cuando el usuario lo despliegue deberás cambiar dinámicamente su estado mediante javascript para que los productos de apoyo puedan transmitir el cambio al usuario.</p>
<pre class="course-code"><code>$id.attr('aria-expanded', 'true');</code></pre>
<p>Por tanto, el rol es fijo, no se cambia, los estados y propiedades son dinámicos.</p>
<p>Lo más importante, y que no debes olvidar, es que no solo tienes que indicar el estado y propiedades iniciales, sino que debes modificarlos dinámicamente por javacript cuando estos cambien, de modo que el usuario de productos de apoyo conozca siempre su estado actual. Los roles no se actualizan, los estados y propiedades sí.</p>
<p>Veamos un ejemplo del típico “dropdown” o elemento desplegable, deberíamos hacerlo así:</p>
<pre class="course-code"><code>&lt;button id="toggleButton"
aria-expanded="false" aria-controls="panel"&gt;</code></pre>
<p>Mostrar panel</p>
<pre class="course-code"><code>&lt;/button&gt;
&lt;div id="panel"&gt;
&lt;p&gt;Este es el contenido del panel desplegable.&lt;/p&gt;
&lt;/div&gt;
&lt;script&gt;
const button = document.getElementById('toggleButton');
const panel = document.getElementById('panel');</code></pre>
<p>button.addEventListener('click', () =&gt; {</p>
<pre class="course-code"><code>const isExpanded = button.getAttribute('aria-expanded') === 'true';</code></pre>
<p>button.setAttribute('aria-expanded', String(!isExpanded));</p>
<pre class="course-code"><code>panel.setAttribute('aria-hidden', String(isExpanded));
});
&lt;/script&gt;</code></pre>
<p>&nbsp;</p>
<p>Live regions: aria-live</p>
<pre class="course-code"><code>aria-live permite identificar una zona dinámica de nuestro contenido que se actualiza automáticamente, de esta manera los cambios se anunciarán al usuario de los productos de apoyo. En función de su valor (off, polite, assertive) indicaremos cuándo queremos que se anuncie la actualización.</code></pre>
<p>Se combina con aria-atomic para indicar si queremos que se anuncie toda la región o solo las partes que cambian, y con aria-relevant para indicar el tipo de actualización que queremos que se anuncie.</p>
<p>También se puede utilizar la versión moderna e integrada de role=”alert”, que es equivalente a aria-live=”assertive”.</p>`
</script>

<template>
  <div v-html="html" />
</template>
