<template>
  <div>
    <HomeTop />
    <div class="container">
      <h1 class="m-5 text-center">Meetings in "Location"</h1>
      <div class="m-5 text-center">
        <button class="btn btn-success m-2">Create meeting</button>
        <router-link :to="{name: 'find'}">
          <button class="btn btn-success m-2">See all</button>
        </router-link>

        <HomeDropdown />
      </div>

      <div class="row mb-5">
        <MeetingItem v-for="meeting in meetings" v-bind:key="meeting._id" :meeting="meeting" />
      </div>

      <h1 class="text-center m-5">Categories</h1>
      <div class="row mb-2">
        <CategoryItem
          v-for="category in categories"
          v-bind:key="category._id"
          :category="category"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CategoryItem from "../components/category/CategoryItem";
import MeetingItem from "../components/meeting/MeetingItem";
import axios from "axios";

export default {
  name: "home",
  components: {
    CategoryItem,
    MeetingItem
  },
  data() {
    return {
      // Local data variable
      meetings: [],
      categories: [],
      url: "http://localhost:5000"
    };
  },
  created() {
    const url = this.url;
    axios.get(url + "/api/v1/categories").then(res => {
      this.categories = res.data;
    });

    axios.get(url + "/api/v1/meetings").then(res => {
      this.meetings = res.data;
    });
  }
};
</script>

<style scoped>
.inline-text {
  display: inline;
}
</style>
