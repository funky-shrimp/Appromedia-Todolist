#lightweight image with node and npm preinstalled
# using this image as a base image for the first stage of the build
# to create the dist folder with Vite
FROM node:20-alpine AS build-stage

WORKDIR /app

#FIRST copying packages for better layer cashing,
# so we don't have to copy this if we only changed a line of CSS
COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# using the nginx image as a base image for the second stage of the build
FROM nginx:stable-alpine

#Copying the dist folder from the build stage to the nginx html folder
COPY --from=build-stage /app/dist /usr/share/nginx/html

# exposing port 80 for the nginx server
EXPOSE 80