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
                  <li>author: [ref: User]</li>
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
                  <li>author: [ref: User]</li>
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
                  <li>author: {ref: User}</li>
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
                  <li>image: Buffer</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="container py-5">
      <div class="row mt-4">
        <div class="col">
          <h1 class="text-muted">Use Cases</h1>
          <hr />
          <p>De applicatie biedt de volgende functionaliteiten.</p>
          <div class="table-responsive-sm">
            <table class="table table-bordered">
              <thead class="thead-light">
                <tr>
                  <th scope="col">Naam</th>
                  <th scope="col">UC-01 Inloggen</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Beschrijving</th>
                  <td>Gebruiker gaat inloggen op de pagina</td>
                </tr>
                <tr>
                  <th scope="row">Actor</th>
                  <td>Algemene gebruiker</td>
                </tr>
                <tr>
                  <th scope="row">Pre-conditie</th>
                  <td colspan="2">Geregistreerd staan in het systeem</td>
                </tr>
                <tr>
                  <th scope="row">Scenario</th>
                  <td colspan="2">
                    <ol>
                      <li>
                        Gebruiker vult email en password in en klikt op Login
                        knop.
                      </li>
                      <li>
                        De applicatie valideert de ingevoerde gegevens op basis
                        van email en wachtwoord
                      </li>
                      <li>
                        Wanneer de gegevens correct zijn dan wordt de gebruiker
                        terug verwezen naar de hoofdpagina
                      </li>
                    </ol>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Post-conditie</th>
                  <td colspan="2">
                    Gebruiker is ingelogd en authenticatie service werkt
                    nabehoren
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="table-responsive-sm">
            <table class="table table-bordered">
              <thead class="thead-light">
                <tr>
                  <th scope="col">Naam</th>
                  <th scope="col">UC-02 Registreren</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Beschrijving</th>
                  <td>Gebruiker gaat inloggen op de pagina</td>
                </tr>
                <tr>
                  <th scope="row">Actor</th>
                  <td>Algemene gebruiker</td>
                </tr>
                <tr>
                  <th scope="row">Pre-conditie</th>
                  <td colspan="2">Geen</td>
                </tr>
                <tr>
                  <th scope="row">Scenario</th>
                  <td colspan="2">
                    <ol>
                      <li>
                        Gebruiker vult zijn/haar gegevens in om te registreren
                      </li>
                      <li>
                        De applicatie valideert op client-side niveau of de
                        gegevens valide zijn
                      </li>
                      <li>
                        Wanneer de ingevulde gegevens correct zijn dan wordt de
                        gebruiker terug verwezen naar de inlogpagina om in te
                        loggen
                      </li>
                    </ol>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Post-conditie</th>
                  <td colspan="2">
                    Gebruiker is geregistreerd en client-side validatie werkt
                    nabehoren
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="table-responsive-sm">
            <table class="table table-bordered">
              <thead class="thead-light">
                <tr>
                  <th scope="col">Naam</th>
                  <th scope="col">
                    UC-03 Lijst tonen met alle meetings op apart component
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Beschrijving</th>
                  <td>
                    Gebruiker klikt op 'meetings' in de navigatie balk om naar
                    een apart component verwezen te worden waarna hij/zij een
                    lijst getoond krijgt met alle meetings die zijn aangemaakt.
                  </td>
                </tr>
                <tr>
                  <th scope="row">Actor</th>
                  <td>Algemene gebruiker</td>
                </tr>
                <tr>
                  <th scope="row">Pre-conditie</th>
                  <td colspan="2">Geen</td>
                </tr>
                <tr>
                  <th scope="row">Scenario</th>
                  <td colspan="2">
                    <ol>
                      <li>
                        Gebruiker klikt op 'meetings' in de navigatiebalk
                      </li>
                      <li>
                        De applicatie verwijst de gebruiker door naar het
                        component wat gelinkt is aan de navigatie-link
                      </li>
                      <li>
                        De applicatie toont een lijst met aangemaakte meetings
                      </li>
                    </ol>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Post-conditie</th>
                  <td colspan="2">
                    Gebruiker ziet een getoonde lijst met meetings
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
           <div class="table-responsive-sm">
            <table class="table table-bordered">
              <thead class="thead-light">
                <tr>
                  <th scope="col">Naam</th>
                  <th scope="col">
                    UC-04 Nieuwe meeting aanmaken
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Beschrijving</th>
                  <td>
                    Gebruiker klikt op de button 'new meeting' om een nieuwe meeting aan te maken
                    het process bestaat uit 4 stappen met als laatste stap de bevestiging. wanneer een gebruiker op 'confirm klikt', dan 
                    is er een nieuwe meeting aangemaakt en wordt de gebruiker daar de detail pagina doorgestuurd die net is aangemaakt
                  </td>
                </tr>
                <tr>
                  <th scope="row">Actor</th>
                  <td>Algemene gebruiker</td>
                </tr>
                <tr>
                  <th scope="row">Pre-conditie</th>
                  <td colspan="2">Ingelogd zijn</td>
                </tr>
                <tr>
                  <th scope="row">Scenario</th>
                  <td colspan="2">
                    <ol>
                      <li>
                        Gebruiker klikt op 'New meeting' op de hoofdpagina
                      </li>
                      <li>
                        De applicatie verwijst de gebruiker door naar het
                        aanmaakt scherm om een meeting aan te maken
                      </li>
                      <li>
                        Gebruiker vult de gegevens in voor de meeting
                      </li>
                      <li>
                        Gebruiker klikt op 'confirm' om de aanmaak te bevestigen
                      </li>
                      <li>
                        Gebruiker wordt naar de detail pagina van de nieuwe meeting doorverwezen
                      </li>
                    </ol>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Post-conditie</th>
                  <td colspan="2">
                    Gebruiker heeft een nieuwe meeting aangemaakt
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

           <div class="table-responsive-sm">
            <table class="table table-bordered">
              <thead class="thead-light">
                <tr>
                  <th scope="col">Naam</th>
                  <th scope="col">
                    UC-05 Meeting joinen
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Beschrijving</th>
                  <td>
                    Gebruiker klikt op 'join' onderaan de meeting beschrijving 
                    op de detail pagina om de meeting te joinen
                  </td>
                </tr>
                <tr>
                  <th scope="row">Actor</th>
                  <td>Algemene gebruiker</td>
                </tr>
                <tr>
                  <th scope="row">Pre-conditie</th>
                  <td colspan="2">Ingelogd zijn</td>
                </tr>
                <tr>
                  <th scope="row">Scenario</th>
                  <td colspan="2">
                    <ol>
                      <li>
                        Gebruiker klikt op 'join' op de detail pagina
                      </li>
                      <li>
                        De applicatie checkt na of de gebruiker daadwerkelijk is gejoint
                      </li>
                      <li>
                        De gebruiker kan nu een nieuwe thread aanmaken en posts aanmaaken
                      </li>
                      <li>
                        De applicatie laat de 'leave' button zien
                      </li>
                    </ol>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Post-conditie</th>
                  <td colspan="2">
                    Gebruiker is een meeting gejoint en kan nu posts en threads aanmaken
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

            <div class="table-responsive-sm">
            <table class="table table-bordered">
              <thead class="thead-light">
                <tr>
                  <th scope="col">Naam</th>
                  <th scope="col">
                    UC-06 Meeting leaven
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Beschrijving</th>
                  <td>
                    Gebruiker klikt op 'leave' onderaan de meeting beschrijving 
                    op de detail pagina om de meeting te leaven
                  </td>
                </tr>
                <tr>
                  <th scope="row">Actor</th>
                  <td>Algemene gebruiker</td>
                </tr>
                <tr>
                  <th scope="row">Pre-conditie</th>
                  <td colspan="2">Ingelogd zijn & lid zijn van de meeting</td>
                </tr>
                <tr>
                  <th scope="row">Scenario</th>
                  <td colspan="2">
                    <ol>
                      <li>
                        Gebruiker klikt op 'leave' op de detail pagina
                      </li>
                      <li>
                        De applicatie checkt na of de gebruiker daadwerkelijk is geleaved
                      </li>
                      <li>
                        De gebruiker kan nu geen nieuwe threads en posts aanmaaken
                      </li>
                      <li>
                        De applicatie laat de 'join' button zien
                      </li>
                    </ol>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Post-conditie</th>
                  <td colspan="2">
                    Gebruiker is een meeting geleaved
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

           <div class="table-responsive-sm">
            <table class="table table-bordered">
              <thead class="thead-light">
                <tr>
                  <th scope="col">Naam</th>
                  <th scope="col">
                    UC-07 Thread aanmaken
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Beschrijving</th>
                  <td>
                    Gebruiker klikt op de user friendly button bovenaan de detailpagina om een nieuwe thread aan te maken,
                    vervolgens wordt er een model geactiveert die te voorschijnkomt met daar in een input waar je je vraag kan typen.
                    als de gebruiker op 'ok' klikt is de nieuwe thread aangemaakt en is meteen te zien op de detail pagina
                  </td>
                </tr>
                <tr>
                  <th scope="row">Actor</th>
                  <td>Algemene gebruiker</td>
                </tr>
                <tr>
                  <th scope="row">Pre-conditie</th>
                  <td colspan="2">Is ingelogd & is lid van de meeting</td>
                </tr>
                <tr>
                  <th scope="row">Scenario</th>
                  <td colspan="2">
                    <ol>
                      <li>
                        Gebruiker klikt op 'Welcome .... start a new thread' boven aan de detail pagina van de meeting
                      </li>
                      <li>
                        De applicatie haalt een modal te voorschijn waardoor de gebruiker zijn/haar vraag kan stellen
                      <li>
                        De gebruiker typt zijn/haar vraag in in het invoerveld en klikt op 'ok' om de thread aan te maken
                      </li>
                      <li>
                        De applicatie laat de nieuwe thread meteen <b>bovenaan</b> de pagina zien
                      </li>
                    </ol>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Post-conditie</th>
                  <td colspan="2">
                    Gebruiker heeft een nieuwe thread aangemaakt
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'about'
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
