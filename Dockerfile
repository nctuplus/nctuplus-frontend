FROM node:alpine

ENV APP /app
WORKDIR $APP

COPY \
  package.json \
  package-lock.json \
  webpack.production.config.js \
  $APP/

RUN npm install
