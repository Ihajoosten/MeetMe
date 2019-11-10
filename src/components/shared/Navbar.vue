<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link class="navbar-item text-muted" :to="{name: 'home'}">
      <h1 class="title is-4">Meet Me</h1>
    </router-link>
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
    <div class="collapse navbar-collapse" id="navbar">
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        <li class="nav-item">
          <a class="nav-link" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Find</a>
        </li>
        <li class="nav-item">
          <div class="dropdown mr-1">
            <a
              class="dropdown-toggle nav-link"
              id="menu-drop"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              data-offset="10,20"
            >More</a>
            <div class="dropdown-menu" aria-labelledby="menu-drop">
              <router-link class="dropdown-item" :to="{name: 'about'}">About</router-link>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Contact</a>
            </div>
          </div>
        </li>
      </ul>
      <div class="col-4 d-flex justify-content-end align-items-center">
        <a class="btn btn-success mr-2" href="#">Sign up</a>
        <a class="btn btn-secondary mr-3" href="#">Login</a>
      </div>
    </div>
  </nav>
</template>

<style scoped>
a {
  text-decoration: none !important;
}
.dropdown:hover > .dropdown-menu {
  display: block;
}
</style>