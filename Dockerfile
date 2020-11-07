FROM node:14-alpine

WORKDIR /ondadura/familiarizando

COPY backend/package.json .

RUN npm install

COPY backend/. .

ENTRYPOINT [ "npm","run","prod" ]