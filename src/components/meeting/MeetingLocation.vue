<template>
  <div id="step-1" class="container">
    <h2>What is the location of your meeting?</h2>
    <div class="form-row">
      <div class="col form-group">
        <h5 v-if="ipLocation && !wantChangeLocation" for="inputAddress">
          {{ ipLocation }}?
        </h5>
        <a
          id="change-location"
          v-if="ipLocation"
          v-on:click.prevent="toggleLocation()"
        >
          (change location)
        </a>
        <input
          v-if="!ipLocation || wantChangeLocation"
          v-on:input="emitFormData"
          v-model="form.location"
          @blur="$v.form.location.$touch()"
          type="text"
          class="form-control"
          id="inputAddress"
          :placeholder="ipLocation"
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
      wantChangeLocation: false,
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
  computed: {
    ipLocation() {
      return this.$store.getters['meta/location'];
    }
  },
  created() {
    if (this.ipLocation) {
      this.form.location = this.ipLocation;
      this.emitFormData();
    }
  },
  methods: {
    emitFormData() {
      this.$emit('nextStep', { data: this.form, isValid: !this.$v.$invalid });
    },
    toggleLocation() {
      if (this.ipLocation) {
        this.form.location = this.ipLocation;
        this.emitFormData();
      }

      this.wantChangeLocation = !this.wantChangeLocation;
    }
  }
};
</script>

<style scoped>
#step-1 {
  margin-top: 50px;
}

#change-location {
  color: blue;
}

#change-location:hover {
  color: darkblue;
}
</style>
