<template>
  <form class="post-create">
    <div class="field">
      <textarea
        v-auto-expand
        v-model="text"
        class="textarea"
        placeholder="Write a post"
        rows="1"
      ></textarea>
      <button
        :disabled="!text"
        v-on:click.prevent="sendPost"
        class="btn btn-success mt-2 btn-sm"
      >
        Send
      </button>
    </div>
  </form>
</template>

<script>
import autoExpand from '../../directives/autoExpand';
export default {
  directives: { autoExpand },
  props: {
    threadId: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      text: null
    };
  },
  methods: {
    sendPost() {
      this.$store.dispatch('threads/sendPost', {
        text: this.text,
        threadId: this.threadId
      });
    }
  }
};
</script>
<style>
.textarea-post {
  padding-bottom: 30px;
}
.post-create {
  margin-bottom: 15px;
}
</style>
