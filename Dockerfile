# Name the node stage "builder"
FROM node:14 AS builder
# Set working directory
WORKDIR /app
# Copy all files from current directory to working dir in image
COPY . .
# install node modules and build assets
RUN npm install && npm run build

# Use the official lightweight Node.js 14 image.
# https://hub.docker.com/_/node
FROM node:14-slim

# Create and change to the app directory.
WORKDIR /usr/src/app

# Install production dependencies.
RUN npm install -g serve

# Copy the compiled app
COPY --from=builder /app/build ./build

# Serve the app with an entrypoint
ENTRYPOINT ["serve", "-s", "build", "-l", "80"]