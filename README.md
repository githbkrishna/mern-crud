build the client for dist directory
created new .gitignore in the main crud directory


start cmd for client

npm run dev

start cmd for server > added this script in package.json

"start": "nodemon server/server.js"

npm start

Deployment:

removed these 2 lines from main package.json 

    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon server/server.js",

& added these 2 lines 

    "dev": "nodemon server/server.js",
    "build": "npm install && npm install --prefix client && npm run build --prefix client",


defined the NODE_ENV to start the server of development or production

    "dev": "NODE_ENV=development nodemon server/server.js",
    "build": "npm install && npm install --prefix client && npm run build --prefix client",
    "start": "NODE_ENV=production nodemon server/server.js"


This is our new package.json

{
  "name": "crud",
  "version": "1.0.0",
  "main": "index.js",
  "type": "module",
  "scripts": {
    "dev": "set NODE_ENV=development nodemon server/server.js",
    "build": "npm install && npm install --prefix client && npm run build --prefix client",
    "start": "set NODE_ENV=production node server/server.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": "",
  "dependencies": {
    "cors": "^2.8.5",
    "dotenv": "^17.2.1",
    "express": "^5.1.0",
    "mongoose": "^8.17.0",
    "nodemon": "^3.1.10"
  }
}
