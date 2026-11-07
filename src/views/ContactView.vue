<script setup>
import { computed, ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useQuoteStore } from '../stores/quote'
import { submitContactForm } from '../services/contact'
const route = useRoute()
const quoteStore = useQuoteStore()
const isQuote = computed(() => route.query.tipo === 'cotizacion' || route.name === 'contacto')
const form = ref({ name: '', company: '', email: '', phone: '', service: quoteStore.service, origin: '', destination: '', cargo: '', details: '' })
const sending = ref(false)
const sent = ref(false)
const error = ref('')
onMounted(() => { if (typeof route.query.servicio === 'string') form.value.service = route.query.servicio })
async function submit() {
  sending.value = true; error.value = ''; sent.value = false
  try { await submitContactForm(form.value); sent.value = true }
  catch { error.value = 'No fue posible procesar el formulario. Intenta nuevamente.' }
  finally { sending.value = false }
}
</script>
<template>
  <section class="page-hero">
    <div class="container"><span class="eyebrow eyebrow-light">ESTAMOS PARA AYUDARTE</span>
      <h1>Hablemos de tu<br><em>próxima operación.</em></h1>
      <p>Cuéntanos qué necesitas transportar y los datos básicos de tu recorrido.</p>
    </div>
  </section>
  <section class="section section-soft">
    <div class="container">
      <div class="row g-5">
        <div class="col-lg-5"><span class="eyebrow">CONTACTO COMERCIAL</span>
          <h2 class="display-title">Una buena solución empieza con una conversación.</h2>
          <p class="body-copy">Comparte la información disponible y podremos identificar qué detalles necesitamos para
            evaluar tu solicitud.</p>
          <div class="contact-detail"><span><i class="bi bi-envelope"></i></span>
            <div><small>Correo electrónico</small><strong>servicioalcliente@dimensionlogistica.com</strong>
            </div>
          </div>
          <div class="contact-detail"><span><i class="bi bi-telephone"></i></span>
            <div><small>Teléfono comercial</small><strong>3227672434</strong>
            </div>
          </div>
          <div class="contact-detail"><span><i class="bi bi-geo-alt"></i></span>
            <div>
              <small>Ubicación</small>
              <strong>Cra 31B # 4 - 72 Bogota D.C, Colombia</strong>
            </div>
          </div>
        </div>
        <div class="col-lg-7">
          <form class="form-panel contact-form" @submit.prevent="submit">
            <h2>Solicita información o cotiza</h2>
            <p>Los campos con * son obligatorios.</p>
            <div class="row g-3">
              <div class="col-md-6"><label class="form-label" for="name">Nombre completo *</label><input id="name"
                  v-model="form.name" class="form-control" autocomplete="name" required maxlength="100"
                  placeholder="Tu nombre"></div>
              <div class="col-md-6"><label class="form-label" for="company">Empresa</label><input id="company"
                  v-model="form.company" class="form-control" autocomplete="organization" maxlength="120"
                  placeholder="Nombre de la empresa"></div>
              <div class="col-md-6"><label class="form-label" for="email">Correo electrónico *</label><input id="email"
                  v-model="form.email" class="form-control" type="email" autocomplete="email" required maxlength="150"
                  placeholder="nombre@empresa.com"></div>
              <div class="col-md-6"><label class="form-label" for="phone">Teléfono</label><input id="phone"
                  v-model="form.phone" class="form-control" type="tel" autocomplete="tel" maxlength="30"
                  placeholder="Tu número de contacto"></div>
              <div class="col-12"><label class="form-label" for="service">Servicio de interés *</label><select
                  id="service" v-model="form.service" class="form-select" required>
                  <option
                    v-for="item in ['Transporte de mercancías', 'Transporte exprés o por cupo', 'Transporte empresarial mobiliario ', 'Transporte de mercancía consolidada', 'Logística personalizada', 'Seguimiento de envíos', 'Otro']"
                    :key="item">{{ item }}</option>
                </select></div>
              <div class="col-md-6"><label class="form-label" for="origin">Ciudad de origen</label><input id="origin"
                  v-model="form.origin" class="form-control" maxlength="100" placeholder="Ciudad de recogida"></div>
              <div class="col-md-6"><label class="form-label" for="destination">Ciudad de destino</label><input
                  id="destination" v-model="form.destination" class="form-control" maxlength="100"
                  placeholder="Ciudad de entrega"></div>
              <div class="col-12"><label class="form-label" for="cargo">Tipo de mercancía / carga</label><input
                  id="cargo" v-model="form.cargo" class="form-control" maxlength="150"
                  placeholder="Describe brevemente la carga"></div>
              <div class="col-12"><label class="form-label" for="details">Detalles adicionales</label><textarea
                  id="details" v-model="form.details" class="form-control" rows="4" maxlength="1500"
                  placeholder="Peso, dimensiones, fecha estimada u otros detalles"></textarea></div>
              <div class="col-12"><button class="btn btn-accent" type="submit" :disabled="sending">{{ sending ?
                'Procesando…' : 'Enviar solicitud' }} <i class="bi bi-arrow-up-right ms-2"></i></button></div>
            </div>
            <div v-if="sent" class="alert alert-success mt-3" role="status"><strong>Formulario validado en esta
                demostración.</strong><br>Este prototipo todavía no envía correos ni guarda datos en un servidor.
              Conectar un backend antes de publicar.</div>
            <div v-if="error" class="alert alert-danger mt-3" role="alert">{{ error }}</div><small
              class="form-disclaimer">No incluyas información sensible. Al publicar, agrega la política de tratamiento
              de datos y los mecanismos de autorización correspondientes.</small>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
