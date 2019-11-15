<template>
  <div>
    <HomeTop />
    <div v-if="isDataLoaded" class="container">
      <h1 class="m-5 text-center">Meetings in "Location"</h1>
      <div class="m-5 text-center">
        <router-link :to="{ name: 'meeting-create' }"
          ><button class="btn btn-outline-primary ml-2">
            New Meeting
          </button></router-link
        >
        <router-link :to="{ name: 'find' }">
          <button class="btn btn-outline-success m-2">See all</button>
        </router-link>

        <!-- <HomeDropdown /> -->
      </div>

      <div class="row mb-5">
        <MeetingItem
          v-for="meeting in meetings"
          v-bind:key="meeting._id"
          :meeting="meeting"
        />
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
    <div class="container" v-else>
      <Spinner class="text-center" />
    </div>
  </div>
</template>

<script>
import CategoryItem from "../components/category/CategoryItem";
import MeetingItem from "../components/meeting/MeetingItem";
import { mapActions, mapState } from "vuex";

export default {
  name: "home",
  data() {
    return {
      isDataLoaded: false
    };
  },
  components: {
    CategoryItem,
    MeetingItem
  },
  computed: {
    ...mapState({
      meetings: state => state.meetings.items,
      categories: state => state.categories.items
    })
  },
  created() {
    Promise.all([this.fetchMeetings(), this.fetchCategories()]).then(
      () => (this.isDataLoaded = true)
    );

    // this.fetchMeetings().then(() => {
    //   this.fetchCategories().then(() => {
    //     this.isDataLoaded = true;
    //   });
    // });
  },
  methods: {
    ...mapActions("meetings", ["fetchMeetings"]),
    ...mapActions("categories", ["fetchCategories"])
  }
};
</script>

<style scoped>
.inline-text {
  display: inline;
}
</style>
