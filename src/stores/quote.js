import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useQuoteStore = defineStore('quote', () => {
  const service = ref('Transporte de mercancías')
  const setService = (value) => { service.value = value }
  return { service, setService }
})
