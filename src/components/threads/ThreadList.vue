<template>
  <div>
    <div v-for="thread in threads" v-bind:key="thread._id" class="shadow m-5">
      <!-- <h4 class="mb-4 mt-4">
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
      </div> -->

      <div class="container">
        <h5 class="pl-5 pt-5">{{ thread.title }} </h5>

        <div class="row">
          <div class="col" id="comments">
            <PostCreate class="pl-5" v-if="ableToPost" :threadId="thread._id" />

            <div
              v-for="post in thread.posts"
              v-bind:key="post._id"
              class="pl-5 ml-5 mb-2 row"
            >
              <div class="col-md-11 col-sm-10">
                <h6 class="small comment-meta">
                  <b
                    >{{ post.author.name }}
                    {{ post.updatedAt | fromNow }}
                  </b>
                </h6>
                <div class="comment-body">
                  <p>
                    {{ post.text }}
                    <br />
                    <a href="" class="text-right small"
                      ><i class="ion-reply"></i> Reply</a
                    >
                  </p>
                </div>
              </div>

              <!-- reply is indented -->
              <!-- <div class="comment-reply col-md-11 offset-md-1 col-sm-10 offset-sm-2">
                    <div class="row">
                        <div class="comment-avatar col-md-1 col-sm-2 text-center pr-1">
                            <a href=""><img class="mx-auto rounded-circle img-fluid" src="http://demos.themes.guide/bodeo/assets/images/users/m101.jpg" alt="avatar"></a>
                        </div>
                        <div class="comment-content col-md-11 col-sm-10 col-12">
                            <h6 class="small comment-meta"><a href="#">phildownney</a> Today, 12:31</h6>
                            <div class="comment-body">
                                <p>Really?? Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitat.
                                    <br>
                                    <a href="" class="text-right small"><i class="ion-reply"></i> Reply</a>
                                </p>
                            </div>
                        </div>
                    </div>
               </div> -->
              <!-- /reply is indented -->
            </div>
            <!-- /comment -->
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
.person-name {
  font-size: 13px;
}
.post-text {
  font-size: 13px;
}
</style>
