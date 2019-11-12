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
                  <a href="#">Change password</a>
                </li>
              </ul>
              <ul class="uk-switcher uk-margin">
                <li>
                  <h3 class="uk-card-title uk-text-center">
                    Forgot your password?
                  </h3>
                  <p class="uk-text-center uk-width-medium@s uk-margin-auto">
                    Enter your email address and we will send you a link to
                    reset your password.
                  </p>
                  <form>
                    <div class="uk-margin">
                      <div class="uk-inline uk-width-1-1">
                        <span
                          id="icon"
                          class="uk-form-icon"
                          uk-icon="icon: mail"
                        ></span>
                        <input
                          class="uk-input uk-form-large"
                          type="email"
                          placeholder="Email address"
                        />
                      </div>
                    </div>
                    <div class="uk-margin">
                      <button class="btn btn-success uk-width-1-1">
                        Send Email
                      </button>
                    </div>
                    <div class="uk-text-small uk-text-center">
                      <router-link :to="{ name: 'login' }">
                        <a href="#" uk-switcher-item="1">Back to login</a>
                      </router-link>
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
        email: null,
      }
    };
  }
};
</script>

<style scoped>
span#icon {
  color: green;
}
</style>
