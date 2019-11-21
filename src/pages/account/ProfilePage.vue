<template>
  <div class="container profile">
    <div class="row">
      <div class="col-sm text-center">
        <img class="profile-pic" :src="user.avatar" />
        <span class="title"
          ><h4>
            <b>{{ user.name }}</b>
          </h4></span
        >
        <p class="tagline">Username: {{ user.username }}</p>
        <p class="tagline">Joined meetings: {{ user.joinedMeetings.length }}</p>
        <b-button
          class="btn-sm"
          variant="outline-primary"
          v-b-modal.modal-center
          >Update account</b-button
        >
        <UpdateModal />
      </div>

      <div
        v-on:click.prevent="activeTab = 'meetings'"
        :class="{ isActive: activeTab === 'meetings' }"
        class="stats-tab col-sm text-center"
      >
        <p class="stat-val">{{ meetingCount }}</p>
        <p class="stat-key">Meetups</p>
      </div>

      <div
        v-on:click.prevent="activeTab = 'threads'"
        :class="{ isActive: activeTab === 'threads' }"
        class="stats-tab col-sm text-center"
      >
        <p class="stat-val">{{ threadCount }}</p>
        <p class="stat-key">Threads</p>
      </div>

      <div
        v-on:click.prevent="activeTab = 'posts'"
        :class="{ isActive: activeTab === 'posts' }"
        class="stats-tab col-sm text-center"
      >
        <p class="stat-val">{{ postCount }}</p>
        <p class="stat-key">Posts</p>
      </div>
    </div>

    <div v-if="activeTab === 'meetings'" class="row mt-5">
      <div v-for="meeting in meetings" v-bind:key="meeting._id" class="col">
        <div class="card" style="width: auto;">
          <img
            :src="meeting.image"
            style="width: 100%; height: 15rem;"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h6 class="card-title">
              {{ meeting.title }}
            </h6>
            <div class="badge badge-success">
              {{ meeting.status | capitalize }}
            </div>
            <p class="card-text mt-2">
              {{ meeting.description }}
            </p>
          </div>
          <div class="card-footer">
            <button class="btn btn-sm btn-outline-success mr-2">Share</button>
            <button class="btn btn-sm btn-outline-danger">Delete</button>
          </div>
        </div>
        <br />
      </div>
    </div>

    <div v-if="activeTab === 'threads'" class="row mt-5">
      <div v-for="thread in threads" v-bind:key="thread._id" class="col-md-4">
        <div class="card" style="width: auto; height: 10rem">
          <div class="card-body">
            <h5 class="card-title">{{ thread.title }}</h5>
            <div>
              Posted <b>{{ thread.createdAt | fromNow }}</b>
            </div>
          </div>
          <div class="card-footer">
            <button class="btn btn-sm btn-outline-success mr-2">Share</button>
            <button class="btn btn-sm btn-outline-danger">Delete</button>
          </div>
        </div>
        <br />
      </div>
    </div>

    <div v-if="activeTab === 'posts'" class="row mt-5">
      <div v-for="post in posts" v-bind:key="post._id" class="col-md-4">
        <div class="card" style="width: auto; height: 10rem">
          <div class="card-body">
            <h5 class="card-title">{{ post.text }}</h5>
            <div>
              Posted <b>{{ post.createdAt | fromNow }}</b>
            </div>
          </div>
          <div class="card-footer">
            <button class="btn btn-sm btn-outline-success mr-2">Share</button>
            <button class="btn btn-sm btn-outline-danger">Delete</button>
          </div>
        </div>
        <br />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import UpdateModal from '../../components/account/UpdateAccountModal';

export default {
  data() {
    return {
      activeTab: 'meetings'
    };
  },
  components: {
    UpdateModal
  },
  computed: {
    ...mapState({
      user: state => state.user,
      meetings: state => state.stats.meetings.data,
      threads: state => state.stats.threads.data,
      posts: state => state.stats.posts.data,
      meetingCount: state => state.stats.meetings.count,
      threadCount: state => state.stats.threads.count,
      postCount: state => state.stats.posts.count
    })
  },
  created() {
    this.$store
      .dispatch('stats/fetchUserStats')
  }
};
</script>

<style scoped>
body {
  background: #f5f7fa;
}
.profile-pic {
  height: 100px;
  width: 100px;
}
.stats-tab {
  border-left: 1px solid transparent;
  border-bottom: 2px solid transparent;
  border-right: 1px solid transparent;

  transition: 0.5s;
}
.stats-tab:hover {
  cursor: pointer;
  border-left: 1px solid #28a745;
  border-bottom: 2px solid #28a745;
  border-right: 1px solid #28a745;
}
.stats-tab.isActive {
  border-bottom: 2px solid #28a745;
}
.stat-val {
  font-size: 3em;
  padding-top: 20px;
  font-weight: bold;
}
.stat-key {
  font-size: 1.4em;
  font-weight: 200;
}
.section.profile-heading
  .column.is-2-tablet.has-text-centered
  + .has-text-centered {
  border-left: 1px dotted rgba(6, 253, 6, 0.2);
}

.modal-card .content h1 {
  padding: 40px 10px 10px;
  border-bottom: 1px solid #dadada;
}
.container.profile .profile-options .tabs ul li.link a {
  margin-bottom: 20px;
  padding: 20px;
  background-color: #f1f1f1;
}
</style>
