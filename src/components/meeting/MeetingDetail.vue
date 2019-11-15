<template>
  <form @input="emitFormData">
    <div class="field">
      <label class="title m-b-sm">Choose Title</label>
      <input
        v-model="form.title"
        @blur="$v.form.title.$touch()"
        class="input"
        type="text"
        placeholder="Enter Title"
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
    <div class="field">
      <label class="title m-b-sm">Start Date</label>
      <datepicker
        :disabledDates="disabledDates"
        @input="setDate"
        :input-class="'input'"
        :placeholder="new Date() | date"
      />
      <div class="text-left mt-2">
        <div
          v-if="$v.form.startDate.$error"
          class="alert alert-danger"
          role="alert"
        >
          <i v-if="!$v.form.startDate.required">The start date is required</i>
        </div>
      </div>
    </div>
    <div class="field">
      <label class="title m-b-sm">Start time</label>
      <timepicker :minute-interval="10" v-on:change="changeTime($event, 'timeFrom')" />
      <div class="text-left mt-2">
        <div
          v-if="$v.form.timeFrom.$error"
          class="alert alert-danger"
          role="alert"
        >
          <i v-if="!$v.form.timeFrom.required">The Start time is required</i>
        </div>
      </div>
    </div>
    <div class="field">
      <label class="title m-b-sm">End time</label>
      <timepicker :minute-interval="10" v-on:change="changeTime($event, 'timeTo')" />
      <div class="text-left mt-2">
        <div
          v-if="$v.form.timeTo.$error"
          class="alert alert-danger"
          role="alert"
        >
          <i v-if="!$v.form.timeTo.required">The end time is required</i>
        </div>
      </div>
    </div>
    <div class="field">
      <label class="title m-b-sm">Please Choose the Category.</label>
      <div class="m-b-lg">
        <select
          v-on:change="emitFormData"
          class="custom-select col-4"
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
    </div>
  </form>
</template>

<script>
import { required } from "vuelidate/lib/validators";
import moment from "moment";
import datepicker from "vuejs-datepicker";
import timepicker from "vue2-timepicker";

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
          today.setDate(today.getDate() - 1);
          return date < today;
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
      this.$emit("nextStep", { data: this.form, isValid: !this.$v.$invalid });
    },
    setDate(date) {
      this.form.startDate = moment(date).format();
      this.emitFormData();
    },
    changeTime({ data }, field) {
      const minutes = data.mm || '00';
      const hours = data.HH || '00';
      this.form[field] = hours + ":" + minutes;
      this.emitFormData();
    }
  }
};
</script>

<style scoped>
.time-picker {
  display: block;
}
</style>
