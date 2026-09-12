import { mkdir, writeFile } from 'node:fs/promises'
import { createServer } from 'vite'
import vue from '@vitejs/plugin-vue'
import { createSSRApp, h } from 'vue'
import { renderToString } from 'vue/server-renderer'

// Renderizamos los componentes para incluir también su texto dinámico y sus slots.
const servidor = await createServer({
  configFile: false,
  plugins: [vue()],
  server: { middlewareMode: true, hmr: false, ws: false },
  optimizeDeps: { noDiscovery: true, include: [] },
  appType: 'custom',
})

function textoPlano(html) {
  const entidades = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ' }
  return html
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/<[^>]*>/g, ' ')
    .replace(/&(#x[\da-f]+|#\d+|amp|lt|gt|quot|apos|nbsp);/gi, (original, entidad) => {
      if (entidad.startsWith('#x')) return String.fromCodePoint(parseInt(entidad.slice(2), 16))
      if (entidad.startsWith('#')) return String.fromCodePoint(Number(entidad.slice(1)))
      return entidades[entidad] ?? original
    })
    .replace(/\s+/g, ' ')
    .trim()
}

try {
  const { bloquesCurso, getRutaApartado } = await servidor.ssrLoadModule('/src/curso.ts')
  const indice = []
  for (const bloque of bloquesCurso) {
    for (const apartado of bloque.sections) {
      const html = await renderToString(createSSRApp({ render: () => h(apartado.component) }))
      const complementos = [
        apartado.figure?.caption,
        ...(apartado.gallery ?? []).map(figura => figura.caption),
        ...(apartado.examples ?? []).flatMap(ejemplo => [ejemplo.title, ejemplo.description]),
        apartado.showcase?.title, apartado.showcase?.summary,
        ...(apartado.showcase?.notes ?? []),
        apartado.showcase?.code,
      ].filter(Boolean).join(' ')
      indice.push({
        titulo: apartado.title,
        bloque: bloque.title,
        ruta: getRutaApartado(bloque.slug, apartado.id),
        texto: textoPlano(html) + (complementos ? ` ${complementos}` : ''),
      })
    }
  }
  await mkdir('src/generated', { recursive: true })
  await writeFile('src/generated/indice-busqueda.json', JSON.stringify(indice))
  console.log(`Índice de búsqueda: ${indice.length} apartados.`)
} finally {
  await servidor.close()
}
