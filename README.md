## About

Backend RESTful JSON API with full CRUD using MongoDB, Express and Mongoose for use with Not_OfferUp project
This API was created to use as the backend for the OfferUp clone app.

## How to start Project

1.  Clone repository

        clone repo

2.  Switch to repository

        cd into repo

3.  Install depandencies

        npm install

4.  Change into db directory

        cd lib/db

5.  Seed database

        node seed.js

6.  Change to lib directory

        cd ..

7.  Launch server

        npx nodemon index.js

8.  Open browser and run below url

[http://localhost:3000/](http://localhost:3000/)

## Endpoints

| URL   | PATH | METHOD | DESCRIPTION                         |
| ----- | ---- | ------ | ----------------------------------- |
| /     | /    | GET    | List all items of the listings      |
| /     | /    | POST   | Add a new item to the database      |
| /{id} | /:id | GET    | Render item listing based on the id |
| /{id} | /:id | PUT    | Update a specific item based off ID |
| /{id} | /:id | DELETE | Remove a specific item based on ID  |

## Technology Used
- Mongoose
- Express.js

<img src="https://shields.io/badge/JavaScript-F7DF1E?logo=JavaScript&logoColor=000&style=flat-square" height=28px /> <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" /> <img src="https://img.shields.io/badge/-Node.js-339933?style=flat-square&logo=Node.js&logoColor=white" height=28px /> <img src="https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white"/>
## Future Plans/Issues

In the future we would like to include User Authorization/Profiles, and holding images to serve up to the front end.

We ran into multiple issues with CORS and CORB. The CORS issues were resolved by adding CORS and a configuration to allow access from all sites. We are still having an issue with CORB as this is a Chromium security precaution.
