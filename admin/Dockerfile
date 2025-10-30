FROM node:20-alpine

WORKDIR /usr/src/admin

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "build", "start"]