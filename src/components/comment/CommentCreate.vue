<template>
  <form class="mt-4">
    <b-form-input
      v-model="content"
      placeholder="Enter something..."
    ></b-form-input>
    <button
      type="button"
      class="btn btn-outline-success btn-sm mt-2"
      :disabled="!content"
      v-on:click.prevent="saveComment"
    >
      Reply
    </button>
  </form>
</template>

<script>
export default {
  name: 'comment-create',
  props: {
    postId: {
      type: String,
      required: true
    },
    threadId: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      content: null
    };
  },
  methods: {
    saveComment() {
      this.$store
        .dispatch('threads/sendComment', {
          content: this.content,
          postId: this.postId,
          threadId: this.threadId
        })
        .then(() => {
          this.content = '';
        });
    }
  }
};
</script>
