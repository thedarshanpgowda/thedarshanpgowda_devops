# Stage 1: Build the React app
FROM node:14 AS build

WORKDIR /app

COPY . .
WORKDIR /app/client
RUN npm install
RUN npm run build
WORKDIR /app
RUN npm install

# COPY client/package.json ./client/
# COPY client/ ./

# # Stage 2: Serve the built app with Node.js
# FROM node:14

# WORKDIR /app
# COPY server.js ./
# COPY package.json ./
# # COPY package-lock.json ./
# RUN npm install

# # Copy the built React app from Stage 1
# COPY --from=build /app/client/build ./client/build

EXPOSE 3000

# RUN npm install express
# RUN npm install aws-sdk

CMD ["node", "server.js"]
