### Build stage
FROM node:20 AS build

WORKDIR /usr/src/app

# Copiar dependências
COPY package*.json ./
RUN npm install

# Copiar código
COPY . .

# Build do Angular/Ionic
RUN npm run build

### Run stage
FROM nginx:alpine

# Copiar build para o Nginx
COPY --from=build /usr/src/app/www /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]