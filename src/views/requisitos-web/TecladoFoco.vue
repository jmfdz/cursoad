<template>
  <div>
    <p>
      Una página web no debe depender exclusivamente del ratón. Debe poder recorrerse y utilizarse
      también con teclado, ya que muchas personas navegan de esta forma de manera habitual o la
      necesitan como única vía de acceso.
    </p>

    <h2>Recorrido con teclado</h2>
    <p>
      Al pulsar la tecla `TAB`, el foco del teclado va avanzando por los enlaces, botones, campos
      de formulario y otros elementos interactivos. Ese recorrido debe seguir una lógica clara y no
      obligar al usuario a saltar de una zona a otra sin sentido.
    </p>
    <p>
      En general, el orden del foco debería corresponderse con el orden natural del contenido en la
      página. Si el usuario ve una secuencia y el teclado sigue otra distinta, la navegación se
      vuelve confusa.
    </p>

    <h2>Foco visible</h2>
    <p>
      No basta con que el foco exista, también debe verse con claridad. El usuario necesita saber
      en todo momento sobre qué elemento está situado para poder continuar la navegación o activar
      una acción.
    </p>
    <p>
      Por este motivo, no se debe eliminar el contorno de foco que trae el navegador salvo que se
      sustituya por otro estilo claramente visible y con contraste suficiente.
    </p>

    <h2>Controles interactivos reales</h2>
    <p>
      Los elementos que realizan acciones o cambian de pantalla deben construirse con los controles
      adecuados: enlaces para navegar y botones para ejecutar acciones. No deberíamos usar `div`,
      `span` u otros elementos de maquetación para simular su comportamiento.
    </p>
    <p>
      Si un elemento parece interactivo, pero no recibe foco, no puede activarse con teclado o no
      muestra su estado de forma clara, parte de los usuarios quedará fuera.
    </p>

    <h2>Problemas habituales</h2>
    <p>Entre los fallos más frecuentes relacionados con teclado y foco están los siguientes:</p>
    <ul>
      <li>enlaces, botones o iconos que solo funcionan con ratón,</li>
      <li>focos invisibles o con contraste insuficiente,</li>
      <li>orden de tabulación ilógico,</li>
      <li>cuadros modales o menús desplegables que no gestionan bien el foco,</li>
      <li>componentes creados con JavaScript que visualmente parecen correctos, pero no son utilizables con teclado.</li>
    </ul>
    <p>
      En definitiva, si una funcionalidad no puede utilizarse correctamente con teclado, no puede
      considerarse accesible.
    </p>
  </div>
</template>
