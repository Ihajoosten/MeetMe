<template>
  <div class="row col-10 py-5 d-flex justify-content-center">
    <div
      v-for="thread in threads"
      v-bind:key="thread._id"
      class="col-10 shadow mb-3 bg-light rounded ml-3"
    >
      <h4 class="mb-4 mt-4">
        <strong>{{ thread.title }}</strong>
      </h4>
      <PostCreate v-if="ableToPost" :threadId="thread._id" />
      <div v-for="post in thread.posts" v-bind:key="post._id" class="mb-3">
        <div class="row ml-3 col-11 bg-light shadow rounded text-muted">
          <img class="is-rounded-post ml-2" :src="post.author.avatar" />
          <div class="content is-medium">
            <div class="post-content">
              <strong class="ml-1 person-name">{{ post.author.name }}</strong>
              <small class="ml-2">{{ post.updatedAt | fromNow }}</small>
              <p class="ml-4 post-text">{{ post.text }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PostCreate from '../post/PostCreate';

export default {
  components: {
    PostCreate
  },
  props: {
    threads: {
      type: Array,
      required: true
    },
    ableToPost: {
      type: Boolean,
      required: true
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
