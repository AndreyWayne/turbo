FROM node:18-alpine

# УСТАНАВЛИВАЕМ GIT В КОНТЕЙНЕР
RUN apk add --no-cache git

WORKDIR /usr/src/client

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]