<template>
  <div id="app">
    <TheNavbar />
    <router-view />
    <TheFooter />
  </div>
</template>

<script>
import TheNavbar from "@/components/shared/Navbar";
import TheFooter from "@/components/shared/Footer";
import UIkit from "uikit";
import Icons from "uikit/dist/js/uikit-icons";

UIkit.use(Icons);
export default {
  name: "app",
  components: {
    TheNavbar,
    TheFooter
  }
};
</script>

<style lang="sass">
</style>

//@import '~bulma/bulma.sass';

// @import "../node_modules/uikit/src/less/uikit.less"; 
