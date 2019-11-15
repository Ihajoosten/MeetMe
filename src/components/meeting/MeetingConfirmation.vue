<template>
  <div>
    <h1 class="title m-b-sm">Please confirm entered data</h1>

    <div class="content">
      <div>
        <span class="result-title">
          Location
        </span>
        <p>{{ createMeeting.location }}</p>
      </div>
      <div>
        <span class="result-title">
          Title
        </span>
        <p>{{ createMeeting.title }}</p>
      </div>
      <div>
        <span class="result-title">
          Start Date
        </span>
        <p>{{ createMeeting.startDate | date }}</p>
      </div>
      <div>
        <span class="result-title">
          From
        </span>
        <p>{{ createMeeting.timeFrom }}</p>
      </div>
      <div>
        <span class="result-title">
          To
        </span>
        <p>{{ createMeeting.timeTo }}</p>
      </div>
      <div>
        <span class="result-title">
          Category
        </span>
        <p>{{ createMeeting.category.name }}</p>
      </div>
      <div>
        <span class="result-title">
          Image
        </span>
        <p>{{ createMeeting.image }}</p>
      </div>
      <div>
        <span class="result-title">
          Description
        </span>
        <p>{{ createMeeting.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    createMeeting: {
      required: true,
      type: Object
    }
  },
  validations: {}
};
</script>

<style scoped>
.result-title {
  font-size: 29px;
  font-weight: bold;
}
.result-title + p {
  font-size: 20px;
}
</style>
