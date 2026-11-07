<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
const menuOpen = ref(false)
const route = useRoute()
watch(() => route.fullPath, () => { menuOpen.value = false })
const links = [
  { label: 'Inicio', to: '/' }, { label: 'Nosotros', to: '/nosotros' },
  { label: 'Servicios', to: '/servicios' }, { label: 'Cobertura', to: '/cobertura' },
  { label: 'Seguimiento', to: '/seguimiento' }, { label: 'Contacto', to: '/contacto' },
]
</script>
<template>
  <header class="site-header">
    <div class="topline">
      <div class="container d-flex justify-content-between align-items-center"><span><i
            class="bi bi-geo-alt me-2"></i>Soluciones logísticas para empresas en Colombia</span><a
          href="mailto:servicioalcliente@dimensionlogistica.com"><i
            class="bi bi-envelope me-2"></i>servicioalcliente@dimensionlogistica.com</a></div>
    </div>
    <nav class="navbar navbar-expand-lg">
      <div class="container">

        <RouterLink class="brand" to="/" aria-label="Dimension Logística, inicio">
          <img src="../images/logotipo.png" alt="Dimension Logística" class="brand-logo" />
        </RouterLink>

        <button class="navbar-toggler" type="button" :aria-expanded="menuOpen" aria-label="Abrir menú"
          @click="menuOpen = !menuOpen"><i :class="menuOpen ? 'bi bi-x-lg' : 'bi bi-list'"></i></button>
        <div class="navbar-collapse" :class="{ show: menuOpen }">
          <div class="navbar-nav ms-auto align-items-lg-center">
            <RouterLink v-for="link in links" :key="link.to" class="nav-link" :to="link.to">{{ link.label }}
            </RouterLink>
            <RouterLink class="btn btn-accent nav-cta" to="/cotizar">Solicitar cotización <i
                class="bi bi-arrow-up-right ms-2"></i></RouterLink>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>
