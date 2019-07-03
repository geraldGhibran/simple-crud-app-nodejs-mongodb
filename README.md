# simple-crud-app-nodejs-mongodb
Simple CRUD Application USing Nodejs &amp; MongoDB

- How to use -

1. Set Up Database

- First, Create Database call "EmployeeDB" in mongoDB..
- Then create collection call "employees"

2. Import Collection
- copy "employees.json" to  mongoDB/server/your_mongoDB_version/bin/
- open cmd in this directory and "Run as administrator"
- then type mongoimport --db EmployeeDB --collection employees --file employees.json

Start app by typing "nodemon" in terminal of this app directory and don't forget to start your mongoDB server..

Done!!


