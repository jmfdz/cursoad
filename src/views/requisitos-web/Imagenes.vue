<template>
  <div>
    <p>
      Los elementos no textuales, como imágenes, gráficos o fórmulas matemáticas, deben disponer de
      una alternativa que transmita su información o su función a quienes no pueden percibirlos.
    </p>
    <p>
      En una imagen, el texto alternativo debe explicar lo que aporta dentro de ese contexto, sin
      limitarse a enumerar todo lo que aparece visualmente.
    </p>
    <p>
      En el caso de que un elemento sea meramente decorativo, se deberá dejar la etiqueta de texto
      alternativo vacía.
    </p>

    <h2>Texto alternativo</h2>
    <p>
      Para incluir la descripción de una imagen en una web debemos incluir el atributo `alt`, que
      es obligatorio. Veamos dos ejemplos, una imagen con descripción y otra decorativa:
    </p>
    <pre class="course-code"><code>&lt;img src="mano-ua.png" alt="Estatua de una mano con un lápiz que simboliza la libertad de expresión de la UA" /&gt;
&lt;!-- Imagen decorativa --&gt;
&lt;img src="fondo-decorativo.png" alt="" /&gt;</code></pre>
    <p>
      No existe un límite fijo de caracteres, pero el texto alternativo debe ser conciso. Si la
      descripción necesaria es muy larga, conviene incluirla dentro del contenido de la página.
    </p>

    <h2>Descripciones largas</h2>
    <p>
      Otra forma de incluir una descripción larga es mediante la etiqueta `figcaption` dentro de
      `figure` en HTML5. Veamos un ejemplo:
    </p>
    <pre class="course-code"><code>&lt;figure&gt;
  &lt;img src="mano-ua.png" alt="Estatua de la Mano de la UA" /&gt;
  &lt;figcaption&gt;La Mano de la UA simboliza la libertad de expresión y sostiene un lápiz que apunta al cielo.&lt;/figcaption&gt;
&lt;/figure&gt;</code></pre>

    <h2>Iconos</h2>
    <p>
      Cuando un icono transmite información o permite realizar una acción, debe comunicarse su
      propósito. Si es decorativo o repite un texto visible, debe ocultarse a los productos de apoyo.
    </p>
    <p>
      En este caso no hace falta describir, por ejemplo, “icono de un lápiz” si el icono tiene la
      acción de editar, por lo que su descripción será “Editar”.
    </p>
    <p>
      Si el icono se encuentra dentro de un botón, el nombre accesible debe aplicarse al botón y el
      icono debe ocultarse a los productos de apoyo.
    </p>
    <p>
      Siempre que sea posible, es preferible incluir texto visible. Si el diseño utiliza únicamente
      el icono, podemos proporcionar el nombre mediante <code>aria-label</code>.
    </p>
    <p>Veamos un ejemplo de un botón con un icono de editar:</p>
    <pre class="course-code"><code>&lt;button type="button" aria-label="Editar"&gt;
  &lt;i class="icon icon-edit" aria-hidden="true"&gt;&lt;/i&gt;
&lt;/button&gt;</code></pre>
    <p>
      De esta forma, un lector de pantalla al llegar al botón leerá “Editar”.
    </p>
    <p>
      En ningún caso podemos dejar solamente el atributo `title` y ninguna información más, ya que
      no todos los lectores de pantalla leen ese contenido.
    </p>

    <h2>Imágenes SVG</h2>
    <p>
      Si un SVG funciona como una imagen informativa, debemos marcarlo con
      <code>role="img"</code> y proporcionarle un nombre accesible mediante un elemento
      <code>title</code> interno o con <code>aria-label</code> en el propio SVG. No existe el rol
      <code>image</code>; el valor correcto es <code>img</code>.
    </p>
    <p>
      Si el SVG es decorativo, o ya está acompañado por un texto que transmite la misma
      información, utilizaremos <code>aria-hidden="true"</code>.
    </p>
    <pre class="course-code"><code>&lt;!-- SVG informativo con title --&gt;
&lt;svg role="img" focusable="false"&gt;
  &lt;title&gt;Estado completado&lt;/title&gt;
  ...
&lt;/svg&gt;

&lt;!-- Alternativa con aria-label --&gt;
&lt;svg role="img" aria-label="Estado completado" focusable="false"&gt;
  ...
&lt;/svg&gt;

&lt;!-- SVG decorativo --&gt;
&lt;svg aria-hidden="true" focusable="false"&gt;
  ...
&lt;/svg&gt;</code></pre>
  </div>
</template>
