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
                      <div v-if="$v.form.avatar.$error" class="text-left">
                        <ul>
                          <li>
                            <span class="help text-danger"
                              >Invalid filetype! Only 'jpg', 'jpeg' or 'png' are
                              supported</span
                            >
                          </li>
                        </ul>
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
                      <div v-if="$v.form.name.$error" class="text-left">
                        <ul>
                          <li>
                            <span class="help text-danger"
                              >Name is required</span
                            >
                          </li>
                        </ul>
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
                      <div v-if="$v.form.email.$error" class="text-left">
                        <ul>
                          <li v-if="!$v.form.email.required">
                            <span class="help text-danger"
                              >Email is required</span
                            >
                          </li>
                          <li v-if="!$v.form.email.email">
                            <span class="help text-danger"
                              >Enter a valid email address</span
                            >
                          </li>
                        </ul>
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
                      <div v-if="$v.form.username.$error" class="text-left">
                        <ul>
                          <li>
                            <span class="help text-danger"
                              >Username is required</span
                            >
                          </li>
                        </ul>
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
                      <div v-if="$v.form.password.$error" class="text-left">
                        <ul>
                          <li>
                            <span class="help text-danger"
                              >Password is required</span
                            >
                          </li>
                        </ul>
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
                      <div v-if="!$v.form.checked.$model" class="text-left">
                        <ul>
                          <li>
                            <span class="help text-danger"
                              >Accepting terms of service is required</span
                            >
                          </li>
                        </ul>
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
import { required, email } from "vuelidate/lib/validators";
import { validFileTypes } from "../validators/validators";
import * as auth from "../services/authService";


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
    // register() {
    //   this.$store.dispatch("auth/register", this.form);
    // }
    onSubmit: async function() {
      const user = {
        avatar: this.form.avatar,
        name: this.form.name,
        email: this.form.email,
        username: this.form.username,
        password: this.form.password
      };
      await auth.registerUser(user);
      this.$router.push({ name: "login" });
    }
  }
};
</script>

<style scoped>
span#icon {
  color: green;
}
</style>
