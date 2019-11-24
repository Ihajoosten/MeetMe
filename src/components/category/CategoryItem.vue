<template>
  <div class="col-4">
    <router-link :to="{name: 'find-category-meetings', params: {category: category.name}}">
      <div class="image">
        <img
          class="image-container"
          :src="category.image"
          style="width: 350px; height: 250px"
        />
        <div class="category-name">{{ category.name | capitalize }}</div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    category: {
      required: true,
      type: Object
    }
  }
};
</script>

<style scoped>
.is-rounded {
  border-radius: 10px !important;
}

.image-container {
  background-color: rgba(0, 0, 0, 0.5);
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  margin-top: 3.9%;
}

.image::after {
  content: '\A';
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.6);
  opacity: 0;
  transition: all 1s;
  -webkit-transition: all 1s;
}

.image:hover::after {
  opacity: 1;
}

.category-name {
  background-color: rgb(255, 255, 255);
  color: black;
  font-size: 2rem;
  font-weight: bold;
  margin: 0 auto;
  padding: 10px;
  width: 60%;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  mix-blend-mode: screen;
}
</style>
