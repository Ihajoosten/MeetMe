<template>
  <div class="container">
    <h2 class="text-center mt-4">Please confirm entered data</h2>

    <div class="row mt-5">
      <div class="col">
        <h1 class="result-title">
          Location
        </h1>
        <h3>{{ createMeeting.location }}</h3>
      </div>
      <div class="col">
        <h1 class="result-title">
          Title
        </h1>
        <h3>{{ createMeeting.title }}</h3>
      </div>
      <div class="col">
        <h1 class="result-title">
          Category
        </h1>
        <h3>{{ createMeeting.category.name }}</h3>
      </div>
    </div>

    <div class="row mt-5">
      <div class="col">
        <h1 class="result-title">
          Start Date
        </h1>
        <h3>{{ createMeeting.startDate | date }}</h3>
      </div>
      <div class="col">
        <h1 class="result-title">
          From
        </h1>
        <h3>{{ createMeeting.timeFrom }}</h3>
      </div>
      <div class="col">
        <h1 class="result-title">
          To
        </h1>
        <h3>{{ createMeeting.timeTo }}</h3>
      </div>
    </div>

    <div class="row mt-5">
      <div class="col-6">
        <h1 class="result-title">
          Image
        </h1>
        <h3>{{ createMeeting.image }}</h3>
      </div>
      <div class="col-6">
        <h1 class="result-title">
          Description
        </h1>
        <h3>{{ createMeeting.description }}</h3>
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
