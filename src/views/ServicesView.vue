
<script setup>
import { computed, ref } from 'vue'
import otra from '../images/otra.jpeg';
import service2 from '../images/service-2.jpg';
import service3 from '../images/carry2.png';
import service4 from '../images/service-4.jpg';
import service5 from '../images/service-5.jpg';
import service6 from '../images/service-6.jpg';
import service12 from '../images/service-12s.jpg';
import service7 from '../images/service-7.jpg';
import service9 from '../images/cta-bg2.jpg';
import service10 from '../images/service-10.jpg';
import service11 from '../images/service-11s.jpg';
const whatsapp = '573227672434'
const busqueda = ref('')

const servicios = [
  {
    id: 1,
    titulo: 'Transporte terrestre y fletes',
    categoria: 'Transporte',
    descripcion:
      'Transportamos mercancías y coordinamos fletes según las necesidades de cada operación, buscando entregas oportunas y un manejo responsable de la carga.',
    imagen: otra,
    icono: 'bi-truck',
  },
  {
    id: 2,
    titulo: 'Carga masiva y semimasiva',
    categoria: 'Transporte',
    descripcion:
      'Soluciones para movilizar mercancías de mediano y gran volumen, con planificación logística de acuerdo con las características de cada envío.',
    imagen: service2,
    icono: 'bi-box-seam',
  },
  {
    id: 3,
    titulo: 'Distribución urbana y rural',
    categoria: 'Distribución',
    descripcion:
      'Coordinamos la distribución y entrega de mercancías en destinos urbanos y rurales, adaptando la operación a las necesidades de cada cliente.',
    imagen: service3,
    icono: 'bi-geo-alt',
  },
  {
    id: 4,
    titulo: 'Transporte refrigerado',
    categoria: 'Transporte',
    descripcion:
      'Transporte de productos que requieren condiciones de temperatura controlada, sujeto a la disponibilidad de equipos y las condiciones acordadas.',
    imagen: service9,
    icono: 'bi-thermometer-snow',
  },
  {
    id: 5,
    titulo: 'Mercancías peligrosas',
    categoria: 'Especializado',
    descripcion:
      'Coordinación del transporte de mercancías peligrosas conforme a los requisitos aplicables, la naturaleza de la carga y las condiciones de la operación.',
    imagen: service5,
    icono: 'bi-exclamation-triangle',
  },
  {
    id: 6,
    titulo: 'Maquinaria pesada y grúas',
    categoria: 'Especializado',
    descripcion:
      'Coordinamos servicios para el traslado de maquinaria pesada y cargas que requieren equipos especiales, previa evaluación de cada operación.',
    imagen: service6,
    icono: 'bi-cone-striped',
  },
  {
    id: 7,
    titulo: 'Recaudos contra entrega',
    categoria: 'Logística',
    descripcion:
      'Apoyamos la gestión de recaudos asociados a las entregas, según las condiciones, procedimientos y acuerdos establecidos con el cliente.',
    imagen: service12,
    icono: 'bi-cash-coin',
  },
  {
    id: 8,
    titulo: 'Reparto diurno y nocturno',
    categoria: 'Distribución',
    descripcion:
      'Coordinamos entregas en horarios diurnos o nocturnos, de acuerdo con la programación, la cobertura y los requisitos de cada servicio.',
    imagen: service7,
    icono: 'bi-clock',
  },
  {
    id: 9,
    titulo: 'Custodia y manejo de mercancías',
    categoria: 'Logística',
    descripcion:
      'Coordinamos el manejo y control de las mercancías durante las etapas acordadas de la operación logística.',
    imagen: service9,
    icono: 'bi-shield-check',
  },
  {
    id: 10,
    titulo: 'Almacenamiento y logística',
    categoria: 'Logística',
    descripcion:
      'Apoyamos la organización y coordinación de operaciones de almacenamiento y manejo de inventarios, según los requerimientos del cliente.',
    imagen: service10,
    icono: 'bi-boxes',
  },
  {
    id: 11,
    titulo: 'Carga y descarga con montacargas',
    categoria: 'Especializado',
    descripcion:
      'Coordinamos operaciones de movilización, carga y descarga de mercancías con montacargas, según el tipo de carga y la disponibilidad del equipo.',
    imagen: service11,
    icono: 'bi-boxes',
  },
]

const categorias = [
  'Todos',
  'Transporte',
  'Distribución',
  'Logística',
  'Especializado',
]

const categoriaActiva = ref('Todos')

const serviciosFiltrados = computed(() => {
  const texto = busqueda.value.trim().toLowerCase()

  return servicios.filter((servicio) => {
    const coincideCategoria =
      categoriaActiva.value === 'Todos' ||
      servicio.categoria === categoriaActiva.value

    const coincideTexto =
      !texto ||
      servicio.titulo.toLowerCase().includes(texto) ||
      servicio.descripcion.toLowerCase().includes(texto)

    return coincideCategoria && coincideTexto
  })
})

function cotizarServicio(servicio) {
  const mensaje = `Hola, DIMENSION LOGÍSTICA. Estoy interesado en cotizar el servicio de ${servicio.titulo}. ¿Me pueden brindar información sobre disponibilidad y condiciones?`

  window.open(
    `https://wa.me/${whatsapp}?text=${encodeURIComponent(mensaje)}`,
    '_blank',
    'noopener,noreferrer',
  )
}

function contactarGeneral() {
  const mensaje =
    'Hola, DIMENSION LOGÍSTICA. Quiero recibir información sobre sus servicios de transporte y logística.'

  window.open(
    `https://wa.me/${whatsapp}?text=${encodeURIComponent(mensaje)}`,
    '_blank',
    'noopener,noreferrer',
  )
}
</script>

<template>
  <main class="servicios-page">
    <!-- HERO -->
    <section class="services-hero">
      <div class="hero-overlay"></div>

      <div class="container hero-content">
        <span class="hero-label">
          <i class="bi bi-truck me-2"></i>
          DIMENSION LOGÍSTICA
        </span>

        <h1>
          Soluciones logísticas
          <span>a tu dimensión</span>
        </h1>

        <p>
          Conectamos negocios, movilizamos mercancías y coordinamos
          soluciones de transporte adaptadas a las necesidades de cada cliente.
        </p>

        <div class="hero-actions">
          <a href="#catalogo-servicios" class="btn btn-gold">
            Explorar servicios
            <i class="bi bi-arrow-down-right ms-2"></i>
          </a>

          <button class="btn btn-outline-light" @click="contactarGeneral">
            <i class="bi bi-whatsapp me-2"></i>
            Solicitar cotización
          </button>
        </div>

        <div class="hero-note">
          <i class="bi bi-geo-alt-fill"></i>
          Transporte · Distribución · Logística
        </div>
      </div>
    </section>

    <!-- PRESENTACIÓN -->
    <section class="intro-section">
      <div class="container">
        <div class="row align-items-center g-5">
          <div class="col-lg-6">
            <span class="section-eyebrow">NUESTRO PORTAFOLIO</span>

            <h2 class="section-title">
              Nuestros servicios
              <span>para mover tu negocio</span>
            </h2>

            <p class="section-description">
              En DIMENSION LOGÍSTICA ofrecemos alternativas de transporte
              terrestre, distribución y apoyo logístico para diferentes tipos
              de mercancías y necesidades empresariales.
            </p>

            <p class="section-description">
              Nuestro enfoque es coordinar cada operación con responsabilidad,
              comunicación clara y atención a los requerimientos de nuestros
              clientes, desde la planificación hasta la entrega acordada.
            </p>

            <div class="intro-points">
              <div class="intro-point">
                <i class="bi bi-check-circle-fill"></i>
                Atención personalizada
              </div>

              <div class="intro-point">
                <i class="bi bi-check-circle-fill"></i>
                Coordinación de cada operación
              </div>

              <div class="intro-point">
                <i class="bi bi-check-circle-fill"></i>
                Acompañamiento al cliente
              </div>
            </div>
          </div>

          <div class="col-lg-6">
            <div class="intro-image">
              <img
                src="../images/camionLogo.png"
                alt="Operación de transporte de mercancías"
                loading="lazy"
              />

              <div class="image-caption">
                <span class="caption-icon">
                  <i class="bi bi-box-seam"></i>
                </span>

                <div>
                  <strong>Movemos tus proyectos</strong>
                  <p>Soluciones según tus necesidades logísticas.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CATÁLOGO -->
    <section id="catalogo-servicios" class="catalog-section">
      <div class="container">
        <div class="catalog-heading">
          <div>
            <span class="section-eyebrow">CONOCE NUESTRO PORTAFOLIO</span>
            <h2 class="section-title">
              Encuentra el servicio <span>que necesitas</span>
            </h2>
            <p class="section-description">
              Explora las opciones y solicita información sobre tu operación.
            </p>
          </div>

          <div class="catalog-count">
            <strong>{{ serviciosFiltrados.length }}</strong>
            <span>servicios disponibles</span>
          </div>
        </div>

        <!-- BUSCADOR -->
        <div class="service-tools">
          <div class="search-box">
            <i class="bi bi-search"></i>

            <input
              v-model="busqueda"
              type="search"
              placeholder="¿Qué servicio estás buscando?"
              aria-label="Buscar servicios"
            />

            <button
              v-if="busqueda"
              class="clear-search"
              type="button"
              aria-label="Limpiar búsqueda"
              @click="busqueda = ''"
            >
              <i class="bi bi-x-lg"></i>
            </button>
          </div>

          <div class="category-filters">
            <button
              v-for="categoria in categorias"
              :key="categoria"
              type="button"
              class="filter-button"
              :class="{ active: categoriaActiva === categoria }"
              @click="categoriaActiva = categoria"
            >
              {{ categoria }}
            </button>
          </div>
        </div>

        <!-- TARJETAS -->
        <div class="row g-4">
          <div
            v-for="servicio in serviciosFiltrados"
            :key="servicio.id"
            class="col-sm-6 col-xl-4"
          >
            <article class="service-card">
              <div class="service-image">
                <img
                  :src="servicio.imagen"
                  :alt="servicio.titulo"
                  loading="lazy"
                />

                <span class="service-category">
                  {{ servicio.categoria }}
                </span>

                <span class="service-icon">
                  <i :class="['bi', servicio.icono]"></i>
                </span>
              </div>

              <div class="service-body">
                <h3>{{ servicio.titulo }}</h3>

                <p>{{ servicio.descripcion }}</p>

                <button
                  class="service-link"
                  type="button"
                  @click="cotizarServicio(servicio)"
                >
                  Consultar servicio
                  <i class="bi bi-arrow-up-right-circle"></i>
                </button>
              </div>
            </article>
          </div>
        </div>

        <div
          v-if="serviciosFiltrados.length === 0"
          class="empty-results"
        >
          <i class="bi bi-search"></i>
          <h3>No encontramos ese servicio</h3>
          <p>Prueba con otro término o selecciona una categoría diferente.</p>

          <button
            class="btn btn-gold"
            @click="
              busqueda = '';
              categoriaActiva = 'Todos'
            "
          >
            Ver todos los servicios
          </button>
        </div>
      </div>
    </section>

    <!-- VEHÍCULOS -->
    <section class="fleet-section">
      <div class="container">
        <div class="row align-items-center g-5">
          <div class="col-lg-5">
            <span class="section-eyebrow">SOLUCIONES DE TRANSPORTE</span>

            <h2 class="section-title text-white">
              Alternativas para
              <span>cada operación</span>
            </h2>

            <p class="fleet-description">
              La selección del vehículo y de las condiciones de transporte
              depende del tipo de mercancía, el volumen, el destino y los
              requerimientos de cada servicio.
            </p>

            <button class="btn btn-gold" @click="contactarGeneral">
              Cuéntanos qué necesitas
              <i class="bi bi-arrow-right ms-2"></i>
            </button>
          </div>

          <div class="col-lg-7">
            <div class="vehicle-grid">
              <div class="vehicle-item">
                <img
                  src="../images/carros/turbo_refigerada.png"
                  alt="Camión de transporte"
                  loading="lazy"
                />
                <div>
                  <i class="bi bi-truck"></i>
                  <h3>Camiones</h3>
                  <p>Transporte de mercancías.</p>
                </div>
              </div>

              <div class="vehicle-item">
                <img
                  src="../images/carros/NHR.png"
                  alt="Vehículo de carga"
                  loading="lazy"
                />
                <div>
                  <i class="bi bi-box-seam"></i>
                  <h3>Furgones</h3>
                  <p>Alternativas para distribución.</p>
                </div>
              </div>

              <div class="vehicle-item">
                <img
                  src="../images/carros/mula.png"
                  alt="Tractocamión para transporte"
                  loading="lazy"
                />
                <div>
                  <i class="bi bi-truck-front"></i>
                  <h3>Tractocamiones</h3>
                  <p>Opciones para carga de mayor volumen.</p>
                </div>
              </div>

              <div class="vehicle-item">
                <img
                  src="../images/carros/camioneta.png"
                  alt="Vehículo utilitario"
                  loading="lazy"
                />
                <div>
                  <i class="bi bi-car-front"></i>
                  <h3>Camionetas</h3>
                  <p>Alternativas para diferentes operaciones.</p>
                </div>
              </div>
            </div>

            <p class="fleet-disclaimer">
              * Los vehículos mostrados son ilustrativos. La disponibilidad
              y el tipo de vehículo se confirman al cotizar.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- PROCESO -->
    <section class="process-section">
      <div class="container">
        <div class="text-center process-heading">
          <span class="section-eyebrow">ASÍ TRABAJAMOS</span>

          <h2 class="section-title">
            Cotizar tu servicio es <span>sencillo</span>
          </h2>

          <p class="section-description">
            Cuéntanos sobre tu carga y coordinaremos contigo los detalles
            de la operación.
          </p>
        </div>

        <div class="row g-4">
          <div class="col-md-4">
            <div class="process-card">
              <span class="process-number">01</span>
              <i class="bi bi-chat-square-text process-icon"></i>
              <h3>Cuéntanos tu necesidad</h3>
              <p>
                Indica qué mercancía necesitas transportar, el origen,
                el destino y las condiciones requeridas.
              </p>
            </div>
          </div>

          <div class="col-md-4">
            <div class="process-card">
              <span class="process-number">02</span>
              <i class="bi bi-clipboard-check process-icon"></i>
              <h3>Revisamos la operación</h3>
              <p>
                Evaluamos los detalles de tu solicitud y las condiciones
                necesarias para prestar el servicio.
              </p>
            </div>
          </div>

          <div class="col-md-4">
            <div class="process-card">
              <span class="process-number">03</span>
              <i class="bi bi-truck process-icon"></i>
              <h3>Coordinamos el servicio</h3>
              <p>
                Una vez acordadas las condiciones, coordinamos los detalles
                de la operación y la entrega.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA FINAL -->
    <section class="contact-section">
      <div class="container">
        <div class="contact-banner">
          <div class="contact-decoration"></div>

          <div class="contact-content">
            <span class="section-eyebrow">HABLEMOS DE TU OPERACIÓN</span>

            <h2>
              Tu carga merece una solución
              <span>a su dimensión.</span>
            </h2>

            <p>
              Escríbenos y cuéntanos qué necesitas transportar.
              Te ayudaremos a consultar las alternativas disponibles.
            </p>

            <button class="btn btn-gold" @click="contactarGeneral">
              <i class="bi bi-whatsapp me-2"></i>
              Cotizar por WhatsApp
              <i class="bi bi-arrow-up-right ms-2"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>

</style>
