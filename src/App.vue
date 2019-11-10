<template>
  <div id="app">
    <TheNavbar />
    <router-view />
    <TheFooter />
  </div>
</template>

<script>
import TheNavbar from '@/components/shared/Navbar'
import TheFooter from '@/components/shared/Footer'
export default {
  name: 'app',
  components: {
    TheNavbar,
    TheFooter
  }
}
</script>

<style lang="scss">
@import'assets/css/spacing.css';
@import '~bulma/bulma.sass';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>