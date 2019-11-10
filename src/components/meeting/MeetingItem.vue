<template>
  <!-- <div class="column is-one-third">
    <router-link :to="{name: 'meeting-detail',params: {id: meeting._id}}" class="card large">
      <div class="card-image">
        <figure class="image is-4by3">
          <img :src="meeting.image" alt="Image" />
        </figure>
      </div>
      <div class="card-content">
        <div class="level m-b-md">
          <div class="media-left">
            <div class="level-item has-text-center"></div>
          </div>
          <div class="media-content">
            <p class="title">
              {{meeting.startDate | day}} {{meeting.startDate | month}}
              <span
                class="tag is-success"
              >{{meeting.category.name}}</span>
            </p>

            <p class="subtitle is-3 no-padding is-marginless">{{meeting.title}}</p>
            <p
              class="subtitle is-5"
            >{{meeting.location}} · {{meeting.timeFrom}} - {{meeting.timeTo}}</p>
          </div>
        </div>
        <div class="card-content">{{meeting.description}}</div>
      </div>
    </router-link>
  </div>-->
  <div class="col-md-6">
    <router-link class="text-muted" :to="{name: 'meeting-detail',params: {id: meeting._id}}">
      <div
        class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative"
      >          
          <span class="category-badge badge badge-primary">{{meeting.category.name}}</span>

        <div class="col p-4 d-flex flex-column position-static">
          <h3 class="mb-0">{{meeting.title}}</h3>
          <div
            class="mb-1 text-muted"
          >{{meeting.startDate | date}} · {{meeting.timeFrom}} - {{meeting.timeTo}}</div>
          <p class="card-text mb-auto">{{meeting.shortInfo}}</p>
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