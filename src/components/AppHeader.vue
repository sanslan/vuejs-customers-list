<template>
    <div class="container">
      <nav class="navbar" role="navigation" aria-label="main navigation">
      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <li class='navbar-item' ><router-link to="/" exact>List customers</router-link></li>
          <li @click='resetSelectedCustomer' class='navbar-item' ><router-link to="/add" exact>Add customer</router-link></li>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <li class='navbar-item' ><router-link to="/register" exact>Register</router-link></li>
              <li class='navbar-item' ><router-link to="/login" exact>Login</router-link></li>
              
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>

</template>

<script>
export default {
  name: 'appHeader',
  methods: {
    resetSelectedCustomer(){
      this.$store.state.selectedCustomer= null
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
