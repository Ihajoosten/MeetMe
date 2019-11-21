<template>
  <div id="step-1" class="container">
    <h2>What is the location of your meeting?</h2>
    <div class="form-row">
      <div class="col form-group">
        <label for="inputAddress">Location</label>
        <input
          v-on:input="emitFormData"
          v-model="form.location"
          @blur="$v.form.location.$touch()"
          type="text"
          class="form-control"
          id="inputAddress"
          placeholder="Amsterdam, The Netherlands"
        />
      </div>
    </div>
    <div class="row">
      <div class="col text-left">
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
import { required } from 'vuelidate/lib/validators';
export default {
  name: 'meeting-location',
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
      this.$emit('nextStep', { data: this.form, isValid: !this.$v.$invalid });
    }
  }
};
</script>

<style scoped>
  #step-1 {
    margin-top: 50px;
  }
</style>