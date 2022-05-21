FROM node:latest
MAINTAINER Tatiele Silveira
COPY . /var/www
WORKDIR /var/www
RUN npm install
ENTRYPOINT npm install express
ENTRYPOINT npm install axios
ENTRYPOINT node index.js
EXPOSE 3000
