export type EntradaBusqueda = { titulo: string; bloque: string; ruta: string; texto: string }

export const normalizar = (texto: string) =>
  texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()

export function buscarEnIndice(indice: EntradaBusqueda[], consulta: string) {
  const palabras = normalizar(consulta).trim().split(/\s+/).filter(Boolean)
  if (!palabras.length) return []
  return indice.flatMap((entrada) => {
    const titulo = normalizar(entrada.titulo)
    const texto = normalizar(entrada.texto)
    const todo = `${titulo} ${normalizar(entrada.bloque)} ${texto}`
    if (!palabras.every(palabra => todo.includes(palabra))) return []
    const posiciones = palabras.map(palabra => texto.indexOf(palabra)).filter(posicion => posicion >= 0)
    let inicio = Math.max(0, (posiciones.length ? Math.min(...posiciones) : 0) - 70)
    if (inicio > 0) {
      const espacio = entrada.texto.lastIndexOf(' ', inicio)
      inicio = espacio < 0 ? 0 : espacio + 1
    }
    const fin = inicio + 240
    return [{
      ...entrada,
      fragmento: `${inicio ? '…' : ''}${entrada.texto.slice(inicio, fin)}${fin < entrada.texto.length ? '…' : ''}`,
      puntuacion: palabras.reduce((total, palabra) => total + (titulo.includes(palabra) ? 10 : 1), 0),
    }]
  }).sort((a, b) => b.puntuacion - a.puntuacion)
}
