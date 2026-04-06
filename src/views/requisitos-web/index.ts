import { markRaw } from 'vue'
import type { CourseBlock } from '../../course/types'
import Intro from './Intro.vue'
import Texto from './Texto.vue'
import Idioma from './Idioma.vue'
import Estructura from './Estructura.vue'
import PaginaWeb from './PaginaWeb.vue'
import Encabezados from './Encabezados.vue'
import Imagenes from './Imagenes.vue'
import EnlacesBotones from './EnlacesBotones.vue'
import Tablas from './Tablas.vue'
import Formularios from './Formularios.vue'
import WaiAria from './WaiAria.vue'
import ComponentesEjemplos from './ComponentesEjemplos.vue'

export const requisitosWebBlock: CourseBlock = {
  slug: "requisitos-web",
  shortTitle: "Requisitos",
  title: "Requisitos web",
  route: "/requisitos-web",
  menuDescription: "Texto, semántica, formularios, tablas, componentes y ARIA.",
  homeSummary: "Recoge los requisitos técnicos que deben cumplir las páginas y aplicaciones web: texto, idioma, estructura, imágenes, enlaces, tablas, formularios y componentes accesibles.",
  introComponent: markRaw(Intro),
  sections: [
    {
      id: "texto",
      title: "Texto",
      component: markRaw(Texto),
      toc: "h2",
      figure: {
        src: "/curso-media/image4.jpeg",
        alt: "Ejemplo de texto incorrecto justificado y otro correcto alineado a la izquierda.",
        caption: "Comparativa del documento sobre maquetación de texto incorrecta y correcta."
      },
    },
    {
      id: "idioma",
      title: "Idioma",
      component: markRaw(Idioma),
      toc: "h2",
    },
    {
      id: "estructura",
      title: "Estructura y semántica",
      component: markRaw(Estructura),
      toc: "h2",
    },
    {
      id: "pagina-web",
      title: "Estructura de una página web",
      component: markRaw(PaginaWeb),
      toc: "h2",
      figure: {
        src: "/curso-media/image5.png",
        alt: "Captura de Chrome con dos pestañas con títulos diferentes.",
        caption: "Ejemplo usado para explicar por qué cada página debe tener un título único."
      },
    },
    {
      id: "encabezados",
      title: "Encabezados",
      component: markRaw(Encabezados),
      toc: "h2",
    },
    {
      id: "imagenes",
      title: "Imágenes y elementos no textuales",
      component: markRaw(Imagenes),
      toc: "h2",
    },
    {
      id: "enlaces-botones",
      title: "Enlaces y botones",
      component: markRaw(EnlacesBotones),
      toc: "h2",
    },
    {
      id: "tablas",
      title: "Tablas",
      component: markRaw(Tablas),
      toc: "h2",
      showcase: {
        title: "Ejemplo de tabla",
        summary: "Este es el ejemplo del curso que antes estaba en `ejemplos/tablas.html`, integrado directamente en el tema para poder explicarlo y verlo en el mismo contexto.",
        code: "<h3>Lista de Solicitudes</h3>\n<div class=\"table-responsive\">\n  <table class=\"table table-striped\">\n    <caption>Tabla de ejemplo con datos de solicitudes</caption>\n    <thead class=\"table-dark\">\n      <tr>\n        <th scope=\"col\">Nombre</th>\n        <th scope=\"col\">DNI</th>\n        <th scope=\"col\">Género</th>\n        <th scope=\"col\">Solicita</th>\n        <th scope=\"col\">Respuesta(s)</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>\n          Juan Pérez\n          <div class=\"dropdown d-inline-block ms-2\">\n            <button class=\"btn btn-sm p-0\" type=\"button\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\" aria-label=\"Acciones de Juan Pérez\">⋮</button>\n            <ul class=\"dropdown-menu\">\n              <li><a class=\"dropdown-item\" href=\"#\">Editar</a></li>\n              <li><a class=\"dropdown-item\" href=\"#\">Ver</a></li>\n              <li><a class=\"dropdown-item\" href=\"#\">Borrar</a></li>\n            </ul>\n          </div>\n        </td>\n        <td>12345678A</td>\n        <td>Hombre</td>\n        <td>Quiero información</td>\n        <td>Email, UACloud</td>\n      </tr>\n      <tr>\n        <td>Marta González</td>\n        <td>23456789B</td>\n        <td>Mujer</td>\n        <td>Solicitud de beca</td>\n        <td>Teléfono</td>\n      </tr>\n      <tr>\n        <td>Carlos López</td>\n        <td>34567890C</td>\n        <td>Hombre</td>\n        <td>Renovación matrícula</td>\n        <td>Email</td>\n      </tr>\n      <tr>\n        <td>Ana Martínez</td>\n        <td>45678901D</td>\n        <td>Mujer</td>\n        <td>Reclamación de nota</td>\n        <td>Teléfono, UACloud</td>\n      </tr>\n      <tr>\n        <td>David Ramírez</td>\n        <td>56789012E</td>\n        <td>Hombre</td>\n        <td>Modificación de horario</td>\n        <td>UACloud</td>\n      </tr>\n    </tbody>\n  </table>\n</div>",
        previewHtml: "<div><h3 class=\"h4 mb-3\">Lista de Solicitudes</h3><div class=\"table-responsive\"><table class=\"table table-striped\"><caption>Tabla de ejemplo con datos de solicitudes</caption><thead class=\"table-dark\"><tr><th scope=\"col\">Nombre</th><th scope=\"col\">DNI</th><th scope=\"col\">Género</th><th scope=\"col\">Solicita</th><th scope=\"col\">Respuesta(s)</th></tr></thead><tbody><tr><td>Juan Pérez <div class=\"dropdown d-inline-block ms-2\"><button class=\"btn btn-sm p-0\" type=\"button\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\" aria-label=\"Acciones de Juan Pérez\">⋮</button><ul class=\"dropdown-menu\"><li><a class=\"dropdown-item\" href=\"#\">Editar</a></li><li><a class=\"dropdown-item\" href=\"#\">Ver</a></li><li><a class=\"dropdown-item\" href=\"#\">Borrar</a></li></ul></div></td><td>12345678A</td><td>Hombre</td><td>Quiero información</td><td>Email, UACloud</td></tr><tr><td>Marta González</td><td>23456789B</td><td>Mujer</td><td>Solicitud de beca</td><td>Teléfono</td></tr><tr><td>Carlos López</td><td>34567890C</td><td>Hombre</td><td>Renovación matrícula</td><td>Email</td></tr><tr><td>Ana Martínez</td><td>45678901D</td><td>Mujer</td><td>Reclamación de nota</td><td>Teléfono, UACloud</td></tr><tr><td>David Ramírez</td><td>56789012E</td><td>Hombre</td><td>Modificación de horario</td><td>UACloud</td></tr></tbody></table></div></div>",
        notes: [
          "La clase `table-responsive` envuelve la tabla para permitir scroll horizontal en móvil cuando no caben todas las columnas.",
          "La clase `table` aplica la maquetación base y `table-striped` alterna el fondo de las filas para mejorar el seguimiento visual.",
          "La cabecera usa `table-dark`, que en el ejemplo original del curso resaltaba claramente los encabezados.",
          "El `caption` da nombre a la tabla y los `scope=\"col\"` identifican cada encabezado de columna.",
          "La acción por fila está dentro de un `dropdown`, de modo que varias operaciones caben en una sola celda sin saturar la tabla."
        ]
      },
    },
    {
      id: "formularios",
      title: "Formularios",
      component: markRaw(Formularios),
      toc: "h2",
      examples: [
        {
          title: "Ejemplo de formularios",
          href: "/ejemplos/formularios.html",
          description: "Formulario completo con agrupaciones, ayudas, validación y mejoras de usabilidad incluido en el curso."
        }
      ],
    },
    {
      id: "wai-aria",
      title: "WAI-ARIA",
      component: markRaw(WaiAria),
      toc: "h2",
    },
    {
      id: "componentes-ejemplos",
      title: "Ejemplos de componentes",
      component: markRaw(ComponentesEjemplos),
      toc: "h2",
      examples: [
        {
          title: "Ejemplo de componentes",
          href: "/ejemplos/componentes.html",
          description: "Incluye ejemplos reales de modales, acordeones, menús desplegables, pestañas y otros componentes interactivos."
        }
      ],
    }
  ],
}
