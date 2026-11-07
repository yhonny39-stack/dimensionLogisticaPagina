<template>
  <footer class="site-footer">
    <div class="container">
      <div class="row g-5">
        <div class="col-lg-4">
          <RouterLink class="brand" to="/" aria-label="Dimension Logística, inicio">
            <img src="../images/logoDorado.png" alt="Dimension Logística" class="brand-logo" />
          </RouterLink>
          <p class="footer-intro">Movemos tu mercancía con planeación, comunicación y compromiso en cada recorrido.</p>
        </div>
        <div class="col-6 col-lg-2">
          <h3>Explora</h3>
          <RouterLink to="/nosotros">Nosotros</RouterLink>
          <RouterLink to="/servicios">Servicios</RouterLink>
          <RouterLink to="/cobertura">Cobertura</RouterLink>
          <RouterLink to="/seguimiento">Seguimiento</RouterLink>
        </div>
        <div class="col-6 col-lg-3">
          <h3>Servicios</h3>
          <RouterLink to="/servicios">Transporte de mercancías</RouterLink>
          <RouterLink to="/servicios">Fletes y distribución</RouterLink>
          <RouterLink to="/servicios">Logística empresarial</RouterLink>
          <RouterLink to="/contacto">Solicitar información</RouterLink>
        </div>
        <div class="col-lg-3">
          <h3>Hablemos</h3>
          <p><i class="bi bi-envelope me-2"></i>servicioalcliente@dimensionlogistica.com</p>
          <p><i class="bi bi-telephone me-2"></i>Teléfono 3227672434</p>
          <p><i class="bi bi-geo-alt me-2"></i>Colombia</p>
        </div>
      </div>
      <div class="footer-bottom"><span>© {{ new Date().getFullYear() }} Dimension Logística. Todos los derechos
          reservados.</span><span>Tu operación, en buenas manos.</span></div>
    </div>
  </footer>
</template>
