<template>
  <section class="d-flex flex-column gap-5">
    <header>
      <h1>Ejemplos</h1>
      <p class="lead mb-0">
        Esta página agrupa ejemplos básicos del curso: imágenes, enlaces, botones, formularios y
        tablas.
      </p>
    </header>

    <section aria-labelledby="titulo-imagenes">
      <h3 id="titulo-imagenes">Imágenes</h3>
      <p>
        Imagen con texto alternativo:
        <img src="https://web.ua.es/es/accesibilidad/cabecera.png" width="120">
      </p>

      <p>
        Icono decorativo junto a texto visible:
        <span class="d-inline-flex align-items-center gap-2">
          <span aria-hidden="true">✎</span>
          Editar
        </span>
      </p>
    </section>

    <section aria-labelledby="titulo-enlaces-botones">
      <h2 id="titulo-enlaces-botones">Enlaces y botones</h2>
      <p>
        Para acceder al inicio del curso, entra
        <RouterLink to="/">pulsando aquí</RouterLink>.
      </p>

      <div class="mb-3">
        Enlace con imagen:
        <RouterLink to="/" class="d-inline-flex align-items-center gap-2">
          <img src="https://web.ua.es/es/accesibilidad/cabecera.png" width="120" alt="">
          Página principal del curso
        </RouterLink>
      </div>

      <div class="mb-3">
        Enlace solo con icono:
        <RouterLink to="/" class="btn btn-outline-primary" aria-label="Editar la solicitud">
          <span aria-hidden="true">✎</span>
        </RouterLink>
      </div>

      <div class="d-flex flex-wrap gap-2">
        <button type="button" class="btn btn-primary">Enviar solicitud</button>
        <button type="button" class="btn btn-light">Cancelar</button>
      </div>
    </section>

    <section aria-labelledby="titulo-colores">
      <h2 id="titulo-colores">Colores</h2>
      <p class="p-3 bg-white" style="color: #8cc8ff;">
        Este texto azul claro sobre fondo blanco tiene contraste insuficiente.
      </p>
    </section>

    <section aria-labelledby="titulo-formulario">
      <h2 id="titulo-formulario">Formulario</h2>
      <div class="row g-4">
        <div class="col-md-6">
          <p>Los campos marcados como obligatorios deben completarse antes de enviar la solicitud.</p>

          <form id="formulario-solicitud" enctype="multipart/form-data">
            <fieldset class="mb-4">
              <legend class="h3">Datos del solicitante</legend>

              <div class="mb-3">
                <label for="nombre" class="form-label">
                  Nombre <span class="example-danger">(obligatorio)</span>
                </label>
                <input
                  id="nombre"
                  type="text"
                  class="form-control"
                  name="nombre"
                  autocomplete="given-name"
                  required
                >
              </div>

              <div class="mb-3">
                <label for="apellidos" class="form-label">
                  Apellidos <span class="example-danger">(obligatorio)</span>
                </label>
                <input
                  id="apellidos"
                  type="text"
                  class="form-control"
                  name="apellidos"
                  autocomplete="family-name"
                  required
                >
              </div>

              <div class="mb-3">
                <label for="dni" class="form-label">
                  DNI <span class="example-danger">(obligatorio)</span>
                </label>
                <input
                  id="dni"
                  type="text"
                  class="form-control"
                  name="dni"
                  autocomplete="off"
                  required
                >
              </div>
            </fieldset>

            <fieldset class="mb-4">
              <legend>Género <span class="example-danger">(obligatorio)</span></legend>
              <div class="form-check">
                <input
                  id="generoHombre"
                  class="form-check-input"
                  type="radio"
                  name="genero"
                  value="hombre"
                  required
                >
                <label class="form-check-label" for="generoHombre">Hombre</label>
              </div>
              <div class="form-check">
                <input
                  id="generoMujer"
                  class="form-check-input"
                  type="radio"
                  name="genero"
                  value="mujer"
                >
                <label class="form-check-label" for="generoMujer">Mujer</label>
              </div>
            </fieldset>

            <fieldset class="mb-4">
              <legend>Datos de la solicitud</legend>

              <div class="mb-3">
                <label for="solicita" class="form-label">
                  Solicita <span class="example-danger">(obligatorio)</span>
                </label>
                <textarea
                  id="solicita"
                  class="form-control"
                  name="solicita"
                  rows="3"
                  required
                ></textarea>
              </div>

              <div class="mb-3">
                <label for="categoria" class="form-label">
                  Categoría <span class="example-danger">(obligatorio)</span>
                </label>
                <select id="categoria" class="form-select" name="categoria" required>
                  <option value="">Seleccione una categoría</option>
                  <option value="elemento1">Elemento 1</option>
                  <option value="elemento2">Elemento 2</option>
                  <option value="elemento3">Elemento 3</option>
                </select>
              </div>
            </fieldset>

            <fieldset class="mb-4">
              <legend>¿Cómo quieres que te respondamos?</legend>
              <div class="form-check">
                <input id="resEmail" class="form-check-input" type="checkbox" name="respuesta[]" value="email">
                <label class="form-check-label" for="resEmail">Por e-mail</label>
              </div>
              <div class="form-check">
                <input
                  id="resTelefono"
                  class="form-check-input"
                  type="checkbox"
                  name="respuesta[]"
                  value="telefono"
                >
                <label class="form-check-label" for="resTelefono">Por teléfono</label>
              </div>
              <div class="form-check">
                <input
                  id="resUACloud"
                  class="form-check-input"
                  type="checkbox"
                  name="respuesta[]"
                  value="uacloud"
                >
                <label class="form-check-label" for="resUACloud">Por UACloud</label>
              </div>
            </fieldset>

            <div class="mb-3">
              <label for="archivo" class="form-label">
                Adjunta tu archivo
                <span class="example-muted">(docx, pptx o pdf, máximo 10 MB)</span>
              </label>
              <input
                id="archivo"
                type="file"
                class="form-control"
                name="archivo"
                accept=".docx,.pptx,.pdf"
                aria-describedby="archivo-ayuda"
              >
              <p id="archivo-ayuda" class="form-text example-muted">
                Campo opcional. Solo se permiten documentos Word, PowerPoint o PDF.
              </p>
            </div>

            <button type="submit" class="btn btn-primary">Enviar solicitud</button>
          </form>
        </div>

        <div class="offset-md-1 col-md-5">
          <article class="card border-0 shadow-sm">
            <div class="card-body p-4">
              <h3 class="h4">Más información</h3>
              <p>
                Este formulario es un ejemplo de cómo se pueden implementar formularios accesibles
                utilizando HTML, Bootstrap 5 y Vue.
              </p>
              <p>
                La columna izquierda contiene la interacción principal y esta columna derecha aporta
                información complementaria sobre el trámite.
              </p>
              <RouterLink to="/requisitos-web/formularios" class="btn btn-primary text-white">
                Ver más información
              </RouterLink>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section aria-labelledby="titulo-tablas">
      <h2 id="titulo-tablas">Tablas</h2>

      <div class="table-responsive">
        <table class="table table-striped">
          <caption>Tabla de ejemplo con datos de solicitudes</caption>
          <thead class="table-dark">
            <tr>
              <th scope="col">Nombre y apellidos</th>
              <th scope="col">DNI</th>
              <th scope="col">Género</th>
              <th scope="col">Solicita</th>
              <th scope="col">Categoría</th>
              <th scope="col">Respuesta</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Juan Pérez</td>
              <td>12345678A</td>
              <td>Hombre</td>
              <td>Quiero información</td>
              <td>Elemento 1</td>
              <td>Email, UACloud</td>
              <td>
                <div class="dropdown">
                  <button
                    class="btn btn-sm btn-outline-primary"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    aria-label="Acciones de Juan Pérez"
                  >
                    <span aria-hidden="true">⋮</span>
                  </button>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">✎ Editar</a></li>
                    <li class="dropdown-divider" aria-hidden="true"></li>
                    <li><a class="dropdown-item" href="#">Ver</a></li>
                    <li><a class="dropdown-item" href="#">Borrar</a></li>
                  </ul>
                </div>
              </td>
            </tr>
            <tr>
              <td>Marta González</td>
              <td>23456789B</td>
              <td>Mujer</td>
              <td>Solicitud de beca</td>
              <td>Elemento 2</td>
              <td>Teléfono</td>
              <td>
                <div class="dropdown">
                  <button
                    class="btn btn-sm btn-outline-primary"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    aria-label="Acciones de Marta González"
                  >
                    <span aria-hidden="true">⋮</span>
                  </button>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">✎ Editar</a></li>
                    <li><a class="dropdown-item" href="#">Ver</a></li>
                    <li><a class="dropdown-item" href="#">Borrar</a></li>
                  </ul>
                </div>
              </td>
            </tr>
            <tr>
              <td>Carlos López</td>
              <td>34567890C</td>
              <td>Hombre</td>
              <td>Renovación matrícula</td>
              <td>Elemento 3</td>
              <td>Email</td>
              <td>
                <div class="dropdown">
                  <button
                    class="btn btn-sm btn-outline-primary"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    aria-label="Acciones de Carlos López"
                  >
                    <span aria-hidden="true">⋮</span>
                  </button>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">✎ Editar</a></li>
                    <li><a class="dropdown-item" href="#">Ver</a></li>
                    <li><a class="dropdown-item" href="#">Borrar</a></li>
                  </ul>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </section>
</template>

<style scoped>
.example-muted {
  color: #4a4a4a;
}

.example-danger {
  color: #9f1239;
}

caption {
  caption-side: top;
  color: #4a4a4a;
}
</style>
