<template>
  <ul class="timeline-comments">
    <li
      v-for="thread in threads"
      v-bind:key="thread._id"
      class="timeline-comment"
    >
      <div class="timeline-comment-wrapper">
        <div class="card shadow">
          <div class="card-header d-flex bg-success align-items-center">
            <div class="ribbon" v-if="meeting.author._id === thread.author._id">
              <span>admin</span>
            </div>
            <b class="d-flex align-items-center">
              <img
                class="rounded-circle"
                :src="thread.author.avatar"
                alt="avatar"
              />
              <h5 class="text-white">{{ thread.author.name }}</h5>
            </b>
            <div
              class="comment-date text-white-50"
              data-toggle="tooltip"
              title="Feb 5, 2018 8:21 pm"
              data-placement="top"
            >
              Last update {{ thread.createdAt | fromNow }}
            </div>
          </div>
          <div class="card-body">
            <p class="card-text">
              {{ thread.title }}
            </p>
          </div>
          <div class="card-footer bg-white p-2">
            <PostCreate v-if="ableToPost" :threadId="thread._id" />
          </div>
        </div>
      </div>
      <ul class="timeline-comments">
        <li
          v-for="post in thread.posts"
          v-bind:key="post._id"
          class="timeline-comment"
        >
          <div class="timeline-comment-wrapper">
            <div class="card shadow">
              <div class="card-header bg-success d-flex align-items-center">
                <div
                  class="ribbon"
                  v-if="meeting.author._id === post.author._id"
                >
                  <span>admin</span>
                </div>
                <b class="d-flex align-items-center">
                  <img
                    class="rounded-circle"
                    :src="post.author.avatar"
                    alt="avatar"
                  />
                  <h5 class="text-white">{{ post.author.name }}</h5>
                </b>
                <div
                  class="comment-date text-white-50"
                  data-toggle="tooltip"
                  data-placement="top"
                >
                  Last update {{ post.createdAt | fromNow }}
                </div>
              </div>
              <div class="card-body">
                <p class="card-text">
                  {{ post.text }}
                </p>
              </div>
              <div class="card-footer bg-white p-2">
                <CommentCreate v-if="ableToPost" :postId="post._id" />
              </div>
            </div>
          </div>
          <ul class="timeline-comments">
            <li
              v-for="comment in post.comments"
              v-bind:key="comment._id"
              class="timeline-comment"
            >
              <div class="timeline-comment-wrapper">
                <div class="card shadow">
                  <div class="card-header bg-success d-flex align-items-center">
                    <div
                      class="ribbon"
                      v-if="meeting.author._id === comment.author._id"
                    >
                      <span>admin</span>
                    </div>
                    <b class="d-flex align-items-center">
                      <img
                        class="rounded-circle"
                        :src="comment.author.avatar"
                        alt="avatar"
                      />
                      <h5 class="text-white">{{ comment.author.name }}</h5>
                    </b>
                    <div
                      class="comment-date text-white-50"
                      data-toggle="tooltip"
                      data-placement="top"
                    >
                      Last update {{ comment.createdAt | fromNow }}
                    </div>
                  </div>
                  <div class="card-body">
                    <p class="card-text">
                      {{ comment.content }}
                    </p>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script>
import PostCreate from '../post/PostCreate';
import CommentCreate from '../comment/CommentCreate';

export default {
  components: {
    PostCreate,
    CommentCreate
  },
  props: {
    threads: {
      type: Array,
      required: true
    },
    meeting: {
      type: Object,
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
.person-name {
  font-size: 13px;
}
.post-text {
  font-size: 13px;
}
</style>
