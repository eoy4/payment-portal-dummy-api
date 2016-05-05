# payment-portal-dummy-api
Dummy CRUD API for payment portal

Instructions for installing and running the dummy API:

To create local DB:
1. Install MongoDB Community from https://docs.mongodb.org/manual/installation/
2. From a Terminal, start MongoDB (./bin/mongod)
3. From another Terminal, start the Mongo Shell (./bin/mongo)
4. In the Mongo Shell, create a db called "paymentPortal" by typing:
  use paymentPortal
5. You can close the Mongo Shell

If you use an external Mongo DB:
1. go to server.js and change this line:
  mongoose.connect('mongodb://localhost:27017/paymentPortal');
  and replace the mongodb:// url for the external DB.

To install the dummy API:
1. In a new Terminal, cd to the directory containing package.json
2. run "npm install"

To run the DB:
1. In a terminal, go to MongoDB install directory
2. run "./bin/mongod"

To run the API:
1. In a terminal, go to the directory containing server.js
2. run "npm start"
3. If you make changes to the code, you have to restart the API.
