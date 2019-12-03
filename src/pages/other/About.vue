<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-6 col-md-8 col-lg-9">
        <section class="col py-1 mt-4">
          <div class="mb-5 mb-lg-0">
            <h2 class="text-muted card-body">About the application</h2>
            <hr />
            <div class="card-body">
              This application is made in the context of the subject 'Clientside
              web frameworks' of Avans University of Applied Science Breda.
            </div>
          </div>
        </section>
        <section class="col py-1">
          <div class="mb-5 mb-lg-0">
            <h2 class="text-muted card-body">Meet Me</h2>
            <hr />
            <div class="card-body">
              Meet Me is an application where users can create several events so
              called meetings. In order to create such event they need to be
              registerd first and login after that. Meet me allows users to
              interact with eachother throughout a meeting detail page. Users
              can post a question and are able to comment to other posts in
              other meeting pages Meet me is based on the dual assignment of the
              subject NoSQL databases. Me and a fellow student had to develop a
              NodeJS back-end service with MongoDB and Neo4J called Studdit,
              which is related to reddit. My thoughts were to combine the
              back-end of that assignment with the front-end framework VueJS for
              Clientside web frameworks to develop this application.
            </div>
          </div>
        </section>
      </div>
      <div class="col profile py-3">
        <div class="card entity">
          <div class="d-flex justify-content-center">
            <img
              src="../../assets/img/Profielfoto.jpeg"
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

      <EntityComponent />
      
      <UseCaseComponent />
  </div>
</template>

<script>
import EntityComponent from '../../components/shared/EntityComponent';
import UseCaseComponent from '../../components/shared/UseCaseComponent';

export default {
  name: 'about',
  components: {
    EntityComponent,
    UseCaseComponent
  }
};
</script>

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
