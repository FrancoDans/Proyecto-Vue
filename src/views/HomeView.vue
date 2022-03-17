<template>
  <div class="home">
   
    <HelloWorld msg="BURGERTIN"/>
    <ContactoComponent/>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import ContactoComponent from '@/components/mi-formulario.vue'
export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    ContactoComponent
  }
}
</script>
