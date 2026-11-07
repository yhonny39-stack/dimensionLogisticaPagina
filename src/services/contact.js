// Punto de integración futuro: reemplazar este comportamiento por una llamada a la API.
export async function submitContactForm(payload) {
  await new Promise((resolve) => setTimeout(resolve, 450))
  return { ok: true, received: Boolean(payload.email) }
}
