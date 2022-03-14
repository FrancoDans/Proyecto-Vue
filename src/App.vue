<template>
  <div id="app">

   
    
     <HelloWorld msg="Burgertin"/>
     <LoginApp/>
     <ComidasCards/>

     
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import LoginApp from './components/mi-formulario.vue'
import ComidasCards from "./components/ComidasCards.vue"
export default {
  name: 'App',
  components: {
    HelloWorld,
    LoginApp,
    ComidasCards
    
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: black;
  text-align: center;
}
</style>
