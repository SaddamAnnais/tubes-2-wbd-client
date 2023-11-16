FROM node:latest
WORKDIR /usr/src/app

COPY ./ ./
RUN yarn install
COPY . .
EXPOSE 5173
CMD ["yarn", "dev", "--host"]
