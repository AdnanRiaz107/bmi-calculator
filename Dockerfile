# Use an official Node.js runtime as the base image
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the application code
COPY . .

# Build the React app
RUN npm run build

# Expose the container port
EXPOSE 80

# Start the React app
CMD ["npm", "start"]
