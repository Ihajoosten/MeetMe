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
                  <form>
                    <div class="uk-margin uk-width-1-1" uk-margin>
                      <div uk-form-custom="target: true">
                        <span
                          id="icon"
                          class="uk-form-icon"
                          uk-icon="icon: image"
                        ></span>
                        <input type="file" />
                        <input
                          v-model="form.avatar"
                          class="uk-input uk-form-large uk-form-width-large"
                          type="text"
                          placeholder="Profile photo"
                        />
                      </div>
                    </div>
                    <div class="uk-margin">
                      <div class="uk-inline uk-width-1-1">
                        <span
                          id="icon"
                          class="uk-form-icon"
                          uk-icon="icon: arrow-right"
                        ></span>
                        <input
                          v-model="form.name"
                          class="uk-input uk-form-large"
                          type="text"
                          placeholder="First and last name"
                        />
                      </div>
                    </div>
                    <div class="uk-margin">
                      <div class="uk-inline uk-width-1-1">
                        <span
                          id="icon"
                          class="uk-form-icon"
                          uk-icon="icon: mail"
                        ></span>
                        <input
                          v-model="form.email"
                          class="uk-input uk-form-large"
                          type="email"
                          placeholder="Email address"
                        />
                      </div>
                    </div>
                    <div class="uk-margin">
                      <div class="uk-inline uk-width-1-1">
                        <span
                          id="icon"
                          class="uk-form-icon"
                          uk-icon="icon: info"
                        ></span>
                        <input
                          v-model="form.username"
                          class="uk-input uk-form-large"
                          type="text"
                          placeholder="Username"
                        />
                      </div>
                    </div>
                    <div class="uk-margin">
                      <div class="uk-inline uk-width-1-1">
                        <span
                          id="icon"
                          class="uk-form-icon"
                          uk-icon="icon: lock"
                        ></span>
                        <input
                          v-model="form.password"
                          class="uk-input uk-form-large"
                          type="password"
                          placeholder="Set a password"
                        />
                      </div>
                    </div>
                    <div
                      class="uk-margin uk-grid-small uk-child-width-auto uk-grid"
                    >
                      <label>
                        <input
                          v-model="form.checked"
                          class="uk-checkbox"
                          type="checkbox"
                        />
                        I agree the Terms and Conditions.
                      </label>
                    </div>
                    <div class="uk-margin">
                      <button @click.prevent="register" class="btn btn-success uk-width-1-1">
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
export default {
  data() {
    return {
      form: {
        avatar: null,
        name: null,
        email: null,
        username: null,
        password: null,
        checked: false
      }
    };
  },
  methods: {
      register() {
          console.log(this.form)
      }
  }
};
</script>

<style scoped>
span#icon {
  color: green;
}
</style>
