# Fundamentos

## Qué es la accesibilidad digital

Podemos definir la accesibilidad digital como el grado en el que todas las personas pueden **percibir, comprender, utilizar y navegar** por un contenido o servicio digital independientemente de sus capacidades **físicas, sensoriales o cognitivas**, del dispositivo que utilicen o del contexto en el que accedan.

La Web nació con vocación universal. Cuando una página, una aplicación o un documento respetan ese objetivo y no dejan fuera a parte de sus usuarios, podemos decir que son accesibles.

## Por qué es importante

La accesibilidad no es un añadido ni una capa de calidad opcional. Es una condición básica para que la información y los servicios puedan usarse de forma real por todas las personas.

Esto tiene consecuencias muy concretas en varios niveles:

- **Personas**: facilita el acceso a información, trámites, formación, salud, empleo y servicios.
- **Organizaciones**: mejora la calidad, amplía el alcance, reduce incidencias y ayuda a cumplir la normativa.
- **Sociedad**: reduce barreras y favorece una participación más igualitaria en el entorno digital.

Además, muchas decisiones de accesibilidad mejoran también la **usabilidad**: contenidos más claros, formularios mejor etiquetados, navegación más predecible o contrastes más legibles suelen beneficiar a todo el mundo.

## A quién beneficia

Solemos agrupar las necesidades de accesibilidad en cuatro grandes bloques, aunque en la práctica el impacto es mucho más amplio:

- **Visual**: ceguera, baja visión, visión reducida, sensibilidad al contraste o dificultad para distinguir determinados colores.
- **Auditiva**: sordera total o parcial, dificultad para entender el habla o dependencia de subtítulos y transcripciones.
- **Motora**: limitaciones en el uso de manos, brazos o voz, movilidad reducida o necesidad de navegar sin ratón.
- **Cognitiva**: dificultades de comprensión, memoria, atención, aprendizaje o lectura.

Pero también beneficia a muchas situaciones de uso no permanentes: personas mayores cuyas capacidades cambian con la edad, personas con limitaciones temporales, personas con limitaciones situacionales y personas con mala conexión, pantallas pequeñas o dispositivos de entrada distintos al teclado y ratón tradicionales.

## Legislación aplicable

Existe numerosa legislación española, europea e internacional relacionada con la accesibilidad, pero en este curso nos centraremos en las referencias más relevantes para entender por qué la accesibilidad digital no es solo una buena práctica técnica, sino también una cuestión de derechos y de cumplimiento.

### Convención internacional de la ONU

La Convención sobre los derechos de las personas con discapacidad, ratificada por España en 2007, es un punto de partida clave. En su artículo 9 reconoce la accesibilidad como una condición necesaria para acceder en igualdad de condiciones a la información, las comunicaciones y los servicios.

Esto deja clara una idea de fondo: la accesibilidad digital no es un extra técnico ni un embellecimiento del producto, sino una parte del derecho de acceso en igualdad de condiciones.

### Directiva (UE) 2016/2102 y Real Decreto 1112/2018

En el ámbito público, la referencia central es la Directiva (UE) 2016/2102, trasladada al ordenamiento español mediante el Real Decreto 1112/2018.

Esta norma regula la accesibilidad de sitios web y aplicaciones móviles del sector público y, además del cumplimiento técnico, exige también una serie de obligaciones organizativas. Entre ellas:

- cumplir los requisitos de accesibilidad aplicables,
- publicar una declaración de accesibilidad,
- ofrecer un mecanismo de comunicación y reclamación,
- realizar revisiones periódicas,
- y articular responsabilidades internas en materia de accesibilidad.

### Norma europea EN 301 549

El estándar técnico europeo de referencia es la EN 301 549, que recoge requisitos de accesibilidad para productos y servicios TIC.

Conviene matizar algo: la versión armonizada vigente de EN 301 549 utilizada en este contexto europeo sigue apoyándose en **WCAG 2.1** para web y aplicaciones. Aun así, desde el punto de vista técnico tiene sentido trabajar ya con **WCAG 2.2** como referencia de mejora, porque amplía criterios y no contradice lo anterior.

Además, EN 301 549 no se limita a páginas web. También cubre otros entornos, productos y servicios digitales, por lo que actúa como un marco más amplio cuando hablamos de accesibilidad en TIC.

### Qué implica en la práctica

En la práctica, cumplir la normativa no consiste solo en pasar un validador. Implica diseñar, desarrollar, mantener y revisar los contenidos con criterios de accesibilidad, documentar el estado real del servicio y ofrecer vías para que una persona usuaria pueda comunicar barreras, solicitar alternativas o ejercer sus derechos.

Por eso conviene leer la legislación junto con las WCAG: la legislación marca el marco de obligación y las WCAG concretan buena parte de los requisitos técnicos que luego hay que verificar.

## Qué son las WCAG

Las WCAG (*Web Content Accessibility Guidelines*) son las pautas del W3C para hacer accesible el contenido web. Aunque nacieron para la web, hoy son también la referencia principal para revisar la accesibilidad de páginas y aplicaciones.

## Versiones

- **WCAG 1.0**: publicada en 1999. Fue la primera versión.
- **WCAG 2.0**: publicada en 2008. Introdujo la estructura basada en principios, pautas y criterios de conformidad.
- **WCAG 2.1**: publicada en 2018. Añadió requisitos, sobre todo orientados a móvil, baja visión y aspectos cognitivos.
- **WCAG 2.2**: publicada en 2023. Es la versión más reciente y la que tomamos como referencia en este curso.

## Los cuatro principios

Las WCAG 2.2 se apoyan en cuatro principios fundamentales:

- **1. Perceptible**: la información debe poder percibirse por distintos medios. Por ejemplo, una imagen informativa necesita texto alternativo.
- **2. Utilizable**: la interfaz debe poder manejarse. Por ejemplo, una página debe poder usarse con teclado y no solo con ratón.
- **3. Comprensible**: el contenido y el funcionamiento deben entenderse con facilidad. Por ejemplo, los formularios deben estar bien etiquetados y los errores deben explicarse con claridad.
- **4. Robusto**: el contenido debe estar bien construido para que navegadores y tecnologías de apoyo puedan interpretarlo correctamente.

## Criterios de conformidad

Lo que realmente se comprueba para determinar si una web cumple WCAG son los **criterios de conformidad**. Actualmente, en WCAG 2.2 hay **86 criterios**.

Cada criterio pertenece a una pauta concreta y tiene asignado un nivel de conformidad:

- **Nivel A**: criterios imprescindibles. Si no se cumplen, muchas personas no podrán acceder al contenido o completar tareas básicas.
- **Nivel AA**: criterios que permiten acceder y usar el contenido de una forma razonablemente accesible. En España y en la mayor parte de normativas internacionales, este es el nivel que normalmente se exige.
- **Nivel AAA**: criterios de accesibilidad avanzada. Son útiles como mejora, pero difíciles de aplicar de forma general en todos los contenidos.

Cumplir nivel AA significa cumplir todos los criterios de nivel A y todos los criterios de nivel AA que sean aplicables.

Un ejemplo sencillo:

- Principio: **Perceptible**.
- Pauta: **1.1 Alternativas textuales**.
- Criterio: **1.1.1 Contenido no textual**.
- Nivel: **A**.

Ese criterio significa, simplificando mucho, que si una imagen transmite información debe tener una alternativa textual equivalente. Si la imagen es decorativa, no necesita esa misma alternativa.

## Barreras frecuentes y situación actual

El estado actual de accesibilidad en la web sigue siendo claramente mejorable. El informe [WebAIM Million 2026 (Inglés)](https://webaim.org/projects/million/?locale=en_GB), basado en el análisis de un millón de páginas de inicio, muestra algunos datos bastante claros:

- El 95,9% de las páginas analizadas presentaba fallos automáticos de WCAG.
- Se detectaron 56.114.377 errores distintos, con una media de 56,1 errores por página de inicio.
- El 96% de los errores detectados se concentraba en solo seis tipos de problema.

Los fallos más frecuentes eran:

- Contraste insuficiente en textos, presente en el 83,9% de las páginas.
- Imágenes sin texto alternativo, presente en el 53,1% de las páginas.
- Campos de formulario sin etiquetas correctas, presente en el 51% de las páginas.
- Enlaces vacíos, presente en el 46,3% de las páginas.
- Botones vacíos, presente en el 30,6% de las páginas.
- Idioma del documento sin marcar, presente en el 13,5% de las páginas.

Esto es importante porque muestra que gran parte de la inaccesibilidad no viene de problemas exóticos o muy avanzados, sino de errores repetidos de contenido, estructura y semántica. Precisamente por eso tiene sentido revisar estos puntos de forma sistemática desde el principio.

## Referencias

- [W3C: Introducción a la accesibilidad web](https://www.w3.org/WAI/fundamentals/accessibility-intro/es)
- [W3C: Sumario de WCAG 2](https://www.w3.org/WAI/standards-guidelines/wcag/es)
- [W3C: Resumen de los estándares de accesibilidad de W3C](https://www.w3.org/WAI/standards-guidelines/es)
- [WebAIM Million 2026 (Inglés)](https://webaim.org/projects/million/?locale=en_GB)
- [Normativa Accesibilidad Digital](https://web.ua.es/es/accesibilidad/unidad/normativa-de-accesibilidad-digital.html)
- [ONU: Convención sobre los derechos de las personas con discapacidad](https://www.un.org/disabilities/documents/convention/convoptprot-s.pdf)
- [Directiva (UE) 2016/2102](https://eur-lex.europa.eu/eli/dir/2016/2102/oj)
- [BOE: Real Decreto 1112/2018](https://www.boe.es/eli/es/rd/2018/09/07/1112)
- [ETSI: EN 301 549 (Inglés)](https://www.etsi.org/human-factors-accessibility/en-301-549-v3-the-harmonized-european-standard-for-ict-accessibility)
