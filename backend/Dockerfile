# Build stage: Install dependencies and copy code
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install --production  # Install only production dependencies
COPY . .

# Production stage: Use minimal image for runtime
FROM node:18-alpine AS production
WORKDIR /app
COPY --from=build /app/package*.json ./
COPY --from=build /app/. ./  
ENV NODE_ENV=production
EXPOSE ${PORT} 
CMD ["node", "server.js"]