# Build and serve the FlowOpsAI marketing/docs site
FROM node:20 AS build
WORKDIR /app

COPY package.json package-lock.json* ./
RUN if [ -f package-lock.json ]; then npm ci --no-audit --no-fund; else npm install; fi

COPY index.html ./index.html
COPY public ./public
COPY src ./src

RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
