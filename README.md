# Curso de accesibilidad, usabilidad y UX

## Generar la web estática

El proyecto está configurado para publicarse en:

```text
https://web.ua.es/accesibilidad/docs_ua/
```

Instala las dependencias y genera la versión para la web de la UA:

```sh
pnpm install
pnpm run build:ua
```

Vite crea el resultado en `dist/`. Hay que copiar **el contenido de esa carpeta**
al directorio `accesibilidad/docs_ua/` del servidor, de modo que el fichero principal
quede publicado como `accesibilidad/docs_ua/index.html`.

El build de UA también genera `docs_ua.zip` en la raíz del proyecto, con el contenido
de `dist/` directamente dentro del ZIP, sin una carpeta contenedora. Se actualiza
en cada compilación y elimina del ZIP los ficheros que ya no estén en `dist/`.
Para generarlo es necesario tener disponible el comando `zip`.

Las rutas internas usan `#` para que todas las páginas funcionen en un alojamiento
estático sin reglas de reescritura. Por ejemplo:

```text
https://web.ua.es/accesibilidad/docs_ua/#/documentos/word
```

## Generar y desplegar en Cloudflare

El perfil predeterminado conserva la publicación en la raíz del dominio de
Cloudflare y sus rutas sin `#`:

```sh
pnpm run build
pnpm run deploy
```

Cada compilación vuelve a crear `dist/`. Por tanto, antes de copiar los ficheros
a la web de la UA hay que ejecutar `pnpm run build:ua`; antes de desplegar en
Cloudflare, `pnpm run deploy` genera de nuevo la versión adecuada automáticamente.
