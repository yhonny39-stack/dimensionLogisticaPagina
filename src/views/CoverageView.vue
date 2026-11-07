<script setup>
import { ref } from 'vue'

const origin = ref('')
const destination = ref('')
const cargo = ref('')
const weight = ref('')
const weightUnit = ref('kilogramos')
const date = ref('')
const submitted = ref(false)

// Reemplaza por el numero oficial de WhatsApp de DIMENSION LOGISTICA.
// Formato Colombia: 57 + numero, sin espacios ni signos.
const whatsapp = '3227672434'

function checkRoute() {
  submitted.value = true

  const peso = weight.value
    ? `${weight.value} ${weightUnit.value}`
    : 'Por especificar'

  const mensaje = `
Hola, DIMENSION LOGISTICA. Deseo solicitar una cotizacion para transporte de mercancia.

Ciudad de origen: ${origin.value}
Ciudad de destino: ${destination.value}
Tipo de mercancia: ${cargo.value || 'Por especificar'}
Cantidad y unidad de carga: ${peso}
Fecha estimada del transporte: ${date.value || 'Por definir'}

Por favor, informen la disponibilidad de la ruta, el precio del servicio y el tiempo estimado de entrega.

Quedo atento a su respuesta.
  `.trim()

  const url = `https://wa.me/${whatsapp}?text=${encodeURIComponent(mensaje)}`

  window.open(url, '_blank', 'noopener,noreferrer')
}
</script>

<template>
  <section class="page-hero">
    <div class="container">
      <span class="eyebrow eyebrow-light">
        COBERTURA Y RUTAS
      </span>

      <h1>
        Planeemos el recorrido
        <br />
        <em>de tu mercancia.</em>
      </h1>

      <p>
        Indicanos desde donde sale tu mercancia y hacia donde debe llegar.
        Solicita una cotizacion directamente con nuestro equipo comercial.
      </p>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="row g-5 align-items-start">
        <div class="col-lg-6">
          <span class="eyebrow">COTIZA TU RUTA</span>

          <h2 class="display-title">
            Cada trayecto comienza con la informacion correcta.
          </h2>

          <p class="body-copy">
            Completa los datos de tu envio para solicitar informacion sobre
            disponibilidad, cobertura, tarifas y tiempos de entrega.
          </p>

          <form
            class="form-panel mt-4"
            @submit.prevent="checkRoute"
          >
            <label class="form-label" for="origin">
              Ciudad de origen
            </label>

            <input
              id="origin"
              v-model.trim="origin"
              class="form-control"
              type="text"
              maxlength="100"
              required
              placeholder="Ej. Bogota, Cundinamarca"
            />

            <label class="form-label mt-3" for="destination">
              Ciudad de destino
            </label>

            <input
              id="destination"
              v-model.trim="destination"
              class="form-control"
              type="text"
              maxlength="100"
              required
              placeholder="Ej. Medellin, Antioquia"
            />

            <label class="form-label mt-3" for="cargo">
              Tipo de mercancia
            </label>

            <input
              id="cargo"
              v-model.trim="cargo"
              class="form-control"
              type="text"
              maxlength="150"
              placeholder="Ej. Alimentos, muebles, materiales"
            />

            <label class="form-label mt-3" for="weight">
              Cantidad de carga
            </label>

            <div class="row g-2">
              <div class="col-7">
                <input
                  id="weight"
                  v-model="weight"
                  class="form-control"
                  type="number"
                  min="0.01"
                  step="any"
                  placeholder="Cantidad"
                />
              </div>

              <div class="col-5">
                <select
                  v-model="weightUnit"
                  class="form-select"
                  aria-label="Unidad de medida de la carga"
                >
                  <option value="kilogramos">Kilogramos</option>
                  <option value="toneladas">Toneladas</option>
                  <option value="gramos">Gramos</option>
                  <option value="libras">Libras</option>
                  <option value="metros cubicos">Metros cubicos</option>
                  <option value="unidades">Unidades</option>
                  <option value="estibas">Estibas</option>
                  <option value="contenedores">Contenedores</option>
                </select>
              </div>
            </div>

            <label class="form-label mt-3" for="date">
              Fecha estimada del transporte
            </label>

            <input
              id="date"
              v-model="date"
              class="form-control"
              type="date"
              :min="new Date().toISOString().slice(0, 10)"
            />

            <button
              class="btn btn-navy mt-4 w-100"
              type="submit"
            >
              <i class="bi bi-whatsapp me-2"></i>
              Solicitar cotizacion por WhatsApp
            </button>

            <p class="small text-muted mt-3 mb-0">
              La solicitud no confirma una reserva ni garantiza disponibilidad.
              Nuestro equipo comercial verificara las condiciones de la ruta.
            </p>

            <div
              v-if="submitted"
              class="alert alert-info mt-3 mb-0"
              role="status"
            >
              Si WhatsApp no se abre automaticamente, verifica si tu navegador
              bloqueo la ventana emergente.
            </div>
          </form>
        </div>

        <div class="col-lg-6">
          <div class="coverage-visual">
            <div class="coverage-orbit orbit-one"></div>
            <div class="coverage-orbit orbit-two"></div>

            <div class="coverage-pin pin-a">
              <i class="bi bi-geo-alt-fill"></i>
            </div>

            <div class="coverage-pin pin-b">
              <i class="bi bi-geo-alt-fill"></i>
            </div>

            <div class="coverage-route">
              <i class="bi bi-truck-front-fill"></i>
            </div>

            <div class="coverage-caption">
              <i class="bi bi-signpost-split"></i>

              <span>
                <strong>Tu ruta, nuestra atencion</strong>
                <small>Cotizacion personalizada</small>
              </span>
            </div>
          </div>

          <div class="mt-4">
            <h3 class="h5">Informacion para cotizar</h3>

            <ul class="list-unstyled">
              <li class="mb-2">
                <i class="bi bi-check-circle-fill text-success me-2"></i>
                Ciudad de recogida y entrega.
              </li>

              <li class="mb-2">
                <i class="bi bi-check-circle-fill text-success me-2"></i>
                Tipo de mercancia y cantidad de carga.
              </li>

              <li class="mb-2">
                <i class="bi bi-check-circle-fill text-success me-2"></i>
                Unidad de medida: kilos, toneladas, libras,
                metros cubicos, estibas o contenedores.
              </li>

              <li class="mb-2">
                <i class="bi bi-check-circle-fill text-success me-2"></i>
                Fecha estimada del transporte.
              </li>
            </ul>

            <p class="placeholder-note">
              La cobertura, las tarifas y los tiempos de entrega deben ser
              confirmados por el equipo comercial de DIMENSION LOGISTICA.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
