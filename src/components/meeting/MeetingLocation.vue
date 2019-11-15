<template>
  <div>
    <h1 class="title m-b-sm">What's your new Meetup location?</h1>
    <div class="m-b-lg">
      <span class="subtitle">Location</span>
      <input
        v-on:input="emitFormData"
        v-model="form.location"
        @blur="$v.form.location.$touch()"
        type="text"
        class="input"
      />

      <div class="text-left mt-2">
        <div
          v-if="$v.form.location.$error"
          class="alert alert-danger"
          role="alert"
        >
          <i v-if="!$v.form.location.required">Location is required</i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";
export default {
  data() {
    return {
      form: {
        location: null
      }
    };
  },
  validations: {
    form: {
      location: { required }
    }
  },
  methods: {
    emitFormData() {
      this.$emit("nextStep", {data: this.form, isValid: !this.$v.$invalid});
    }
  }
};
</script>
