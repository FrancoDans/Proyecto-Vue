<template>
  <div class="login">
    <h1 class="title">Iniciar sesión:</h1>
    <form action class="form" @submit.prevent="login">
      <label class="form-label" for="#email">Email:</label>
      <input v-model="email" class="form-input" type="email" id="email" required placeholder="Email">
      <label class="form-label" for="#password">Password:</label>
      <input v-model="password" class="form-input" type="password" id="password" placeholder="Password">
      <input class="form-submit" type="submit" value="Login">
    </form>
    <hr/>
  </div>




</template>

<script>
export default {
  data: () => ({
    email: "",
    password: ""
  }),
  methods: {
      name:"formulario",
    login() {
      console.log(this.email);
      console.log(this.password);
    }
  }
};
</script>

<style scoped>
.login {
  text-align: start;
  
}
</style>