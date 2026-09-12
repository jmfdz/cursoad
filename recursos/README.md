# Recursos

Material de apoyo del curso que no forma parte de la aplicación. Nada de esta carpeta
entra en el `build` de Vite: son documentos para consultar y mantener aparte.

## `identidad-ua.html`

Guía de identidad visual del curso. Se abre directamente en el navegador, sin
servidor ni dependencias, y recoge:

- La **paleta institucional** con los ratios de contraste de cada color, medidos con
  la fórmula de luminancia relativa de WCAG 2.2.
- La **escala tipográfica** de la Universidad de Alicante, renderizada a tamaño real.
- Las **tres direcciones de diseño** que se valoraron, maquetadas sobre páginas reales
  del curso. La implementada es la A, «Franja institucional».
- Las **decisiones** tomadas y su porqué: peso de la fuente, encabezados en azul,
  cuerpo a 14 pt, título de página, ausencia de migas de pan.
- Dos **trampas de Bootstrap 5 dentro de Vue** que aparecieron al aplicarlo y que le
  pueden pasar a cualquiera: Vue borrando las clases que Bootstrap añade en tiempo de
  ejecución, y la colisión entre un marcador de estado activo y el anillo de foco
  cuando los dos usan `box-shadow`.
- El **CSS completo**, tal y como está en `src/assets/main.css`.

Los valores no son inventados: están extraídos de la hoja de estilo real de la
plantilla institucional, `plantilla24-web.min.css`, la que sirve <https://www.ua.es>.

Si se cambia la identidad visual del curso, conviene actualizar también este documento
para que no quede describiendo algo que ya no es cierto.
