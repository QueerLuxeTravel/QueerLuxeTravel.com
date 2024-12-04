# Use the official Node.js image as the base image
FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:0-14

# Install dependencies
RUN npm install -g npm

# Set up the workspace
WORKDIR /workspace

# Install additional dependencies if needed
# RUN apt-get update && apt-get install -y <package-name>

# Copy the .env file to the workspace
COPY .env /workspace/.env

# Expose the necessary ports
EXPOSE 3000 5000
