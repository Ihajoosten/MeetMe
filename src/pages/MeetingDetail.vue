<template>
  <div class="meeting-detail-page">
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h2 class="subtitle">{{meeting.startDate | date}}</h2>
          <h1 class="title">{{meeting.title}}</h1>
          <article class="media v-center">
            <figure class="media-left">
              <p class="image is-64x64">
                <img class="is-rounded" :src="meetingCreator.avatar" />
              </p>
            </figure>
            <div class="media-content">
              <div class="content">
                <p>
                  Created by
                  <strong>{{meetingCreator.name}}</strong>
                </p>
              </div>
            </div>
          </article>
        </div>
        <div class="is-pulled-right">
          <!-- We will handle this later (: -->
          <button class="button is-danger">Leave Group</button>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-3">
            <aside class="is-medium menu">
              <div class="meeting-side-box">
                <div class="meeting-side-box-date m-b-sm">
                  <p>
                    <b>Date</b>
                  </p>
                  <p>{{meeting.startDate | date}}</p>
                </div>
                <div class="meeting-side-box-date m-b-sm">
                  <p>
                    <b>Time</b>
                  </p>
                  <span>{{meeting.timeFrom}}</span> -
                  <span>{{meeting.timeTo}}</span>
                </div>
                <div class="meeting-side-box-place m-b-sm">
                  <p>
                    <b>How to find us</b>
                  </p>
                  <p>{{meeting.location}}</p>
                </div>
                <div class="meeting-side-box-more-info">
                  <p>
                    <b>Additional Info</b>
                  </p>
                  <p>{{meeting.shortInfo}}</p>
                </div>
              </div>
              <div class="meeting-side-box-map">
                <img
                  src="https://cnet2.cbsistatic.com/img/H_zPLL8-QTZOLxJvgHQ1Jkz0EgY=/830x467/2013/07/10/f0bcef02-67c2-11e3-a665-14feb5ca9861/maps_routemap.png"
                  class="venueMap-mapImg span--100"
                  alt="Location image of meeting venue"
                />
              </div>
              <!-- Threads Start -->
              <p class="menu-label">Threads</p>
              <ul>
                <li>Should I follow some dresscode ?</li>
              </ul>
              <p class="menu-label">Who is Going</p>
              <div class="columns is-multiline is-mobile">
                <!-- Joined People Images Here -->
                <div v-for="people in joinedPeople" v-bind:key="people._id" class="column is-3 row">
                  <div class="col-5 ml-2 row">
                    <figure class="media-left col-2">
                      <p class="image is-64x64">
                        <img
                          class="is-rounded"
                          src="https://www.clipartmax.com/png/middle/195-1956720_%5B-img%5D-avatar.png"
                        />
                      </p>
                    </figure>
                    <div class="col-2">
                      {{people.name}}
                    </div>
                  </div>
                </div>
              </div>
              <!-- Threads Ends -->
            </aside>
          </div>
          <div class="column is-8 is-offset-1 box">
            <div class="content is-medium">
              <h3 class="title is-3">About the meeting</h3>
              <p>{{meeting.description}}</p>
              <!-- Join meeting, We will handle it later (: -->
              <button class="button is-primary">Join In</button>
              <!-- Not logged In Case, handle it later (: -->
              <!-- <button :disabled="true"
              class="button is-warning">You need authenticate in order to join</button>-->
            </div>
            <!-- Thread List START -->
            <div class="content is-medium">
              <h3 class="title is-3">Threads</h3>
              <div class="box">
                <!-- Thread title -->
                <h4 id="const" class="title is-3">Should I follow some dresscode ?</h4>
                <!-- Create new post, handle later -->
                <form class="post-create">
                  <div class="field">
                    <textarea class="textarea textarea-post" placeholder="Write a post" rows="1"></textarea>
                    <button :disabled="true" class="button is-primary m-t-sm">Send</button>
                  </div>
                </form>
                <!-- Create new post END, handle later -->
                <!-- Posts START -->
                <article class="media post-item">
                  <figure class="media-left is-rounded user-image">
                    <p class="image is-32x32">
                      <img
                        class="is-rounded"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuqyc3j2s3bL4DIkC8uC9h0rcAdsDXcwJPNh8XHWbLQfHbOpVU"
                      />
                    </p>
                  </figure>
                  <div class="media-content">
                    <div class="content is-medium">
                      <div class="post-content">
                        <!-- Post User Name -->
                        <strong class="author">Filip Jerga</strong>
                        {{' '}}
                        <!-- Post Updated at -->
                        <small class="post-time">13th Jan</small>
                        <br />
                        <p class="post-content-message">It's up to you (:</p>
                      </div>
                    </div>
                  </div>
                </article>
                <!-- Posts END -->
              </div>
            </div>
            <!-- Thread List END -->
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "meeting-detail",
  data() {
    return {
      meeting: {},
      url: "http://localhost:5000"
    };
  },
  created() {
    const id = this.$route.params.id;
    const url = this.url;
    axios.get(url + `/api/v1/meetings/${id}`).then(res => {
      this.meeting = res.data;
    });
  },
  computed: {
    meetingCreator() {
      return this.meeting.meetingCreator;
    },
    joinedPeople() {
      return this.meeting.joinedPeople;
    }
  }
};
</script>

<style lang="css" scoped>
</style>
    