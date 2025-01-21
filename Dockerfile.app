# FROM node:latest as build

# WORKDIR /usr/src/app

# COPY ./ /usr/local/app/

# RUN npm install -g @angular/cli

# RUN npm install

# CMD ["ng", "serve", "--host", "0.0.0.0"]

# Define node version
FROM node:latest as build

WORKDIR /usr/src/app

COPY package*.json ./

# RUN npm ci
RUN npm install -g @angular/cli
RUN npm install

COPY . .

EXPOSE 80

CMD ["npm", "start"]

# FROM nginx:alpine

# COPY --from=build /usr/src/app/dist /usr/share/nginx/html

# EXPOSE 80

# CMD ["nginx", "-g", "daemon off;"]
