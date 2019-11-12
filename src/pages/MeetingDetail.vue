<template>
  <!-- Page Content -->
  <div class="container">
    <!-- Portfolio Item Heading -->
    <div class="row ml-1">
      <div v-if="isActive !== 'active'">
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

    <div class="row md-2">
      <div v-for="person in meeting.joinedPeople" v-bind:key="person._id" class="col-1">
        <img class="img-fluid is-rounded" :src="person.avatar" alt />
        <br />
        <p class="person-name text-center">{{person.name}}</p>
      </div>
    </div>
    <!-- /.row -->

    <div class="row">
      <!-- Thread List START -->
      <div class="row col d-flex justify-content-center">
        <div
          v-for="thread in threads"
          v-bind:key="thread._id"
          class="col-md-10 shadow p-3 mb-5 bg-white rounded"
        >
          <!-- Thread title -->
          <h3 class="mb-4 mt-4">
            <strong>{{thread.title}}</strong>
          </h3>
          <!-- Create new post, handle later -->
          <form>
            <div class="field">
              <textarea
                class="form-control mt-3 mb-4"
                id="textarea-post"
                rows="5"
                placeholder="Write something."
              ></textarea>
              <button class="btn btn-success mb-5">Post</button>
            </div>
          </form>
          <!-- Create new post END, handle later -->
          <!-- Posts START -->
          <div v-for="post in thread.posts" v-bind:key="post._id" class="mb-3">
            <div class="row offset-md-1">
              <img class="is-rounded" :src="post.user.avatar" />
              <div class="content is-medium">
                <div class="post-content">
                  <!-- Post User Name -->
                  <strong class="ml-3">{{post.user.name}}</strong>
                  {{' '}}
                  <!-- Post Updated at -->
                  <small class="ml-2">{{post.updatedAt | fromNow}}</small>
                  <br />
                  <p class="ml-3">{{post.text}}</p>
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
// import ThreadCreateModal from '@/components/threads/ThreadCreateModal'
// import ThreadList from '@/components/threads/ThreadList'

export default {
  name: "meeting-detail",
  // components: {
  //   ThreadCreateModal,
  //   ThreadList
  // },
  computed: {
    meeting() {
      return this.$store.state.meeting;
    },
    threads() {
      return this.$store.state.threads;
    },
    meetingCreator() {
      return this.meeting.meetingCreator || {};
    },
    isActive() {
      return this.meeting.status;
    }
  },
  created() {
    const id = this.$route.params.id;
    this.$store.dispatch("fetchMeeting", id);
    this.$store.dispatch("fetchThreads", id);
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
    