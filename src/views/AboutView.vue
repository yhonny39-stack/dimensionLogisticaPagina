<script setup>
import SectionHeading from '../components/SectionHeading.vue'

const diferenciales = [
    {
        icon: 'bi-shield-check',
        title: 'Seguridad y confianza',
        description:
            'Promovemos operaciones responsables, con planificación y atención a las condiciones de cada servicio para cuidar la mercancía.'
    },
    {
        icon: 'bi-cpu',
        title: 'Tecnología e innovación',
        description:
            'Apostamos por herramientas digitales que faciliten la gestión, mejoren la comunicación y permitan optimizar los procesos logísticos.'
    },
    {
        icon: 'bi-clock-history',
        title: 'Compromiso y cumplimiento',
        description:
            'Organizamos cada operación teniendo en cuenta los tiempos, las condiciones acordadas y las necesidades de nuestros clientes.'
    },
    {
        icon: 'bi-people',
        title: 'Atención personalizada',
        description:
            'Escuchamos a cada cliente para comprender sus necesidades y buscar alternativas que se adapten a su operación.'
    }
]

const valores = [
    {
        icon: 'bi-award',
        title: 'Excelencia',
        description:
            'Buscamos mejorar continuamente para ofrecer servicios eficientes, organizados y acordes con las necesidades de cada cliente.'
    },
    {
        icon: 'bi-shield-check',
        title: 'Responsabilidad',
        description:
            'Asumimos cada compromiso con seriedad, procurando que cada servicio se desarrolle bajo las condiciones acordadas.'
    },
    {
        icon: 'bi-transparency',
        title: 'Honestidad y transparencia',
        description:
            'Construimos relaciones duraderas mediante información clara, comunicación sincera y actuaciones coherentes.'
    },
    {
        icon: 'bi-people',
        title: 'Respeto',
        description:
            'Valoramos a nuestros clientes, colaboradores, conductores, proveedores y aliados, promoviendo un trato digno.'
    },
    {
        icon: 'bi-shield-lock',
        title: 'Seguridad',
        description:
            'Promovemos prácticas responsables para reducir riesgos y proteger las personas, la mercancía y los recursos involucrados.'
    },
    {
        icon: 'bi-lightbulb',
        title: 'Innovación',
        description:
            'Exploramos nuevas ideas y herramientas para simplificar procesos, responder a los cambios y mejorar el servicio.'
    }
]
</script>

<template>
    <main class="about-page">

        <!-- HERO: PRESENTACIÓN -->
        <section class="about-hero">
            <div class="about-hero-overlay"></div>

            <div class="container about-hero-content">
                <span class="about-eyebrow">
                    <span class="about-eyebrow-line"></span>
                    QUIÉNES SOMOS
                </span>

                <h1>
                    Conectamos caminos,
                    <em>movemos oportunidades.</em>
                </h1>

                <p>
                    Más que transportar mercancías, conectamos empresas,
                    respaldamos compromisos y trabajamos para que cada envío
                    encuentre su camino.
                </p>

                <div class="about-hero-actions">
                    <RouterLink to="/contacto" class="btn-about-primary">
                        Solicitar cotización
                        <i class="bi bi-arrow-up-right"></i>
                    </RouterLink>

                    <a href="#nuestra-historia" class="btn-about-secondary">
                        Conoce nuestra esencia
                        <i class="bi bi-arrow-down"></i>
                    </a>
                </div>

                <div class="about-hero-caption">
                    <i class="bi bi-geo-alt"></i>
                    Transporte terrestre · Fletes · Soluciones logísticas
                </div>
            </div>

            <div class="about-hero-decoration"></div>
        </section>

        <!-- QUIÉNES SOMOS -->
        <section id="nuestra-historia" class="about-section">
            <div class="container">
                <div class="row align-items-center g-5">

                    <div class="col-lg-6">
                        <SectionHeading eyebrow="NUESTRA ESENCIA" title="Detrás de cada envío, existe un compromiso."
                            description="En DIMENSION LOGÍSTICA entendemos que cada carga representa trabajo, oportunidades y la confianza de quienes necesitan llevar sus productos a su destino." />

                        <div class="about-story-copy">
                            <p>
                                Somos una empresa enfocada en el transporte terrestre
                                de mercancías, los fletes y las soluciones logísticas.
                                Trabajamos para conectar empresas y clientes con
                                servicios organizados, atención cercana y una visión
                                responsable de cada operación.
                            </p>

                            <p>
                                Creemos que una buena experiencia logística comienza
                                por escuchar, continúa con una adecuada planificación
                                y se fortalece mediante una comunicación clara.
                                Por eso, buscamos comprender las necesidades de cada
                                cliente y establecer condiciones de servicio transparentes.
                            </p>

                            <p>
                                Nuestra forma de trabajar se fundamenta en la
                                responsabilidad, la honestidad y la mejora continua.
                                Queremos construir relaciones comerciales duraderas
                                y convertirnos en un aliado confiable para el crecimiento
                                de nuestros clientes.
                            </p>
                        </div>

                        <RouterLink to="/contacto" class="about-text-link">
                            Hablemos de tu operación
                            <i class="bi bi-arrow-right"></i>
                        </RouterLink>
                    </div>

                    <div class="col-lg-6">
                        <div class="about-story-visual">
                            <img src="../images/camionLogo.png"
                                alt="Mercancías organizadas para una operación logística" class="about-story-image"
                                loading="lazy" />

                            <div class="about-image-label">
                                <span class="about-image-label-icon">
                                    <i class="bi bi-compass"></i>
                                </span>

                                <div>
                                    <strong>Una ruta con propósito</strong>
                                    <span>Confianza en cada decisión</span>
                                </div>
                            </div>

                            <div class="about-story-decoration"></div>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        <!-- DIFERENCIALES -->
        <section class="about-section about-section-soft">
            <div class="container">

                <SectionHeading eyebrow="NUESTRA PROPUESTA DE VALOR" title="La confianza también se transporta."
                    description="Queremos que cada cliente encuentre un aliado que comprenda sus necesidades y trabaje con responsabilidad en cada etapa del servicio."
                    centered />

                <div class="row g-4 mt-4">
                    <div v-for="(item, index) in diferenciales" :key="item.title" class="col-md-6 col-lg-3">
                        <article class="about-feature-card">
                            <div class="about-feature-top">
                                <span class="about-feature-icon">
                                    <i :class="['bi', item.icon]"></i>
                                </span>

                                <span class="about-feature-number">
                                    0{{ index + 1 }}
                                </span>
                            </div>

                            <h3>{{ item.title }}</h3>
                            <p>{{ item.description }}</p>

                            <div class="about-feature-line"></div>
                        </article>
                    </div>
                </div>

            </div>
        </section>

        <!-- MISIÓN Y VISIÓN -->
        <section class="about-purpose-section">
            <div class="container">

                <div class="about-purpose-heading">
                    <span class="about-eyebrow">
                        <span class="about-eyebrow-line"></span>
                        NUESTRO PROPÓSITO
                    </span>

                    <h2>
                        Trabajamos hoy para
                        <em>llegar más lejos mañana.</em>
                    </h2>

                    <p>
                        Nuestra dirección es clara: crear relaciones de confianza,
                        fortalecer nuestros servicios y evolucionar con las
                        necesidades del sector logístico.
                    </p>
                </div>

                <div class="row g-4 mt-4">

                    <div class="col-lg-6">
                        <article class="about-purpose-card">
                            <div class="about-purpose-icon">
                                <i class="bi bi-signpost-2"></i>
                            </div>

                            <span class="about-card-eyebrow">NUESTRO PRESENTE</span>

                            <h3>Misión</h3>

                            <p>
                                Brindar soluciones de transporte terrestre de mercancías,
                                fletes y apoyo logístico con responsabilidad, eficiencia
                                y compromiso. Buscamos responder a las necesidades de
                                nuestros clientes mediante servicios organizados,
                                comunicación transparente y procesos orientados a la
                                seguridad, la calidad y el cumplimiento.
                            </p>

                            <div class="about-purpose-footer">
                                <i class="bi bi-check2-circle"></i>
                                Compromiso en cada operación
                            </div>
                        </article>
                    </div>

                    <div class="col-lg-6">
                        <article class="about-purpose-card about-purpose-card-highlight">
                            <div class="about-purpose-icon">
                                <i class="bi bi-binoculars"></i>
                            </div>

                            <span class="about-card-eyebrow">NUESTRO FUTURO</span>

                            <h3>Visión 2030</h3>

                            <p>
                                Consolidarnos como una empresa reconocida en Colombia
                                por la calidad de nuestros servicios de transporte y
                                logística, destacándonos por la confiabilidad, la
                                innovación tecnológica, la capacidad de respuesta y
                                el compromiso con nuestros clientes. Aspiramos a crecer
                                de manera sostenible y convertirnos en un aliado
                                estratégico para diferentes sectores económicos.
                            </p>

                            <div class="about-purpose-footer">
                                <i class="bi bi-arrow-up-right-circle"></i>
                                Crecimiento con propósito
                            </div>
                        </article>
                    </div>

                </div>
            </div>
        </section>

        <!-- VALORES -->
        <section class="about-section">
            <div class="container">

                <SectionHeading eyebrow="NUESTROS VALORES" title="Los principios que guían cada camino."
                    description="La manera en que tratamos a las personas y asumimos nuestros compromisos define el tipo de empresa que queremos construir."
                    centered />

                <div class="row g-4 mt-4">
                    <div v-for="valor in valores" :key="valor.title" class="col-md-6 col-lg-4">
                        <article class="about-value-card">
                            <div class="about-value-icon">
                                <i :class="['bi', valor.icon]"></i>
                            </div>

                            <div class="about-value-content">
                                <h3>{{ valor.title }}</h3>
                                <p>{{ valor.description }}</p>
                            </div>
                        </article>
                    </div>
                </div>

            </div>
        </section>

        <!-- CIERRE / LLAMADO A LA ACCIÓN -->
        <section class="about-cta-section">
            <div class="container">
                <div class="about-cta-content">

                    <div class="about-cta-copy">
                        <span class="about-eyebrow">
                            <span class="about-eyebrow-line"></span>
                            HAGAMOS EQUIPO
                        </span>

                        <h2>
                            Tu carga tiene un destino.
                            <em>Tu confianza, un valor.</em>
                        </h2>

                        <p>
                            Cuéntanos qué necesitas transportar. Queremos conocer
                            tu operación y ayudarte a encontrar una solución
                            acorde con tus necesidades.
                        </p>

                        <RouterLink to="/contacto" class="btn-about-primary">
                            Hablemos de tu envío
                            <i class="bi bi-arrow-right"></i>
                        </RouterLink>
                    </div>

                    <div class="about-cta-visual">
                        <div class="about-cta-circle about-cta-circle-one"></div>
                        <div class="about-cta-circle about-cta-circle-two"></div>

                        <i class="bi bi-truck-front about-cta-truck"></i>

                        <span class="about-cta-route">
                            <i class="bi bi-geo-alt-fill"></i>
                            Tu próximo destino
                        </span>
                    </div>

                </div>
            </div>
        </section>

    </main>
</template>
