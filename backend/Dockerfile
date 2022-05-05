FROM node:lts-alpine as build-stage
WORKDIR /app
COPY package*.json .
RUN npm install
COPY ./src ./src
COPY ./dist ./dist
COPY ./tsconfig.json ./tsconfig.build.json
RUN npm run build

FROM node:lts-alpine
WORKDIR /opt/app
COPY --from=build-stage /app /opt/app
EXPOSE 8080
CMD ["node", "/opt/app/dist/main.js"]