FROM node:20

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm ci --omit=dev
RUN npm run build

COPY . .

EXPOSE 3000
CMD [ "npm", "run", "start" ]