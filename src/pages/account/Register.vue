<template>
  <div
    class="uk-section uk-section-muted uk-flex uk-flex-middle uk-animation-fade"
    uk-height-viewport
  >
    <div class="uk-width-1-1">
      <div class="uk-container">
        <div class="uk-grid-margin uk-grid uk-grid-stack" uk-grid>
          <div class="uk-width-1-1@m">
            <form
              class="uk-margin uk-width-large uk-margin-auto uk-card uk-card-default uk-card-body uk-box-shadow-large"
            >
              <ul
                class="uk-tab uk-flex-center"
                uk-grid
                uk-switcher="animation: uk-animation-fade"
              >
                <li>
                  <a href="#">Sign up</a>
                </li>
              </ul>
              <ul class="uk-switcher uk-margin">
                <li>
                  <h3 class="uk-card-title uk-text-center">
                    Sign up to get started!
                  </h3>
                  <form enctype="multipart/form-data">
                    <div class="uk-margin uk-width-1-1" uk-margin>
                      <div class="text-left">
                        <div
                          v-if="$v.form.avatar.$error"
                          class="alert alert-danger"
                          role="alert"
                        >
                          <i
                            >Invalid filetype! Only 'jpg', 'jpeg' or 'png' are
                            supported</i
                          >
                        </div>
                      </div>

                      <div uk-form-custom="target: true">
                        <span
                          id="icon"
                          class="uk-form-icon"
                          uk-icon="icon: image"
                        ></span>
                        <!-- <input type="file" /> -->
                        <input
                          v-model="form.avatar"
                          @blur="$v.form.avatar.$touch()"
                          class="uk-input uk-form-large uk-form-width-large"
                          type="text"
                          placeholder="Profile photo"
                        />
                      </div>
                    </div>
                    <div class="uk-margin">
                      <div class="text-left">
                        <div
                          v-if="$v.form.name.$error"
                          class="alert alert-danger"
                          role="alert"
                        >
                          <i>Name is required</i>
                        </div>
                      </div>
                      <div class="uk-inline uk-width-1-1">
                        <span
                          id="icon"
                          class="uk-form-icon"
                          uk-icon="icon: arrow-right"
                        ></span>
                        <input
                          v-model="form.name"
                          @blur="$v.form.name.$touch()"
                          class="uk-input uk-form-large"
                          type="text"
                          placeholder="First and last name"
                        />
                      </div>
                    </div>
                    <div class="uk-margin">
                      <div class="text-left">
                        <div
                          v-if="$v.form.email.$error"
                          class="alert alert-danger"
                          role="alert"
                        >
                          <i v-if="!$v.form.email.required"
                            >Email is required</i
                          >
                          <i v-if="!$v.form.email.email"
                            >Enter a valid email address</i
                          >
                        </div>
                      </div>
                      <div class="uk-inline uk-width-1-1">
                        <span
                          id="icon"
                          class="uk-form-icon"
                          uk-icon="icon: mail"
                        ></span>
                        <input
                          v-model="form.email"
                          @blur="$v.form.email.$touch()"
                          class="uk-input uk-form-large"
                          type="email"
                          placeholder="Email address"
                        />
                      </div>
                    </div>
                    <div class="uk-margin">
                      <div class="text-left">
                        <div
                          v-if="$v.form.username.$error"
                          class="alert alert-danger"
                          role="alert"
                        >
                          <i>Username is required</i>
                        </div>
                      </div>
                      <div class="uk-inline uk-width-1-1">
                        <span
                          id="icon"
                          class="uk-form-icon"
                          uk-icon="icon: info"
                        ></span>
                        <input
                          v-model="form.username"
                          @blur="$v.form.username.$touch()"
                          class="uk-input uk-form-large"
                          type="text"
                          placeholder="Username"
                        />
                      </div>
                    </div>
                    <div class="uk-margin">
                      <div class="text-left">
                        <div
                          v-if="$v.form.password.$error"
                          class="alert alert-danger"
                          role="alert"
                        >
                          <i>Password is required</i>
                        </div>
                      </div>
                      <div class="uk-inline uk-width-1-1">
                        <span
                          id="icon"
                          class="uk-form-icon"
                          uk-icon="icon: lock"
                        ></span>
                        <input
                          v-model="form.password"
                          @blur="$v.form.password.$touch()"
                          class="uk-input uk-form-large"
                          type="password"
                          placeholder="Set a password"
                        />
                      </div>
                    </div>
                    <div class="uk-margin">
                      <div
                        v-if="!$v.form.checked.$model"
                        class="alert alert-danger"
                        role="alert"
                      >
                        <i>Accepting Terms of Service is required</i>
                      </div>
                      <label>
                        <input
                          v-model="form.checked"
                          @blur="$v.form.checked.$touch()"
                          class="uk-checkbox"
                          type="checkbox"
                        />
                        I accept the Terms and services.
                      </label>
                    </div>
                    <div class="uk-margin">
                      <button
                        :disabled="notValid"
                        @click.prevent="onSubmit"
                        class="btn btn-success uk-width-1-1"
                      >
                        Register
                      </button>
                    </div>
                    <div class="uk-text-small uk-text-center">
                      Already have an account?
                      <router-link :to="{ name: 'login' }"
                        ><a href="#" uk-switcher-item="1"
                          >Log in</a
                        ></router-link
                      >
                    </div>
                  </form>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators';
import { validFileTypes } from '../../validators/validators';
import * as auth from '../../services/authService';

export default {
  data() {
    return {
      form: {
        avatar: null,
        name: null,
        email: null,
        username: null,
        password: null,
        checked: null
      }
    };
  },
  validations: {
    form: {
      avatar: { validFileTypes },
      name: { required },
      email: { required, email },
      username: { required },
      password: { required },
      checked: { required }
    }
  },
  computed: {
    notValid() {
      return this.$v.form.$invalid;
    }
  },
  methods: {
    onSubmit: function() {
      const user = {
        avatar: this.form.avatar,
        name: this.form.name,
        email: this.form.email,
        username: this.form.username,
        password: this.form.password
      };
      auth
        .registerUser(user)
        .then(() => {
          this.$toast.success('Succesfully registered your account!', {
            duration: 5000,
            position: 'top'
          });
          this.$router.push({ name: 'login' });
        })
        .catch(err => {
          this.$toast.error(err.response.data.message, {
            duration: 5000,
            position: 'top'
          });
        });
    }
  }
};
</script>

<style scoped>
span#icon {
  color: green;
}
</style>
