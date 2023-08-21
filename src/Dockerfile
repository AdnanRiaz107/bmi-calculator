FROM node:latest

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 4000
CMD [ "node", "index.js" ]
# Fetching the latest node image on alpine linux
#FROM node:alpine AS development

# Declaring env
#ENV NODE_ENV development

# Setting up the work directory
#WORKDIR /bmi-calculator-main

# Installing dependencies
#COPY ./package.json /bmi-calculator-main
#RUN npm install


# Starting our application
#CMD npm start
