<template>
  <div>
    <div>
      <b-button variant="outline-success" v-b-modal.modal-center>{{
        btnTitle
      }}</b-button>

      <b-modal
        id="modal-center"
        centered
        ref="modal"
        title="Create thread"
        @show="resetModal"
        @hidden="resetModal"
        @ok="threadSubmitted"
      >
        <form>
          <label class="title">What would you like to ask?</label>
          <b-form-textarea
            id="textarea"
            v-model="form.title"
            placeholder="Enter something..."
            rows="3"
            max-rows="6"
          ></b-form-textarea>
        </form>
      </b-modal>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    btnTitle: {
      type: String,
      required: false,
      default: 'New Thread'
    },
    title: {
      type: String,
      required: false,
      default: 'Create'
    }
  },
  data() {
    return {
      form: {
        title: null
      }
    };
  },
  methods: {
    threadSubmitted() {
      this.$emit('threadSubmitted', {
        title: this.form.title,
        done: () => {
          this.form.title = '';
        }
      });
    }
  }
};
</script>
