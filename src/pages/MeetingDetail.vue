<template>
  <!-- Page Content -->
  <div class="container">
    <!-- Portfolio Item Heading -->
    <div class="row ml-1">
      <div v-if="!isActive">
        <h1 class="my-4">
          {{meeting.title}}
          <span class="badge badge-danger">{{meeting.status | capitalize}}</span>
        </h1>
      </div>
      <div v-else>
        <h1 class="my-4">
          {{meeting.title}}
          <span class="badge badge-success">{{meeting.status | capitalize}}</span>
        </h1>
      </div>
    </div>

    <!-- Portfolio Item Row -->
    <div class="row">
      <div class="col-md-7">
        <img class="img-fluid meeting-image" :src="meeting.image" alt />
      </div>

      <div class="col-md-4">
        <h2 class="my-3">Meeting Info</h2>
        <img class="is-rounded" :src="meetingCreator.avatar" />
        <br />
        <br />
        <span>Created by {{meetingCreator.name}} on {{meeting.createdAt | date}}</span>
        <br />
        <br />
        <p>{{meeting.description}}</p>
        <ul>
          <li>Date: {{meeting.startDate | date}}</li>
          <li>Time: {{meeting.timeFrom}} - {{meeting.timeTo}}</li>
          <li>Location: {{meeting.location}}</li>
          <li>Joined people: {{meeting.joinedPeopleCount}}</li>
        </ul>
        <button class="btn btn-success">Join</button>
      </div>
    </div>
    <!-- /.row -->

    <!-- Related Projects Row -->
    <h3 class="my-4">People who joined</h3>

    <div class="row">
      <div v-for="person in joinedPeople" v-bind:key="person._id" class="col-1">
        <img class="img-fluid is-rounded" :src="person.avatar" alt />
        <br />
        <p class="person-name text-center">{{person.name}}</p>
      </div>
    </div>
    <!-- /.row -->

    <div class="row">
      <div class="col-8 offset-md-2">
        <div class="box">
          <!-- Thread title -->
          <h4 id="const" class="title is-3">Should I follow some dresscode ?</h4>
          <!-- Create new post, handle later -->
          <form class="post-create">
            <div class="field">
              <textarea class="textarea textarea-post" placeholder="Write a post" rows="1"></textarea>
              <button class="btn btn-success mt-2">Send</button>
            </div>
          </form>
          <!-- Create new post END, handle later -->
          <!-- Posts START -->
          <article class="offset-md-3">
        <img class="is-rounded" :src="meetingCreator.avatar" />
            <div class="media-content">
              <div class="content is-medium">
                <div class="post-content">
                  <!-- Post User Name -->
                  <strong class="author">Filip Jerga</strong>
                  {{' '}}
                  <!-- Post Updated at -->
                  <small class="post-time">13th Jan</small>
                  <br />
                  <p class="post-content-message">It's up to you ;-)</p>
                </div>
              </div>
            </div>
          </article>
          <!-- Posts END -->
        </div>
      </div>
    </div>
  </div>
  <!-- /.container -->
</template>

<script>
import axios from "axios";

export default {
  name: "meeting-detail",
  data() {
    return {
      meeting: {},
      joinedPeople: [],
      url: "http://localhost:5000",
      active: ""
    };
  },
  created() {
    const id = this.$route.params.id;
    const url = this.url;
    axios.get(url + `/api/v1/meetings/${id}`).then(res => {
      this.meeting = res.data;
      this.meeting.status = res.data.status;
      this.joinedPeople = res.data.joinedPeople;
    });
  },
  computed: {
    meetingCreator() {
      return this.meeting.meetingCreator;
    },
    isActive() {
      return {
        active: this.active === "active"
      };
    }
  }
};
</script>

<style scoped>
.meeting-image {
  height: 500px;
  width: 500px;
}
.is-rounded {
  height: 65px;
  width: 65px;
  border-radius: 50% !important;
}
.person-name {
  font-size: 15px;
}
</style>
    