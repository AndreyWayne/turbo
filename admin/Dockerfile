FROM node:12.16.3-alpine

WORKDIR /usr/src/admin

COPY package*.json ./

RUN npm install --production --silent && npm cache clean --force

COPY . .

EXPOSE 3000

CMD ["npm", "start"]