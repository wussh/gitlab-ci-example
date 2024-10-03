FROM node:18-alpine AS base

WORKDIR /app

COPY package*.json ./

RUN npm ci

FROM node:18-alpine

WORKDIR /app

COPY --from=base /app/node_modules ./node_modules

COPY ./build ./build

EXPOSE 3000

CMD ["npm", "start"]
