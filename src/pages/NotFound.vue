<template>
  <div class="container">
    <div class="row">
      <h1 class="col mt-5 text-center">Sorry, the page you are looking for is not found!</h1>
    </div>
    <h2 class="subtitle">404<span> :'(</span></h2>      
    <router-link :to="{name: 'home'}" class="offset-md-1 btn btn-success">Back to homepage</router-link>
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        required: true,
        type: String
      },
      status: {
        required: true,
        type: String
      },
      navigateToPage: {
        required: true,
        type: String
      },
      navigateToText: {
        required: true,
        type: String
      }
    }
  }
</script>

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