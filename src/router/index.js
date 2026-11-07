import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ServicesView from '../views/ServicesView.vue'
import CoverageView from '../views/CoverageView.vue'
import TrackingView from '../views/TrackingView.vue'
import ContactView from '../views/ContactView.vue'

const routes = [
  { path: '/', name: 'inicio', component: HomeView, meta: { title: 'Inicio' } },
  { path: '/nosotros', name: 'nosotros', component: AboutView, meta: { title: 'Nosotros' } },
  { path: '/servicios', name: 'servicios', component: ServicesView, meta: { title: 'Servicios' } },
  { path: '/cobertura', name: 'cobertura', component: CoverageView, meta: { title: 'Cobertura' } },
  { path: '/seguimiento', name: 'seguimiento', component: TrackingView, meta: { title: 'Seguimiento' } },
  { path: '/contacto', name: 'contacto', component: ContactView, meta: { title: 'Contacto' } },
  { path: '/cotizar', redirect: { name: 'contacto', query: { tipo: 'cotizacion' } } },
]
const router = createRouter({ history: createWebHistory(), routes, scrollBehavior: () => ({ top: 0, behavior: 'smooth' }) })
router.afterEach((to) => { document.title = `${to.meta.title || 'Transporte'} | Dimension Logística` })
export default router
