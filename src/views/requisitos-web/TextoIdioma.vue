<template>
  <div>
    <p>
      Antes de comenzar a elaborar un contenido, debemos pensar en el tipo de personas a las que
      se dirige, las ideas más importantes a transmitir y su estructura. Para ello utilizaremos un
      <strong>lenguaje sencillo</strong>, prescindiendo de estructuras gramaticales complejas y
      usando frases cortas. El <strong>mensaje</strong> que queremos transmitir con nuestro texto
      debe ser <strong>detectado de forma clara por los usuarios</strong>.
    </p>
    <p>
      Escrito el texto, queda decidir cómo se presenta y cómo se marca. Este apartado recorre esas
      decisiones en el mismo orden en que se toman al construir una página:
    </p>
    <ol>
      <li><strong>qué tipografía</strong> usamos y cómo la servimos,</li>
      <li><strong>de qué tamaño</strong>, y qué ocurre cuando alguien amplía el contenido,</li>
      <li><strong>cómo se dispone</strong> en párrafos: alineación, espaciado y longitud de línea,</li>
      <li><strong>cómo se escribe</strong>: mayúsculas, énfasis y significado,</li>
      <li><strong>dónde vive</strong> ese texto, porque no todo lo que se lee en pantalla está en el documento,</li>
      <li>y en <strong>qué idioma</strong> está cada parte.</li>
    </ol>
    <p>
      Las cuatro primeras se controlan casi siempre desde CSS y las dos últimas desde el HTML.
      Todas pueden dejar fuera a un grupo de personas si se resuelven mal.
    </p>

    <h2>Elección de la tipografía</h2>
    <p>
      La tipografía utilizada es un elemento fundamental de nuestro documento. Es aconsejable
      utilizar fuentes de tipo Sans Serif, como por ejemplo <strong>Arial o Verdana</strong>, ya
      que favorecen la legibilidad del texto y por tanto su comprensión por parte de varios
      colectivos de personas con discapacidad.
    </p>
    <p>
      El término <strong>sans serif</strong> procede del francés y significa “sin remates”. Los
      remates son los pequeños trazos decorativos con los que terminan los palos de las letras en
      fuentes como Times New Roman; al eliminarlos, las formas quedan más limpias y se distinguen
      mejor en pantalla y a tamaños pequeños.
    </p>
    <p>
      Debemos utilizar tipos de fuente que estén presentes en la mayoría de sistemas operativos,
      para garantizar así la interoperabilidad de nuestros contenidos. Con Arial o Verdana no hay
      que descargar nada: basta con declararlas, siempre seguidas de alternativas por si el sistema
      no las tuviera.
    </p>
    <pre class="course-code"><code>body {
  font-family: Arial, Verdana, sans-serif;
}</code></pre>
    <p>
      La lista se lee de izquierda a derecha: el navegador usa Arial si la encuentra, si no Verdana,
      y si tampoco, la fuente sans serif que tenga configurada el sistema. Esa última palabra,
      <code>sans-serif</code>, no debe faltar nunca: es la red de seguridad que evita acabar en una
      fuente con remates.
    </p>
    <p>Al elegir una fuente conviene además fijarse en tres cosas:</p>
    <ul>
      <li>
        que <strong>no confunda caracteres parecidos</strong>, como la I mayúscula, la l minúscula
        y el número 1, o la O y el 0;
      </li>
      <li>
        que <strong>no sea demasiado estrecha ni demasiado ligera</strong>, porque los pesos finos
        pierden contraste contra el fondo;
      </li>
      <li>
        que <strong>tenga suficientes pesos</strong> para poder marcar jerarquía sin recurrir a
        efectos raros.
      </li>
    </ul>

    <h3>Fuentes hiperlegibles</h3>
    <p>
      Existen tipografías diseñadas específicamente para maximizar la legibilidad, pensadas para
      personas con baja visión o con dislexia. La Universidad de Alicante utiliza una de ellas en su
      web, <a href="https://www.brailleinstitute.org/freefont/" rel="noreferrer">Atkinson Hyperlegible
      Next</a>, creada por el Braille Institute.
    </p>
    <p>
      Su aportación consiste justamente en atacar el primero de los tres puntos anteriores: dibuja
      de forma deliberadamente distinta los caracteres que suelen confundirse. La I mayúscula lleva
      remates que la separan de la l minúscula y del 1; el 0 se distingue de la O; la b, la d, la p
      y la q no son la misma forma girada. Sobre un texto corrido apenas se nota, pero marca la
      diferencia en un DNI, una matrícula o una contraseña.
    </p>
    <p>
      El inconveniente es que <strong>no está instalada en los sistemas operativos</strong>, así que
      hay que servirla nosotros. Se puede hacer de dos formas. La primera, alojando el fichero en el
      propio sitio y declarándolo con <code>@font-face</code>, que es como funciona esta misma web
      del curso:
    </p>
    <pre class="course-code"><code>@font-face {
  font-family: 'Atkinson Hyperlegible Next';
  src: url('/fonts/atkinson-hyperlegible-next.woff2') format('woff2');
  font-weight: 100 900;   /* Fuente variable: todos los pesos en un fichero */
  font-display: swap;     /* Muestra ya el texto con la fuente alternativa */
}

body {
  font-family: 'Atkinson Hyperlegible Next', Arial, Verdana, sans-serif;
}</code></pre>
    <p>
      De esas líneas, la que no conviene olvidar es <code>font-display: swap</code>. Sin ella, el
      comportamiento por defecto de la mayoría de navegadores es <strong>dejar el texto invisible
      </strong> mientras se descarga la fuente, de modo que si la descarga va lenta o falla, el
      contenido no se lee.
    </p>
    <p>La segunda forma es cargarla desde un proveedor externo con un <code>&lt;link&gt;</code>:</p>
    <pre class="course-code"><code>&lt;link
  href="https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible&amp;display=swap"
  rel="stylesheet"&gt;</code></pre>
    <p>
      Es más rápido de poner en marcha, pero <strong>alojarla en el propio sitio suele ser
      preferible</strong>: no dependemos de un tercero, no enviamos datos de navegación de nuestros
      usuarios a otro servidor y la fuente sigue funcionando en una intranet sin salida a Internet.
    </p>

    <h3>Dónde se declara la fuente</h3>
    <p>
      Una duda habitual es en qué selector conviene escribir estas reglas. La respuesta cambia
      según hablemos de la <strong>familia</strong> o del <strong>tamaño</strong>, y equivocarse en
      el segundo caso tiene consecuencias de accesibilidad.
    </p>
    <p>
      <strong>El selector universal <code>*</code> no debe usarse para esto.</strong> Aplica la
      regla a todos los elementos uno por uno, en lugar de dejar que la herencia haga su trabajo,
      y pisa elementos que normalmente queremos distintos, como los bloques de código:
    </p>
    <pre class="course-code"><code>&lt;!-- Evitar: rompe la herencia y aplasta también pre, code o kbd --&gt;
* {
  font-family: Arial, sans-serif;
}</code></pre>
    <p>
      <strong>En <code>html</code> nunca debe fijarse un tamaño absoluto.</strong> El elemento
      raíz es el que toma el tamaño configurado por la persona usuaria en las preferencias de su
      navegador. Si escribimos ahí un valor en píxeles, o el famoso truco de
      <code>font-size: 62.5%</code> para «que 1rem sean 10px», estamos anulando esa preferencia:
      quien haya subido el tamaño de letra porque lo necesita para leer seguirá viendo el texto
      igual de pequeño.
    </p>
    <pre class="course-code"><code>&lt;!-- Evitar: ambas anulan la configuración del navegador --&gt;
html { font-size: 16px; }
html { font-size: 62.5%; }

/* Correcto: respetar el tamaño elegido por la persona usuaria */
html {
  font-size: 100%;
}</code></pre>
    <p>
      <strong>La declaración natural va en <code>body</code></strong>, y desde ahí se hereda al
      resto del documento. Es el sitio donde se define la familia tipográfica y el tamaño base del
      contenido:
    </p>
    <pre class="course-code"><code>body {
  font-family: 'Atkinson Hyperlegible Next', Arial, system-ui, sans-serif;
  font-size: 1.1667rem;
  line-height: 1.5;
}</code></pre>
    <p>
      Queda un detalle que se olvida casi siempre: <strong>los controles de formulario no heredan
      la tipografía</strong>. Los <code>input</code>, <code>select</code>, <code>textarea</code> y
      <code>button</code> usan por defecto la fuente del sistema, y a un tamaño menor. El resultado
      es un formulario con la letra más pequeña que el texto que lo rodea, justo donde más falta
      hace leer bien. Se corrige con una única regla:
    </p>
    <pre class="course-code"><code>input,
select,
textarea,
button {
  font: inherit;
}</code></pre>
    <p>
      En un proyecto con <strong>Bootstrap 5</strong> esto ya viene resuelto, y lo habitual es no
      escribir estas reglas a mano sino redefinir sus variables
      (<code>--bs-body-font-family</code>, <code>--bs-body-font-size</code>), de forma que todos
      sus componentes queden coherentes con la tipografía elegida.
    </p>

    <h2>Tamaño del texto</h2>
    <p>
      El <strong>tamaño de la fuente</strong> debe ser suficiente y permitir que el usuario amplíe
      el contenido sin perder información ni funcionalidad.
    </p>

    <h3>Unidades relativas</h3>
    <p>
      En el desarrollo web conviene utilizar <strong>unidades relativas</strong>, como
      <code>rem</code>, <code>em</code> o porcentajes, para que el contenido pueda escalar y respete
      la configuración del usuario.
    </p>
    <p>
      En la mayoría de navegadores actuales el tamaño por defecto es de 16px. Si el tamaño de la
      raíz no se ha modificado, equivale a <code>1rem</code>; <code>1em</code> depende en cambio del
      tamaño del elemento padre.
    </p>
    <p>
      La diferencia entre ambas importa en la práctica. Como <code>em</code> se acumula, un
      elemento anidado dentro de otro que también use <code>em</code> multiplica los dos valores y
      el texto acaba en un tamaño imprevisible. Por eso <strong>la recomendación general es usar
      <code>rem</code></strong> para los tamaños de texto y dejar <code>em</code> para medidas que
      sí deben escalar respecto a su propio elemento, como el espaciado interno de un botón.
    </p>
    <p>
      Sobre los píxeles hay una confusión frecuente que conviene aclarar: los navegadores modernos
      <strong>sí amplían el texto en píxeles</strong> cuando se hace zoom con
      <kbd>Ctrl</kbd>+<kbd>+</kbd>. Lo que <strong>no</strong> respetan los píxeles es la
      preferencia de <em>tamaño de letra predeterminado</em> que la persona haya configurado en su
      navegador. Ese ajuste es el que usa mucha gente mayor o con baja visión, precisamente porque
      se aplica solo y en todos los sitios, sin tener que hacer zoom página a página. Con
      <code>rem</code> se respeta; con <code>px</code>, se ignora.
    </p>

    <h3>Tamaño mínimo y tamaño recomendado</h3>
    <p>
      Las referencias de tamaño de texto se expresan tradicionalmente en <strong>puntos</strong>
      (<code>pt</code>), que es una unidad absoluta heredada de la imprenta y la que usan Word o
      PowerPoint. La web trabaja en píxeles CSS, así que hay que saber convertir. La equivalencia
      es fija: <strong>1 punto = 1,333 píxeles</strong>, porque un punto es 1/72 de pulgada y un
      píxel CSS es 1/96.
    </p>
    <div class="table-responsive">
      <table class="table table-striped">
        <caption>Equivalencia entre puntos, píxeles y rem, partiendo de una raíz de 16px</caption>
        <thead>
          <tr>
            <th scope="col">Puntos</th>
            <th scope="col">Píxeles</th>
            <th scope="col">rem</th>
            <th scope="col">Uso</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>12 pt</td>
            <td>16 px</td>
            <td><code>1rem</code></td>
            <td>Tamaño mínimo para el texto de cuerpo</td>
          </tr>
          <tr>
            <td>14 pt</td>
            <td>18,67 px</td>
            <td><code>1.1667rem</code></td>
            <td>Tamaño recomendado para el texto de cuerpo</td>
          </tr>
          <tr>
            <td>18 pt</td>
            <td>24 px</td>
            <td><code>1.5rem</code></td>
            <td>Umbral de «texto grande» a efectos de contraste</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p>
      El <strong>mínimo</strong> son <strong>12 puntos</strong> (16px, <code>1rem</code>). Por
      debajo de ese tamaño el texto de cuerpo resulta difícil de leer para buena parte de la
      población: no solo para personas con baja visión, también para cualquiera que lea en un móvil
      con luz directa o en una pantalla a cierta distancia. Es un suelo, no un objetivo.
    </p>
    <p>
      Sin embargo, es <strong>altamente recomendable no quedarse en ese mínimo</strong> y partir de
      <strong>14 puntos</strong> (18,67px, <code>1.1667rem</code>) como tamaño base del texto de
      cuerpo. La razón es que el mínimo deja sin margen a todo lo demás: en cuanto aparece un texto
      secundario, un pie de foto o la letra pequeña de un formulario, esos elementos caen por
      debajo del suelo. Partiendo de 14 puntos, el texto secundario todavía puede bajar a 12 y
      seguir cumpliendo.
    </p>
    <p>
      Partiendo de esos 14 puntos como base del contenido, el resto de la escala se define también
      en <code>rem</code>, de modo que todo quede referido al mismo origen:
    </p>
    <pre class="course-code"><code>body { font-size: 1.1667rem; } /* 14 pt = 18,67px, base del contenido */

h1 { font-size: 2.5rem; }      /* 40px */
h2 { font-size: 2rem; }        /* 32px */
h3 { font-size: 1.5rem; }      /* 24px */</code></pre>
    <p>
      Aquí se ve por qué insistimos en las unidades relativas. Los píxeles del comentario son los
      que resultan <em>con la raíz por defecto</em>. Si alguien tiene configurado su navegador con
      un tamaño de letra de 20 píxeles en lugar de 16, los cuatro valores crecen a la vez y en la
      misma proporción: el <code>h1</code> pasa a 50px y el cuerpo a 23px, y la jerarquía visual se
      mantiene intacta. Escritos en píxeles fijos, no se movería ninguno.
    </p>
    <p>
      El mínimo de 12 puntos se aplica <strong>a todo el texto</strong>, no solo al cuerpo: los
      pies de tabla, las etiquetas de los campos, los mensajes de error, las migas de pan y el pie
      de página son los sitios donde con más frecuencia se cuela un tamaño demasiado pequeño.
    </p>
    <p>
      Ninguno de estos valores debe fijarse con un tamaño absoluto ni bloquearse: el criterio
      <a href="https://www.w3.org/WAI/WCAG22/Understanding/resize-text.html" rel="noreferrer">1.4.4 Cambio de tamaño del texto</a>
      exige que el texto pueda ampliarse hasta el 200 % sin perder contenido ni funcionalidad.
    </p>

    <h3>Ampliación, zoom y reflujo</h3>
    <p>
      El diseño debe adaptarse a contenido, dispositivo y preferencias, no solo a puntos de corte
      por tamaño de pantalla: debe seguir funcionando con zoom, texto ampliado, distintas
      orientaciones, entrada táctil y teclado.
    </p>
    <p>
      Esto no es solo una buena práctica de maquetación. El criterio
      <a href="https://www.w3.org/WAI/WCAG22/Understanding/reflow.html" rel="noreferrer">1.4.10 Reflujo</a>
      exige que el contenido pueda leerse <strong>sin desplazamiento horizontal</strong> con un
      ancho equivalente a 320px, que es justo lo que queda al ampliar al 400 % una pantalla de
      escritorio. Es decir: el mismo trabajo que hacemos para que la web funcione en un móvil
      resuelve la ampliación en un ordenador. Buenas prácticas:
    </p>
    <ul>
      <li>anchuras máximas y evitar el scroll horizontal cuando se amplía el contenido,</li>
      <li>imágenes responsivas,</li>
      <li>objetivos táctiles de tamaño suficiente,</li>
      <li>evitar alturas fijas que corten el texto.</li>
    </ul>
    <p>
      La última es la que más problemas causa al ampliar el texto. Si un contenedor tiene una
      altura fija en píxeles y su contenido crece, el texto se corta o se solapa. La solución es
      dejar que el bloque crezca con su contenido usando <code>min-height</code> en lugar de
      <code>height</code>:
    </p>
    <pre class="course-code"><code>&lt;!-- Evitar: al ampliar el texto, el contenido se corta --&gt;
.tarjeta {
  height: 180px;
  overflow: hidden;
}

/* Correcto: la altura es un mínimo, no un límite */
.tarjeta {
  min-height: 180px;
}</code></pre>
    <p>
      Para comprobarlo no hace falta ninguna herramienta: basta con pulsar
      <kbd>Ctrl</kbd>+<kbd>+</kbd> hasta el 400 % y recorrer la página. Si aparece una barra de
      desplazamiento horizontal, si se solapa el texto o si desaparecen botones, hay trabajo que
      hacer.
    </p>

    <h2>Formato de párrafo</h2>
    <p>
      Elegidas la fuente y su tamaño, queda cómo se reparte el texto sobre la página. Aquí se
      mezclan dos cosas que conviene no confundir: <strong>qué elemento HTML separa un párrafo de
      otro</strong> y <strong>qué reglas CSS le dan aire</strong>. Empecemos por la primera.
    </p>
    <p>
      No debemos utilizar <code>&lt;br&gt;</code> para separar párrafos o crear márgenes. Para ello
      utilizaremos elementos semánticos y reglas CSS. El salto de línea sí puede emplearse cuando
      forma parte del contenido, por ejemplo en una dirección postal.
    </p>
    <pre class="course-code"><code>&lt;!-- Evitar: son dos párrafos simulados con saltos de línea --&gt;
&lt;p&gt;Primer párrafo.&lt;br&gt;&lt;br&gt;Segundo párrafo.&lt;/p&gt;

&lt;!-- Correcto: cada párrafo es un elemento, y el espacio lo pone CSS --&gt;
&lt;p&gt;Primer párrafo.&lt;/p&gt;
&lt;p&gt;Segundo párrafo.&lt;/p&gt;

&lt;!-- Correcto: aquí el salto de línea sí forma parte del contenido --&gt;
&lt;p&gt;
  Universidad de Alicante&lt;br&gt;
  Carretera San Vicente del Raspeig s/n&lt;br&gt;
  03690 San Vicente del Raspeig
&lt;/p&gt;</code></pre>
    <p>
      Respecto a la <strong>alineación del texto</strong> debemos tener en cuenta una serie de
      consideraciones:
    </p>
    <figure class="my-4">
      <img
        src="/curso-media/image4.jpeg"
        alt="Ejemplo de texto incorrecto justificado y otro correcto alineado a la izquierda."
        class="figure-img img-fluid rounded-4 border shadow-sm"
        loading="lazy"
      />
      <figcaption>
        Comparación entre texto justificado y texto alineado a la izquierda.
      </figcaption>
    </figure>
    <ul>
      <li>Si pensamos centrar contenido, este debe ser corto y no ocupar más de un par de líneas. En caso contrario puede resultar más difícil su lectura.</li>
      <li><strong>No se debe justificar el texto del contenido a ambos lados de la pantalla</strong>, este formato dificulta su lectura y por tanto su legibilidad.</li>
      <li>Conviene incluir un <strong>interlineado suficiente</strong> que mejore la lectura de las frases.</li>
      <li>También conviene agregar un espaciado suficiente entre los diferentes bloques de texto.</li>
    </ul>
    <p>
      El problema del texto justificado tiene una explicación concreta: para cuadrar ambos márgenes
      el navegador reparte el sobrante ensanchando los espacios entre palabras, y eso genera los
      llamados <em>ríos</em> de blanco, franjas verticales que atraviesan el párrafo y desvían la
      mirada. Afecta especialmente a personas con dislexia, y se agrava cuanto más estrecha es la
      columna, es decir, justo en móvil.
    </p>
    <pre class="course-code"><code>p {
  line-height: 1.5;
  text-align: left; /* No usar justify y no abusar de center */
  margin-bottom: 1rem;
}</code></pre>

    <h3>Espaciado del texto</h3>
    <p>
      El espaciado no es solo una cuestión estética. El criterio
      <a href="https://www.w3.org/WAI/WCAG22/Understanding/text-spacing.html" rel="noreferrer">1.4.12 Espaciado del texto</a>
      exige que, si la persona usuaria fuerza estos valores desde su propia configuración, no se
      pierda contenido ni funcionalidad:
    </p>
    <ul>
      <li>interlineado de al menos <strong>1,5 veces</strong> el tamaño de la fuente,</li>
      <li>separación entre párrafos de al menos <strong>2 veces</strong> el tamaño de la fuente,</li>
      <li>espaciado entre letras de al menos <strong>0,12 veces</strong> el tamaño de la fuente,</li>
      <li>espaciado entre palabras de al menos <strong>0,16 veces</strong> el tamaño de la fuente.</li>
    </ul>
    <p>
      Dicho de otro modo: no basta con que nuestro diseño tenga buen interlineado, es que el diseño
      <strong>no puede romperse</strong> si alguien lo aumenta. Los fallos aparecen siempre en los
      mismos sitios, contenedores con altura fija y botones con el texto ajustado al milímetro, así
      que la comprobación es la misma que la del zoom.
    </p>
    <p>
      Partir de un interlineado de <code>1.5</code> en el cuerpo del texto y algo menor en los
      titulares, donde las líneas son cortas, es una base razonable:
    </p>
    <pre class="course-code"><code>body {
  line-height: 1.5;
}

h1, h2, h3 {
  line-height: 1.25;
}</code></pre>

    <h3>Longitud de línea</h3>
    <p>
      Una línea demasiado larga cansa la lectura y hace fácil perder el renglón al volver al
      principio; una demasiado corta obliga a saltar constantemente. La referencia habitual está
      entre <strong>45 y 80 caracteres</strong> por línea, y es lo que recomienda el criterio
      <a href="https://www.w3.org/WAI/WCAG22/Understanding/visual-presentation.html" rel="noreferrer">1.4.8 Presentación visual</a>.
    </p>
    <p>
      Se controla limitando la anchura del bloque de texto. La unidad <code>ch</code> resulta
      cómoda porque equivale aproximadamente a la anchura de un carácter, de modo que el valor se
      lee directamente:
    </p>
    <pre class="course-code"><code>.contenido p {
  max-width: 70ch;
}</code></pre>
    <p>
      Es un ajuste que no se suele echar de menos hasta que se ve el mismo texto a pantalla
      completa en un monitor ancho, donde los párrafos se estiran de lado a lado y la lectura se
      vuelve incómoda.
    </p>

    <h2>Mayúsculas y énfasis</h2>
    <p>
      <strong>No es aconsejable abusar del texto en mayúsculas</strong>, debido a que su
      legibilidad es más baja y además, en casos de usuarios de líneas braille como personas
      ciegas, es menos cómoda la lectura de letras mayúsculas que minúsculas. El motivo es que
      todas las letras mayúsculas ocupan la misma caja, con lo que la palabra pierde el perfil que
      normalmente usamos para reconocerla de un vistazo.
    </p>
    <p>
      Si aun así el diseño exige mostrar un texto en mayúsculas, por ejemplo en una etiqueta o un
      botón, hay una diferencia importante entre escribirlas y aplicarlas: los lectores de pantalla
      leen el texto del HTML, no lo que se ve. Escribir las mayúsculas en el código puede hacer que
      la palabra se deletree como si fuera una sigla; aplicarlas con
      <code>text-transform</code> deja el contenido intacto:
    </p>
    <pre class="course-code"><code>&lt;!-- Evitar: el lector de pantalla puede deletrear "M-A-T-R-Í-C-U-L-A" --&gt;
&lt;button type="button"&gt;MATRÍCULA&lt;/button&gt;

&lt;!-- Correcto: el texto real es "Matrícula", las mayúsculas son presentación --&gt;
&lt;button type="button" class="text-uppercase"&gt;Matrícula&lt;/button&gt;</code></pre>
    <p>
      Los estilos o etiquetas de énfasis <code>&lt;em&gt;</code> y el tachado <code>&lt;s&gt;</code>
      deben usarse solo cuando expresen ese significado. No conviene utilizarlos únicamente para dar
      apariencia visual al texto.
    </p>
    <p>
      La distinción es la misma en toda la pareja de etiquetas: <code>&lt;strong&gt;</code> y
      <code>&lt;em&gt;</code> aportan significado (importancia y énfasis), mientras que
      <code>&lt;b&gt;</code> e <code>&lt;i&gt;</code> son puramente visuales. Si lo único que
      buscamos es negrita o cursiva por diseño, lo correcto es aplicarlo desde CSS.
    </p>

    <h2>El texto debe estar en el HTML</h2>
    <p>
      Acabamos de ver que la apariencia se resuelve desde CSS y el significado desde el HTML. Esa
      división tiene una consecuencia que se pasa por alto con frecuencia: <strong>un texto solo es
      accesible si forma parte del contenido del documento</strong>. Si únicamente existe en la
      capa de presentación, para las tecnologías de apoyo no existe.
    </p>
    <p>
      Hay dos formas habituales de saltarse esta regla sin darse cuenta: meter el texto dentro de
      una imagen o generarlo desde CSS.
    </p>
    <p>
      El primer caso se trata en el apartado «Imágenes y elementos no textuales». El segundo
      consiste en escribir contenido con la propiedad <code>content</code> de los pseudoelementos
      <code>::before</code> y <code>::after</code>:
    </p>
    <pre class="course-code"><code>&lt;!-- Evitar: el texto solo existe en la hoja de estilos --&gt;
.aviso::before {
  content: "Importante: ";
}

.precio::after {
  content: " (IVA incluido)";
}</code></pre>
    <p>
      Ese texto <strong>no debe usarse nunca para transmitir información</strong>, por varios
      motivos que se acumulan:
    </p>
    <ul>
      <li>
        los lectores de pantalla <strong>lo anuncian de forma inconsistente</strong>: algunos lo
        leen, otros no, y el resultado depende del navegador y de la versión;
      </li>
      <li>no se puede <strong>seleccionar ni copiar</strong>;</li>
      <li>no lo encuentra el <strong>buscador del navegador</strong> ni los indexadores;</li>
      <li>
        los <strong>traductores automáticos lo ignoran</strong>, de modo que en una página traducida
        aparece mezclado en el idioma original;
      </li>
      <li>
        <strong>desaparece si el usuario aplica su propia hoja de estilos</strong>, algo habitual
        en configuraciones de alto contraste.
      </li>
    </ul>
    <p>La forma correcta es que el texto viva en el HTML, que es donde se puede leer y traducir:</p>
    <pre class="course-code"><code>&lt;p class="aviso"&gt;&lt;strong&gt;Importante:&lt;/strong&gt; el plazo termina el 30 de junio.&lt;/p&gt;
&lt;p class="precio"&gt;24,90 € &lt;span&gt;(IVA incluido)&lt;/span&gt;&lt;/p&gt;</code></pre>
    <p>
      Sí es legítimo usar <code>content</code> para elementos <strong>puramente
      decorativos</strong>, como los iconos de una fuente iconográfica o una comilla ornamental,
      siempre que no aporten información que no esté ya en el texto. En ese caso conviene marcarlo
      explícitamente como decorativo:
    </p>
    <pre class="course-code"><code>.icono-flecha::after {
  content: "→";
  /* Decorativo: el enlace ya dice a dónde va */
}</code></pre>
    <p>
      La regla práctica es sencilla: si al desactivar la hoja de estilos se pierde información, ese
      texto estaba en el sitio equivocado.
    </p>

    <h2>Idioma del contenido</h2>
    <p>
      Tanto si trabajamos con páginas web en varios idiomas como si aparecen fragmentos en otra
      lengua, deberemos <strong>marcar el idioma al que pertenece cada parte del texto</strong>.
      Los lectores de pantalla necesitan conocerlo para realizar una pronunciación correcta.
    </p>
    <p>
      Es el caso también de los buscadores como Google, que necesitan saber el idioma de la página
      para una mejor comprensión e indexación de los contenidos.
    </p>
    <p>
      Pongamos el ejemplo de que escribiendo un texto en castellano introducimos la palabra
      <span lang="en">People</span>. Si no indicamos que ese texto está en inglés, el lector de
      pantalla puede pronunciar la palabra como si fuera castellano.
    </p>

    <h3>Establecer el idioma por defecto</h3>
    <p>
      Para especificar los idiomas en HTML5 disponemos del atributo <code>lang</code>, que se puede
      aplicar a cualquier etiqueta. Como valor utilizaremos el código de idioma, por ejemplo
      <code>es</code> para español o <code>es-ES</code> para español de España.
    </p>
    <p>Para indicar que el contenido de la web es en español, escribiríamos:</p>
    <pre class="course-code"><code>&lt;!DOCTYPE html&gt;
&lt;html lang="es"&gt;
&lt;head&gt;...&lt;/head&gt;
&lt;body&gt;...&lt;/body&gt;
&lt;/html&gt;</code></pre>

    <h3>Cambios de idioma dentro de la página</h3>
    <p>
      Para marcar que un fragmento de texto está en otro idioma, lo hacemos directamente en el
      texto deseado. Por ejemplo, marcando la palabra <span lang="en">People</span> como inglesa:
    </p>
    <pre class="course-code"><code>&lt;!DOCTYPE html&gt;
&lt;html lang="es"&gt;
&lt;head&gt;...&lt;/head&gt;
&lt;body&gt;
  &lt;p&gt;Gente en inglés es &lt;span lang="en"&gt;People&lt;/span&gt;&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
    <p>
      No hace falta marcar los nombres propios, ni los términos técnicos que ya se han incorporado
      al uso habitual del idioma. La marca es útil cuando el fragmento se pronunciaría mal al
      leerlo con las reglas del idioma principal: una cita, el título de una obra o el nombre de
      una asignatura en otra lengua.
    </p>
    <h2>Resumen de comprobaciones</h2>
    <p>
      Todo lo anterior se puede verificar sin herramientas especiales. Estas son las comprobaciones
      que conviene hacer sobre cualquier página antes de darla por buena:
    </p>
    <ol>
      <li>
        <strong>La fuente se lee y carga siempre.</strong> Es sans serif, distingue la I de la l y
        del 1, y la declaración lleva <code>font-display: swap</code> y una lista de alternativas
        detrás.
      </li>
      <li>
        <strong>Los tamaños respetan al usuario.</strong> No hay ningún <code>font-size</code> fijo
        en <code>html</code>, el cuerpo parte de 14 puntos y ningún texto baja de 12, ni siquiera
        los pies, las etiquetas o los mensajes de error.
      </li>
      <li>
        <strong>Aguanta la ampliación.</strong> Al 400 % de zoom no aparece scroll horizontal, no
        se solapa el texto y no desaparece ningún control.
      </li>
      <li>
        <strong>Los párrafos respiran.</strong> Interlineado de 1,5, sin texto justificado, y las
        líneas no superan los 80 caracteres.
      </li>
      <li>
        <strong>El significado está en las etiquetas.</strong> Las mayúsculas se aplican con
        <code>text-transform</code>, y <code>strong</code> y <code>em</code> se usan por lo que
        significan, no por cómo se ven.
      </li>
      <li>
        <strong>Nada informativo se pierde al quitar los estilos.</strong> Si al desactivar la hoja
        de estilos desaparece información, ese texto estaba en el sitio equivocado.
      </li>
      <li>
        <strong>El idioma está declarado.</strong> Hay un <code>lang</code> en
        <code>&lt;html&gt;</code> y los fragmentos en otra lengua están marcados.
      </li>
    </ol>
  </div>
</template>
