<script setup>
defineProps({ service: { type: Object, required: true } })
</script>
<template>
    <article class="service-card">
        <div class="service-icon"><i :class="service.icon"></i></div>
        <h3>{{ service.title }}</h3>
        <p>{{ service.description }}</p>
        <ul v-if="service.benefits?.length">
            <li v-for="benefit in service.benefits" :key="benefit"><i class="bi bi-check2 me-2"></i>{{ benefit }}</li>
        </ul>
        <RouterLink :to="{ path: '/contacto', query: { servicio: service.title } }" class="text-link">Consultar servicio
            <i class="bi bi-arrow-up-right"></i>
        </RouterLink>
    </article>
</template>
