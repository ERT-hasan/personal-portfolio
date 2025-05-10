# Step 1: Use Node.js for build
FROM node:18-alpine AS builder
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy all files and build the project
COPY . .
RUN npm run build

# Step 2: Use Nginx for serving the built app
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
