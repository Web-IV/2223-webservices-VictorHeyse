# Examenopdracht Web Services

- Student: Victor Heyse
- Studentennummer: 202182969
- E-mailadres: victor.heyse@student.hogent.be

## Vereisten

Ik verwacht dat volgende software reeds geïnstalleerd is:

- [NodeJS](https://nodejs.org)
- [Yarn](https://yarnpkg.com)
- [MySQL Community Server](https://dev.mysql.com/downloads/mysql/)

## Opstarten

Repository clonen en installeren:

    git clone https://github.com/Web-IV/2223-webservices-VictorHeyse.git
    yarn install

.env file aanmaken in root met volgende variabelen:

    NODE_ENV=development
    DATABASE=localhost
    USERNAME=root
    PASSWORD=root
    HOST=localhost
    DIALECT=mysql
    DATABASE_PORT=3306
    AUTH_JWKS_URI=https://klj-activiteiten.eu.auth0.com/.well-known/jwks.json
    AUTH_AUDIENCE=https://klj-activity.victor-hogent.be
    AUTH_ISSUER=https://klj-activiteiten.eu.auth0.com/
    AUTH_USER_INFO=https://klj-activiteiten.eu.auth0.com/userinfo

maak een file config.JSON aan in /config en geef de juiste databank info in
(requirement voor sequelize seeders en migrations)

    {
    "development": {
    "username": "root",
    "password": "root",
    "database": "localhost",
    "host": "localhost",
    "dialect": "mysql",
    "port": "3306"
    },
    "test": {
    "username": "root",
    "password": "root",
    "database": "localhost",
    "host": "localhost",
    "dialect": "mysql",
    "port": "3306"
    },
    "production": {
    "username": "root",
    "password": "root",
    "database": "localhost",
    "host": "localhost",
    "dialect": "mysql",
    "port": "3306"
    }
    }

!!!eerste keer!!! opstarten back-end (dit voert seeders en migrations uit via sequelize-CLI)

    yarn start

opstarten back-end na initiele opstart (Wanneer migrations en seeders door sequelize zijn uitgevoert willen we dit niet opnieuw doen, yarn start doet dit wel. Gebruik dus yarn dev!)

    yarn dev

om terug van niks te beginnen: in database -> drop schema in database -> maak schema terug aan -> yarn start

## Testen

.env.test aanmaken in root met volgende info

    NODE_ENV=test
    DATABASE_HOST="localhost"
    DATABASE_PORT=3306
    DATABASE_USERNAME="root"
    DATABASE_PASSWORD=""

database informatie aanpassen in config/test.js

    user: "root",
    pswrd: "root",
    db: "localhost",
    host: "localhost",
    dialect: "mysql",
    port: "3306",

test uitvoeren:

    yarn test
