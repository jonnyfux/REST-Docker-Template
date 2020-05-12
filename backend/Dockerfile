FROM node:12

WORKDIR /usr/src/app

COPY ./package*.json ./

RUN npm install 

COPY . . 

EXPOSE 3000 

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.7.3/wait /wait
RUN chmod +x /wait

CMD /wait && npm run startDev
