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
              <ul class="uk-tab uk-flex-center" uk-grid uk-switcher="animation: uk-animation-fade">
                <li>
                  <a href="#">Sign Up</a>
                </li>
                <li>
                  <a href="#">Log In</a>
                </li>
                <li class="uk-hidden">Forgot Password?</li>
              </ul>
              <ul class="uk-switcher uk-margin">
                <li>
                  <h3 class="uk-card-title uk-text-center">Sign up to get started!</h3>
                  <form>
                    <div class="uk-margin uk-width-1-1" uk-margin>
                      <div uk-form-custom="target: true">
                        <span id="icon" class="uk-form-icon" uk-icon="icon: image"></span>
                        <input type="file" />
                        <input
                          class="uk-input uk-form-large uk-form-width-large"
                          type="text"
                          placeholder="Profile photo"
                        />
                      </div>
                    </div>
                    <div class="uk-margin">
                      <div class="uk-inline uk-width-1-1">
                        <span id="icon" class="uk-form-icon" uk-icon="icon: arrow-right"></span>
                        <input
                          class="uk-input uk-form-large"
                          type="text"
                          placeholder="First and last name"
                        />
                      </div>
                    </div>
                    <div class="uk-margin">
                      <div class="uk-inline uk-width-1-1">
                        <span id="icon" class="uk-form-icon" uk-icon="icon: mail"></span>
                        <input
                          class="uk-input uk-form-large"
                          type="text"
                          placeholder="Email address"
                        />
                      </div>
                    </div>
                    <div class="uk-margin">
                      <div class="uk-inline uk-width-1-1">
                        <span id="icon" class="uk-form-icon" uk-icon="icon: info"></span>
                        <input class="uk-input uk-form-large" type="text" placeholder="Username" />
                      </div>
                    </div>
                    <div class="uk-margin">
                      <div class="uk-inline uk-width-1-1">
                        <span id="icon" class="uk-form-icon" uk-icon="icon: lock"></span>
                        <input
                          class="uk-input uk-form-large"
                          type="password"
                          placeholder="Set a password"
                        />
                      </div>
                    </div>
                    <div class="uk-margin uk-grid-small uk-child-width-auto uk-grid">
                      <label>
                        <input class="uk-checkbox" type="checkbox" /> I agree the Terms and Conditions.
                      </label>
                    </div>
                    <div class="uk-margin">
                      <button class="btn btn-success uk-width-1-1">Register</button>
                    </div>
                    <div class="uk-text-small uk-text-center">
                      Already have an account?
                      <a href="#" uk-switcher-item="1">Log in</a>
                    </div>
                  </form>
                </li>
                <li>
                  <h3 class="uk-card-title uk-text-center">Welcome back!</h3>
                  <form>
                    <div class="uk-margin">
                      <div class="uk-inline uk-width-1-1">
                        <span id="icon" class="uk-form-icon" uk-icon="icon: mail"></span>
                        <input
                          class="uk-input uk-form-large"
                          type="text"
                          placeholder="Email address"
                        />
                      </div>
                    </div>
                    <div class="uk-margin">
                      <div class="uk-inline uk-width-1-1">
                        <span id="icon" class="uk-form-icon" uk-icon="icon: lock"></span>
                        <input
                          class="uk-input uk-form-large"
                          type="password"
                          placeholder="Password"
                        />
                      </div>
                    </div>
                    <div class="uk-margin uk-text-right@s uk-text-center uk-text-small">
                      <a href="#" uk-switcher-item="2">Forgot Password?</a>
                    </div>
                    <div class="uk-margin">
                      <button class="btn btn-success uk-width-1-1">Login</button>
                    </div>
                    <div class="uk-text-small uk-text-center">
                      Not registered?
                      <a href="#" uk-switcher-item="0">Create an account</a>
                    </div>
                  </form>
                </li>
                <li>
                  <h3 class="uk-card-title uk-text-center">Forgot your password?</h3>
                  <p
                    class="uk-text-center uk-width-medium@s uk-margin-auto"
                  >Enter your email address and we will send you a link to reset your password.</p>
                  <form>
                    <div class="uk-margin">
                      <div class="uk-inline uk-width-1-1">
                        <span id="icon" class="uk-form-icon" uk-icon="icon: mail"></span>
                        <input
                          class="uk-input uk-form-large"
                          type="text"
                          placeholder="Email address"
                        />
                      </div>
                    </div>
                    <div class="uk-margin">
                      <button class="btn btn-success uk-width-1-1">Send Email</button>
                    </div>
                    <div class="uk-text-small uk-text-center">
                      <a href="#" uk-switcher-item="1">Back to login</a>
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
export default {};
</script>

<style scoped>
span#icon {
  color: green;
}
</style>