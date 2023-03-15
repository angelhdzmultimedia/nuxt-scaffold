<script setup lang="ts">
import { loadFull } from 'tsparticles'
import { opciones } from '~/config/particulas'

const particlesInit = async (engine) => {
  await loadFull(engine)
}

const particlesLoaded = async (container) => {
  console.log('Particles container loaded', container)
}
</script>

<template>

  <Particles
    id="tsparticles"
    :particlesInit="particlesInit"
    :particlesLoaded="particlesLoaded"
    url="http://foo.bar/particles.json"
  />

  <Particles
    id="tsparticles"
    :particlesInit="particlesInit"
    :particlesLoaded="particlesLoaded"
    :options="opciones"
  />
</template>
