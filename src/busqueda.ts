export type EntradaBusqueda = { titulo: string; bloque: string; ruta: string; texto: string }

export const normalizar = (texto: string) =>
  texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()

// Las tildes descompuestas pueden cambiar la posición al normalizar el texto.
function posicionOriginal(texto: string, posicion: number) {
  let original = 0
  let normalizada = 0
  for (const caracter of texto) {
    normalizada += normalizar(caracter).length
    if (normalizada > posicion) return original
    original += caracter.length
  }
  return original
}

export function buscarEnIndice(indice: EntradaBusqueda[], consulta: string) {
  const palabras = normalizar(consulta).trim().split(/\s+/).filter(Boolean)
  if (!palabras.length) return []
  return indice.flatMap((entrada) => {
    const titulo = normalizar(entrada.titulo)
    const texto = normalizar(entrada.texto)
    const todo = `${titulo} ${normalizar(entrada.bloque)} ${texto}`
    if (!palabras.every(palabra => todo.includes(palabra))) return []
    const posiciones = palabras.map(palabra => texto.indexOf(palabra)).filter(posicion => posicion >= 0)
    const coincidencia = posiciones.length ? posicionOriginal(entrada.texto, Math.min(...posiciones)) : 0
    let inicio = Math.max(0, coincidencia - 70)
    if (inicio > 0) {
      const espacio = entrada.texto.lastIndexOf(' ', inicio)
      if (espacio >= inicio - 70) inicio = espacio + 1
    }
    let fin = Math.min(inicio + 240, entrada.texto.length)
    if (fin < entrada.texto.length && entrada.texto[fin] !== ' ') {
      const espacio = entrada.texto.lastIndexOf(' ', fin)
      if (espacio > coincidencia && espacio > inicio) fin = espacio
    }
    return [{
      ...entrada,
      fragmento: `${inicio ? '…' : ''}${entrada.texto.slice(inicio, fin)}${fin < entrada.texto.length ? '…' : ''}`,
      puntuacion: palabras.reduce((total, palabra) => total + (titulo.includes(palabra) ? 10 : 1), 0),
    }]
  }).sort((a, b) => b.puntuacion - a.puntuacion)
}
