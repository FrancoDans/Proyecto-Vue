<template>
  <div class="about">
    <h1>Catalogo</h1>
    <Hello-world/>
    <ComidasCards/>
  </div>
</template>

<script>

import ComidasCards from '@/components/ComidasCards.vue'
import HelloWorld from '../components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    ComidasCards
  }
}
</script>
