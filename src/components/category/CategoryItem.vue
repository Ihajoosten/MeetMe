<template>
  <div class="col-4">
    <div class="title m-t-xs bold">{{category.name | capitalize}}</div>
    <img class="image-cover is-rounded" :src="category.image" style="width: 350px; height: 250px" />
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

.image-cover {
  background-color: rgb(0, 0, 0)!important
}
</style>