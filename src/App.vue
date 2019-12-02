<template>
  <div v-if="isLocationResolved" id="app">
    <TheNavbar />
    <router-view v-bind:key="$route.path" />
    <TheFooter />
  </div>
</template>

<script>
import TheNavbar from '@/components/shared/Navbar';
import TheFooter from '@/components/shared/Footer';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

UIkit.use(Icons); 
export default {
  name: 'app',
  components: {
    TheNavbar,
    TheFooter
  },
  computed: {
    isLocationResolved() {
      return this.$store.state.meta.isLocationResolved 
    } 
  },
  created() {
    this.$store.dispatch('meta/fetchMetaData');
  },
  beforeCreate() {
    this.$store.dispatch('authenticate');
  }
};
</script>
