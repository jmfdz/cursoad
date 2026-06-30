# Usabilidad y UX

## Diseño inclusivo, usabilidad y experiencia de usuario

El diseño inclusivo, la usabilidad y la experiencia de usuario están muy relacionados, pero no significan exactamente lo mismo. Conviene diferenciarlos porque cada uno aporta un enfoque distinto a la calidad real de una interfaz.

## Diseño inclusivo

El diseño inclusivo es una metodología creada para habilitar y apoyarse en toda la diversidad humana al concebir productos y servicios, de modo que funcionen para personas con diferentes capacidades, contextos y experiencias. Microsoft la impulsó públicamente en 2015 al publicar su *Inclusive Design Toolkit*, convirtiéndola desde entonces en práctica interna y en referencia para muchos equipos y universidades.

La propuesta parte de entender la discapacidad como un desajuste entre la persona y el entorno, y anima a quienes diseñan a detectar esos desajustes desde el inicio del proceso, no como un añadido posterior, para que la accesibilidad se traduzca en mejores experiencias para todas las personas.

El marco de Microsoft se articula en tres principios clave:

- Reconocer la exclusión: mapear dónde y por qué un sistema deja fuera a alguien.
- Aprender de la diversidad: incorporar las perspectivas de quienes viven esas exclusiones para revelar soluciones creativas.
- Crear para uno, extender a muchos: resolver bien un caso extremo y escalar la solución porque beneficiará a un espectro amplio de usuarios.

A estos se suman pautas operativas como pensar de forma universal y diseñar con múltiples formas de participación, que guían a los equipos durante todo el ciclo de vida del producto.

## Usabilidad

La usabilidad se refiere a cómo de **fácil, eficiente y satisfactoria** es la interacción del usuario con un sitio web o aplicación. Una interfaz usable permite al usuario lograr sus objetivos con **rapidez, sin errores ni frustraciones**.

Principios clave de la usabilidad:

- Facilidad de aprendizaje: el usuario entiende rápidamente cómo usar el sistema.
- Eficiencia: una vez aprendido, el sistema permite realizar tareas rápidamente.
- Memorabilidad: el usuario puede recordar cómo usarlo tras un tiempo sin utilizarlo.
- Bajo índice de errores: pocos errores y fáciles de corregir.
- Satisfacción: el uso del sistema resulta agradable.

## Experiencia de usuario (UX)

La experiencia de usuario es más amplia: engloba todas las **emociones, percepciones y reacciones** que una persona tiene al interactuar con una página web o aplicación.

La UX abarca la usabilidad, pero también considera:

- El diseño visual.
- El contenido.
- La accesibilidad.
- La credibilidad.
- El rendimiento.
- Las emociones que genera.

Dicho de otro modo, una interfaz puede ser usable en términos funcionales y, sin embargo, generar una mala experiencia si resulta confusa, poco creíble, visualmente descuidada o excesivamente fría en la interacción.

## Estados, feedback y microcopy

Cuando una persona interactúa con una interfaz necesita saber en todo momento qué está ocurriendo, si su acción se ha procesado y qué puede hacer a continuación. Si no hay señales claras, aparecen la duda, la repetición de acciones y la sensación de falta de control.

Los requisitos técnicos de formularios, etiquetas y validación accesible ya se han tratado en el bloque anterior. Aquí nos centramos en cómo responder mejor a las acciones del usuario y cómo comunicar lo que ocurre en la interfaz.

### Estados de una interfaz

En muchos componentes y pantallas hay al menos cinco estados habituales que conviene diseñar de forma explícita:

- **Inicial**: la pantalla todavía no tiene resultados o espera una acción del usuario.
- **Cargando**: el sistema está procesando una petición y debe comunicarlo.
- **Vacío**: no hay datos, resultados o elementos disponibles.
- **Éxito**: la acción se ha completado correctamente.
- **Error**: algo ha fallado y hay que explicar qué ha ocurrido o cómo corregirlo.

Si estos estados no están pensados desde el principio, es frecuente acabar mostrando mensajes ambiguos, pantallas vacías o cambios de interfaz que el usuario no entiende.

### Feedback inmediato

Cuando el usuario pulsa un botón, envía un formulario o cambia un filtro, la interfaz debe reaccionar de inmediato. A veces basta con deshabilitar un botón y mostrar un indicador de carga; otras veces conviene actualizar una zona concreta con un mensaje de éxito o error.

Lo importante es evitar que la interfaz parezca bloqueada o silenciosa. Si una acción tarda, debe indicarse. Si termina bien, también. Y si falla, el sistema tiene que decirlo con claridad.

### Mensajes claros y proporcionados

No todos los mensajes deben presentarse de la misma forma. Un aviso menor no necesita el mismo peso visual que un error que impide continuar.

Aquí entra también en juego el **microcopy**, es decir, los textos breves de la interfaz: botones, ayudas, mensajes de error, confirmaciones o avisos de estado. Aunque sean pequeños, condicionan mucho la claridad de uso.

En general, estos textos deben decir con claridad qué ocurre o qué va a ocurrir. Por ejemplo:

- Es mejor **Guardar cambios** que **Aceptar**, porque la acción queda más clara.
- Es mejor **Enviar solicitud** que **Continuar**, si realmente la acción ya envía el formulario.
- Es mejor **No se ha podido guardar la solicitud. Revisa los campos marcados.** que un mensaje genérico como **Error inesperado**.
- Es mejor **Todavía no tienes solicitudes creadas** que mostrar una pantalla vacía sin explicación.

- Los mensajes de éxito deben confirmar la acción realizada y, si procede, orientar sobre el siguiente paso.
- Los mensajes de error deben explicar qué ha fallado y cómo corregirlo.
- Las alertas importantes deben percibirse con facilidad, pero sin interrumpir de manera innecesaria.
- En acciones reversibles, muchas veces es preferible ofrecer una opción de deshacer antes que pedir confirmación previa.

### Relación con accesibilidad

Todo esto tiene también un impacto directo en accesibilidad. Si el cambio solo se percibe visualmente, una parte de los usuarios no sabrá que algo ha ocurrido.

Por eso conviene revisar que el foco se mantenga en un lugar lógico, que los mensajes puedan anunciarse cuando sea necesario, que el tiempo de lectura sea suficiente y que el color no sea el único recurso para distinguir éxito, aviso o error.

## Color, contraste y percepción visual

En los siguientes apartados se habla de la percepción del color, el concepto de contraste de luminosidad entre color del texto y del fondo y los tipos de ceguera al color para no cometer el error de transmitir información únicamente mediante el color.

### Contraste de luminosidad

Existe un porcentaje de la población con problemas para percibir los colores, ya sea a la hora de diferenciar determinados colores o porque padece alguna forma de ceguera que solo le permite percibir un espectro reducido de colores.

El contraste de luminosidad **entre el color del fondo y el color del texto** debe ser suficiente para garantizar una buena legibilidad del texto en situaciones desfavorables de mucha luz, pantallas con poco contraste o brillo y para personas con problemas de visión.

Las pautas de accesibilidad del contenido web establecen en su nivel AA los diferentes ratios mínimos de contraste según el tamaño y tipo de texto:

- Ratio de **4.5:1** para textos menores a 18 puntos.
- Ratio de **3:1** para texto mayor a 18 puntos, texto en negrita mayor o igual a 14 puntos y texto en enlaces y botones.

Podemos decir que a mayor contraste, mayor facilidad de lectura del texto, con independencia de la combinación de colores. En la mayoría de las situaciones, lo más recomendable es texto negro sobre fondo blanco o colores muy cercanos a estos, como gris oscuro y tonos sepia.

Por otro lado, no se aconseja utilizar fondos degradados de color o con tramas, ya que los cambios de tono de color podrían dificultar el acceso a la información del documento, sobre todo si se coloca texto sobre ese fondo.

### Uso semántico del color

Es recomendable no utilizar únicamente el color para transmitir información. Siempre se debe incluir esta información mediante otro sistema alternativo, además del uso del color.

Veamos un ejemplo incorrecto:

Nota: La respuesta correcta está en color rojo.

Pregunta 1: Debemos transmitir información únicamente mediante el color.

a) Verdadero

b) Falso

En este ejemplo, una persona ciega será incapaz de saber cuáles son las respuestas correctas, puesto que su lector de pantalla no puede interpretar los colores. Lo mismo ocurriría con una persona con dificultades para distinguir los colores.

Veamos ahora el mismo ejemplo utilizando una forma alternativa de transmitir la información:

Nota: La respuesta correcta está marcada con una X.

Pregunta 1: Debemos transmitir información únicamente mediante el color.

a) Verdadero

b) X Falso

En este ejemplo una persona ciega conocerá las respuestas correctas cuando su lector lea la letra equis.

## Patrones de diseño y usabilidad

Además de los principios teóricos, conviene aterrizar la usabilidad en decisiones de diseño concretas: cómo se distribuye la interfaz, cómo se guía al usuario en un proceso y qué pequeñas mejoras reducen errores o fricción.

### Patrones de diseño útiles

En el repositorio del curso se mostraron diferentes ejemplos de diseños que van más allá de la típica tabla de administración o del formulario que ocupa toda la pantalla. En general, la idea es aprovechar mejor el espacio y adaptar la disposición al tipo de tarea.

- Diseño a dos columnas en escritorio y una en móvil, con la interacción a la izquierda y el resultado a la derecha.
- Formulario en una columna de anchura limitada y panel lateral con más información.
- Formulario centrado al estilo Google o Microsoft Forms para reducir la longitud de línea.
- Formulario o asistente por pasos con progresión visual.
- Paneles tipo Trello para trabajo operativo y seguimiento de solicitudes.
- Exploraciones visuales de herramientas internas como Vértice.

### Mejoras prácticas de usabilidad

En este punto no se trata tanto de validar técnicamente un formulario o un componente, sino de organizar mejor la interacción para que el usuario complete la tarea con menos esfuerzo.

Por ejemplo, en formularios largos puede ser útil limitar la anchura de lectura, dividir el proceso en pasos o acompañar la acción principal con paneles de ayuda y contexto.

Del mismo modo, si una tarea implica varias decisiones o varios bloques de datos, una buena distribución visual puede reducir la carga cognitiva y facilitar el seguimiento del proceso.

## Técnicas de usabilidad y UX

Para asegurar de que nuestros diseños son usables y tienen una buena experiencia de usuario, hay diferentes técnicas y herramientas que podemos utilizar:

- **Tests de usuario**: observar cómo personas reales interactúan con el sitio.
- **Análisis de tareas**: identificar los pasos necesarios para completar una tarea.
- **Prototipos**: diseño preliminar para probar la estructura antes de desarrollar.
- **Mapas de calor**: visualizar dónde hacen clic y se enfocan los usuarios.
- **Encuestas y entrevistas**: recopilar opiniones y emociones.
- **A/B testing**: comparar dos versiones para ver cuál rinde mejor.
- **Personas**: perfiles ficticios que representan usuarios reales para diseñar pensando en sus necesidades.

Usar todas las técnicas y herramientas es muy complicado, a no ser que seamos corporaciones muy grandes con equipos específicos. Por ejemplo, en empresas como Spotify hay equipos de decenas de personas solo para estudiar la mejor ubicación de botones, la mejor forma de crear un formulario o simular perfiles de personas para mejorar el proceso de suscripción a su servicio.
