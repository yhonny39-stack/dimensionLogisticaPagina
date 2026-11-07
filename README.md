# Dimension Logística — sitio corporativo de transporte y logística

Frontend responsive construido con Vue 3, Vite, Vue Router, Pinia y Bootstrap 5.

## Requisitos
- Node.js 20.19+ o 22.12+
- npm

## Ejecutar localmente
```bash
npm install
npm run dev
```
Vite mostrará la dirección local en la terminal.

## Compilar para producción
```bash
npm run build
npm run preview
```

## Estructura
- `src/components`: encabezado, pie de página, tarjetas y títulos reutilizables.
- `src/views`: Inicio, Nosotros, Servicios, Cobertura, Seguimiento y Contacto.
- `src/router`: navegación SPA.
- `src/stores`: estado compartido con Pinia.
- `src/composables`: catálogo configurable de servicios.
- `src/services`: punto de integración para futura API.

## Antes de publicar
1. Reemplazar “Dimension Logística” por el nombre, logotipo, colores y slogan reales de la empresa.
2. Actualizar correo, teléfono, dirección, cobertura, servicios y datos legales.
3. Sustituir o descargar y alojar localmente las fotografías externas usadas en el hero y las secciones.
4. Conectar el formulario a una API segura; actualmente solo valida el formulario en el navegador y simula la respuesta. No se guardan ni envían datos.
5. Integrar una API real de seguimiento. La pantalla actual no consulta GPS ni estados operativos.
6. Incorporar política de tratamiento de datos, autorización y controles de seguridad acordes con la normativa colombiana aplicable.
7. Configurar el servidor para devolver `index.html` en rutas SPA como `/servicios` y `/seguimiento`.

El contenido corporativo y las afirmaciones de cobertura son provisionales; no se publican cifras, certificaciones ni indicadores inventados.
