<template>
  <div>
    <AppHero />
    <div class="container">
      <section class="section">
        <div class="m-b-lg">
          <h1 class="title is-inline">Featured Meetups in "Location"</h1>
          <AppDropdown />
          <button class="button is-primary is-pulled-right m-r-sm">Create Meetups</button>
          <button class="button is-primary is-pulled-right m-r-sm">All</button>
        </div>
        <div class="row columns is-multiline">
          <MeetingItem v-for="meeting in meetings" v-bind:key="meeting._id" :meeting="meeting" />
        </div>
      </section>
      <section class="section">
          <h1 class="title">Categories</h1>
          <div class="columns cover is-multiline is-mobile">
            <CategoryItem
              v-for="category in categories"
              v-bind:key="category._id"
              :category="category"
            />
          </div>
      </section>
    </div>
  </div>
</template>

<script>
import dataService from "../services/DataService";
import CategoryItem from "../components/category/CategoryItem";
import MeetingItem from "../components/meeting/MeetingItem";

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
      categories: []
    };
  },
  created() {
    dataService.methods.getMeetings.then(res => {
      this.meetings = res.data;
    });

    dataService.methods.getCategories.then(res => {
      this.categories = res.data;
    });
  }
};
</script>

