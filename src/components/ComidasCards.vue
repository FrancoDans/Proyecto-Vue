<template>

  <div class="cards">
      <h1 class="cards-title" >Menú:</h1>
      
  <div class="row container-fluid">
    <div class="col-3">
       <b-card
    title="Card Title"
    img-src="@/assets/logo.png"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-card-text>
      Some quick example text to build on the card title and make up the bulk of the card's content.
    </b-card-text>

    <b-button href="#" variant="primary">Go somewhere</b-button>
  </b-card>
    </div>
     <div class="col-3">
       <b-card
    title="Card Title"
    img-src="https://picsum.photos/600/300/?image=25"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-card-text>
      Some quick example text to build on the card title and make up the bulk of the card's content.
    </b-card-text>

    <b-button href="#" variant="primary">Go somewhere</b-button>
  </b-card>
    </div>
 
</div>

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