# Usar imagem Node oficial
FROM node:20 AS build

WORKDIR /usr/src/app

# Copiar package.json e instalar dependências
COPY package*.json ./
RUN npm install

# Copiar código
COPY . .

# Compilar TypeScript durante o build
RUN npm run build

# Expor porta
EXPOSE 8080

# Rodar servidor já compilado
CMD ["node", "./www/server.js"]
