<template>
  <div class="container">
    <b-form @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Title:"
        label-for="input-1"
        :invalid-feedback="invalidTitle()"
        :state="titleState"
      >
        <b-form-input
          id="input-1"
          v-model="meeting.title"
          type="text"
          required
          placeholder="Enter title"
          :state="titleState"
          trim
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-2"
        label="Location:"
        label-for="input-2"
        :invalid-feedback="invalidLocation()"
        :state="locationState"
      >
        <b-form-input
          id="input-2"
          v-model="meeting.location"
          required
          placeholder="Enter location"
          :state="locationState"
          trim
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-2"
        label="Image:"
        label-for="input-2"
        :invalid-feedback="invalidImage()"
        :state="imageState"
      >
        <b-form-input
          id="input-2"
          v-model="meeting.image"
          required
          placeholder="Enter image"
          :state="imageState"
          trim
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-2"
        label="Start date:"
        label-for="input-2"
        :invalid-feedback="invalidDate()"
        :state="startDateState"
      >
        <b-form-input
          id="input-2"
          v-model="meeting.startDate"
          type="date"
          required
          :state="startDateState"
          trim
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Start time:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="meeting.timeFrom"
          type="time"
          required
          placeholder="Enter start time"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="End time:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="meeting.timeTo"
          type="time"
          required
          placeholder="Enter end time"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Description:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="meeting.description"
          required
          placeholder="Enter description"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Category:" label-for="input-3">
        <select class="form-control" v-model="meeting.category">
          <option
            v-for="category of categories"
            :value="category"
            :key="category.id"
            >{{ category.name }}</option
          >
        </select>
      </b-form-group>

      <b-button type="reset" variant="outline-danger">Reset</b-button>
      <b-button
        class="ml-2"
        v-on:click.prevent="updateMeetingHandler"
        variant="outline-success"
        >Update</b-button
      >
    </b-form>
  </div>
</template>

<script>
export default {
  name: 'meeting-update',
  data() {
    return {
      show: true
    };
  },
  computed: {
    meeting() {
      return this.$store.state.meetings.item;
    },
    categories() {
      return this.$store.state.categories.items;
    },
    titleState() {
      return this.meeting.title.length > 0 ? true : false;
    },
    locationState() {
      return this.meeting.location.length > 0 ? true : false;
    },
    imageState() {
      return this.meeting.image.length > 0 ? true : false;
    },
    startDateState() {
      return this.meeting.startDate.length > 0 ? true: false;
    },
    passwordState() {
      return this.user.password.length > 0 ? true : false;
    }
  },
  methods: {
    invalidLocation() {
      if (this.meeting.location.length < 1) {
        return 'Location is required';
      }
    },
    invalidTitle() {
      if (this.meeting.title.length < 1) {
        return 'Title is required';
      }
    },
    invalidImage() {
      if (this.meeting.image.length < 1) {
        return 'Image is required';
      }
    },
    invalidDate() {
      if (!this.meeting.startDate.length) {
        return 'Start date is required';
      }
    },
    fetchMeeting(id) {
      this.$store.dispatch('meetings/fetchMeeting', id);
    },
    updateMeeting(meeting) {
      this.$store.dispatch('meetings/updateMeeting', meeting);
    },
    fetchCategories() {
      this.$store.dispatch('categories/fetchCategories');
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.meeting.location = '';
      this.meeting.title = '';
      this.meeting.timeTo = null;
      this.meeting.timeFrom = null;
      this.meeting.startDate = null;
      this.meeting.image = null;
      this.meeting.description = '';
      this.meeting.category = null;
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
    updateMeetingHandler() {
      this.updateMeeting(this.meeting)
        .then(() => {
          this.$router.push({ name: 'account' });
          this.$toast.success('Succesfully updated the meeting!', {
            duration: 5000,
            position: 'top'
          });
        })
        .catch(err => {
          if (err) {
            this.$toast.error('Failed to update the meeting!.', {
              duration: 5000,
              position: 'top'
            });
          }
        });
    }
  },
  created() {
    const id = this.$route.params.id;
    Promise.all([this.fetchMeeting(id), this.fetchCategories()]).then(
      () => (this.isDataLoaded = true)
    );
  }
};
</script>
