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
        <li v-if="!$store.state.isLoggedIn" class="nav-item mr-2">
          <router-link :to="{ name: 'register' }"
            ><button class="btn btn-sm btn-outline-primary mt-2">
              Register
            </button></router-link
          >
        </li>
        <li v-if="!$store.state.isLoggedIn" class="nav-item">
          <router-link :to="{ name: 'login' }"
            ><button class="btn btn-sm btn-outline-success mt-2">
              Login
            </button></router-link
          >
        </li>
        <li v-if="$store.state.isLoggedIn" class="nav-item">
          <div class="dropdown">
            <button
              class="btn btn-outline-success dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Account
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <router-link :to="{ name: 'account' }" class="dropdown-item">
                <a>Profile</a>
              </router-link>
              <div class="dropdown-divider"></div>
              <a
                v-on:click.prevent="logout()"
                class="dropdown-item btn btn-outline-danger"
                href="#"
                >Logout</a
              >
            </div>
          </div>
        </li>
        <li v-if="$store.state.isLoggedIn" class="nav-item mt-2 mr-1 ml-3">
          <i>Welcome {{ user }}!</i>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import * as auth from '../../services/authService';

export default {
  name: 'Navbar',
  computed: {
    isLoggedIn() {
      return this.$store.state.isLoggedIn;
    },
    user() {
      return this.$store.state.username;
    }
  },
  methods: {
    logout: function() {
      auth.logout();
      this.$router.push({ name: 'home' });
    }
  }
};
</script>

<style scoped>
nav {
  position: sticky;
  z-index: 2;
  left: 0;
  top: 0;
  background-color: #28a745;
  text-align: center;
}
.brand-name {
  font-size: 30px;
}
li a {
  text-decoration: none !important;
  font-size: 20px;
}
</style>
