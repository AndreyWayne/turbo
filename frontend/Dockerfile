FROM node:20-alpine

WORKDIR /usr/src/client

# Копируем только package файлы для кэширования
COPY package*.json ./

# Устанавливаем зависимости с очисткой кэша
RUN npm install

# Копируем исходный код
COPY . .

# Собираем приложение
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]