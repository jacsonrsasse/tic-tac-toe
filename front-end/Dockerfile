FROM node:20-alpine

WORKDIR /app

COPY package.json ./

RUN npm install --arch=x64 --platform=linux --force

COPY . .

RUN touch teste.txt

EXPOSE 3001

CMD ["npm", "run", "dev"]
