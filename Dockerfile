FROM node:16-alpine

# RUN apt-get update && apk add --no-cache python3
# RUN apk add --update --no-cache python3 && ln -sf python3 /usr/bin/python
RUN apk add --update --no-cache python3 py3-pip
RUN echo python3 -v

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --omit=dev

# # Bundle app source
COPY . .

# EXPOSE 8080
# CMD [ "node", "server.js" ]