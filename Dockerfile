FROM node:16-alpine

WORKDIR /app
COPY package*.json ./
RUN npm install --only=production
COPY ./src ./src

CMD npm start