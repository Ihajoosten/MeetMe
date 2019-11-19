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
      <div class="form-group">
        <label>Pick date for meeting</label>
        <datepicker
          :disabledDates="disabledDates"
          @input="setDate"
          @blur="$v.form.startDate.$touch()"
          :input-class="'ml-1 col-10'"
          :placeholder="new Date() | date"
        />
      </div>
      <div class="form-group">
        <label for="formGroupExampleInput2">Choose Start time</label>
        <timepicker
          :minute-interval="10"
          v-on:change="changeTime($event, 'timeFrom')"
          class="mr-5"
        />
      </div>
      <div class="form-group">
        <label for="formGroupExampleInput2">Choose End time</label>
        <timepicker
          :minute-interval="10"
          v-on:change="changeTime($event, 'timeTo')"
        />
      </div>
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
import datepicker from 'vuejs-datepicker';
import timepicker from 'vue2-timepicker';

export default {
  components: {
    datepicker,
    timepicker
  },
  data() {
    return {
      disabledDates: {
        customPredictor: function(date) {
          const today = new Date();
          const yesterday = today.setDate(today.getDate() - 1);
          return date < yesterday;
        }
      },
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
      this.form.startDate = moment(date).format();
      this.emitFormData();
    },
    changeTime({ data }, field) {
      const minutes = data.mm || '00';
      const hours = data.HH || '00';
      this.form[field] = hours + ':' + minutes;
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
