# NeverEverNote

NeverEverNote is a clone of Evernote, a note taking web app. NeverEverNote allows you to organize your notes into collection called notebooks.

[NeverEverNote]: "https://neverevernote.herokuapp.com"

<img width="500" alt="notes-page" src="app/assets/images/notes-page.png">
<img width="500" alt="notebook-page" src="app/assets/images/notebook-page.png">

<br/>

## Deployment
1. First, `bundle install` followed by `npm install`
2. Initialize the database with `rails db:reset`. You must be running PostgresSQL (sudo service postgresql start).
3. Start the server with `rails s`
4. Compile the javascript with `npm start`
5. Navigate your browser to `localhost:3000`