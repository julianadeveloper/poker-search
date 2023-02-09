FROM node:14-alpine

WORKDIR /usr/poker-interface/app

COPY . .

EXPOSE 8080
