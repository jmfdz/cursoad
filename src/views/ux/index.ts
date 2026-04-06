import { markRaw } from 'vue'
import type { CourseBlock } from '../../course/types'
import Intro from './Intro.vue'
import DisenoInclusivo from './DisenoInclusivo.vue'
import Usabilidad from './Usabilidad.vue'
import Ux from './Ux.vue'
import Tecnicas from './Tecnicas.vue'
import LeyesUx from './LeyesUx.vue'
import Color from './Color.vue'
import EjemplosDiseno from './EjemplosDiseno.vue'

export const uxBlock: CourseBlock = {
  slug: "ux",
  shortTitle: "Usabilidad y UX",
  title: "Usabilidad y UX",
  route: "/ux",
  menuDescription: "Diseño inclusivo, usabilidad, UX, color y patrones de diseño.",
  homeSummary: "Reúne principios de diseño inclusivo, usabilidad, experiencia de usuario, color y patrones aplicados al diseño e implementación de interfaces.",
  introComponent: markRaw(Intro),
  sections: [
    {
      id: "diseno-inclusivo",
      title: "Principios de diseño inclusivo",
      component: markRaw(DisenoInclusivo),
      toc: "h2",
    },
    {
      id: "usabilidad",
      title: "Usabilidad",
      component: markRaw(Usabilidad),
      toc: "h2",
    },
    {
      id: "ux",
      title: "Experiencia de usuario (UX)",
      component: markRaw(Ux),
      toc: "h2",
    },
    {
      id: "tecnicas",
      title: "Técnicas y herramientas comunes en usabilidad y UX",
      component: markRaw(Tecnicas),
      toc: "h2",
    },
    {
      id: "leyes-ux",
      title: "Leyes UX",
      component: markRaw(LeyesUx),
      toc: "h2-h3",
    },
    {
      id: "color",
      title: "Correcto uso del color",
      component: markRaw(Color),
      toc: "h2",
      figure: {
        src: "/curso-media/image7.png",
        alt: "Herramienta de contraste de color con ratio 3.83, insuficiente.",
        caption: "Captura de la herramienta de comprobación del contraste entre colores."
      },
      gallery: [
        {
          src: "/curso-media/image6.png",
          alt: "Cinco ejemplos de combinaciones de color con distintos ratios de contraste.",
          caption: "Ejemplos de combinaciones de color y su ratio de contraste."
        },
        {
          src: "/curso-media/image8.png",
          alt: "Listado de colores alternativos que sí cumplen contraste mínimo.",
          caption: "Propuesta de colores alternativos accesibles."
        },
        {
          src: "/curso-media/image9.png",
          alt: "Herramienta de contraste con combinación ajustada que alcanza ratio 4.50.",
          caption: "La misma herramienta tras elegir una combinación accesible."
        },
        {
          src: "/curso-media/image10.png",
          alt: "Extensión Colorblindly con la opción Green-Blind seleccionada.",
          caption: "Simulación de ceguera al color con Colorblindly."
        },
        {
          src: "/curso-media/image11.png",
          alt: "Botones de Bootstrap con visión estándar.",
          caption: "Esquema de color típico de Bootstrap 5 sin patologías de visión cromática."
        },
        {
          src: "/curso-media/image12.png",
          alt: "Botones de Bootstrap simulando problemas de ceguera al color.",
          caption: "Comparativa de botones con problemas de ceguera al color."
        }
      ],
      examples: [
        {
          title: "Ejemplo de contraste y estilos corporativos",
          href: "/ejemplos/bs3/colores.html",
          description: "Ejemplo con colores corporativos y ajustes de contraste sobre Bootstrap 3."
        },
        {
          title: "Ejemplo de formularios usables",
          href: "/ejemplos/formularios.html",
          description: "Ejemplo relacionado con foco inicial, alertas, validación y otras mejoras de usabilidad en formularios."
        }
      ],
    },
    {
      id: "ejemplos-diseno",
      title: "Ejemplos de diseño",
      component: markRaw(EjemplosDiseno),
      toc: "h2",
      gallery: [
        {
          src: "/curso-media/image13.png",
          alt: "Diseño en dos columnas con un traductor: entrada a la izquierda y resultado a la derecha.",
          caption: "Ejemplo de diseño a dos columnas en escritorio y una en móvil."
        },
        {
          src: "/curso-media/image14.png",
          alt: "Formulario con una columna principal y panel lateral de más información.",
          caption: "Ejemplo de formulario con panel adicional de información."
        },
        {
          src: "/curso-media/image15.png",
          alt: "Formulario centrado en la pantalla con anchura limitada.",
          caption: "Ejemplo de formulario centrado al estilo Google o Microsoft Forms."
        },
        {
          src: "/curso-media/image16.png",
          alt: "Pantalla de un asistente por pasos con el segundo paso activo.",
          caption: "Ejemplo de formulario o asistente por pasos."
        },
        {
          src: "/curso-media/image17.png",
          alt: "Vista tipo Trello con solicitudes en columnas de estado.",
          caption: "Ejemplo de paneles tipo Trello para solicitudes."
        },
        {
          src: "/curso-media/image18.png",
          alt: "Pantalla de Vértice con tabla de vídeos, filtros y metadatos.",
          caption: "Captura incluida en el documento para mostrar cómo podría ser Vértice."
        }
      ],
      examples: [
        {
          title: "Diseño a dos columnas",
          href: "/ejemplos/2columnas.html",
          description: "Patrón de escritorio con interacción a la izquierda y resultado a la derecha, colapsando a una columna en móvil."
        },
        {
          title: "Formulario centrado",
          href: "/ejemplos/centrado.html",
          description: "Composición de anchura limitada para mejorar legibilidad y reducir la longitud de línea de los campos."
        },
        {
          title: "Asistente por pasos",
          href: "/ejemplos/pasos.html",
          description: "Ejemplo de flujo guiado por pasos con progresión visual."
        },
        {
          title: "Paneles tipo Trello",
          href: "/ejemplos/paneles.html",
          description: "Distribución en paneles para trabajo operativo y seguimiento de solicitudes."
        },
        {
          title: "Propuesta de Vértice",
          href: "/ejemplos/vertice.html",
          description: "Captura navegable del concepto visual utilizado para explorar una posible evolución de Vértice."
        }
      ],
    }
  ],
}
