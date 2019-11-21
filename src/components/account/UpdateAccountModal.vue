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
        cancel-variant="outline-danger"
      >
        <b class="my-2">Please fill in the form to update your account</b>

        <form ref="form" @submit.stop.prevent="handleSubmit">
            <b-form-group
            label="Username"
            label-for="name-input"
            invalid-feedback="Name is required"
          >
            <b-form-input
              id="name-input"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            label="Avatar"
            label-for="name-input"
            invalid-feedback="Avatar is required"
          >
            <b-form-input
              id="name-input"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            label="Name"
          >
            <b-form-input
              id="name-input"
              :disabled=true
              placeholder="henk"
            ></b-form-input>
          </b-form-group>

          <b-form-group
            label="Email"
            label-for="email-input"
            invalid-feedback="Name is required"
          >
            <b-form-input
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
              id="password-input"
              required
            ></b-form-input>
          </b-form-group>
        </form>
      </b-modal>
    </div>
  </div>
</template>
