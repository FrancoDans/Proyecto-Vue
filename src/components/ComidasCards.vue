<template>

  <div class="cards">
      <h1 class="cards-title">Menú:</h1>
      
  <b-card-group  >
    <b-card title="Hamburguesa Clasica" img-src="https://picsum.photos/300/300/?image=41" img-alt="Image" img-top>
   <b-button variant="warning">Añadir al carrito</b-button>
        
      <template #footer>
        <small>$800</small>
      </template>
    </b-card>
 
   <b-card title="Hamburguesa Clasica" img-src="https://picsum.photos/300/300/?image=41" img-alt="Image" img-top>
   <b-button variant="warning">Añadir al carrito</b-button>
        
      <template #footer>
        <small>$800</small>
      </template>
    </b-card>

  <b-card title="Hamburguesa Clasica" img-src="https://picsum.photos/300/300/?image=41" img-alt="Image" img-top>
   <b-button variant="warning">Añadir al carrito</b-button>
        
      <template #footer>
        <small>$800</small>
      </template>
    </b-card>

    <b-card title="Hamburguesa Clasica" img-src="https://picsum.photos/300/300/?image=41" img-alt="Image" img-top>
   <b-button variant="warning">Añadir al carrito</b-button>
        
      <template #footer>
         <small>$800</small>
      </template>
    </b-card>

   
  </b-card-group>
</div>

</template>

<script>
export default {
    name:"ComidasCards"
}
</script>

<style>
.cards{
    display: flex;
    flex-direction: column;
    justify-content: center;

}
.cards-title{
    text-align: start;
    color: black;
    
}
</style>