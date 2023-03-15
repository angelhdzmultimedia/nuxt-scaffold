declare module "vue3-particles"
import Particles from 'vue3-particles'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Particles as any)
})
