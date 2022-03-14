<template>
  <div class="columns">
    <div class="column is-6">
      <form @submit.prevent="login" class="box">
        <div class="field">
          <label>Correo</label>
          <input
            v-model="email"
            class="input"
            required
            type="email"
            placeholder="Ingrese su correo"
          >
        </div>
        <div class="field">
          <label>Contraseña</label>
          <input
            v-model="password"
            class="input"
            required
            type="password"
            placeholder="Ingrese su contraseña"
          >
          <p v-if="error" class="help has-text-danger">{{error}}</p>
        </div>
        <div class="field">
          <button class="button is-primary is-rounded is-medium" type="submit">Ingresar</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>

export default {
  name: "LoginApp",
  data() {
    return {
      email: "",
      password: "",
      error: null
    };
  },
 
};
</script>

<style>
.columns{
    text-align: start;
}
</style>