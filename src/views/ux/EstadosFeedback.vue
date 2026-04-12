<template>
  <div>
    <p>
      Cuando una persona interactúa con una interfaz necesita saber en todo momento qué está
      ocurriendo, si su acción se ha procesado y qué puede hacer a continuación. Si no hay señales
      claras, aparecen la duda, la repetición de acciones y la sensación de falta de control.
    </p>
    <p>
      Los requisitos técnicos de formularios, etiquetas y validación accesible ya se han tratado en
      el bloque anterior. Aquí nos centramos en cómo responder mejor a las acciones del usuario y
      cómo comunicar lo que ocurre en la interfaz.
    </p>

    <h2>Estados de una interfaz</h2>
    <p>En muchos componentes y pantallas hay al menos cinco estados habituales que conviene diseñar de forma explícita:</p>
    <ul>
      <li><strong>Inicial</strong>: la pantalla todavía no tiene resultados o espera una acción del usuario.</li>
      <li><strong>Cargando</strong>: el sistema está procesando una petición y debe comunicarlo.</li>
      <li><strong>Vacío</strong>: no hay datos, resultados o elementos disponibles.</li>
      <li><strong>Éxito</strong>: la acción se ha completado correctamente.</li>
      <li><strong>Error</strong>: algo ha fallado y hay que explicar qué ha ocurrido o cómo corregirlo.</li>
    </ul>
    <p>
      Si estos estados no están pensados desde el principio, es frecuente acabar mostrando mensajes
      ambiguos, pantallas vacías o cambios de interfaz que el usuario no entiende.
    </p>

    <h2>Feedback inmediato</h2>
    <p>
      Cuando el usuario pulsa un botón, envía un formulario o cambia un filtro, la interfaz debe
      reaccionar de inmediato. A veces basta con deshabilitar un botón y mostrar un indicador de
      carga; otras veces conviene actualizar una zona concreta con un mensaje de éxito o error.
    </p>
    <p>
      Lo importante es evitar que la interfaz parezca bloqueada o silenciosa. Si una acción tarda,
      debe indicarse. Si termina bien, también. Y si falla, el sistema tiene que decirlo con
      claridad.
    </p>

    <h2>Mensajes claros y proporcionados</h2>
    <p>
      No todos los mensajes deben presentarse de la misma forma. Un aviso menor no necesita el
      mismo peso visual que un error que impide continuar.
    </p>
    <p>
      Aquí entra también en juego el <strong>microcopy</strong>, es decir, los textos breves de la
      interfaz: botones, ayudas, mensajes de error, confirmaciones o avisos de estado. Aunque sean
      pequeños, condicionan mucho la claridad de uso.
    </p>
    <p>En general, estos textos deben decir con claridad qué ocurre o qué va a ocurrir. Por ejemplo:</p>
    <ul>
      <li>Es mejor <strong>Guardar cambios</strong> que <strong>Aceptar</strong>, porque la acción queda más clara.</li>
      <li>Es mejor <strong>Enviar solicitud</strong> que <strong>Continuar</strong>, si realmente la acción ya envía el formulario.</li>
      <li>Es mejor <strong>No se ha podido guardar la solicitud. Revisa los campos marcados.</strong> que un mensaje genérico como <strong>Error inesperado</strong>.</li>
      <li>Es mejor <strong>Todavía no tienes solicitudes creadas</strong> que mostrar una pantalla vacía sin explicación.</li>
    </ul>
    <ul>
      <li>Los mensajes de éxito deben confirmar la acción realizada y, si procede, orientar sobre el siguiente paso.</li>
      <li>Los mensajes de error deben explicar qué ha fallado y cómo corregirlo.</li>
      <li>Las alertas importantes deben percibirse con facilidad, pero sin interrumpir de manera innecesaria.</li>
      <li>En acciones reversibles, muchas veces es preferible ofrecer una opción de deshacer antes que pedir confirmación previa.</li>
    </ul>

    <h2>Relación con accesibilidad</h2>
    <p>
      Todo esto tiene también un impacto directo en accesibilidad. Si el cambio solo se percibe
      visualmente, una parte de los usuarios no sabrá que algo ha ocurrido.
    </p>
    <p>
      Por eso conviene revisar que el foco se mantenga en un lugar lógico, que los mensajes puedan
      anunciarse cuando sea necesario, que el tiempo de lectura sea suficiente y que el color no
      sea el único recurso para distinguir éxito, aviso o error.
    </p>
  </div>
</template>
