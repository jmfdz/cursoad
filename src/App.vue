<script setup lang="ts">
import { ref } from 'vue'
import { bloquesCurso, getRutaApartado } from './curso'

const navbarTitle = 'Accesibilidad, Usabilidad y UX'
const menuAbierto = ref(false)

const closeMainNav = () => {
  menuAbierto.value = false
}
</script>

<template>
  <div class="min-vh-100">
    <nav class="navbar navbar-expand-xl bg-white border-bottom shadow-sm sticky-top">
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
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {{ block.shortTitle }}
              </a>
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

    <main class="container py-4 py-lg-5">
      <RouterView />
    </main>
  </div>
</template>
