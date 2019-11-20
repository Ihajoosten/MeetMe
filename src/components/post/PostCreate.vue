<template>
  <form class="mt-4">
    <div class="row mb-4">
      <div class="col">
        <b-form-textarea
          id="textarea"
          v-model="text"
          placeholder="Enter something..."
          rows="2"
          max-rows="3"
        ></b-form-textarea>
      </div>
      <div class="col">
        <b-button
          class="mt-2"
          variant="outline-success"
          :disabled="!text"
          v-on:click.prevent="savePost"
          >Post</b-button
        >
      </div>
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
