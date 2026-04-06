import { markRaw } from 'vue'
import type { CourseBlock } from '../../course/types'
import Intro from './Intro.vue'
import Word from './Word.vue'
import Powerpoint from './Powerpoint.vue'
import Pdf from './Pdf.vue'
import Multimedia from './Multimedia.vue'

export const documentosBlock: CourseBlock = {
  slug: "documentos",
  shortTitle: "Documentos",
  title: "Documentos",
  route: "/documentos",
  menuDescription: "Word, PowerPoint, PDF y contenidos multimedia.",
  homeSummary: "Agrupa criterios y buenas prácticas para aplicar la accesibilidad a documentos ofimáticos, PDF y materiales multimedia.",
  introComponent: markRaw(Intro),
  sections: [
    {
      id: "word",
      title: "Word",
      component: markRaw(Word),
      toc: "h2",
    },
    {
      id: "powerpoint",
      title: "PowerPoint",
      component: markRaw(Powerpoint),
      toc: "h2",
    },
    {
      id: "pdf",
      title: "PDF",
      component: markRaw(Pdf),
      toc: "h2",
    },
    {
      id: "multimedia",
      title: "Multimedia",
      component: markRaw(Multimedia),
      toc: "h2",
    }
  ],
}
