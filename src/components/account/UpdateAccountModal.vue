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
        @ok="emitUser && validated"
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
            :invalid-feedback="invalidUsername()"
            :state="state"
          >
            <b-form-input
              v-model="user.username"
              id="username-input"
              required
              :state="state"
              trim
            ></b-form-input>
          </b-form-group>

          <b-form-group
            label="Avatar"
            label-for="name-input"
            :state="avatarState"
                        :invalid-feedback="invalidAvatar()"

          >
            <b-form-input
              v-model="user.avatar"
              id="avatar-input"
              required
              :state="avatarState"
              trim
            ></b-form-input>
          </b-form-group>

          <b-form-group
            label="Email"
            label-for="email-input"
            :state="emailState"
                        :invalid-feedback="invalidEmail()"

          >
            <b-form-input
              v-model="user.email"
              id="email-input"
              required
              trim
              :state="emailState"
            ></b-form-input>
          </b-form-group>

          <b-form-group
            label="Password"
            label-for="password-input"
            :invalid-feedback="invalidPassword()"
            :state="passwordState"
          >
            <b-form-input
              type="password"
              id="password-input"
              required
              v-model="user.password"
              :state="passwordState"
              trim
            ></b-form-input>
          </b-form-group>
        </form>
      </b-modal>
    </div>
  </div>
</template>

<script>
export default {
  name: 'update-account-modal',
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
  computed: {
    state() {
      return this.user.username.length > 0 ? true : false;
    },
    avatarState() {
      return this.user.avatar.length > 0 ? true : false;
    },
    emailState() {
      return this.user.email.length > 0 ? true : false;
    },
    passwordState() {
      return this.user.password.length > 0 ? true : false;
    }
  },
  methods: {
    emitUser() {
      this.$emit('submitUser', { user: this.user });
    },
    invalidUsername() {
      if (this.user.username.length < 1) {
        return 'Username is required';
      }
    },
    invalidAvatar() {
      if (this.user.avatar.length < 1) {
        return 'Avatar is required';
      }
    },
    invalidEmail() {
      if (this.user.email.length < 1) {
        return 'Email is required';
      }
    },
    invalidPassword() {
      if (this.user.password.length < 1) {
        return 'Password is required';
      }
    }
  }
};
</script>
