<template>
  <div class="container">
    <div class="row">
      <h2 class="col mt-5 text-center">
        Sorry, the page you are looking for is not found!
      </h2>
    </div>
    <h1 class="col text-center"><strong>404 :(</strong></h1>
    <router-link :to="{ name: 'home' }" class="offset-md-1 btn btn-success"
      >Go to homepage</router-link
    >
  </div>
</template>

<style scoped>
.title {
  font-size: 40px;
}
.subtitle {
  font-size: 140px;
  text-align: center;
}
.notFoundContainer {
  margin-top: 80px;
}
</style>
