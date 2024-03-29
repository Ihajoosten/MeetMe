<template>
  <div>
    <ul v-if="threads.length > 0" class="timeline-comments">
      <li
        v-for="thread in threads"
        v-bind:key="thread._id"
        class="timeline-comment"
      >
        <div class="timeline-comment-wrapper">
          <div class="card shadow">
            <div class="card-header d-flex bg-success align-items-center">
              <div class="ribbon" v-if="meeting.author._id === thread.authorId">
                <span>admin</span>
              </div>
              <b class="d-flex align-items-center">
                <img
                  class="rounded-circle"
                  :src="thread.authorAvatar"
                  alt="avatar"
                />
                <i class=" ml-2 mr-3 text-white" style="font-size: 13px;">{{
                  thread.authorName
                }}</i>
              </b>
              <div class="comment-date text-white-50" data-toggle="tooltip">
                Last update {{ thread.createdAt | fromNow }}
              </div>
              <div v-if="user._id === thread.authorId" class="offset-md-4">
                <button
                  v-on:click.prevent="
                    $event => deleteThread($event, thread._id)
                  "
                  uk-icon="trash"
                  class="btn btn-sm btn-danger"
                ></button>
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
        <ul v-if="thread.posts.length > 0" class="timeline-comments">
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
                    v-if="meeting.author._id === post.authorId"
                  >
                    <span>admin</span>
                  </div>
                  <b class="d-flex align-items-center">
                    <img
                      class="rounded-circle"
                      :src="post.authorAvatar"
                      alt="avatar"
                    />
                    <i class=" ml-2 mr-3 text-white" style="font-size: 13px;">{{
                      post.authorName
                    }}</i>
                  </b>
                  <div
                    class="comment-date text-white-50"
                    data-toggle="tooltip"
                    data-placement="top"
                  >
                    Last update {{ post.createdAt | fromNow }}
                  </div>
                  <div v-if="user._id === post.authorId" class="offset-md-4">
                    <button
                      v-on:click.prevent="
                        $event => deletePost($event, thread._id, post._id)
                      "
                      uk-icon="trash"
                      class="btn btn-sm btn-danger"
                    ></button>
                  </div>
                </div>
                <div class="card-body">
                  <p class="card-text">
                    {{ post.text }}
                  </p>
                </div>
                <div class="card-footer bg-white p-2">
                  <CommentCreate
                    v-if="ableToPost"
                    :postId="post._id"
                    :threadId="thread._id"
                  />
                </div>
              </div>
            </div>
            <ul v-if="post.comments.length > 0" class="timeline-comments">
              <li
                v-for="comment in post.comments"
                v-bind:key="comment._id"
                class="timeline-comment"
              >
                <div class="timeline-comment-wrapper">
                  <div class="card shadow">
                    <div
                      class="card-header bg-success d-flex align-items-center"
                    >
                      <div
                        class="ribbon"
                        v-if="meeting.author._id === comment.authorId"
                      >
                        <span>admin</span>
                      </div>
                      <b class="d-flex align-items-center">
                        <img
                          class="rounded-circle"
                          :src="comment.authorAvatar"
                          alt="avatar"
                        />
                        <i
                          class=" ml-2 mr-3 text-white"
                          style="font-size: 13px;"
                          >{{ comment.authorName }}</i
                        >
                      </b>
                      <div
                        class="comment-date text-white-50"
                        data-toggle="tooltip"
                        data-placement="top"
                      >
                        Last update {{ comment.createdAt | fromNow }}
                      </div>
                      <div
                        v-if="user._id === comment.authorId"
                        class="offset-md-4"
                      >
                        <button
                          v-on:click.prevent="
                            $event =>
                              deleteComment(
                                $event,
                                thread._id,
                                post._id,
                                comment._id
                              )
                          "
                          uk-icon="trash"
                          class="btn btn-sm btn-danger"
                        ></button>
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
            <div class="alert alert-dark mt-2 shadow text-center" v-else>
              <b>No Comments yet</b>
            </div>
          </li>
        </ul>
        <div class="alert alert-dark mt-2 shadow text-center" v-else>
          <b>No Posts yet</b>
        </div>
      </li>
    </ul>
    <div class="alert alert-dark mt-2 shadow text-center" v-else>
      <b>No Threads yet</b>
    </div>
  </div>
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
    },
    user: {
      type: Object,
      required: true
    }
  },
  methods: {
    deleteThread(event, id) {
      event.stopPropagation();
      const isConfirm = confirm('Are you sure you want to delete this thread?');
      if (isConfirm) {
        this.$store
          .dispatch('threads/deleteThread', id)
          .then(() => {
            this.$toast.success('Succesfully deleted your thread!', {
              duration: 5000,
              position: 'top'
            });
          })
          .catch(err => {
            if (err) {
              this.$toast.error('Failed to delete your thread!.', {
                duration: 5000,
                position: 'top'
              });
            }
          });
      }
    },
    deletePost(event, threadId, postId) {
      event.stopPropagation();
      const isConfirm = confirm('Are you sure you want to delete this post?');
      if (isConfirm) {
        this.$store
          .dispatch('threads/deletePost', { threadId, postId })
          .then(() => {
            this.$toast.success('Succesfully deleted your post!', {
              duration: 5000,
              position: 'top'
            });
          })
          .catch(err => {
            if (err) {
              this.$toast.error('Failed to delete your post!.', {
                duration: 5000,
                position: 'top'
              });
            }
          });
      }
    },
    deleteComment(event, threadId, postId, commentId) {
      event.stopPropagation();
      const isConfirm = confirm(
        'Are you sure you want to delete this comment?'
      );
      if (isConfirm) {
        this.$store
          .dispatch('threads/deleteComment', { threadId, postId, commentId })
          .then(() => {
            this.$toast.success('Succesfully deleted your comment!', {
              duration: 5000,
              position: 'top'
            });
          })
          .catch(err => {
            if (err) {
              this.$toast.error('Failed to delete your comment!.', {
                duration: 5000,
                position: 'top'
              });
            }
          });
      }
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
