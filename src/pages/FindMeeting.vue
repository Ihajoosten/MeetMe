<template>
  <div class="container">
    <div class="lookup-prebody">
      <div class="meeting-lookup-wrap mb-2">
        <div class="meeting-lookup row bg-light shadow p-3 mb-5 rounded">
          <div class="form-inline">
            <input type="text" class="mr-3 ml-4" placeholder=" New York" />
            <span class="text-muted mr-3">Meetings in New York, USA</span>
            <button class="btn btn-outline-success mr-2 ml-5">Meetups</button>
            <button class="btn btn-outline-primary">Calendar</button>
          </div>
        </div>
      </div>
    </div>

    <div class="container mt-5">
      <div
        v-if="amount === 0"
        class="alert alert-warning text-center"
        role="alert"
      >No meetings found! Change the search criteria to find some</div>
      <div class="row">
        <MeetingItem v-for="meeting in meetings" v-bind:key="meeting._id" :meeting="meeting" />
      </div>
    </div>
  </div>
</template>

<script>
import MeetingItem from "../components/meeting/MeetingItem";
import { mapActions, mapState } from "vuex";

export default {
  components: {
    MeetingItem
  },
  computed: {
    ...mapState({
      meetings: state => state.meetings.items,
      amount: state => state.meetings.items.length 
    })
  },
  created() {
    this.fetchMeetings();
  },
  methods: {
    ...mapActions('meetings', ["fetchMeetings"])
  }
};
</script>

<style lang="scss" scoped>
.lookup-prebody {
  margin-bottom: 100px;
}
.meeting-lookup {
  width: 800px;
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