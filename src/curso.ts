import { markRaw } from 'vue'
import type { Component } from 'vue'
import IntroduccionBloqueFundamentos from './views/fundamentos/IntroduccionBloque.vue'
import IntroduccionFundamentos from './views/fundamentos/Introduccion.vue'
import Legislacion from './views/fundamentos/Legislacion.vue'
import LectorPantalla from './views/fundamentos/LectorPantalla.vue'
import PruebasAccesibilidad from './views/fundamentos/PruebasAccesibilidad.vue'
import Wcag from './views/fundamentos/Wcag.vue'
import IntroduccionDocumentos from './views/documentos/Introduccion.vue'
import Multimedia from './views/documentos/Multimedia.vue'
import Pdf from './views/documentos/Pdf.vue'
import Powerpoint from './views/documentos/Powerpoint.vue'
import Word from './views/documentos/Word.vue'
import ComponentesEjemplos from './views/requisitos-web/ComponentesEjemplos.vue'
import Encabezados from './views/requisitos-web/Encabezados.vue'
import EnlacesBotones from './views/requisitos-web/EnlacesBotones.vue'
import Estructura from './views/requisitos-web/Estructura.vue'
import Formularios from './views/requisitos-web/Formularios.vue'
import Idioma from './views/requisitos-web/Idioma.vue'
import Imagenes from './views/requisitos-web/Imagenes.vue'
import IntroduccionRequisitosWeb from './views/requisitos-web/Introduccion.vue'
import PaginaWeb from './views/requisitos-web/PaginaWeb.vue'
import Tablas from './views/requisitos-web/Tablas.vue'
import Texto from './views/requisitos-web/Texto.vue'
import WaiAria from './views/requisitos-web/WaiAria.vue'
import Color from './views/ux/Color.vue'
import DisenoInclusivo from './views/ux/DisenoInclusivo.vue'
import EjemplosDiseno from './views/ux/EjemplosDiseno.vue'
import IntroduccionUx from './views/ux/Introduccion.vue'
import LeyesUx from './views/ux/LeyesUx.vue'
import Tecnicas from './views/ux/Tecnicas.vue'
import Usabilidad from './views/ux/Usabilidad.vue'
import ExperienciaUsuario from './views/ux/ExperienciaUsuario.vue'

export type Figura = {
  src: string
  alt: string
  caption: string
}

export type EjemploApartado = {
  title: string
  href: string
  description: string
}

export type DemostracionApartado = {
  title: string
  summary: string
  code: string
  previewHtml: string
  notes?: string[]
}

export type ModoIndice = 'none' | 'h2' | 'h2-h3'

export type ApartadoCurso = {
  id: string
  title: string
  component: Component
  toc?: ModoIndice
  figure?: Figura
  gallery?: Figura[]
  examples?: EjemploApartado[]
  showcase?: DemostracionApartado
}

export type BloqueCurso = {
  slug: string
  shortTitle: string
  title: string
  menuDescription: string
  homeSummary?: string
  introComponent: Component
  sections: ApartadoCurso[]
}

export type SubtituloApartado = {
  id: string
  title: string
  level: 2 | 3
}

export const tituloCurso = 'Accesibilidad digital, usabilidad y UX'

export const autorCurso = 'José María Fernández Gil'

export const fechaRevisionCurso = '6 de abril de 2026'

export const enlacesCurso = [
  {
    label: 'Repositorio GitHub',
    href: 'https://github.com/jmfdz/cursoad/',
  },
  {
    label: 'Web de ejemplos',
    href: 'https://jmfdz.github.io/cursoad/',
  },
]

export const indiceOriginalCurso = [
  { title: 'Accesibilidad digital, usabilidad y UX', page: 1 },
  { title: 'Fundamentos de la accesibilidad digital', page: 3 },
  { title: 'Introducción a la accesibilidad digital', page: 3 },
  { title: 'Tipos de discapacidad', page: 4 },
  { title: 'Pautas de Accesibilidad para el Contenido web (WCAG)', page: 5 },
  { title: 'Criterios de las WCAG y niveles de accesibilidad', page: 6 },
  { title: 'Legislación aplicable', page: 7 },
  { title: 'Extensión de navegador de CADUA', page: 9 },
  { title: 'Uso de un lector de pantalla', page: 11 },
  { title: 'Requisitos web', page: 13 },
  { title: 'Texto', page: 13 },
  { title: 'Idioma', page: 16 },
  { title: 'Estructura y semántica', page: 18 },
  { title: 'Estructura de una página web', page: 19 },
  { title: 'Encabezados', page: 21 },
  { title: 'Imágenes y elementos no textuales', page: 22 },
  { title: 'Enlaces y botones', page: 24 },
  { title: 'Tablas', page: 25 },
  { title: 'Formularios', page: 26 },
  { title: 'Componentes interactivos', page: 33 },
  { title: 'WAI-ARIA', page: 33 },
  { title: 'Ejemplos de componentes', page: 40 },
  { title: 'Usabilidad y UX', page: 41 },
  { title: 'Principios de diseño inclusivo', page: 41 },
  { title: 'Usabilidad', page: 42 },
  { title: 'Experiencia de usuario (UX)', page: 42 },
  { title: 'Técnicas y herramientas comunes en usabilidad y UX', page: 43 },
  { title: 'Leyes UX', page: 44 },
  { title: 'Correcto uso del color', page: 44 },
  { title: 'Ejemplos de diseño', page: 51 },
]

export const bloquesCurso: BloqueCurso[] = [
  {
    slug: 'fundamentos',
    shortTitle: 'Fundamentos',
    title: 'Fundamentos',
    menuDescription: 'Conceptos básicos, WCAG, legislación y comprobación de accesibilidad.',
    homeSummary:
      'Introduce la accesibilidad digital, a quién beneficia, las WCAG, la legislación aplicable y las bases para validar con herramientas y lector de pantalla.',
    introComponent: markRaw(IntroduccionBloqueFundamentos),
    sections: [
      {
        id: 'introduccion',
        title: 'Introducción a la accesibilidad digital',
        component: markRaw(IntroduccionFundamentos),
        toc: 'h2',
        figure: {
          src: '/curso-media/image1.jpeg',
          alt: 'Web de la Universidad de Alicante mostrada en móvil y ordenador.',
          caption: 'Ejemplo de visualización de una misma web en móvil y ordenador.',
        },
      },
      {
        id: 'wcag',
        title: 'Pautas de Accesibilidad para el Contenido web (WCAG)',
        component: markRaw(Wcag),
        toc: 'h2',
      },
      {
        id: 'legislacion',
        title: 'Legislación aplicable',
        component: markRaw(Legislacion),
        toc: 'h2',
        figure: {
          src: '/curso-media/image2.jpeg',
          alt: 'Mapa de Europa con referencias a normativa europea y española sobre accesibilidad.',
          caption: 'Imagen usada en el documento para contextualizar la legislación aplicable.',
        },
      },
      {
        id: 'lector',
        title: 'Uso de un lector de pantalla',
        component: markRaw(LectorPantalla),
        toc: 'h2',
      },
      {
        id: 'cadua',
        title: 'Pruebas de accesibilidad: automáticas y manuales',
        component: markRaw(PruebasAccesibilidad),
        toc: 'h2',
        figure: {
          src: '/curso-media/image3.png',
          alt: 'Captura de pantalla de la extensión CADUA mostrando errores de lista vacía y tabla sin título.',
          caption: 'Resultados de la extensión de navegador de CADUA.',
        },
      },
    ],
  },
  {
    slug: 'requisitos-web',
    shortTitle: 'Requisitos',
    title: 'Requisitos web',
    menuDescription: 'Texto, semántica, formularios, tablas, componentes y ARIA.',
    homeSummary:
      'Recoge los requisitos técnicos que deben cumplir las páginas y aplicaciones web: texto, idioma, estructura, imágenes, enlaces, tablas, formularios y componentes accesibles.',
    introComponent: markRaw(IntroduccionRequisitosWeb),
    sections: [
      {
        id: 'texto',
        title: 'Texto',
        component: markRaw(Texto),
        toc: 'h2',
        figure: {
          src: '/curso-media/image4.jpeg',
          alt: 'Ejemplo de texto incorrecto justificado y otro correcto alineado a la izquierda.',
          caption: 'Comparativa del documento sobre maquetación de texto incorrecta y correcta.',
        },
      },
      {
        id: 'idioma',
        title: 'Idioma',
        component: markRaw(Idioma),
        toc: 'h2',
      },
      {
        id: 'estructura',
        title: 'Estructura y semántica',
        component: markRaw(Estructura),
        toc: 'h2',
      },
      {
        id: 'pagina-web',
        title: 'Estructura de una página web',
        component: markRaw(PaginaWeb),
        toc: 'h2',
        figure: {
          src: '/curso-media/image5.png',
          alt: 'Captura de Chrome con dos pestañas con títulos diferentes.',
          caption: 'Ejemplo usado para explicar por qué cada página debe tener un título único.',
        },
      },
      {
        id: 'encabezados',
        title: 'Encabezados',
        component: markRaw(Encabezados),
        toc: 'h2',
      },
      {
        id: 'imagenes',
        title: 'Imágenes y elementos no textuales',
        component: markRaw(Imagenes),
        toc: 'h2',
      },
      {
        id: 'enlaces-botones',
        title: 'Enlaces y botones',
        component: markRaw(EnlacesBotones),
        toc: 'h2',
      },
      {
        id: 'tablas',
        title: 'Tablas',
        component: markRaw(Tablas),
        toc: 'h2',
        showcase: {
          title: 'Ejemplo de tabla',
          summary:
            'Este es el ejemplo del curso que antes estaba en `ejemplos/tablas.html`, integrado directamente en el tema para poder explicarlo y verlo en el mismo contexto.',
          code: "<h3>Lista de Solicitudes</h3>\n<div class=\"table-responsive\">\n  <table class=\"table table-striped\">\n    <caption>Tabla de ejemplo con datos de solicitudes</caption>\n    <thead class=\"table-dark\">\n      <tr>\n        <th scope=\"col\">Nombre</th>\n        <th scope=\"col\">DNI</th>\n        <th scope=\"col\">Género</th>\n        <th scope=\"col\">Solicita</th>\n        <th scope=\"col\">Respuesta(s)</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>\n          Juan Pérez\n          <div class=\"dropdown d-inline-block ms-2\">\n            <button class=\"btn btn-sm p-0\" type=\"button\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\" aria-label=\"Acciones de Juan Pérez\">⋮</button>\n            <ul class=\"dropdown-menu\">\n              <li><a class=\"dropdown-item\" href=\"#\">Editar</a></li>\n              <li><a class=\"dropdown-item\" href=\"#\">Ver</a></li>\n              <li><a class=\"dropdown-item\" href=\"#\">Borrar</a></li>\n            </ul>\n          </div>\n        </td>\n        <td>12345678A</td>\n        <td>Hombre</td>\n        <td>Quiero información</td>\n        <td>Email, UACloud</td>\n      </tr>\n      <tr>\n        <td>Marta González</td>\n        <td>23456789B</td>\n        <td>Mujer</td>\n        <td>Solicitud de beca</td>\n        <td>Teléfono</td>\n      </tr>\n      <tr>\n        <td>Carlos López</td>\n        <td>34567890C</td>\n        <td>Hombre</td>\n        <td>Renovación matrícula</td>\n        <td>Email</td>\n      </tr>\n      <tr>\n        <td>Ana Martínez</td>\n        <td>45678901D</td>\n        <td>Mujer</td>\n        <td>Reclamación de nota</td>\n        <td>Teléfono, UACloud</td>\n      </tr>\n      <tr>\n        <td>David Ramírez</td>\n        <td>56789012E</td>\n        <td>Hombre</td>\n        <td>Modificación de horario</td>\n        <td>UACloud</td>\n      </tr>\n    </tbody>\n  </table>\n</div>",
          previewHtml:
            "<div><h3 class=\"h4 mb-3\">Lista de Solicitudes</h3><div class=\"table-responsive\"><table class=\"table table-striped\"><caption>Tabla de ejemplo con datos de solicitudes</caption><thead class=\"table-dark\"><tr><th scope=\"col\">Nombre</th><th scope=\"col\">DNI</th><th scope=\"col\">Género</th><th scope=\"col\">Solicita</th><th scope=\"col\">Respuesta(s)</th></tr></thead><tbody><tr><td>Juan Pérez <div class=\"dropdown d-inline-block ms-2\"><button class=\"btn btn-sm p-0\" type=\"button\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\" aria-label=\"Acciones de Juan Pérez\">⋮</button><ul class=\"dropdown-menu\"><li><a class=\"dropdown-item\" href=\"#\">Editar</a></li><li><a class=\"dropdown-item\" href=\"#\">Ver</a></li><li><a class=\"dropdown-item\" href=\"#\">Borrar</a></li></ul></div></td><td>12345678A</td><td>Hombre</td><td>Quiero información</td><td>Email, UACloud</td></tr><tr><td>Marta González</td><td>23456789B</td><td>Mujer</td><td>Solicitud de beca</td><td>Teléfono</td></tr><tr><td>Carlos López</td><td>34567890C</td><td>Hombre</td><td>Renovación matrícula</td><td>Email</td></tr><tr><td>Ana Martínez</td><td>45678901D</td><td>Mujer</td><td>Reclamación de nota</td><td>Teléfono, UACloud</td></tr><tr><td>David Ramírez</td><td>56789012E</td><td>Hombre</td><td>Modificación de horario</td><td>UACloud</td></tr></tbody></table></div></div>",
          notes: [
            'La clase `table-responsive` envuelve la tabla para permitir scroll horizontal en móvil cuando no caben todas las columnas.',
            'La clase `table` aplica la maquetación base y `table-striped` alterna el fondo de las filas para mejorar el seguimiento visual.',
            'La cabecera usa `table-dark`, que en el ejemplo original del curso resaltaba claramente los encabezados.',
            'El `caption` da nombre a la tabla y los `scope="col"` identifican cada encabezado de columna.',
            'La acción por fila está dentro de un `dropdown`, de modo que varias operaciones caben en una sola celda sin saturar la tabla.',
          ],
        },
      },
      {
        id: 'formularios',
        title: 'Formularios',
        component: markRaw(Formularios),
        toc: 'h2',
        examples: [
          {
            title: 'Ejemplo de formularios',
            href: '/ejemplos/formularios.html',
            description:
              'Formulario completo con agrupaciones, ayudas, validación y mejoras de usabilidad incluido en el curso.',
          },
        ],
      },
      {
        id: 'wai-aria',
        title: 'WAI-ARIA',
        component: markRaw(WaiAria),
        toc: 'h2',
      },
      {
        id: 'componentes-ejemplos',
        title: 'Ejemplos de componentes',
        component: markRaw(ComponentesEjemplos),
        toc: 'h2',
        examples: [
          {
            title: 'Ejemplo de componentes',
            href: '/ejemplos/componentes.html',
            description:
              'Incluye ejemplos reales de modales, acordeones, menús desplegables, pestañas y otros componentes interactivos.',
          },
        ],
      },
    ],
  },
  {
    slug: 'ux',
    shortTitle: 'Usabilidad y UX',
    title: 'Usabilidad y UX',
    menuDescription: 'Diseño inclusivo, usabilidad, UX, color y patrones de diseño.',
    homeSummary:
      'Reúne principios de diseño inclusivo, usabilidad, experiencia de usuario, color y patrones aplicados al diseño e implementación de interfaces.',
    introComponent: markRaw(IntroduccionUx),
    sections: [
      {
        id: 'diseno-inclusivo',
        title: 'Principios de diseño inclusivo',
        component: markRaw(DisenoInclusivo),
        toc: 'h2',
      },
      {
        id: 'usabilidad',
        title: 'Usabilidad',
        component: markRaw(Usabilidad),
        toc: 'h2',
      },
      {
        id: 'ux',
        title: 'Experiencia de usuario (UX)',
        component: markRaw(ExperienciaUsuario),
        toc: 'h2',
      },
      {
        id: 'tecnicas',
        title: 'Técnicas y herramientas comunes en usabilidad y UX',
        component: markRaw(Tecnicas),
        toc: 'h2',
      },
      {
        id: 'leyes-ux',
        title: 'Leyes UX',
        component: markRaw(LeyesUx),
        toc: 'h2-h3',
      },
      {
        id: 'color',
        title: 'Correcto uso del color',
        component: markRaw(Color),
        toc: 'h2',
        figure: {
          src: '/curso-media/image7.png',
          alt: 'Herramienta de contraste de color con ratio 3.83, insuficiente.',
          caption: 'Captura de la herramienta de comprobación del contraste entre colores.',
        },
        gallery: [
          {
            src: '/curso-media/image6.png',
            alt: 'Cinco ejemplos de combinaciones de color con distintos ratios de contraste.',
            caption: 'Ejemplos de combinaciones de color y su ratio de contraste.',
          },
          {
            src: '/curso-media/image8.png',
            alt: 'Listado de colores alternativos que sí cumplen contraste mínimo.',
            caption: 'Propuesta de colores alternativos accesibles.',
          },
          {
            src: '/curso-media/image9.png',
            alt: 'Herramienta de contraste con combinación ajustada que alcanza ratio 4.50.',
            caption: 'La misma herramienta tras elegir una combinación accesible.',
          },
          {
            src: '/curso-media/image10.png',
            alt: 'Extensión Colorblindly con la opción Green-Blind seleccionada.',
            caption: 'Simulación de ceguera al color con Colorblindly.',
          },
          {
            src: '/curso-media/image11.png',
            alt: 'Botones de Bootstrap con visión estándar.',
            caption: 'Esquema de color típico de Bootstrap 5 sin patologías de visión cromática.',
          },
          {
            src: '/curso-media/image12.png',
            alt: 'Botones de Bootstrap simulando problemas de ceguera al color.',
            caption: 'Comparativa de botones con problemas de ceguera al color.',
          },
        ],
        examples: [
          {
            title: 'Ejemplo de contraste y estilos corporativos',
            href: '/ejemplos/bs3/colores.html',
            description:
              'Ejemplo con colores corporativos y ajustes de contraste sobre Bootstrap 3.',
          },
          {
            title: 'Ejemplo de formularios usables',
            href: '/ejemplos/formularios.html',
            description:
              'Ejemplo relacionado con foco inicial, alertas, validación y otras mejoras de usabilidad en formularios.',
          },
        ],
      },
      {
        id: 'ejemplos-diseno',
        title: 'Ejemplos de diseño',
        component: markRaw(EjemplosDiseno),
        toc: 'h2',
        gallery: [
          {
            src: '/curso-media/image13.png',
            alt: 'Diseño en dos columnas con un traductor: entrada a la izquierda y resultado a la derecha.',
            caption: 'Ejemplo de diseño a dos columnas en escritorio y una en móvil.',
          },
          {
            src: '/curso-media/image14.png',
            alt: 'Formulario con una columna principal y panel lateral de más información.',
            caption: 'Ejemplo de formulario con panel adicional de información.',
          },
          {
            src: '/curso-media/image15.png',
            alt: 'Formulario centrado en la pantalla con anchura limitada.',
            caption: 'Ejemplo de formulario centrado al estilo Google o Microsoft Forms.',
          },
          {
            src: '/curso-media/image16.png',
            alt: 'Pantalla de un asistente por pasos con el segundo paso activo.',
            caption: 'Ejemplo de formulario o asistente por pasos.',
          },
          {
            src: '/curso-media/image17.png',
            alt: 'Vista tipo Trello con solicitudes en columnas de estado.',
            caption: 'Ejemplo de paneles tipo Trello para solicitudes.',
          },
          {
            src: '/curso-media/image18.png',
            alt: 'Pantalla de Vértice con tabla de vídeos, filtros y metadatos.',
            caption: 'Captura incluida en el documento para mostrar cómo podría ser Vértice.',
          },
        ],
        examples: [
          {
            title: 'Diseño a dos columnas',
            href: '/ejemplos/2columnas.html',
            description:
              'Patrón de escritorio con interacción a la izquierda y resultado a la derecha, colapsando a una columna en móvil.',
          },
          {
            title: 'Formulario centrado',
            href: '/ejemplos/centrado.html',
            description:
              'Composición de anchura limitada para mejorar legibilidad y reducir la longitud de línea de los campos.',
          },
          {
            title: 'Asistente por pasos',
            href: '/ejemplos/pasos.html',
            description: 'Ejemplo de flujo guiado por pasos con progresión visual.',
          },
          {
            title: 'Paneles tipo Trello',
            href: '/ejemplos/paneles.html',
            description:
              'Distribución en paneles para trabajo operativo y seguimiento de solicitudes.',
          },
          {
            title: 'Propuesta de Vértice',
            href: '/ejemplos/vertice.html',
            description:
              'Captura navegable del concepto visual utilizado para explorar una posible evolución de Vértice.',
          },
        ],
      },
    ],
  },
  {
    slug: 'documentos',
    shortTitle: 'Documentos',
    title: 'Documentos',
    menuDescription: 'Word, PowerPoint, PDF y contenidos multimedia.',
    homeSummary:
      'Agrupa criterios y buenas prácticas para aplicar la accesibilidad a documentos ofimáticos, PDF y materiales multimedia.',
    introComponent: markRaw(IntroduccionDocumentos),
    sections: [
      {
        id: 'word',
        title: 'Word',
        component: markRaw(Word),
        toc: 'h2',
      },
      {
        id: 'powerpoint',
        title: 'PowerPoint',
        component: markRaw(Powerpoint),
        toc: 'h2',
      },
      {
        id: 'pdf',
        title: 'PDF',
        component: markRaw(Pdf),
        toc: 'h2',
      },
      {
        id: 'multimedia',
        title: 'Multimedia',
        component: markRaw(Multimedia),
        toc: 'h2',
      },
    ],
  },
]

export const getBloquePorSlug = (slug: string) =>
  bloquesCurso.find((bloque) => bloque.slug === slug)

export const getRutaBloque = (slug: string) => `/${slug}`

export const getRutaApartado = (bloqueSlug: string, apartadoId: string) =>
  `${getRutaBloque(bloqueSlug)}/${apartadoId}`

export const getApartadoPorSlug = (bloqueSlug: string, apartadoId: string) =>
  getBloquePorSlug(bloqueSlug)?.sections.find((apartado) => apartado.id === apartadoId)
