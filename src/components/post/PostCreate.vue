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
        v-on:click.prevent="savePost"
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
  computed: {
    meeting() {
      return this.$store.state.meetings.item;
    }
  },
  methods: {
    savePost() {
      this.$store
        .dispatch('threads/sendPost', {
          text: this.text,
          threadId: this.threadId
        })
        .then(created => {
          this.$socket.emit('meeting/postSave', {
            ...created,
            meeting: this.meeting._id
          });
          this.text = '';
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
