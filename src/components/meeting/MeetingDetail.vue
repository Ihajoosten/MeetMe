<template>
  <form class="container" id="step-2" @input="emitFormData">
    <div class="form-group">
      <label>Title</label>
      <input
        v-model="form.title"
        @blur="$v.form.title.$touch()"
        type="text"
        class="form-control"
        placeholder="Title"
      />
      <div class="text-left mt-2">
        <div
          v-if="$v.form.title.$error"
          class="alert alert-danger"
          role="alert"
        >
          <i v-if="!$v.form.title.required">Title is required</i>
        </div>
      </div>
    </div>
    <div class="form-row">
      <b-form-group class="col-4" label="Date">
        <b-form-input
          @input="setDate"
          @blur="$v.form.startDate.$touch()"
          type="date"
          required
        ></b-form-input>
        <div class="text-left mt-4">
          <div
            v-if="$v.form.startDate.$error"
            class="alert alert-danger"
            role="alert"
          >
            <i v-if="!$v.form.startDate.required">Date is required</i>
          </div>
        </div>
      </b-form-group>

      <b-form-group
        class="col-4"
        id="input-group-2"
        label="Start time"
        label-for="input-2"
      >
        <b-form-input
          v-model="form.timeFrom"
          @blur="$v.form.timeFrom.$touch()"
          type="time"
          required
        ></b-form-input>
        <div class="text-left mt-4">
          <div
            v-if="$v.form.timeFrom.$error"
            class="alert alert-danger"
            role="alert"
          >
            <i v-if="!$v.form.timeFrom.required">Start time is required</i>
          </div>
        </div>
      </b-form-group>

      <b-form-group class="col-4" label="End time">
        <b-form-input
          v-model="form.timeTo"
          @blur="$v.form.timeTo.$touch()"
          type="time"
          required
          class="col"
        ></b-form-input>
        <div class="text-left mt-4">
          <div
            v-if="$v.form.timeTo.$error"
            class="alert alert-danger"
            role="alert"
          >
            <i v-if="!$v.form.timeTo.required">End time is required</i>
          </div>
        </div>
      </b-form-group>
    </div>

    <div class="form-group">
      <label for="formGroupExampleInput2">Choose category</label>
      <select
        v-on:change="emitFormData"
        class="form-control"
        v-model="form.category"
        @blur="$v.form.category.$touch()"
      >
        <option
          v-for="category of categories"
          :value="category"
          :key="category.id"
          >{{ category.name }}</option
        >
      </select>
      <div class="text-left mt-2">
        <div
          v-if="$v.form.category.$error"
          class="alert alert-danger"
          role="alert"
        >
          <i v-if="!$v.form.category.required">Category is required</i>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import { required } from 'vuelidate/lib/validators';
import moment from 'moment';

export default {
  name: 'meeting-detail',
  data() {
    return {
      form: {
        title: null,
        startDate: null,
        timeTo: null,
        timeFrom: null,
        category: null
      }
    };
  },
  validations: {
    form: {
      title: { required },
      startDate: { required },
      category: { required },
      timeTo: { required },
      timeFrom: { required }
    }
  },
  computed: {
    categories() {
      return this.$store.state.categories.items;
    }
  },
  methods: {
    emitFormData() {
      this.$emit('nextStep', { data: this.form, isValid: !this.$v.$invalid });
    },
    setDate(date) {
      this.form.startDate = moment(date).format('DD MMM YYYY');
      this.emitFormData();
    }
  }
};
</script>

<style scoped>
#step-2 {
  margin-top: 50px;
}
.time-picker {
  display: block;
}
</style>
