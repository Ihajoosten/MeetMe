<template>
  <div>
    <b-modal id="modal-multi-1" size="lg" title="Step 1" centered cancel-title="cancel" ok-title="Next" @ok="'v-b-modal.modal-multi-2'">
       
       <form ref="form">
          <b-form-group label="Location">
            <b-form-input
              id="location-input"
              v-model="meeting.location"
            ></b-form-input>
          </b-form-group>

          <b-form-group
            label="Status"
            label-for="status-input"
            invalid-feedback="Status is required"
          >
            <b-form-input
              v-model="meeting.status"
              id="status-input"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            label="Title"
            label-for="title-input"
            invalid-feedback="Title is required"
          >
            <b-form-input
              v-model="meeting.title"
              id="title-input"
              required
            ></b-form-input>
          </b-form-group>
       </form>
             <b-button v-b-modal.modal-multi-2 size="sm">Open 2</b-button>

    </b-modal>

    <b-modal id="modal-multi-2" title="Step 2" centered size="lg" cancel-title="Back" ok-title="Next">
      <form ref="form">
          <b-form-group label="Location">
            <b-form-input
              id="location-input"
              v-model="meeting.location"
            ></b-form-input>
          </b-form-group>

          <b-form-group
            label="Status"
            label-for="status-input"
            invalid-feedback="Status is required"
          >
            <b-form-input
              v-model="meeting.status"
              id="status-input"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            label="Title"
            label-for="title-input"
            invalid-feedback="Title is required"
          >
            <b-form-input
              v-model="meeting.title"
              id="title-input"
              required
            ></b-form-input>
          </b-form-group>
       </form>
      <b-button v-b-modal.modal-multi-3 size="sm">Open Third Modal</b-button>
    </b-modal>

    <b-modal id="modal-multi-3" title="Step 3" centered size="lg" cancel-title="Back" ok-title="Next">
      <p class="my-1">Third Modal</p>
      <b-button v-b-modal.modal-multi-4 size="sm">Open fourth Modal</b-button>
    </b-modal>

    <b-modal id="modal-multi-4" size="lg" title="Confirmation" cancel-title="Back" ok-title="Confirm" centered>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: 'meeting-update',
  props: {
      updateMeeting: {
          required: true,
          type: Object
      }
  },
   data() {
    return {
      meeting: { ...this.updateMeeting }
    };
  },
  methods: {
    emitMeeting() {
      this.$emit('submitMeeting', {user: this.meeting})
    }
  }
};
</script>
