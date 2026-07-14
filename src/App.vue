<script setup lang="ts">
import { nextTick, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { bloquesCurso, getRutaApartado } from './curso'

const navbarTitle = 'Accesibilidad, Usabilidad y UX'
const menuAbierto = ref(false)
const route = useRoute()

const closeMainNav = () => {
  menuAbierto.value = false
}

const actualizarTituloPagina = async () => {
  await nextTick()
  const titulo = document.querySelector('main h1')?.textContent?.trim()
  document.title = titulo ? `${titulo} | ${navbarTitle}` : navbarTitle

  document.querySelectorAll<HTMLAnchorElement>('a[target="_blank"]').forEach((enlace) => {
    const nombre = enlace.getAttribute('aria-label') ?? enlace.textContent?.trim()
    if (nombre && !nombre.includes('se abre en una ventana nueva')) {
      enlace.setAttribute('aria-label', `${nombre} (se abre en una ventana nueva)`)
    }
  })
}

watch(() => route.fullPath, () => {
  void actualizarTituloPagina()
})

onMounted(() => {
  void actualizarTituloPagina()
})
</script>

<template>
  <div class="min-vh-100">
    <a class="skip-link" href="#contenido-principal">Saltar al contenido principal</a>

    <nav class="navbar navbar-expand-xl bg-white border-bottom shadow-sm sticky-top" aria-label="Navegación principal">
      <div class="container">
        <RouterLink class="navbar-brand d-inline-block fw-semibold text-wrap lh-sm" to="/" @click="closeMainNav">
          {{ navbarTitle }}
        </RouterLink>
        <button
          class="navbar-toggler"
          type="button"
          @click="menuAbierto = !menuAbierto"
          aria-controls="mainNav"
          :aria-expanded="menuAbierto ? 'true' : 'false'"
          aria-label="Mostrar u ocultar menú de navegación"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div id="mainNav" class="navbar-collapse collapse" :class="{ show: menuAbierto }">
          <ul class="navbar-nav ms-auto align-items-xl-center">
            <li v-for="block in bloquesCurso" :key="block.slug" class="nav-item dropdown">
              <button
                class="nav-link dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {{ block.shortTitle }}
              </button>
              <ul class="dropdown-menu dropdown-menu-end">
                <li v-for="section in block.sections" :key="section.id">
                  <RouterLink
                    class="dropdown-item"
                    :to="getRutaApartado(block.slug, section.id)"
                    @click="closeMainNav"
                  >
                    {{ section.title }}
                  </RouterLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <main id="contenido-principal" class="container py-4 py-lg-5" tabindex="-1">
      <RouterView />
    </main>
  </div>
</template>
