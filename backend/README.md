# Backend

This implementation is for NodeJS based on [Express](https://expressjs.com/) and [MongoDB](https://www.mongodb.com/) and uses [mongoose](https://mongoosejs.com/) as the ODM.

## Project setup

    npm install

### Before startup
You need a MongoDB database ready.

Make sure you have a collection named 'org' in your database that contains at least one organization with the orgid listed in your environment variable (see below).

Setup a .env file with the following variables: MONGO_URL, PORT and ORG

    MONGO_URL= that is the Mongo URL connection string
    PORT= e.g.3000
    ORG= that is the orgid (as a string)

### Compiles and hot-reloads for development

    npm start

## Postman Documentation

Can be found at <https://documenter.getpostman.com/view/23133138/2s83mdJiqh>


## Sprint 3 Project Description

username = "editor" and password = "Test" (capital 'T') for the editor account.
username = "viewer" and password = "Test" (capital 'T') for the viewer account.

Please use the provided MONGO URL that was provided as part of the Blackboard submission in order to connect to our Mongo database.

Our backend utilizes mongodb through a Mongo Atlas database where all of the data associated with the project is stored.
The backend uses Mongoose schemas as a way to structure the data for validation purposes and for consistency; this is located in the models.js file in the models directory. The backend also contains a routes directory which has all of the route for all of the collections on the database.