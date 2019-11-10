<template>
  <div>
    <div class="container mt-4">
      <div class="row">
        <div class="col-sm-6 col-md-8 col-lg-9">
          <h1>About the application</h1>
          <p>This application is made in the context of the subject 'Clientside web frameworks' of Avans University of Applied Science Breda.</p>
          <h3>Meet Me</h3>
          <p>
            Meet Me is an application where users can create several events so called meetings. In order to create such event they need to be registerd first and login after that. Meet me allows users to interact with eachother throughout a meeting detail page. Users can post a question and are able to comment to other posts in other meeting pages
            Meet me is based on the dual assignment of the subject NoSQL databases. Me and a fellow student had to develop a NodeJS back-end service with MongoDB and Neo4J called Studdit, which is related to reddit. My thoughts were to combine the back-end of that assignment with the front-end framework VueJS for Clientside web frameworks to develop this application.
          </p>
        </div>
        <div class="col">
          <div class="card">
            <div class="d-flex justify-content-center">
              <img
                src="../assets/img/Profielfoto.jpeg"
                class="card-img-top border mt-1 profile-pic"
                alt="..."
              />
            </div>
            <div class="card-body text-center">
              <h5 class="card-title">Luc Joosten</h5>
              <p class="card-text">2140212</p>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
    <div class="entities">
      <h2 class="mt-3 mb-5">Entities</h2>
      <div class="row">
        <div class="col-sm-12 col-md-2">
          <h3>User</h3>
          <ul>
            <li>avatar: Buffer</li>
            <li>naam: String</li>
            <li>email: String</li>
            <li>username: String</li>
            <li>password: String</li>
            <li>info: String</li>
            <li>meetings: [ref: Meeting]</li>
          </ul>
        </div>
        <div class="col-sm-12 col-md-2">
          <h3>Meeting</h3>
          <ul>
            <li>location: String</li>
            <li>title: String</li>
            <li>image: Buffer</li>
            <li>description: String</li>
            <li>category: {ref: Category}</li>
            <li>startDate: Date</li>
            <li>timeFrom: String</li>
            <li>timeTo: String</li>
            <li>status: Boolean</li>
            <li>joinedPeopleCount: Number</li>
            <li>createdAt: Date</li>
            <li>updatedAt: Date</li>
            <li>author: [ref: User]</li>
            <li>joinedPeople: [ref: User]</li>
          </ul>
        </div>
        <div class="col-sm-12 col-md-2">
          <h3>Thread</h3>
          <ul>
            <li>title: String</li>
            <li>createdAt: Date</li>
            <li>updatedAt: Date</li>
            <li>meeting: {ref: Meeting}</li>
            <li>user: [ref: User]</li>
            <li>comment: [ref: Comment]</li>
          </ul>
        </div>
        <div class="col-sm-12 col-md-2">
          <h3>Comment</h3>
          <ul>
            <li>text: String</li>
            <li>createdAt: Date</li>
            <li>updatedAt: Date</li>
            <li>thread: {ref: Thread}</li>
            <li>user: {ref: User}</li>
          </ul>
        </div>
        <div class="col-sm-12 col-md-2">
          <h3>Category</h3>
          <ul>
            <li>name: String</li>
            <li>image: Buffer</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="container">
      <hr />
      <div class="row mt-4">
        <div class="col-12">
          <h3>Use Cases</h3>
          <p>De applicatie biedt de volgende functionaliteit.</p>

          <p>Vul hier zelf meer functionaliteit toe.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "about"
};
</script>

<style scoped>
.profile-pic {
  border-radius: 10%;
  height: 195px;
  width: auto;
}
.entities {
    margin-left: 200px;
}
</style>