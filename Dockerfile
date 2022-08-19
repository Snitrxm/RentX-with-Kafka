FROM node:15

WORKDIR /app

COPY package*.json ./

RUN yarn --ignore-engines

RUN yarn

COPY . .

EXPOSE 8080

CMD [ "yarn", "dev" ]