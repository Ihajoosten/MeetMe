<template>
  <div>
    <section class="entity py-5">
      <div class="container">
        <h1 class="text-muted">Entities</h1>
        <hr />
        <div class="row">
          <div class="col-lg-4">
            <div class="card mb-5 mb-lg-0">
              <div class="card-body">
                <h2 class="text-muted text-center">User</h2>
                <hr />
                <ul class="fa-ul">
                  <li>avatar: String</li>
                  <li>name: String</li>
                  <li>email: String</li>
                  <li>username: String</li>
                  <li>password: String</li>
                  <li>joinedMmeetings: [{ref: Meeting}]</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="card mb-5 mb-lg-0">
              <div class="card-body">
                <h2 class="text-muted text-center">Meeting</h2>
                <hr />
                <ul class="fa-ul">
                  <li>location: String</li>
                  <li>title: String</li>
                  <li>image: String</li>
                  <li>description: String</li>
                  <li>category: {ref: Category}</li>
                  <li>startDate: Date</li>
                  <li>timeFrom: String</li>
                  <li>timeTo: String</li>
                  <li>status: String</li>
                  <li>joinedPeopleCount: Number</li>
                  <li>createdAt: Date</li>
                  <li>updatedAt: Date</li>
                  <li>author: {ref: User}</li>
                  <li>joinedPeople: [{ref: User}]</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="card mb-5 mb-lg-0">
              <div class="card-body">
                <h2 class="text-muted text-center">Thread</h2>
                <hr />
                <ul class="fa-ul">
                  <li>title: String</li>
                  <li>createdAt: Date</li>
                  <li>updatedAt: Date</li>
                  <li>meeting: {ref: Meeting}</li>
                  <li>authorId: String</li>
                  <li>authorAvatar: String</li>
                  <li>authorName: String</li>
                  <li>posts: [{ref: Post}]</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="entity py-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-4">
            <div class="card mb-5 mb-lg-0">
              <div class="card-body">
                <h2 class="text-muted text-center">Post</h2>
                <hr />
                <ul class="fa-ul">
                  <li>text: String</li>
                  <li>createdAt: Date</li>
                  <li>updatedAt: Date</li>
                  <li>thread: {ref: Thread}</li>
                  <li>authorId: String</li>
                  <li>authorAvatar: String</li>
                  <li>authorName: String</li>
                  <li>comments: [{ref: Comment}]</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="card mb-5 mb-lg-0">
              <div class="card-body">
                <h2 class="text-muted text-center">Comment</h2>
                <hr />
                <ul class="fa-ul">
                  <li>authorId: String</li>
                  <li>authorAvatar: String</li>
                  <li>authorName: String</li>
                  <li>content: String</li>
                  <li>createdAt: Date</li>
                  <li>post: {ref: Post}</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="card mb-5 mb-lg-0">
              <div class="card-body">
                <h2 class="text-muted text-center">Category</h2>
                <hr />
                <ul class="fa-ul">
                  <li>name: String</li>
                  <li>createdAt: Date</li>
                  <li>image: String</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.profile-pic {
  border-radius: 10%;
  height: 195px;
  width: auto;
}

ul li {
  list-style: none;
}

.entity .card {
  border: none;
  border-radius: 1rem;
  transition: all 0.2s;
  box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.1);
}

.profile .card {
  border: none;
  border-radius: 1rem;
  transition: all 0.2s;
  box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.1);
}

.fa-ul {
  height: 250px;
  overflow: auto;
}

.entity hr {
  margin: 1.5rem 0;
}

.entity .card-title {
  margin: 0.5rem 0;
  font-size: 0.9rem;
  letter-spacing: 0.1rem;
  font-weight: bold;
}

.entity .card-price {
  font-size: 3rem;
  margin: 0;
}

.entity .period {
  font-size: 0.8rem;
}

.entity ul li {
  margin-bottom: 1rem;
}

.entity .text-muted {
  opacity: 0.7;
}

.profile .card-title {
  margin: 0.5rem 0;
  font-size: 0.9rem;
  letter-spacing: 0.1rem;
  font-weight: bold;
}

.profile .card-price {
  font-size: 3rem;
  margin: 0;
}

.profile .period {
  font-size: 0.8rem;
}

.profile .text-muted {
  opacity: 0.7;
}

/* Hover Effects on Card */

@media (min-width: 992px) {
  .entity .card:hover {
    margin-top: -0.25rem;
    margin-bottom: 0.25rem;
    box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.3);
  }
}
</style>