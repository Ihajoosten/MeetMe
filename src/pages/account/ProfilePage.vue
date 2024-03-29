<template>
  <div class="container profile mb-5 mt-3">
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
        <UpdateModal :updateUser="user" @submitUser="updateUser" />
      </div>

      <div
        v-on:click.prevent="activeTab = 'meetings'"
        :class="{ isActive: activeTab === 'meetings' }"
        class="stats-tab col-sm text-center"
      >
        <p class="stat-val">{{ meetingCount }}</p>
        <p class="stat-key">Meetings</p>
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

      <div
        v-on:click.prevent="activeTab = 'comments'"
        :class="{ isActive: activeTab === 'comments' }"
        class="stats-tab col-sm text-center"
      >
        <p class="stat-val">{{ commentCount }}</p>
        <p class="stat-key">comments</p>
      </div>
    </div>

    <div v-if="activeTab === 'meetings'">
      <div v-if="meetings && meetings.length > 0" class="row mt-5">
        <div v-for="meeting in meetings" v-bind:key="meeting._id" class="col-4">
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
              <div
                v-if="isMeetingActive(meeting.startDate)"
                class="badge badge-success"
              >
                <i>Active</i>
              </div>
              <div v-else class="badge badge-danger">
                <i>Not Active</i>
              </div>
              <p class="card-text mt-2">
                {{ meeting.description }}
              </p>
            </div>
            <div class="card-footer text-center">
              <router-link
                class="text-muted"
                :to="{ name: 'meeting-update', params: { id: meeting._id } }"
                ><button class="btn btn-sm btn-outline-primary mr-2">
                  Update
                </button></router-link
              >
              <button
                v-on:click.prevent="
                  $event => deleteMeetingWarning($event, meeting._id)
                "
                class="btn btn-sm btn-outline-danger"
              >
                Delete
              </button>
            </div>
          </div>
          <br />
        </div>
      </div>
      <div v-else class="badge alert alert-warning ml-5 mt-5">
        <b>You have not created any meetings yet</b>
      </div>
    </div>

    <div v-if="activeTab === 'threads'">
      <div v-if="threads && threads.length > 0" class="row mt-5">
        <div v-for="thread in threads" v-bind:key="thread._id" class="col-md-5">
          <div class="card" style="width: auto; height: 10rem">
            <div class="card-body">
              <b class="card-title">{{ thread.title }}</b>
              <div class="mt-3">
                Posted <b>{{ thread.createdAt | fromNow }}</b>
              </div>
            </div>
            <div class="card-footer">
              <button
                class="btn btn-sm btn-outline-danger"
                v-on:click.prevent="
                  $event => deleteThreadWarning($event, thread._id)
                "
              >
                Delete
              </button>
            </div>
          </div>
          <br />
        </div>
      </div>
      <div v-else class="badge alert alert-warning ml-5 mt-5">
        <b>You have not created any threads yet</b>
      </div>
    </div>

    <div v-if="activeTab === 'posts'">
      <div v-if="posts && posts.length > 0" class="row mt-5">
        <div v-for="post in posts" v-bind:key="post._id" class="col-md-4">
          <div class="card" style="width: auto; height: 10rem">
            <div class="card-body">
              <h5 class="card-title">{{ post.text }}</h5>
              <div>
                Posted <b>{{ post.createdAt | fromNow }}</b>
              </div>
            </div>
            <div class="card-footer">
              <button
                class="btn btn-sm btn-outline-danger"
                v-on:click.prevent="$event => deletePostWarning($event, post)"
              >
                Delete
              </button>
            </div>
          </div>
          <br />
        </div>
      </div>
      <div v-else class="badge alert alert-warning ml-5 mt-5">
        <b>You have not created any posts yet</b>
      </div>
    </div>

    <div v-if="activeTab === 'comments'">
      <div v-if="comments && comments.length > 0" class="row mt-5">
        <div
          v-for="comment in comments"
          v-bind:key="comment._id"
          class="col-md-4"
        >
          <div class="card" style="width: auto; height: 10rem">
            <div class="card-body">
              <h5 class="card-title">{{ comment.content }}</h5>
              <div>
                Posted <b>{{ comment.createdAt | fromNow }}</b>
              </div>
            </div>
            <div class="card-footer">
              <button
                class="btn btn-sm btn-outline-danger"
                v-on:click.prevent="
                  $event => deleteCommentWarning($event, comment)
                "
              >
                Delete
              </button>
            </div>
          </div>
          <br />
        </div>
      </div>
      <div v-else class="badge alert alert-warning ml-5 mt-5">
        <b>You have not created any comments yet</b>
      </div>
    </div>
  </div>
</template>

<script>
import UpdateModal from '../../components/account/UpdateAccountModal';
import * as auth from '../../services/authService';

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
    user() {
      return this.$store.state.user;
    },
    meetings() {
      return this.$store.state.stats.meetings.data;
    },
    threads() {
      return this.$store.state.stats.threads.data;
    },
    posts() {
      return this.$store.state.stats.posts.data;
    },
    comments() {
      return this.$store.state.stats.comments.data;
    },
    meetingCount() {
      return this.$store.state.stats.meetings.count;
    },
    threadCount() {
      return this.$store.state.stats.threads.count;
    },
    postCount() {
      return this.$store.state.stats.posts.count;
    },
    commentCount() {
      return this.$store.state.stats.comments.count;
    }
  },
  methods: {
    isMeetingActive(date) {
      return new Date() < new Date(date);
    },
    updateUser({ user }) {
      this.$store
        .dispatch('updateUser', user)
        .then(() => {
          auth.logout();
          this.$router.push({ name: 'login' });
          this.$toast.success('Succesfully updated your account!', {
            duration: 5000,
            position: 'top'
          });
          this.$toast.info('Please login again to use your account.', {
            duration: 5000,
            position: 'top'
          });
        })
        .catch(err => {
          if (err) {
            this.$toast.error('Failed to update your account!.', {
              duration: 5000,
              position: 'top'
            });
          }
        });
    },
    deleteMeetingWarning(event, meetingId) {
      event.stopPropagation();
      const isConfirm = confirm(
        'Are you sure you want to delete this meeting?'
      );
      if (isConfirm) {
        this.$store
          .dispatch('meetings/deleteMeeting', meetingId)
          .then(() => {
            this.$store.dispatch('stats/updateStats', meetingId);
            this.$toast.success('Succesfully deleted your meeting!', {
              duration: 5000,
              position: 'top'
            });
          })
          .catch(err => {
            if (err) {
              this.$toast.error('Failed to delete your meeting!.', {
                duration: 5000,
                position: 'top'
              });
            }
          });
      }
    },
    deleteThreadWarning(event, threadId) {
      event.stopPropagation();
      const isConfirm = confirm('Are you sure you want to delete this thread?');
      if (isConfirm) {
        this.$store
          .dispatch('threads/deleteThread', threadId)
          .then(() => {
            this.$store.dispatch('stats/updateThreadsAndPosts', threadId);
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
    deletePostWarning(event, post) {
      event.stopPropagation();
      const isConfirm = confirm('Are you sure you want to delete this post?');
      if (isConfirm) {
        this.$store
          .dispatch('threads/deletePost', {
            postId: post._id,
            threadId: post.thread
          })
          .then(() => {
            this.$store.dispatch('stats/updatePost', post._id);
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
    deleteCommentWarning(event, comment) {
      event.stopPropagation();
      const isConfirm = confirm(
        'Are you sure you want to delete this comment?'
      );
      if (isConfirm) {
        this.$store
          .dispatch('threads/deleteComment', {
            commentId: comment._id,
            postId: comment.post,
            threadId: this.findThread(comment.post)
          })
          .then(() => {
            this.$store.dispatch('stats/updateComment', comment._id);
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
    },
    findThread(post) {
      const x = this.posts.findIndex(item => item._id === post);
      const y = this.threads[x];
      return y._id;
    }
  },
  created() {
    this.$store.dispatch('stats/fetchUserStats');
  }
};
</script>

<style scoped>
body {
  background: #f5f7fa;
}
li a {
  text-decoration: none;
  background-color: white;
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
