FROM node:10.18.0-alpine3.11
RUN mkdir /home/app
ADD . /home/app
WORKDIR /home/app
RUN npm install