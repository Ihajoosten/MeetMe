<template>
  <div class="meetup-create-page">
    <section class="section">
      <div class="container">
        <CreateWizard @confirmed="createNewMeeting" />
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
    createNewMeeting(meeting) {
      this.$store
        .dispatch('meetings/createMeeting', meeting)
        .then(createdMeeting => {
          this.$router.push(`/api/meetings/${createdMeeting._id}`);
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
