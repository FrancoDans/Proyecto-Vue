<template>

<div class="card">
  <ul v-for="producto in productos" :key="producto.imagen" >
    <img class="imagen-cards" :src="producto.imagen" :alt="producto.name">
    <div class="container">
      <h4><b>{{producto.name}}</b></h4>
      <span><b>Precio:</b>${{producto.precio}}</span>
      <tr></tr>
      <button class="btn btn-primary">Agregar al carrito</button>
    </div>
  </ul>
  
</div>



</template>

<script>
import { data } from "./productos/productos"
export default {
    name:"ComidasCards",
    
    data(){
      return{
        productos:data
      }
}
}
</script>

<style>
.cards{
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0,3s;
  border-radius: 5px;
  width: 350px;
  margin: 15px;
  padding-bottom: 15px;
}

.imagen-cards{
  border-radius: 5px 5px 0 0;
  height: 200px;
  width: 350px;
  

}

.container {
  padding: 2px 16px;
}
</style>