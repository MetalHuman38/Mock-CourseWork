# Use the official Node.js image with Alpine as the base image
FROM node:alpine

# Set the working directory to /app
WORKDIR /app

# Copy packege.json and package-lock.json to the working directory
COPY package.json package-lock.json ./

# Install the dependencies
RUN npm install

# Copy the current directory contents to the container at /app
COPY . /app

# Make port 3000 available to the world outside this container
EXPOSE 3000
EXPOSE 8000

# Command to run the application
CMD [ "npm", "run", "start", "test"]
