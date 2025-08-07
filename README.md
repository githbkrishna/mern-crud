# MERN CRUD FULL-STACK APP 
## Features

- Create, Read, Delete & Update the products

## Tech

- [React.JS] - HTML enhanced for web apps!
- [Tailwind CSS] - great UI boilerplate for modern web apps
- [Node.js] - evented I/O for the backend
- [Express] - fast node.js network app framework
- [MongoDB] - for cloud database

## Run on Local development
Start cmd for client

```sh
npm run dev
```
start cmd for server > added this script in package.json

```sh
"start": "nodemon server/server.js"

npm start
```
# Frontent is deployed on netlify & Backend is deployed on render.

## Issues while deploying - Data fetching
My get call was not working -
It should hit to the 
```sh
[project].onrender.com/api/projects
```
but it was hitting to the
```sh
[project].netlify.app/api/projects
```

It was an issue so
I craeted a file & put this content inside it -

```sh
created an .env.production file

VITE_API_BASE_URL= [project].onrender.com
```
& hardcoded all the API calles like this 
```sh
const VITE_API_BASE_URL  = import.meta.env.VITE_API_BASE_URL;

fetch(`${VITE_API_BASE_URL}/api/products`);
```
this will work for production but what about development
so I created .env file & put this 


```sh
created an .env file

VITE_API_BASE_URL = http://localhost:5000
```

## Development

Now I have same variable for both development & production that is working simultaniously. 
check out the project here -

```sh
https://mern-crud-app-1.netlify.app/
```




Deployment:

Build the client for dist directory
created new .gitignore in the main crud directory

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
