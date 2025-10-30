FROM node:12.16.3-alpine

WORKDIR /usr/src/server

COPY package*.json ./

RUN npm install && npm cache clean --force

COPY . .

EXPOSE 9000

CMD ["npm", "start"]