<template>
  <div class="mb-5">
    <HomeTop />
    <div v-if="isDataLoaded" class="container">
      <h1 class="m-5 text-center">
        Meetings <span v-if="location"> in {{ location }}</span>
      </h1>
      <div class="m-5 text-center">
        <router-link :to="{ name: 'meeting-create' }"
          ><button class="btn btn-outline-primary ml-2">
            New Meeting
          </button></router-link
        >
        <router-link :to="{ name: 'find' }">
          <button id="seeAll" class="btn btn-outline-success m-2">
            See all
          </button>
        </router-link>
      </div>

      <div class="row mb-5">
        <MeetingItem
          v-for="meeting in meetings"
          v-bind:key="meeting._id"
          :meeting="meeting"
        />
      </div>
      <div class="container">
        <h1 class="text-center m-5">Categories</h1>
        <div class="row mb-2">
          <CategoryItem
            class="col-sm"
            v-for="category in categories"
            v-bind:key="category._id"
            :category="category"
          />
        </div>
      </div>
    </div>
    <div class="container" v-else>
      <Spinner class="text-center" />
    </div>
  </div>
</template>

<script>
import CategoryItem from '../../components/category/CategoryItem';
import MeetingItem from '../../components/meeting/MeetingItem';

export default {
  name: 'home',
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
    location() {
      const { city, country } = this.$store.state.meta.item;
      return city && country ? city + ', ' + country : '';
    },
    meetings() {
      return this.$store.state.meetings.items;
    },
    categories() {
      return this.$store.state.categories.items;
    }
  },
  created() {
    Promise.all([this.$store.dispatch('meetings/fetchMeetings'), this.$store.dispatch('categories/fetchCategories')])
    .then(() => (this.isDataLoaded = true)
    );
    const filter = {};
    if (this.location) {
      filter['location'] = this.location;
    }
  }
};
</script>

<style scoped>
.inline-text {
  display: inline;
}
</style>
