<template>
  <div>
    <div>
      <b-modal
        id="modal-center"
        size="lg"
        centered
        title="Update account"
        ok-variant="outline-success"
        ok-title="Save account"
        @ok="emitUser"
        cancel-variant="outline-danger"
      >
        <b class="my-2">Please fill in the form to update your account</b>

        <form ref="form">
          <b-form-group label="Name">
            <b-form-input
              id="name-input"
              :disabled="true"
              v-model="user.name"
            ></b-form-input>
          </b-form-group>

          <b-form-group
            label="Username"
            label-for="name-input"
            invalid-feedback="Username is required"
          >
            <b-form-input
              v-model="user.username"
              id="username-input"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            label="Avatar"
            label-for="name-input"
            invalid-feedback="Avatar is required"
          >
            <b-form-input
              v-model="user.avatar"
              id="avatar-input"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            label="Email"
            label-for="email-input"
            invalid-feedback="Name is required"
          >
            <b-form-input
              v-model="user.email"
              id="email-input"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            label="Password"
            label-for="password-input"
            invalid-feedback="Password is required"
          >
            <b-form-input
              type="password"
              id="password-input"
              required
              v-model="user.password"
            ></b-form-input>
          </b-form-group>
        </form>
      </b-modal>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    updateUser: {
      required: true,
      type: Object
    }
  },
  data() {
    return {
      user: { ...this.updateUser }
    };
  },
  methods: {
    emitUser() {
      this.$emit('submitUser', {user: this.user})
    }
  }
};
</script>
