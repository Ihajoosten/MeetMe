<template>
  <div class="container mb-5">
    <h2 class="text-center mt-4">Please confirm entered data</h2>

    <div class="row mt-5">
      <div class="col">
        <h1 class="result-title">
          Location
        </h1>
        <input disabled class="form-control" type="text" :placeholder="createMeeting.location">
      </div>
      <div class="col">
        <h1 class="result-title">
          Title
        </h1>
        <input disabled class="form-control" type="text" :placeholder="createMeeting.title">
      </div>
      <div class="col">
        <h1 class="result-title">
          Category
        </h1>
        <input disabled class="form-control" type="text" :placeholder="createMeeting.category.name">
      </div>
    </div>

    <div class="row mt-5">
      <div class="col">
        <h1 class="result-title">
          Start Date
        </h1>
                <input disabled class="form-control" type="text" :placeholder="createMeeting.startDate">

      </div>
      <div class="col">
        <h1 class="result-title">
          Start time
        </h1>
        <input disabled class="form-control" type="text" :placeholder="createMeeting.timeFrom">
      </div>
      <div class="col">
        <h1 class="result-title">
          End time
        </h1>
        <input disabled class="form-control" type="text" :placeholder="createMeeting.timeTo">
      </div>
    </div>

    <div class="row mt-5">
      <div class="col-6">
        <h1 class="result-title">
          Image
        </h1>
        <textarea disabled class="form-control" type="text" :placeholder="createMeeting.image"></textarea>
      </div>
      <div class="col-6">
        <h1 class="result-title">
          Description
        </h1>
        <textarea disabled class="form-control" :placeholder="createMeeting.description"></textarea>
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
