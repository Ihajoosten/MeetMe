<template>
  <div class="column is-one-third">
    <div class="card large">
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
        <div class="card-content">
          {{meeting.description}}
        </div>
      </div>
    </div>
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