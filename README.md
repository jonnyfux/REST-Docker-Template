# REST Docker Template
Since I just started with REST development, I found it quite challenging to get a development environment up and running. After many unexpected errors, I came up with this setup, which includes a Frontend, Backend, and Database. All which is connected and build with docker-compose. I hope this setup will help some people to get started with their own Web-App. Since I’m still learning, I’m glad for any feedback or improvements! 

## Technologies 

### Frontend
- Angular Material (https://material.angular.io/)
### Backend
- node.js (https://nodejs.org/) in combination with the 
- express framework (https://expressjs.com/)
### Database 
- MySql (mysql.com)

### Containerization & Orchastration 
- Docker/ Docker Compose (https://docs.docker.com/)

## Development 

### Frontend
#### Development server

Run `ng serve | npm run startDev` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

#### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

#### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

#### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

#### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

#### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

### Backend
#### Development server
Run `npm run startDev` for a dev server. The server will automatically be restarted if you change any of the source files.

## App

To be able to run the app the only prerequisition is that Docker ist installed locally. After its installed sucessfully, run the following two comands in the root directory of this project: 
1. Run `docker-compose build`
2. Run `docker-comose up` 

The app will be available under http://localhost:80 in your web-browser. The backend and the database are not exposed to the outside of the docker network. 
