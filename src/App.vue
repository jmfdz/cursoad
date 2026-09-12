<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { bloquesCurso, getRutaApartado } from './curso'

const navbarTitle = 'Accesibilidad, Usabilidad y UX'
const menuAbierto = ref(false)
const route = useRoute()

const closeMainNav = () => {
  menuAbierto.value = false
}

const esBloqueActual = (slug: string) => String(route.name ?? '').startsWith(`${slug}-`)

const esApartadoActual = (slug: string, apartadoId: string) =>
  route.name === `${slug}-${apartadoId}`
</script>

<template>
  <div class="min-vh-100">
    <a class="skip-link" href="#contenido-principal">Saltar al contenido principal</a>

    <div class="bg-primary text-white py-1">
      <div class="container small d-flex flex-wrap align-items-center justify-content-between gap-2">
        <span class="fw-semibold" lang="ca-valencia">Universitat d'Alacant</span>
        <a class="text-white fw-semibold" href="https://www.ua.es" rel="noreferrer">
          Universidad de Alicante
        </a>
      </div>
    </div>

    <nav class="navbar navbar-expand-xl bg-white border-bottom shadow-sm sticky-top" aria-label="Navegación principal">
      <div class="container">
        <RouterLink
          class="navbar-brand d-inline-block fw-bold text-wrap lh-sm"
          to="/"
          :aria-current="route.name === 'home' ? 'page' : undefined"
          @click="closeMainNav"
        >
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
                :class="{ active: esBloqueActual(block.slug) }"
              >
                {{ block.shortTitle }}
              </button>
              <ul class="dropdown-menu dropdown-menu-end">
                <li v-for="section in block.sections" :key="section.id">
                  <RouterLink
                    class="dropdown-item"
                    :to="getRutaApartado(block.slug, section.id)"
                    :class="{ active: esApartadoActual(block.slug, section.id) }"
                    :aria-current="esApartadoActual(block.slug, section.id) ? 'page' : undefined"
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
