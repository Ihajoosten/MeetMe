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
                  <a href="#">Log In</a>
                </li>
              </ul>
              <ul class="uk-switcher uk-margin">
                <li>
                  <h3 class="uk-card-title uk-text-center">Welcome back!</h3>
                  <form>
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
                          required
                        />
                      </div>
                    </div>
                    <div class="uk-margin">
                      <div v-if="$v.form.password.$error" class="text-left">
                        <ul>
                          <li>
                            <span class="help text-danger"
                              >password is required</span
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
                          placeholder="Password"
                        />
                      </div>
                    </div>
                    <div
                      class="uk-margin uk-text-right@s uk-text-center uk-text-small"
                    >
                      <router-link :to="{ name: 'change-password' }"
                        ><a href="#" uk-switcher-item="2"
                          >Forgot Password?</a
                        ></router-link
                      >
                    </div>
                    <div class="uk-margin">
                      <button
                        :disabled="notValid"
                        @click.prevent="login"
                        class="btn btn-success uk-width-1-1"
                      >
                        Login
                      </button>
                    </div>
                    <div class="uk-text-small uk-text-center">
                      Not registered?
                      <router-link :to="{ name: 'register' }"
                        ><a href="#" uk-switcher-item="0"
                          >Create an account</a
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
export default {
  data() {
    return {
      form: {
        email: null,
        password: null
      }
    };
  },
  validations: {
    form: {
      email: { required, email },
      password: { required }
    }
  },
  computed: {
    notValid() {
      return this.$v.form.$invalid
    }
  },
  methods: {
    login() {
      this.$store.dispatch("auth/login", this.form);
    }
  }
};
</script>

<style scoped>
span#icon {
  color: green;
}
</style>
