<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div id="navbar" class="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
        <router-link class="nav-link" :to="{name: 'home'}"><a>Home</a></router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Find</a>
        </li>
        <li class="nav-item">
          <router-link :to="{name: 'about'}">
            <a class="nav-link">About</a>
          </router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Meetings</a>
        </li>
      </ul>
    </div>
    <div class="mx-auto order-0">
      <router-link :to="{name: 'home'}">
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
    <div id="navbar" class="navbar-collapse collapse w-100 order-3 dual-collapse2">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item mr-2">
          <router-link :to="{name: 'login'}"><a class="btn btn-outline-success mt-2" href="#">Login</a></router-link>
        </li>
        <li class="nav-item">
          <a class="btn btn-outline-dark mt-2" href="#">Account</a>
        </li>
      </ul>
    </div>
  </nav>
  <!-- <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <router-link class="navbar-item d-flex justify-content-center" :to="{name: 'home'}"><a class="navbar-brand text-muted brand-name"><strong>Meet Me</strong></a></router-link>

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
        <li>
        <a class="btn btn-success mt-2" href="#">Login</a>
        </li>
      </ul>
    </div>
  </nav>-->
</template>

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