<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div
      id="navbar"
      class="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2"
    >
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link class="nav-link" :to="{ name: 'home' }"
            ><a>Home</a></router-link
          >
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{ name: 'find' }"
            ><a>Meetings</a></router-link
          >
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'about' }">
            <a class="nav-link">About</a>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="mx-auto order-0">
      <router-link :to="{ name: 'home' }">
        <a class="navbar-brand mx-auto text-success brand-name">
          <strong>Meet Me</strong>
        </a>
      </router-link>
    </div>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbar"
      aria-controls="navbar"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div
      id="navbar"
      class="navbar-collapse collapse w-100 order-3 dual-collapse2"
    >
      <ul class="navbar-nav ml-auto">
        <li v-if="!isLoggedIn" class="nav-item mr-2">
          <router-link :to="{ name: 'register' }"
            ><a class="btn btn-sm btn-outline-primary mt-2">Register</a
            ></router-link
          >
        </li>
        <li v-if="!isLoggedIn" class="nav-item">
          <router-link :to="{ name: 'login' }"
            ><a class="btn btn-sm btn-outline-success mt-2">Login</a
            ></router-link
          >
        </li>
        <li v-if="isLoggedIn" class="nav-item">
          <a v-on:click.prevent="logout()" class="btn btn-sm btn-outline-success mt-2">Logout</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import * as auth from "../../services/authService";
import { mapState } from "vuex";

export default {
  name: "Navbar",
  computed: {
    ...mapState({
      isLoggedIn: state => state.isLoggedIn
    })
  },
  methods: {
    logout: function() {
      auth.logout();
      this.$router.push({ name: "home" });
    }
  }
};
</script>

<style scoped>
.brand-name {
  font-size: 30px;
}
a {
  text-decoration: none !important;
  font-size: 20px;
}
.dropdown:hover > .dropdown-menu {
  display: block;
}
</style>
