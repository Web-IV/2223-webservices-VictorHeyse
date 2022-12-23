# Victor Heyse (202182969)

- [x] Front-end Web Development
  - [GitHub repository](https://github.com/Web-IV/2223-frontendweb-victorheyse)
  - [Online versie](github.com/HOGENT-Web)
- [x] Web Services: GITHUB URL
  - [GitHub repository](https://github.com/Web-IV/2223-webservices-VictorHeyse)
  - [Online versie](github.com/HOGENT-Web)

**Logingegevens**

account met de rol leider (toegang tot activiteitenbeheer en inschrijvingoversicht)

- Gebruikersnaam/e-mailadres: victorh1.heyse@gmail.com
- Wachtwoord: Testpaswoord1!

gewoon account (een account aanmaken produceert dit soort account)

- Gebruikersnaam/e-mailadres: victor.heyse@student.hogent.be
- Wachtwoord: Testpaswoord1!

## Projectbeschrijving

Deze applicatie is een inschrijvingapplicatie.
De applicatie werd gemaakt met als doelgroep KLJ Nazareth, de jeugdbeweging waar ik lid van bestuur ben.
Als gewone gebruiker kan je je inschrijven/uitschrijven voor activiteiten die aangemaakt werden op het platform door beheerders.
Als beheerder kan je activiteiten bijmaken/veranderen en de inschrijvingen per activiteit raadplegen.
Als beheerder kan je ook inschrijven/uitschrijven voor activiteiten.

## Screenshots

Homepage (niet ingelogd)
![text](images dossier\HomeNietIngelogd.PNG)

Homepage
![text](images dossier\Homepage.PNG)

Activiteitenbeheer
![text](images dossier\Activiteitenbeheer.PNG)

Inschrijvingen
![text](images dossier\Inschrijvingen.PNG)

Contact
![text](images dossier\Contact.PNG)

404 (naar een pagina gaan die niet bestaat)
![text](images dossier\404.PNG)

## Behaalde minimumvereisten

### Front-end Web Development

- **componenten**

  - [x] heeft meerdere componenten - dom & slim (naast login/register)
  - [x] definieert constanten (variabelen, functies en componenten) buiten de component
  - [x] minstens één form met validatie (naast login/register)
  - [x] login systeem (eigen of extern zoals bv. Auth0)
        <br />

- **routing**

  - [x] heeft minstens 2 pagina's (naast login/register)
  - [x] routes worden afgeschermd met authenticatie en autorisatie
        <br />

- **state-management**

  - [x] meerdere API calls (naast login/register)
  - [x] degelijke foutmeldingen indien API call faalt
  - [x] gebruikt useState enkel voor lokale state
  - [x] gebruikt Context, useReducer, Redux… voor globale state
        <br />

- **hooks**

  - [x] kent het verschil tussen de hooks (useCallback, useEffect…)
  - [x] gebruikt de hooks op de juiste manier
        <br />

- **varia**
  - [] een aantal niet-triviale testen (unit en/of e2e en/of ui)
  - [x] minstens één extra technologie
  - [x] duidelijke en volledige README.md
  - [x] volledig en tijdig ingediend dossier

### Web Services

- **datalaag**

  - [x] voldoende complex (meer dan één tabel)
  - [x] één module beheert de connectie + connectie wordt gesloten bij sluiten server
  - [x] heeft migraties
  - [x] heeft seeds
        <br />

- **repositorylaag**

  - [niet van toepassing] definieert één repository per entiteit (niet voor tussentabellen) - indien van toepassing
  - [x] mapt OO-rijke data naar relationele tabellen en vice versa
        <br />

- **servicelaag met een zekere complexiteit**

  - [x] bevat alle domeinlogica
  - [x] bevat geen SQL-queries of databank-gerelateerde code
        <br />

- **REST-laag**

  - [x] meerdere routes met invoervalidatie
  - [x] degelijke foutboodschappen
  - [x] volgt de conventies van een RESTful API
  - [x] bevat geen domeinlogica
  - [x] degelijke authorisatie/authenticatie op alle routes
        <br />

- **varia**
  - [] een aantal niet-triviale testen (min. 1 controller >=80% coverage)
  - [x] minstens één extra technologie
  - [x] duidelijke en volledige `README.md`
  - [x] maakt gebruik van de laatste ES6-features (object destructuring, spread operator...)
  - [x] volledig en tijdig ingediend dossier

## Projectstructuur

### Front-end Web Development

De front-end heeft de structuur van een React Applicatie.
De applicatie maakt gebruik van Auth0 voor login en authenticatie.
De applicatie maakt gebruik van meerdere API-calls naar de REST API in de back-end.
De front-end bestaat uit meerdere componenten naast de login/register.
De applicatie heeft een responsive en degelijke stijl.
Er wordt gebruik gemaakt van routing met meerder pagina's.
Er is authorisatie & authenticatie van de gebruiker, gebruikers hebben rechten nodig om bepaalde acties te doen.
Data van de applicatie wordt beheerd, aangepast en opgeslagen in een databank door de REST API.

### Web Services

De back-end heeft de structuur van een REST API.
Er zijn routes geconfigureerd voor Activities, Participants en Users.
De back-end maakt gebruik van Auth0 voor authenticatie.
Voor de domeinlaag is er gebruik gemaakt van Sequelize (ORM).
De applicatie maakt gebruik van een onderliggende MySQL databank.
Sequelize wordt in het gehele project gebruikt om handelingen voor de databank uit te voeren.
Best practices zoals invoervalidatie, degelijke foutboodschappen bij falende HTTP requests, logging en een gelaagde gelaagde applicatie zijn toegepast.
Meerdere routes met invoervalidatie.
Degelijke authorisatie & authenticatie op alle routes.

## Extra technologie

### Front-end Web Development

Als extra technologie voor mijn front-end heb ik gebruik gemaakt van Bootstrap voor mijn lay-out van het gehele project.

https://www.npmjs.com/package/bootstrap

### Web Services

Als extra technologie voor mijn back-end heb ik gebruik gemaakt van Sequelize.
Sequelize is een ORM.

https://www.npmjs.com/package/sequelize

## Testresultaten

### Front-end Web Development

.\_\_tests\_\_\rest\activities.spec.js

### Web Services

.\cypress\e2e\addActivity.cy.js

## Gekende bugs

### Front-end Web Development

De testklasse werkt niet.

### Web Services

De testklasse werkt niet.
