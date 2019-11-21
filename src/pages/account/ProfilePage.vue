<template>
  <div class="container profile">
    <div class="row">
      <div class="col-5">
        <figure class="image  header-icon user-profile-image">
          <img class="is-rounded" src="" />
        </figure>
        <p>
          <span class="title"
            ><h4><b>Luc Joosten</b></h4></span
          >
          <br />
          <button class="btn btn-sm btn-outline-primary">Update Info</button>
          <br />
        </p>

        <p class="tagline">
          User information right here
        </p>
      </div>

      <div class="stats-tab col-2 text-center">
        <p class="stat-val">2</p>
        <p class="stat-key">Meetups</p>
      </div>

      <div class="stats-tab col-2 text-center">
        <p class="stat-val">4</p>
        <p class="stat-key">Threads</p>
      </div>

      <div class="stats-tab col-2 text-center">
        <p class="stat-val">3</p>
        <p class="stat-key">Posts</p>
      </div>
    </div>

    <div class="row mt-2">
      <div class="col-3">
        <div class="card" style="width: 18rem;">
          <img src="" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">
              1000 Palm -
              <div class="badge badge-success">Active</div>
            </h5>
            <div class="badge badge-primary">Sociaal</div>
            <p class="card-text mt-2">
              De meeting beschrijving
            </p>
          </div>
          <div class="card-footer">
            <button class="btn btn-sm btn-outline-success mr-2">Share</button>
            <button class="btn btn-sm btn-outline-danger">Delete</button>
          </div>
        </div>
        <br />
      </div>
    </div>

    <div class="row">
      <div class="col-3">
        <div class="card" style="width: 18rem; height: 10rem">
          <div class="card-body">
            <h5 class="card-title">Thread title</h5>
            <div class="badge badge-success">posted by ... at ..</div>
          </div>
          <div class="card-footer">
            <button class="btn btn-sm btn-outline-success mr-2">Share</button>
            <button class="btn btn-sm btn-outline-danger">Delete</button>
          </div>
        </div>
        <br />
      </div>
    </div>

    <div class="row">
      <div class="col-3">
        <div class="card" style="width: 18rem; height: 10rem">
          <div class="card-body">
            <h5 class="card-title">Post text</h5>
            <div class="badge badge-success">posted by ... at ...</div>
          </div>
          <div class="card-footer">
            <button class="btn btn-sm btn-outline-success mr-2">Share</button>
            <button class="btn btn-sm btn-outline-danger">Delete</button>
          </div>
        </div>
        <br />
      </div>
    </div>
  </div>
</template>

<style scoped>
body {
  background: #f5f7fa;
}
.stats-tab {
  border-bottom: 2px solid transparent;
  transition: 0.5s;
}
.stats-tab:hover {
  cursor: pointer;
  border-bottom: 2px solid #28A745;
}
.stats-tab.isActive {
  border-bottom: 2px solid #28A745;
}
.stat-val {
  font-size: 3em;
  padding-top: 20px;
  font-weight: bold;
}
.stat-key {
  font-size: 1.4em;
  font-weight: 200;
}
.section.profile-heading
  .column.is-2-tablet.has-text-centered
  + .has-text-centered {
  border-left: 1px dotted rgba(6, 253, 6, 0.2);
}
.container.profile {
  margin-top: 1%;
}
.control.is-pulled-left span.select {
  margin-right: 5px;
  border-radius: 2px;
}
.modal-card .content h1 {
  padding: 40px 10px 10px;
  border-bottom: 1px solid #dadada;
}
.container.profile .profile-options .tabs ul li.link a {
  margin-bottom: 20px;
  padding: 20px;
  background-color: #f1f1f1;
}
</style>
