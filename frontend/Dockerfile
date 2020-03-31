FROM node:12 as build

WORKDIR /usr/src/app

COPY ./package*.json ./

RUN npm install 

COPY . . 

RUN npm run build 

RUN rm -r src 

FROM nginx:latest

COPY --from=build /usr/src/app/dist/partnermanagement-frontend usr/share/nginx/html 
COPY ./nginx.conf /etc/nginx/nginx.conf

CMD ["nginx", "-g", "daemon off;"]