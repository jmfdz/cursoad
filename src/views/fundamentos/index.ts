import { markRaw } from 'vue'
import type { CourseBlock } from '../../course/types'
import FundamentosIntro from './FundamentosIntro.vue'
import Introduccion from './Introduccion.vue'
import Legislacion from './Legislacion.vue'
import LectorPantalla from './LectorPantalla.vue'
import PruebasAccesibilidad from './PruebasAccesibilidad.vue'
import Wcag from './Wcag.vue'

export const fundamentosBlock: CourseBlock = {
  slug: 'fundamentos',
  shortTitle: 'Fundamentos',
  title: 'Fundamentos',
  route: '/fundamentos',
  menuDescription: 'Conceptos básicos, WCAG, legislación y comprobación de accesibilidad.',
  homeSummary:
    'Introduce la accesibilidad digital, a quién beneficia, las WCAG, la legislación aplicable y las bases para validar con herramientas y lector de pantalla.',
  introComponent: markRaw(FundamentosIntro),
  sections: [
    {
      id: 'introduccion',
      title: 'Introducción a la accesibilidad digital',
      component: markRaw(Introduccion),
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
}
