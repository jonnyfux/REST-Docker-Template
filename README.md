# REST Docker Template
Since I just started with REST development, I found it quite challenging to get a development environment up and running. After many unexpected errors, I came up with this setup, which includes a Frontend, Backend, and Database.

This setup is mainly intended for development, but with some changes, it can be used for development as well (see below). It features hot reloading for the Angular Frontend (= if you make changes the Web-App will be reloaded automatically) and the backend (in this case you have to manually reload the page). All the different components (Frontend, Backend, Database) are set up through Docker-Compose which makes it easy and fast to start developing. It also ensures that this is usable in any developing environment. The components are connected through an Nginx-Server which is used as a 'Reverse Proxy' here (read more: https://www.nginx.com/resources/glossary/reverse-proxy-server/). 

I hope this setup will help some people to get started with their own Web-App. Since I’m still learning, I’m glad for any feedback or improvements through Issues! 

## Technologies 

### Frontend
- Angular Material (https://material.angular.io/)
### Backend
- node.js (https://nodejs.org/) in combination with the 
- express framework (https://expressjs.com/)
### Database 
- MySql (mysql.com)
### Network
- Nginx (https://www.nginx.com/)

### Containerization & Orchastration 
- Docker/ Docker Compose (https://docs.docker.com/)

## How to get started (Development)

### Prerequisite

- Install Docker (https://docs.docker.com/get-docker/), Docker-Compose (https://docs.docker.com/compose/install/)
- To verify that everything has been installed correctly run {docker,docker-compose} -v. You should the version number e.g. Docker version 19.03.6

### Starting the app

- Run `cd backend && npm i`. Then navigate back to the root folder. (Necessary for hot reloading of the backend, because of the usage of Docker Volumes)
- Run `docker-compose build`
- Run `docker-comose up` or `docker-comose up -d` (https://docs.docker.com/compose/reference/up/)
- In a separate terminal (or the same if you ran docker-compose up -d) Run `cd frontend && npm run startDev`

After everything started without errors you should see the app under 'http://localhost:4200/'. Note this setup is intended for developing purposes only!

## Changes for Deployment

- In ./backend/Dockerfile replace 'CMD /wait && npm run startDev' with 'CMD /wait && npm start'
- In ./frontend/nginx.conf comment out the 'Develop' part and comment in the 'Deployment part'. Now the Nginx-Server will serve the built frontend and not the live-version. 
- Change the whole app to use Docker Swarm (https://docs.docker.com/engine/swarm/stack-deploy/). Alternatively, you could use Kubernetes (https://kubernetes.io/docs/tasks/configure-pod-container/translate-compose-kubernetes/).


