<template>
  <div class="meetup-create-form">
    <div class="current-step is-pulled-right">
      {{ currentPage }} of {{ stepSize }}
    </div>
    <!-- Form Steps -->
    <keep-alive>
      <component
        :is="formSteps[currentPage - 1]"
        v-on:nextStep="mergeData"
        ref="currentComponent"
        :createMeeting="form"
      />
    </keep-alive>
    <progress
      class="progress progress-bar bg-success mt-2"
      :value="currentProgress"
      max="100"
      >{{ currentProgress }}%</progress
    >

    <div class="controll-btns m-b-md">
      <button
        class="btn btn-outline-secondary mr-3"
        v-if="currentPage > 1"
        v-on:click.prevent="toPreviousPage()"
      >
        Back
      </button>
      <button
        class="btn btn-outline-primary"
        v-if="currentPage >= 1 && currentPage <= 3"
        v-on:click.prevent="toNextPage()"
        :disabled="!canProceed"
      >
        Next
      </button>
      <button v-on:click="createMeeting" v-else class="btn btn-outline-success">Confirm</button>
    </div>
  </div>
</template>

<script>
import MeetingLocation from "./MeetingLocation";
import MeetingDetail from "./MeetingDetail";
import MeetingDescription from "./MeetingDescription";
import MeetingConfirmation from "./MeetingConfirmation";
export default {
  components: {
    MeetingLocation,
    MeetingDetail,
    MeetingDescription,
    MeetingConfirmation
  },
  data() {
    return {
      currentPage: 1,
      formSteps: [
        "MeetingLocation",
        "MeetingDetail",
        "MeetingDescription",
        "MeetingConfirmation"
      ],
      canProceed: false,
      form: {
        location: null,
        title: null,
        startDate: null,
        category: null,
        image: null,
        description: null,
        timeTo: null,
        timeFrom: null
      }
    };
  },
  computed: {
    stepSize() {
      return this.formSteps.length;
    },
    currentProgress() {
      return (100 / this.stepSize) * this.currentPage;
    }
  },
  methods: {
    mergeData(formData) {
      this.form = { ...this.form, ...formData.data };
      this.canProceed = formData.isValid;
    },
    toNextPage() {
      this.currentPage++;

      this.$nextTick(() => {
        this.canProceed = !this.$refs["currentComponent"].$v.$invalid;
      });
    },
    toPreviousPage() {
      this.currentPage--;
      this.canProceed = true;
    },
    createMeeting() {
      this.$emit("confirmed", this.form)
    }
  }
};
</script>

<style scoped>
.meetup-create-form {
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  max-width: 840px;
  padding: 24px 16px 8px;
  width: 100%;
}
</style>
