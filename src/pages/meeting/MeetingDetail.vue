<template>
  <!-- Page Content -->
  <div class="container mb-5">
    <!-- Portfolio Item Heading -->
    <div class="row ml-1">
      <div class="col-md-4">
        <div v-if="isMeetingActive">
          <h3 class="my-4">
            {{ meeting.title }}
            <span v-if="meeting.status === true" class="badge badge-success"
              >Active</span
            >
          </h3>
        </div>
        <div v-else>
          <h3 class="my-4">
            {{ meeting.title }}
            <span class="badge badge-danger">Not Active</span>
          </h3>
        </div>
        <div class="col">
          <img class="img-fluid" :src="meeting.image" alt />

          <h2 class="my-3">Meeting Info</h2>
          <span
            >Created by {{ meetingCreator.name }} on
            {{ meeting.createdAt | date }}</span
          >
          <br />
          <br />
          <p>{{ meeting.description }}</p>

          <li>Date: {{ meeting.startDate | date }}</li>
          <li>Time: {{ meeting.timeFrom }} - {{ meeting.timeTo }}</li>
          <li class="mb-3">Location: {{ meeting.location }}</li>
          <i class="col"><b>Persons who joined:</b></i>
          <div class="row mt-3">
            <div v-for="person in meeting.joinedPeople" v-bind:key="person._id">
              <div class="col mb-2">
                <img
                  class="rounded-circle img-fluid person"
                  :src="person.avatar"
                  alt="avatar"
                />
                <i>{{ person.name }}</i>
              </div>
            </div>
          </div>
          <button
            v-if="!isLoggedIn"
            :disabled="true"
            class="alert alert-warning mt-3"
          >
            <b>Login to join this meeting</b>
          </button>
          <button
            v-if="canJoin && isLoggedIn"
            @click="joinMeeting"
            class="btn btn-outline-success mt-3"
          >
            Join
          </button>
          <button
            @click="leaveMeeting"
            v-if="isMember"
            class="btn btn-outline-danger mt-3"
          >
            Leave
          </button>
        </div>
      </div>
      <div class="col-md-8">
        <ThreadCreateModal
          class="m-5"
          v-if="isMember || isOwner & isLoggedIn"
          @threadSubmitted="createThread"
          :btnTitle="`Welcome ${user.name}, start a new thread`"
          :title="'Create Thread'"
        />
        <div
          v-else-if="isLoggedIn"
          class="alert alert-info text-center m-5 col-8 mt-4"
        >
          <b>You need to join the meeting to interact with others!</b>
        </div>

        <div v-else class="alert alert-warning text-center m-5 col-8 mt-4">
          <b>You need to login to interact with others!</b>
        </div>

        <ThreadList
          :meeting="meeting"
          :threads="orderThreads"
          :ableToPost="canPost"
          :user="user"
        />

        <button
          v-if="!isAllThreadsLoaded"
          @click="fetchThreadsHandler"
          class="btn btn-outline-primary m-5"
        >
          Load More Threads
        </button>
      </div>
    </div>
  </div>

  <!-- /.container -->
</template>

<script>
import { isLoggedIn } from '../../services/authService';
import ThreadCreateModal from '../../components/threads/ThreadCreateModal';
import ThreadList from '../../components/threads/ThreadList';

export default {
  name: 'meeting-detail',
  components: {
    ThreadCreateModal,
    ThreadList
  },
  data() {
    return {
      threadPageNum: 1,
      threadPageSize: 5,
      isDataLoaded: false
    };
  },
  computed: {
    meeting() {
      return this.$store.state.meetings.item;
    },
    threads() {
      return this.$store.state.threads.items;
    },
    meetingCreator() {
      return this.$store.state.meetings.item.author || {};
    },
    isLoggedIn() {
      return this.$store.state.isLoggedIn;
    },
    user() {
      return this.$store.state.user || {};
    },
    isAllThreadsLoaded() {
      return this.$store.state.threads.isAllThreadsLoaded;
    },
    isOwner() {
      return this.$store.getters['isOwner'](this.meetingCreator._id);
    },
    isMember() {
      return this.$store.getters['isMember'](this.meeting._id);
    },
    canJoin() {
      return !this.isOwner && isLoggedIn && !this.isMember;
    },
    canPost() {
      return this.isLoggedIn && (this.isMember || this.isOwner);
    },
    orderThreads() {
      const copyThreads = [...this.threads];
      return copyThreads.sort((thread, nextThread) => {
        return new Date(nextThread.createdAt) - new Date(thread.createdAt);
      });
    },
    isMeetingActive() {
      return new Date() < new Date(this.meeting.startDate);
    }
  },
  beforeMount() {
    const id = this.$route.params.id;
    this.fetchMeeting(id);
    this.fetchThreadsHandler({id});

    this.$socket.emit('meeting/subscribe', id);
    this.$socket.on('meeting/postPublished', this.addPostHandler);
  },
  destroyed() {
    this.$socket.removeListener('meeting/postPublished', this.addPostHandler);
    this.$socket.emit('meeting/unsubscribe');
  },
  methods: {
    fetchMeeting(id) {
      this.$store.dispatch('meetings/fetchMeeting', id);
    },
    fetchThreadsHandler({ id, init }) {
      const filter = {
        pageNum: this.threadPageNum,
        pageSize: this.threadPageSize
      };
      this.$store
        .dispatch('threads/fetchThreads', {
          meetingId: id || this.meeting._id,
          filter,
          init
        })
        .then(() => {
          this.threadPageNum++;
        });
    },
    addPostToThread({ post, threadId }) {
      this.$store.dispatch('threads/addPostToThread', { post, threadId });
    },
    addPostHandler(post) {
      this.addPostToThread({ post, threadId: post.thread });
    },
    joinMeeting() {
      this.$store.dispatch('meetings/joinMeeting', this.meeting._id);
    },
    leaveMeeting() {
      this.$store.dispatch('meetings/leaveMeeting', this.meeting._id);
    },
    createThread({ title, done }) {
      this.$store
        .dispatch('threads/postThread', { title, meetingId: this.meeting._id })
        .then(() => {
          this.$toast.success('Created new thread!', {
            duration: 5000,
            position: 'top'
          });
          done();
        });
    }
  }
};
</script>

<style scoped>
@import url('../../assets/css/threads.css');
ul li {
  list-style: none;
}

img.person {
  width: 42px;
}

.spinner {
  margin-top: 150px !important;
}
</style>
