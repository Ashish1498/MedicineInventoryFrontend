<template>
  <div id="app">
   <router-view />
  </div>
</template>

<script>
export default {
  name: 'app',
  created () {
    const token = localStorage.getItem('JWT_TOKEN')
    this.$store.commit('setToken', token)
    if (token === null) {
      this.$router.push('/login')
    }
  }
}
</script>

<style>

</style>
