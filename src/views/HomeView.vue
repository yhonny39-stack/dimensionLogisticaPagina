<script setup>
import SectionHeading from '../components/SectionHeading.vue'
import ServiceCard from '../components/ServiceCard.vue'
import { services } from '../composables/useServices'
const benefits = [
  { icon: 'bi-shield-check', title: 'Seguridad y cuidado', text: 'Cada operación se planea teniendo en cuenta la naturaleza de la mercancía y sus condiciones de transporte.' },
  { icon: 'bi-chat-dots', title: 'Comunicación clara', text: 'Información directa para que conozcas las condiciones, los pasos y los avances de tu servicio.' },
  { icon: 'bi-calendar2-check', title: 'Planeación responsable', text: 'Coordinamos los detalles de cada recorrido para trabajar con orden y expectativas claras.' },
]
const steps = ['Cuéntanos qué necesitas', 'Evaluamos carga y ruta', 'Confirmamos el servicio', 'Programamos la recolección', 'Coordinamos el transporte', 'Confirmamos la entrega']
</script>
<template>
  <section class="hero">
    <div class="hero-shade"></div>
    <div class="container hero-content">
      <div class="hero-copy"><span class="eyebrow eyebrow-light"><span class="eyebrow-dot"></span> TRANSPORTE · FLETES ·
          LOGÍSTICA</span>
        <h1>Movemos tu mercancía.<br><em>Respaldamos tu negocio.</em></h1>
        <p>Soluciones de transporte de carga y logística pensadas para conectar empresas, organizar operaciones y
          entregar confianza en cada recorrido.</p>
        <div class="hero-actions">
          <RouterLink class="btn btn-accent btn-lg" to="/cotizar">Solicitar cotización <i
              class="bi bi-arrow-up-right ms-2"></i></RouterLink>
          <RouterLink class="btn btn-outline-light btn-lg" to="/servicios">Conocer servicios <i
              class="bi bi-play-circle ms-2"></i></RouterLink>
        </div>
        <div class="hero-note"><span class="hero-note-icon"><i class="bi bi-shield-check"></i></span><span><strong>Tu
              operación importa.</strong><small>Atención cercana de principio a fin.</small></span></div>
      </div>
      <div class="hero-side-note"><span class="vertical-line"></span><span>LOGÍSTICA CON PROPÓSITO</span></div>
    </div>
    <div class="hero-bottom">
      <div class="container">
        <div class="hero-bottom-item"><i class="bi bi-box-seam"></i><span>Soluciones a tu medida</span></div>
        <div class="hero-bottom-item"><i class="bi bi-signpost-split"></i><span>Rutas planeadas</span></div>
        <div class="hero-bottom-item"><i class="bi bi-headset"></i><span>Atención personalizada</span></div>
      </div>
    </div>
  </section>
  <section class="trust-strip">
    <div class="container trust-grid">
      <div class="trust-intro"><span class="eyebrow">UN ALIADO PARA TU OPERACIÓN</span>
        <h2>Más que transportar, <span>nos comprometemos.</span></h2>
      </div>
      <div v-for="item in benefits" :key="item.title" class="trust-item"><i :class="`bi ${item.icon}`"></i>
        <div>
          <h3>{{ item.title }}</h3>
          <p>{{ item.text }}</p>
        </div>
      </div>
    </div>
  </section>
  <section class="section section-soft">
    <div class="container">
      <div class="section-topline">
        <SectionHeading eyebrow="QUÉ HACEMOS" title="Soluciones que mueven tu negocio"
          description="Servicios flexibles para responder a las necesidades de transporte y logística de tu empresa." />
        <RouterLink class="text-link desktop-link" to="/servicios">Ver todos los servicios <i
            class="bi bi-arrow-up-right"></i></RouterLink>
      </div>
      <div class="row g-4">
        <div v-for="service in services.slice(0, 4)" :key="service.title" class="col-md-6 col-xl-3">
          <ServiceCard :service="service" />
        </div>
      </div>
      <div class="text-center mobile-link mt-4">
        <RouterLink class="text-link" to="/servicios">Ver todos los servicios <i class="bi bi-arrow-up-right"></i>
        </RouterLink>
      </div>
    </div>
  </section>
  <section class="section about-preview">
    <div class="container">
      <div class="row align-items-center g-5">
        <div class="col-lg-6">
          <div class="image-composition"><img
              src="../images/img1.avif"
              alt="Operación logística con mercancía organizada" loading="lazy">
            <div class="image-label"><i class="bi bi-boxes"></i><span><strong>Logística bien
                  coordinada</strong><small>Cada detalle cuenta</small></span></div>
            <div class="image-accent"></div>
          </div>
        </div>
        <div class="col-lg-6">
          <SectionHeading eyebrow="POR QUÉ Dimension Logística" title="La confianza se construye en cada recorrido"
            description="Sabemos que detrás de cada envío hay una operación, un compromiso y un cliente que espera. Por eso, trabajamos desde la planeación y la comunicación clara." />
          <div class="check-list">
            <div><i class="bi bi-check-circle-fill"></i><span><strong>Atención humana</strong><small>Escuchamos tus
                  necesidades antes de proponer una solución.</small></span></div>
            <div><i class="bi bi-check-circle-fill"></i><span><strong>Procesos organizados</strong><small>Coordinamos
                  los detalles para reducir incertidumbres.</small></span></div>
            <div><i class="bi bi-check-circle-fill"></i><span><strong>Información
                  transparente</strong><small>Condiciones claras y comunicación durante la gestión del
                  servicio.</small></span></div>
          </div>
          <RouterLink class="btn btn-navy mt-4" to="/nosotros">Conoce nuestra forma de trabajar <i
              class="bi bi-arrow-right ms-2"></i></RouterLink>
        </div>
      </div>
    </div>
  </section>
  <section class="process-section section">
    <div class="container">
      <SectionHeading eyebrow="ASÍ TRABAJAMOS" title="Un proceso claro, de principio a fin"
        description="Te acompañamos en las etapas clave para que conozcas qué sigue y qué información necesitamos."
        centered />
      <div class="process-grid">
        <div v-for="(step, index) in steps" :key="step" class="process-step"><span class="process-number">0{{ index + 1
            }}</span><span class="process-icon"><i
              :class="['bi bi-chat-square-text', 'bi bi-signpost', 'bi bi-clipboard-check', 'bi bi-box-arrow-in-down', 'bi bi-truck', 'bi bi-check2-circle'][index]"></i></span>
          <h3>{{ step }}</h3><span v-if="index < steps.length - 1" class="process-arrow"><i
              class="bi bi-arrow-right"></i></span>
        </div>
      </div>
    </div>
  </section>
  <section class="cta-band">
    <div class="container cta-inner">
      <div><span class="eyebrow eyebrow-light">HABLEMOS DE TU PRÓXIMO ENVÍO</span>
        <h2>¿Tienes una carga por mover?</h2>
        <p>Cuéntanos el origen, el destino y qué necesitas transportar. Revisaremos contigo las opciones disponibles.
        </p>
      </div>
      <RouterLink class="btn btn-accent btn-lg" to="/cotizar">Cotizar mi envío <i class="bi bi-arrow-up-right ms-2"></i>
      </RouterLink>
    </div>
  </section>
</template>
