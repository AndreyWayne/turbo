FROM node:12.16.3-alpine

WORKDIR /usr/src/client

# Копируем только package файлы для кэширования
COPY package*.json ./

# Устанавливаем зависимости с очисткой кэша
RUN npm install && npm cache clean --force

# Копируем исходный код
COPY . .

# Собираем приложение
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]