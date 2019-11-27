<template>
  <form class="mt-4">
    <b-form-input
      v-model="text"
      placeholder="Enter something..."
    ></b-form-input>
    <button
      type="button"
      class="btn btn-outline-success btn-sm mt-2"
      :disabled="!text"
      v-on:click.prevent="savePost"
    >
      Reply
    </button>
  </form>
</template>

<script>
export default {
  name: 'post-create',
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
    meeeting() {
      return this.meeting;
    }
  },
  methods: {
    savePost() {
      this.$store
        .dispatch('threads/sendPost', {
          text: this.text,
          threadId: this.threadId
        })
        .then(() => {
          this.text = '';
        });
    }
  }
};
</script>
