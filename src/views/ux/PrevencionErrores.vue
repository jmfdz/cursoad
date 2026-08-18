<template>
  <div>
    <p>
      Evitar un error es casi siempre mejor que explicarlo bien después. Este apartado recoge
      cómo prevenirlos antes de que ocurran y cómo dar margen de reacción cuando una acción es
      difícil o imposible de deshacer.
    </p>

    <h2>Prevención y recuperación de errores</h2>
    <p>
      Tres ideas resumen cómo prevenir errores y facilitar su corrección sin que se pierda el
      trabajo ya hecho:
    </p>
    <ul>
      <li>
        <strong>Validación temprana no invasiva.</strong> Avisar del error en cuanto se puede
        detectar con seguridad, pero sin interrumpir mientras la persona todavía está escribiendo
        (por ejemplo, validar un email al perder el foco del campo, no letra a letra).
      </li>
      <li>
        <strong>Sugerencias de corrección.</strong> Si el sistema puede deducir qué se quiso decir
        o qué formato se esperaba, ofrecerlo en el propio mensaje de error.
      </li>
      <li>
        <strong>Revisión antes de envío irreversible.</strong> En trámites largos o con
        consecuencias legales o económicas, mostrar un resumen final editable antes de confirmar,
        para poder corregir datos antes de que dejen de poder cambiarse.
      </li>
    </ul>

    <h2>Acciones reversibles y operaciones destructivas</h2>
    <p>
      La revisión antes del envío no siempre basta. Cuando la acción es irreversible —borrar,
      archivar, enviar un documento de forma definitiva— conviene pedir confirmación explícita
      antes de ejecutarla. En cambio, para una acción reversible suele ser mejor ofrecer un
      «deshacer» justo después de ejecutarla que interrumpir con una confirmación previa:
      interrumpe menos y da el mismo margen de reacción.
    </p>
    <p>
      El texto de los botones en una confirmación debe dejar clara la acción sin necesidad de leer
      nada más:
    </p>
    <ul>
      <li><strong>Crear</strong>: el botón principal dice el verbo y el elemento, por ejemplo «Crear convocatoria», nunca un genérico «Aceptar».</li>
      <li><strong>Guardar cambios</strong>: el botón principal dice «Guardar cambios», no «Aceptar» ni «Continuar».</li>
      <li><strong>Eliminar</strong>: el título del propio diálogo ya identifica el elemento («¿Eliminar Aula 12?»), así que el botón no necesita repetirlo; basta con «Eliminar», destacado visualmente como acción destructiva.</li>
    </ul>
    <p>
      En los tres casos, el botón de cancelar se queda simplemente en «Cancelar», sin ningún aviso
      adicional: si la persona cancela, no ha pasado nada, y avisar de algo que no ha ocurrido solo
      añade ruido.
    </p>
    <p>
      Otras buenas prácticas en confirmaciones: ser específico en el título («¿Eliminar Aula 12?»
      se entiende de un vistazo, «¿Eliminar?» obliga a leer también el cuerpo del mensaje),
      resaltar en el cuerpo lo irreversible («Esta acción no se puede deshacer» o «Se perderán las
      reservas asociadas») y no abusar de la confirmación, porque pedirla para cualquier clic acaba
      entrenando a la persona a pulsar «Aceptar» sin leer.
    </p>
    <p>
      Este patrón —confirmación, revisión o posibilidad de deshacer antes de una operación
      irreversible— es lo que exige el criterio WCAG de prevención de errores para los envíos que
      eliminan o modifican datos de forma permanente: la operación debe ser reversible, o los
      datos deben poder revisarse antes de confirmarla, o debe existir un mecanismo de confirmación
      previo.
    </p>
  </div>
</template>
