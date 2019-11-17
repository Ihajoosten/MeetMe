<template>
  <!-- Page Content -->
  <div class="container">
    <!-- Portfolio Item Heading -->
    <div class="row ml-1">
      <div v-if="isActive === 'active'">
        <h1 class="my-4">
          {{ meeting.title }}
          <span class="badge badge-success">{{
            meeting.status | capitalize
          }}</span>
        </h1>
      </div>
      <div v-else>
        <h1 class="my-4">
          {{ meeting.title }}
          <span class="badge badge-danger">{{
            meeting.status | capitalize
          }}</span>
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
        <span
          >Created by {{ meetingCreator.name }} on
          {{ meeting.createdAt | date }}</span
        >
        <br />
        <br />
        <p>{{ meeting.description }}</p>
        <ul>
          <li>Date: {{ meeting.startDate | date }}</li>
          <li>Time: {{ meeting.timeFrom }} - {{ meeting.timeTo }}</li>
          <li>Location: {{ meeting.location }}</li>
          <li></li>
        </ul>
        <button v-if="!isLoggedIn" :disabled="true" class="alert alert-warning">
          You need to login first in order to join
        </button>
        <button
          v-if="canJoin && isLoggedIn"
          @click="joinMeeting"
          class="btn btn-outline-success"
        >
          Join
        </button>
        <button
          @click="leaveMeeting"
          v-if="isMember"
          class="btn btn-outline-danger"
        >
          Leave
        </button>
      </div>
    </div>
    <!-- /.row -->

    <div class="row mt-5"></div>
    <div class="col-3" role="alert">
      <div v-if="count >= 2" class="alert alert-info">
        <i>{{ count }} persons have joined so far</i>
      </div>
      <div v-else-if="count === 1" class="alert alert-info">
        <i>{{ count }} person has joined so far</i>
      </div>
      <div v-else class="alert alert-warning" role="alert">
        <i>0 persons have joined so far</i>
      </div>
      <h4>People who have joined</h4>
    </div>
    <!-- /.row -->

    <ThreadCreateModal
      v-if="isMember || isOwner"
      @threadSubmitted="createThread"
      :btnTitle="`Welcome ${user.name}, start a new thread`"
      :title="'Create Thread'"
    />

    <div class="row text-white">
      <!-- Thread List START -->
      <div class="row col py-5 d-flex justify-content-center">
        <div
          v-for="thread in orderThreads()"
          v-bind:key="thread._id"
          class="col shadow mb-3 bg-success rounded ml-3"
        >
          <!-- Thread title -->
          <h4 class="mb-4 mt-4">
            <strong class="text-white">{{ thread.title }}</strong>
          </h4>
          <!-- Create new post, handle later -->
          <form>
            <div class="field">
              <textarea
                class="form-control mt-3 mb-4"
                id="textarea-post"
                rows="1"
                placeholder="Write something."
              ></textarea>
              <button class="btn btn-sm btn-outline-light mb-5">Post</button>
            </div>
          </form>
          <!-- Create new post END, handle later -->
          <!-- Posts START -->
          <div v-for="post in thread.posts" v-bind:key="post._id" class="mb-3">
            <div class="row ml-3 col-11 bg-light shadow rounded text-muted">
              <img class="is-rounded-post ml-2" :src="post.author.avatar" />
              <div class="content is-medium">
                <div class="post-content">
                  <!-- Post User Name -->
                  <strong class="ml-1 person-name">{{
                    post.author.name
                  }}</strong>
                  <!-- Post Updated at -->
                  <small class="ml-2">{{ post.updatedAt | fromNow }}</small>
                  <p class="ml-4 post-text">{{ post.text }}</p>
                </div>
              </div>
            </div>
          </div>
          <!-- Posts END -->
        </div>
      </div>
      <!-- Thread List END -->
    </div>
  </div>
  <!-- /.container -->
</template>

<script>
// import ThreadList from '@/components/threads/ThreadList'
import { mapActions, mapState } from 'vuex';
import { isLoggedIn } from '../services/authService';
import ThreadCreateModal from '@/components/threads/ThreadCreateModal';

export default {
  name: 'meeting-detail',
  components: {
    ThreadCreateModal
    // ThreadList
  },
  data() {
    return {
      amount: null
    };
  },
  computed: {
    ...mapState({
      meeting: state => state.meetings.item,
      threads: state => state.threads.items,
      count: state => state.meetings.item.joinedPeopleCount,
      isActive: state => state.meetings.item.status,
      meetingCreator: state => state.meetings.item.author || {},
      isLoggedIn: state => state.isLoggedIn,
      user: state => state.user
    }),
    isOwner() {
      return this.$store.getters['isOwner'](this.meetingCreator._id);
    },
    isMember() {
      return this.$store.getters['isMember'](this.meeting._id);
    },
    canJoin() {
      return !this.isOwner && isLoggedIn && !this.isMember;
    }
  },
  methods: {
    ...mapActions('meetings', ['fetchMeeting']),
    ...mapActions('threads', ['fetchThreads', 'postThread']),
    joinMeeting() {
      this.$store.dispatch('meetings/joinMeeting', this.meeting._id);
    },
    leaveMeeting() {
      this.$store.dispatch('meetings/leaveMeeting', this.meeting._id);
    },
    createThread({ title, done }) {
      this.postThread({ title, meetingId: this.meeting._id }).then(() => {
        this.$toast.success('Created new thread!', {
          duration: 5000,
          position: 'top'
        });
        done();
      });
    },
    orderThreads() {
      const copyThreads = [...this.threads];
      return copyThreads.sort((thread, nextThread) => {
        return new Date(nextThread.createdAt) - new Date(thread.createdAt);
      });
    }
  },
  created() {
    const id = this.$route.params.id;
    this.fetchMeeting(id);
    this.fetchThreads(id);
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
.is-rounded-post {
  height: 40px;
  width: 40px;
  border-radius: 50%;
}
.person-name {
  font-size: 13px;
}
.post-text {
  font-size: 13px;
}
</style>
