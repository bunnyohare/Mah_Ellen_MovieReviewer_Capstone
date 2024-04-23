# Backend server for Mah_Ellen_MovieReviewer_Capstone project.

## Setup

To test/use this API do the following:
 
- Run `npm install` to get the node_modules.
- Create a .env file which includes the following:
    ```
    PORT=5005
    MONGO_URI=mongodb+srv://<MONGO_USERNAME>:<MONGO_PASSWORD>@<MONGO_DATABASE_INFO_URL>/MovieReviewer
    ```
  - Change `<MONGO_USERNAME>` to your username where you are storing the database.
  - Change `<MONGO_PASSWORD>` to your password where you are storing the database
  - Change `<MONGO_DATABASE_INFO_URL>` to the location of your database in the format: `<DATABASE_DEPLOYMENT>.<STRING>.mongodb.net`.
  - If you deploy on https://MongoDB.com this info should be available via the `Connect` button.  Please do not use their boiler-plate driver connection as adding the `?retryWrites=true&w=majority&appName=` url parameters will cause issues with mongoose.

- Run `nodemon start` to start the server. 

## Notes

I've included a set of tests from Postman that should facilitate easy testing of the CRUD functionality of this API. These tests are in the `RTT03-Capstone.postman_collection.json` file. 

## Rendered View

The rendered view is available at: http://localhost:5005/

I have created and rendered a view using a view template and template engine. This allows users to easily view the id and username of all users in the DB and the id and title of all posts in the db in one page. It's not super pretty, but can show the content quickly to a tester before the frontend is installed.

