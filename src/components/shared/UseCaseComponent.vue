<template>
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
                  Gebruiker is ingelogd en authenticatie service werkt nabehoren
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
                  Gebruiker klikt op 'meetings' in de navigatie balk om naar een
                  apart component verwezen te worden waarna hij/zij een lijst
                  getoond krijgt met alle meetings die zijn aangemaakt.
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
                  Gebruiker klikt op de button 'new meeting' om een nieuwe
                  meeting aan te maken het process bestaat uit 4 stappen met als
                  laatste stap de bevestiging. wanneer een gebruiker op 'confirm
                  klikt', dan is er een nieuwe meeting aangemaakt en wordt de
                  gebruiker daar de detail pagina doorgestuurd die net is
                  aangemaakt
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
                      De applicatie verwijst de gebruiker door naar het aanmaakt
                      scherm om een meeting aan te maken
                    </li>
                    <li>
                      Gebruiker vult de gegevens in voor de meeting
                    </li>
                    <li>
                      Gebruiker klikt op 'confirm' om de aanmaak te bevestigen
                    </li>
                    <li>
                      Gebruiker wordt naar de detail pagina van de nieuwe
                      meeting doorverwezen
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
                  Gebruiker klikt op 'join' onderaan de meeting beschrijving op
                  de detail pagina om de meeting te joinen
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
                      De applicatie checkt na of de gebruiker daadwerkelijk is
                      gejoint
                    </li>
                    <li>
                      De gebruiker kan nu een nieuwe thread aanmaken en posts
                      aanmaaken
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
                  Gebruiker is een meeting gejoint en kan nu posts en threads
                  aanmaken
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
                  Gebruiker klikt op 'leave' onderaan de meeting beschrijving op
                  de detail pagina om de meeting te leaven
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
                      De applicatie checkt na of de gebruiker daadwerkelijk is
                      geleaved
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
                  Gebruiker klikt op de user friendly button bovenaan de
                  detailpagina om een nieuwe thread aan te maken, vervolgens
                  wordt er een model geactiveert die te voorschijnkomt met daar
                  in een input waar je je vraag kan typen. als de gebruiker op
                  'ok' klikt is de nieuwe thread aangemaakt en is meteen te zien
                  op de detail pagina
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
                      Gebruiker klikt op 'Welcome .... start a new thread' boven
                      aan de detail pagina van de meeting
                    </li>
                    <li>
                      De applicatie haalt een modal te voorschijn waardoor de
                      gebruiker zijn/haar vraag kan stellen
                    </li>

                    <li>
                      De gebruiker typt zijn/haar vraag in in het invoerveld en
                      klikt op 'ok' om de thread aan te maken
                    </li>
                    <li>
                      De applicatie laat de nieuwe thread meteen dynamisch
                      <b>bovenaan</b> de pagina zien
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

        <div class="table-responsive-sm">
          <table class="table table-bordered">
            <thead class="thead-light">
              <tr>
                <th scope="col">Naam</th>
                <th scope="col">
                  UC-08 Thread verwijderen
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Beschrijving</th>
                <td>
                  Gebruiker klikt op de user friendly button in de header van de
                  thread. Wanneer een gebruiker op die button klikt, dan wordt
                  de thread dynamisch verwijderd van de meeting met de
                  bijbehorende posts.
                </td>
              </tr>
              <tr>
                <th scope="row">Actor</th>
                <td>Algemene gebruiker</td>
              </tr>
              <tr>
                <th scope="row">Pre-conditie</th>
                <td colspan="2">
                  Is ingelogd, is lid van de meeting & is de auteur van de
                  thread
                </td>
              </tr>
              <tr>
                <th scope="row">Scenario</th>
                <td colspan="2">
                  <ol>
                    <li>
                      Gebruiker klikt op verwijder button met een trash icon in
                      de thread header.
                    </li>
                    <li>
                      De applicatie geeft een melding met de vraag of de
                      gebruiker daadwerkelijk de thread zou willen verwijderen.
                    </li>
                    <li>
                      De gebruiker klikt op 'OK' om een bevestiging te geven
                      voor het verwijderen van de thread.
                    </li>
                    <li>
                      De applicatie verwijderd de thread dynamisch uit de lijst
                      met threads en van de meeting.
                    </li>
                  </ol>
                </td>
              </tr>
              <tr>
                <th scope="row">Post-conditie</th>
                <td colspan="2">
                  Gebruiker heeft zijn/haar thread verwijderd uit de lijst met
                  threads en van de meeting.
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
                  UC-09 Post aanmaken
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Beschrijving</th>
                <td>
                  Wanneer er een bestaande thread aanwezig is op de meeting
                  detail page, dan kan de gebruiker een post op deze thread
                  aanmaken. De gebruiker moet klikken op het invoer veld in de
                  footer van de thread en zijn/haar vraag of opmerking typen.
                  Vervolgens kan de gebruiker zijn/haar post posten doormiddel
                  van te klikken op de 'reply' button onder het invoer veld.
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
                      Gebruiker navigeert naar de detail pagina van de meeting
                      en ziet de lijst met threads.
                    </li>
                    <li>
                      Gebruiker wil commentaar/antwoord leveren op een thread.
                    </li>
                    <li>
                      Gebruiker klikt op het invoerveld in de footer van de
                      thread en typt wat hij/zij te melden heeft.
                    </li>
                    <li>
                      De applicatie valideert of er iets is ingevoerd in het
                      veld en maakt daarna de button beschikbaar om te reageren.
                    </li>

                    <li></li>
                    <li>
                      Gebruiker klikt op de 'reply' om een post te posten.
                    </li>
                    <li>
                      De applicatie verwerkt de POST request en voegt de post
                      dynamisch toe aan de thread
                    </li>
                  </ol>
                </td>
              </tr>
              <tr>
                <th scope="row">Post-conditie</th>
                <td colspan="2">
                  Gebruiker heeft een nieuwe post aangemaakt
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
                  UC-10 Post verwijderen
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Beschrijving</th>
                <td>
                  Gebruiker klikt op de user friendly button in de header van de
                  post. Wanneer een gebruiker op die button klikt, dan wordt de
                  post dynamisch verwijderd van de meeting met de bijbehorende
                  comments.
                </td>
              </tr>
              <tr>
                <th scope="row">Actor</th>
                <td>Algemene gebruiker</td>
              </tr>
              <tr>
                <th scope="row">Pre-conditie</th>
                <td colspan="2">
                  Is ingelogd, is lid van de meeting & is de auteur van de post
                </td>
              </tr>
              <tr>
                <th scope="row">Scenario</th>
                <td colspan="2">
                  <ol>
                    <li>
                      Gebruiker klikt op verwijder button met een trash icon in
                      de post header
                    </li>
                    <li>
                      De applicatie geeft een melding met de vraag of de
                      gebruiker daadwerkelijk de post zou willen verwijderen.
                    </li>
                    <li>
                      De gebruiker klikt op 'OK' om een bevestiging te geven
                      voor het verwijderen van de post.
                    </li>
                    <li>
                      De applicatie verwijderd de post dynamisch uit de lijst
                      met posts die gerelateerd zijn aan een thread
                    </li>
                  </ol>
                </td>
              </tr>
              <tr>
                <th scope="row">Post-conditie</th>
                <td colspan="2">
                  Gebruiker heeft zijn/haar post verwijderd uit de lijst met
                  posts gerelateerd aan een thread
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
                  UC-11 Comment aanmaken
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Beschrijving</th>
                <td>
                  Wanneer er een bestaande post aanwezig is bij een thread op de
                  meeting detail page, dan kan de gebruiker een comment op deze
                  post aanmaken. De gebruiker moet klikken op het invoer veld in
                  de footer van de post en zijn/haar vraag of opmerking typen.
                  Vervolgens kan de gebruiker zijn/haar comment posten
                  doormiddel van te klikken op de 'reply' button onder het
                  invoer veld.
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
                      Gebruiker navigeert naar de detail pagina van de meeting
                      en ziet de lijst met threads en posts.
                    </li>
                    <li>
                      Gebruiker wil commentaar/antwoord leveren op een post.
                    </li>
                    <li>
                      Gebruiker klikt op het invoerveld in de footer van de post
                      en typt wat hij/zij te melden heeft.
                    </li>
                    <li>
                      De applicatie valideert of er iets is ingevoerd in het
                      veld en maakt daarna de button beschikbaar om te reageren.
                    </li>

                    <li></li>
                    <li>
                      Gebruiker klikt op de 'reply' om een comment te posten.
                    </li>
                    <li>
                      De applicatie verwerkt de POST request en voegt de comment
                      dynamisch toe aan de post
                    </li>
                  </ol>
                </td>
              </tr>
              <tr>
                <th scope="row">Post-conditie</th>
                <td colspan="2">
                  Gebruiker heeft een nieuwe comment aangemaakt
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
                  UC-12 Comment verwijderen
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Beschrijving</th>
                <td>
                  Gebruiker klikt op de user friendly button in de header van de
                  comment. Wanneer een gebruiker op die button klikt, dan wordt
                  de comment dynamisch verwijderd uit de lijst met comments die
                  gerelateerd zijn aan een post.
                </td>
              </tr>
              <tr>
                <th scope="row">Actor</th>
                <td>Algemene gebruiker</td>
              </tr>
              <tr>
                <th scope="row">Pre-conditie</th>
                <td colspan="2">
                  Is ingelogd, is lid van de meeting & is de auteur van de
                  comment
                </td>
              </tr>
              <tr>
                <th scope="row">Scenario</th>
                <td colspan="2">
                  <ol>
                    <li>
                      Gebruiker klikt op verwijder button met een trash icon in
                      de comment header.
                    </li>
                    <li>
                      De applicatie geeft een melding met de vraag of de
                      gebruiker daadwerkelijk de comment zou willen verwijderen.
                    </li>
                    <li>
                      De gebruiker klikt op 'OK' om een bevestiging te geven
                      voor het verwijderen van de comment.
                    </li>
                    <li>
                      De applicatie verwijderd de comment dynamisch uit de lijst
                      met comments die gerelateerd zijn aan een post.
                    </li>
                  </ol>
                </td>
              </tr>
              <tr>
                <th scope="row">Post-conditie</th>
                <td colspan="2">
                  Gebruiker heeft zijn/haar comment verwijderd uit de lijst met
                  comments gerelateerd aan een post.
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
                  UC-13 Inzien statistieken van de gebruiker
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Beschrijving</th>
                <td>
                  Gebruiker wilt weten hoeveel meetings, threads, posts of
                  comment hij/zij heeft aangemaakt. Gebruiker navigeert naar
                  zijn/haar profiel pagina waar de statistieken getoond worden
                  en kan dynamisch zijn/haar statistieken inzien door te klikken
                  op de verschillende tabs.
                </td>
              </tr>
              <tr>
                <th scope="row">Actor</th>
                <td>Algemene gebruiker</td>
              </tr>
              <tr>
                <th scope="row">Pre-conditie</th>
                <td colspan="2">Is ingelogd</td>
              </tr>
              <tr>
                <th scope="row">Scenario</th>
                <td colspan="2">
                  <ol>
                    <li>
                      Gebruiker klikt de account button in de navigatie balk.
                    </li>
                    <li>
                      De applicatie laat een dropdown menu zien.
                    </li>

                    <li>
                      De gebruiker klikt op de optie 'Profile' om naar de
                      profiel pagina te gaan.
                    </li>
                    <li>
                      De applicatie navigeert de gebruiker naar zijn/haar
                      profiel pagina.
                    </li>
                    <li>
                      De applicatie weergeeft de profiel pagina van de gebruiker
                      met de bijbehorden statistieken.
                    </li>
                    <li>
                      De gebruiker ziet zijn/haar statistieken in door te
                      klikken op de verschillende tabs.
                    </li>
                    <li>
                      De applicatie laat een lijst zien met data verschillend
                      welke tab actief is.
                    </li>
                  </ol>
                </td>
              </tr>
              <tr>
                <th scope="row">Post-conditie</th>
                <td colspan="2">
                  Gebruiker heeft zijn/haar statistieken ingezien op de profiel
                  pagina.
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
                  UC-14 Meeting updaten
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Beschrijving</th>
                <td>
                  Gebruiker wil zijn/haar meeting updaten omdat er bepaalde
                  informatie niet klopt. De gebruiker navigeert naar zijn/haar
                  profiel pagina om daar de lijst met aangemaakte meetings in te
                  zien. Vervolgens navigeert de gebruiker naar de specifieke
                  meeting die hij/zij wilt updaten en klikt op de 'update'
                  button in de footer van de meeting. De gebruiker krijgt alle
                  informatie te zien van de desbetreffende meeting en kan daarna
                  informatie veranderen. Als de gebruiker op de update button
                  klikt wordt de data van de meeting veranderd en wordt daarna
                  terug verwezen naar de profiel pagina.
                </td>
              </tr>
              <tr>
                <th scope="row">Actor</th>
                <td>Algemene gebruiker</td>
              </tr>
              <tr>
                <th scope="row">Pre-conditie</th>
                <td colspan="2">Is ingelogd & en auteur van de meeting</td>
              </tr>
              <tr>
                <th scope="row">Scenario</th>
                <td colspan="2">
                  <ol>
                    <li>
                      Gebruiker navigeert naar de profiel pagina
                    </li>
                    <li>
                      De applicatie toont een lijst met aangemaakte meetings
                      door de gebruiker.
                    </li>

                    <li>
                      De gebruiker klikt op de button 'update' in de footer van
                      een lijst item.
                    </li>
                    <li>
                      De applicatie navigeert de gebruiker naar een component om
                      de data te veranderen.
                    </li>
                    <li>
                      De applicatie haalt de data op van de betreffende meeting
                      en weergeeft dit in de invoervelden op het component.
                    </li>
                    <li>
                      De gebruiker veranderd de data die hij/zij zou willen
                      veranderen.
                    </li>
                    <li>
                      De gebruiker klikt op de 'update' button om de meeting te
                      updaten.
                    </li>
                    <li>
                      De applicatie verwerkt de gegevens van de meeting.
                    </li>
                    <li>
                      De applicatie laat een melding zien of de meeting
                      successvol is geupdate of wanneer er iets fout ging.
                    </li>
                    <li>
                      Als de update geslaagd is, dan wordt de gebruiker terug
                      verwezen naar de profiel pagina
                    </li>
                  </ol>
                </td>
              </tr>
              <tr>
                <th scope="row">Post-conditie</th>
                <td colspan="2">
                  Gebruiker heeft de meeting geupdate
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
                  UC-14 Account gegevens updaten
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Beschrijving</th>
                <td>
                  Gebruiker wil zijn/haar gegevens updaten omdat er bepaalde
                  informatie niet klopt. De gebruiker navigeert naar zijn/haar
                  profiel pagina. Vervolgens klikt hij/zij op de 'update
                  account' button bovenaan de pagina. De gebruiker krijgt alle
                  informatie te zien van zijn/haar account en kan daarna
                  informatie veranderen. Als de gebruiker op de 'save account'
                  button klikt wordt de data van de gebruiker veranderd en wordt
                  daarna terug verwezen naar de profiel pagina met een melding
                  waneer de update successvol was, anders volgt er een
                  foutmelding.
                </td>
              </tr>
              <tr>
                <th scope="row">Actor</th>
                <td>Algemene gebruiker</td>
              </tr>
              <tr>
                <th scope="row">Pre-conditie</th>
                <td colspan="2">Is ingelogd</td>
              </tr>
              <tr>
                <th scope="row">Scenario</th>
                <td colspan="2">
                  <ol>
                    <li>
                      Gebruiker navigeert naar de profiel pagina.
                    </li>
                    <li>
                      De gebruiker klikt op de button 'update account' boven aan
                      de pagina.
                    </li>
                    <li>
                      De applicatie haalt de data op van de gebruiker.
                    </li>
                    <li>
                      De applicatie laat een modal zien met de bijbehorende data
                      in de invoervelden.
                    </li>

                    <li>
                      De gebruiker veranderd de data die hij/zij zou willen
                      veranderen.
                    </li>
                    <li>
                      De gebruiker klikt op de 'save account' button om de
                      gegevens te updaten.
                    </li>
                    <li>
                      De applicatie verwerkt de gegevens van de update.
                    </li>
                    <li>
                      De applicatie laat een melding zien of de gegevens
                      successvol is geupdate of wanneer er iets fout ging.
                    </li>
                    <li>
                      Als de update geslaagd is, dan wordt de gebruiker terug
                      verwezen naar de login pagina.
                    </li>
                  </ol>
                </td>
              </tr>
              <tr>
                <th scope="row">Post-conditie</th>
                <td colspan="2">
                  Gebruiker heeft de zijn/haar persoonlijke gegevens geupdate.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
