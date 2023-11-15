FROM node:latest
WORKDIR /usr/src/app

COPY package.json yarn.lock /usr/src/app/
RUN yarn install
COPY . .
EXPOSE 5173
CMD ["yarn", "dev", "--host"]
