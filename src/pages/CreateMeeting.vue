<template>
  <div class="meetup-create-page">
    <section class="section">
      <div class="container">
        <CreateWizard @confirmMeeting="createNewMeeting" />
      </div>
    </section>
  </div>
</template>

<script>
import CreateWizard from '@/components/meeting/CreateMeetingWizard';

export default {
  components: {
    CreateWizard
  },
  created() {
    this.$store.dispatch('categories/fetchCategories');
  },
  methods: {
    createNewMeeting(meetingToCreate) {
      this.$store
        .dispatch('meetings/createMeeting', meetingToCreate)
        .then((created) => {
          this.$router.push('/meetings/' + created._id);
        });
    }
  }
};
</script>

<style scoped lang="scss">
.meetup-create-page {
  min-height: 100vh;
}
</style>
