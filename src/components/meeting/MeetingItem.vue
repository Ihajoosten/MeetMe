<template>
  <div class="col-md-6">
    <router-link
      class="text-muted"
      :to="{ name: 'meeting-detail', params: { id: meeting._id } }"
    >
      <div
        class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative"
      >
        <span class="category-badge badge badge-primary">{{
          meeting.category.name
        }}</span>

        <div class="col p-4 d-flex flex-column position-static">
          <h3 class="mb-0">{{ meeting.title }}</h3>
          <div class="mb-1 text-muted">
            {{ meeting.startDate | date }} · {{ meeting.timeFrom }} -
            {{ meeting.timeTo }}
          </div>
          <p v-if="meeting.joinedPeopleCount === 1" class="card-text mb-auto">
            {{ meeting.joinedPeopleCount }} Person has already joined!
          </p>
          <p
            v-else-if="meeting.joinedPeopleCount === 0"
            class="card-text mb-auto"
          >
            No persons have joined so far!
          </p>
          <p v-else class="card-text mb-auto">
            {{ meeting.joinedPeopleCount }} Persons have already joined!
          </p>
        </div>
        <div class="col-auto d-none d-lg-block">
          <img
            class="bd-placeholder-img card_image"
            :src="meeting.image"
            role="img"
            aria-label="Placeholder: Thumbnail"
          />
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    meeting: {
      required: true,
      type: Object
    }
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
}
img.card_image {
  height: 189px;
  width: 200px !important;
}
span.category-badge {
  writing-mode: vertical-rl;
  text-orientation: upright;
  font-size: 15px;
}
</style>
