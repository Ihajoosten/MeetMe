<template>
  <!-- Page Content -->
  <div class="container">
    <!-- Portfolio Item Heading -->
    <div class="row ml-1">
      <div v-if="!isActive">
        <h1 class="my-4">
          {{meeting.title}}
          <span class="badge badge-danger">{{meeting.status | capitalize}}</span>
        </h1>
      </div>
      <div v-else>
        <h1 class="my-4">
          {{meeting.title}}
          <span class="badge badge-success">{{meeting.status | capitalize}}</span>
        </h1>
      </div>
    </div>

    <!-- Portfolio Item Row -->
    <div class="row">
      <div class="col-md-7">
        <img class="img-fluid meeting-image" :src="meeting.image" alt />
      </div>

      <div class="col-md-4">
        <h2 class="my-3">Meeting Info</h2>
        <img class="is-rounded" :src="meetingCreator.avatar" />
        <br />
        <br />
        <span>Created by {{meetingCreator.name}} on {{meeting.createdAt | date}}</span>
        <br />
        <br />
        <p>{{meeting.description}}</p>
        <ul>
          <li>Date: {{meeting.startDate | date}}</li>
          <li>Time: {{meeting.timeFrom}} - {{meeting.timeTo}}</li>
          <li>Location: {{meeting.location}}</li>
          <li>Joined people: {{meeting.joinedPeopleCount}}</li>
        </ul>
        <button class="btn btn-success">Join</button>
      </div>
    </div>
    <!-- /.row -->

    <!-- Related Projects Row -->
    <h3 class="my-4">People who joined</h3>

    <div class="row md-2">
      <div v-for="person in joinedPeople" v-bind:key="person._id" class="col-1">
        <img class="img-fluid is-rounded" :src="person.avatar" alt />
        <br />
        <p class="person-name text-center">{{person.name}}</p>
      </div>
    </div>
    <!-- /.row -->
    <div class="row mt-3 shadow p-3 mb-5 bg-white rounded">
        <div class="comments col-md-9" id="comments">
            <h1 class="m-5">Meeting Conversation</h1>
            <!-- comment -->
            <div class="comment m-4 row">
                <div class="comment-avatar col-md-1 col-sm-2 text-center pr-1">
                    <a href=""><img class="mx-auto rounded-circle img-fluid" :src="meetingCreator.avatar" alt="avatar"></a>
                </div>
                <div class="comment-content col-md-11 col-sm-10">
                    <h6 class="small comment-meta"><a href="#">{{meetingCreator.name}}</a> Today, 2:38</h6>
                    <div class="comment-body">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod <a href>http://wwwwww.com</a> tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
                            <br>
                            <a href="" class="text-right small"><i class="ion-reply"></i> Reply</a>
                        </p>
                    </div>
                </div>
                
                <!-- reply is indented -->
                <div class="comment-reply col-md-11 offset-md-1 col-sm-10 offset-sm-2 shadow-sm p-3 mb-5 bg-white rounded">
                    <div class="row">
                        <div class="comment-avatar col-md-1 col-sm-2 text-center pr-1">
                            <a href=""><img class="mx-auto rounded-circle img-fluid" :src="joinedPeople[0].avatar" alt="avatar"></a>
                        </div>
                        <div class="comment-content col-md-11 col-sm-10 col-12">
                            <h6 class="small comment-meta"><a href="#">{{joinedPeople[0].name}}</a> Today, 12:31</h6>
                            <div class="comment-body">
                                <p>Really?? Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitat.
                                    <br>
                                    <a href="" class="text-right small"><i class="ion-reply"></i> Reply</a>
                                </p>
                            </div>
                        </div>
                    </div>
               </div>
               <!-- /reply is indented -->
                               <!-- reply is indented -->
                <div class="comment-reply col-md-11 offset-md-1 col-sm-10 offset-sm-2 shadow-sm p-3 mb-5 bg-white rounded">
                    <div class="row">
                        <div class="comment-avatar col-md-1 col-sm-2 text-center pr-1">
                            <a href=""><img class="mx-auto rounded-circle img-fluid" :src="joinedPeople[0].avatar" alt="avatar"></a>
                        </div>
                        <div class="comment-content col-md-11 col-sm-10 col-12">
                            <h6 class="small comment-meta"><a href="#">{{joinedPeople[0].name}}</a> Today, 12:31</h6>
                            <div class="comment-body">
                                <p>Really?? Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitat.
                                    <br>
                                    <a href="" class="text-right small"><i class="ion-reply"></i> Reply</a>
                                </p>
                            </div>
                        </div>
                    </div>
               </div>
               <!-- /reply is indented -->
            </div>
            <!-- /comment -->
            <!-- comment -->
            <div class="comment m-4 row">
                <div class="comment-avatar col-md-1 col-sm-2 text-center pr-1">
                    <a href=""><img class="mx-auto rounded-circle img-fluid" :src="meetingCreator.avatar" alt="avatar"></a>
                </div>
                <div class="comment-content col-md-11 col-sm-10">
                    <h6 class="small comment-meta"><a href="#">{{meetingCreator.name}}</a> Yesterday, 5:03 PM</h6>
                    <div class="comment-body">
                        <p>Sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
                            <br>
                            <a href="" class="text-right small"><i class="ion-reply"></i> Reply</a>
                        </p>
                    </div>
                </div>
            </div>
            <!-- /comment -->
            <div class="row pt-2">
                <div class="col-12">
                    <a href="" class="btn btn-sm btn-primary">Comment</a>
                </div>
            </div>

        </div>
    </div>
  </div>
  <!-- /.container -->
</template>

<script>
import axios from "axios";

export default {
  name: "meeting-detail",
  data() {
    return {
      meeting: {},
      joinedPeople: [],
      url: "http://localhost:5000",
      active: ""
    };
  },
  created() {
    const id = this.$route.params.id;
    const url = this.url;
    axios.get(url + `/api/v1/meetings/${id}`).then(res => {
      this.meeting = res.data;
      this.meeting.status = res.data.status;
      this.joinedPeople = res.data.joinedPeople;
    });
  },
  computed: {
    meetingCreator() {
      return this.meeting.meetingCreator;
    },
    isActive() {
      return {
        active: this.active === "active"
      };
    }
  }
};
</script>

<style scoped>
.meeting-image {
  height: 500px;
  width: 500px;
}
.is-rounded {
  height: 65px;
  width: 65px;
  border-radius: 50% !important;
}
.person-name {
  font-size: 15px;
}
</style>
    