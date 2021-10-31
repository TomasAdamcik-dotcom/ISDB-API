# ISBD project

---

## The Project brief
TO BE UPDATED
Customer is launching ISDB - "the interner song database" and needs an API that they can sell to their customers who can then build various front end appliactions with it.

Full project brief available [here.](http://tomasadamcik.com/Bootcamp/3.Project-ISDB/BSE-M2-Project%20Brief.pdf)

---

## User stories
- As an API consumer, I need to register a new account using username and password
- As an API consumer, I need to log into my account using my credentials
- As an API consumer, I want to extract a specific track and display all information about specific track and album
- As an API consumer, I want to view all genres in an array
- As an API consumer, I want to get all information about a specific album
- As an API consumer I want to post track details to an existing album
- As an API consumer I want to get all information about the specific artist


---
## UML diagrams
![UML class diagrams](http://tomasadamcik.com/Bootcamp/3.Project-ISDB/ISDB-class-diagram-Class%20diagrams.jpg)

---

## Used technologies
- Javascript
---

## Taken approach

1. Wrote down user stories based on project brief
    a) extract what functionality am I going to need to build basedon user stories
2. Prepare class diagram to show how are my collections going to be connected
3. Set up project 
    a) Load data into my local database
    b) Set up repository at github
    c) Set up README
    d) Set up project using express generator
    e) Connect to github and submit first commit
    f) Deploy project into Heroku and connect Heroku and Github
4. Create Login and register
    a) Create middleware/auth.js file and import dependencies
    b) Create User model and export to middleware/auth.js
    c) Define strategy and import to app.js
    d) Build login and register endpoints in routes/auth.js
    e) Test registration and login functionality
5. Created database in Mongo Atlas and loaded data to it.
6. Deployed new code using Heroku and tested that:
    a) Login and register works on deployed site as expected
    b) Login authorises user with token to load some data from database
7. Created other routes in local database
    a) Created separate git branch called development
    b) Built and tested remaining routes (/tracks/:id, /genres, /albums/:id, /tracks, /artists/:id)
    c) Tested in local database
    d) Merged development branch into master branch, commited and deployed to Heroku
    e) Tested functions in Heroku
8. Documented API using Swagger
    a) Installed swaggerUI and set up dependencies
    b) Used swagger inspector to inspect each case on endpoints
    c) Used swaggerhub to create definitions and edit comments
    d) Used swagger editor to complete documentation and exported to JSON format
    e) Updated swagger.json
    

---

## Next development

- Udate statuses for every function
- Finalize missing pieces of functionality as descibed in known issues

---
## List of favourite functions
Personally I like to work out logic, so my favourite functions were:
1. User login 
2. User registration
3. Posting new tracks

All of these are very similar in pronciple as I am passing data to the API through body. function usially checks:
a) were parameters used
b) are parameters in the correct format
c) do these parameters exist in database 
d) decised if system saves them, or release a token

---
## Difficulties during development
- I could not make register a user when I used validation in UserSchema mainly due to incorrect layout of my code (using code when not initiated etc.)
    - similarly my authentication was not working due to incorrect position of passport initialisation
- Importing collections into MongoDB Atlas
- Quering database collections
    - I could not get output from Postman because of passing parameterwhich was not converted to a number. Database is coverted to numbers
---
## List of known issues
-  Make /genres return an array of strings with genre names
-  Artists/:id only receive data from collections directly linked into their collection
-  My database password is visible on GitHub 
