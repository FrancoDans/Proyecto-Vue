<template>
  <div>
    <h1>Contacto de ayuda</h1>
    <form name="form" id="form" v-on:submit.prevent="procesar()"></form>
      <p>
        Nombre y Apellido: <input type="text" name="nombre" placeholder="Nombre y Apellido" class="form-contol" v-model="contacto.nombre">
      </p> <div v-if="submited && !$v.contacto.nombre.required">Este campo es obligatorio</div>
            <div v-if="submited && !$v.contacto.nombre.minLength">Este campo debe tener al menos 3 caracteres</div>        
      <p>
        E-mail: <input type="text" name="correo" placeholder="E-mail" class="form-contol" v-model="contacto.correo">
      </p>
    <p>
       Teléfono: <input type="text" name="telefono" placeholder="Teléfono" class="form-contol" v-model="contacto.telefono">
      </p>
  
    <p>
      Mensaje: <textarea name="mensaje" id="mensaje" cols="30" rows="10" placeholder="Escriba su mensaje" class="form-control" v-model="contacto.mensaje"></textarea>
    </p>
    <hr>
    <input type="submit" value="Enviar" title="Enviar" class="btn btn-primary">
    
  </div>

</template>

<script>
  import{
    required,
    minLength,
    email
  } from "vuelidate/lib/validators";
export default {
  name:"ContactoComponent",
  data(){
    return{
      submited:false,
      contacto: {
          nombre:"",
          correo:"",
          telefono:"",
          mensaje:""     
    }
  }
},
validations: {
  contacto: {
    nombre:{
      required,
      minLength:minLength(3)
    },
    correo: {
      required,
      minLength: minLength(8),
      email
    }
  }
}
}


</script>

<style>

</style>