<template>
  <div class="container">
    <div class="lookup-prebody">
      <div class="meeting-lookup-wrap mb-2">
        <div class="meeting-lookup row bg-light shadow p-3 mb-5 rounded">
          <div class="form-inline">
            <input
              v-model="searchedLocation"
              v-on:keyup.enter="fetchMeetings"
              type="text"
              class="mr-3 ml-4"
              placeholder=" New York"
            />
            <!-- <span
              v-if="searchedLocation && meetings && meetings.length > 0"
              class="text-muted mr-3"
              >Meetings in {{ meetings[0].location }}</span
            > -->
            <button
              v-if="searchedLocation && meetings && meetings.length > 0"
              class="btn btn-danger mr-2"
            >
              {{ meetings[0].location }}
            </button>

            <button
              v-on:click.prevent="cancelCategory"
              v-if="category && meetings"
              class="btn btn-danger"
            >
              {{ category }} X
            </button>
          </div>
        </div>
      </div>
    </div>

    <div v-if="pageLoader_isDataLoaded" class="container mt-5">
      <div
        v-if="meetings.length === 0"
        class="alert alert-warning text-center"
        role="alert"
      >
        No meetings found! Change the search criteria to find some
      </div>
      <div class="row">
        <MeetingItem
          v-for="meeting in meetings"
          v-bind:key="meeting._id"
          :meeting="meeting"
        />
      </div>
    </div>
  </div>
</template>

<script>
import MeetingItem from '../../components/meeting/MeetingItem';
import pageLoader from '../../mixins/pageloader';

export default {
  props: {
    category: {
      required: false,
      type: String
    }
  },
  mixins: [pageLoader],
  data() {
    return {
      searchedLocation: this.$store.getters['meta/location'],
      filter: {}
    };
  },
  components: {
    MeetingItem
  },
  computed: {
    meetings() {
      return this.$store.state.meetings.items;
    }
  },
  created() {
    this.fetchMeetings();
  },
  methods: {
    fetchMeetings() {
      if (this.searchedLocation) {
        this.filter['location'] = this.searchedLocation
          .toLowerCase()
          .replace(/[\s,]+/g, '')
          .trim();
      }

      if (this.category) {
        this.filter['category'] = this.category;
      }
      this.pageLoader_isDataLoaded = false;

      this.$store
        .dispatch('meetings/fetchMeetings', { filter: this.filter })
        .then(() => {
          this.pageLoader_resolveData();
          this.$toast.success('Data is loaded!', {
            duration: 5000,
            position: 'top'
          });
        })
        .catch(err => {
          if (err) {
            this.pageLoader_resolveData();
            this.$toast.danger('Failed to load the data!', {
              duration: 5000,
              position: 'top'
            });
          }
        });
    },
    cancelCategory() {
      this.$router.push({ name: 'find' });
    }
  }
};
</script>

<style lang="scss" scoped>
.lookup-prebody {
  margin-bottom: 100px;
}
.meeting-lookup {
  width: auto;
  margin: 0 auto;
  padding: 20px;
}
.meeting-lookup-wrap {
  width: 100%;
  z-index: 1;
  position: relative;
  top: auto;
  bottom: -42px;
}
</style>
