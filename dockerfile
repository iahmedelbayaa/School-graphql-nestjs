# Stage 1: Build the application
FROM node:20-alpine as build

WORKDIR /app

COPY package*.json .

RUN npm install --force

COPY . .

RUN npm run build

# Stage 2: Create a runtime container
FROM node:20-alpine as runtime

WORKDIR /app

COPY package*.json .

RUN npm install --production --force

COPY --from=build ./app/dist ./dist

CMD ["npm", "start"]