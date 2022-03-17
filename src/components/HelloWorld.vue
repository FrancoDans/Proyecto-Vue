<template>
  
    <div class="encabezado">
  
  <b-navbar variant="faded" type="light">
    <b-navbar-brand href="index.html">
      <img src="../assets/logo.png" class="d-inline-block align-top" alt="Kitten">
      {{msg}}

    </b-navbar-brand>
  </b-navbar>
  
</div>
    

</template>

<script>

export default {
  name: 'HelloWorld',
  
  props: {
    msg: String
  }
 
}
</script>

<style scoped>

.encabezado{
  background-color:yellow;
  color: aliceblue;
}
</style>