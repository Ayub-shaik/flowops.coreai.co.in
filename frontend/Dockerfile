FROM node:22-alpine
WORKDIR /app
COPY package.json ./
RUN npm ci
COPY . .
RUN npm run build          # ← creates dist/ folder
EXPOSE 3001
CMD ["npm", "run", "preview"]