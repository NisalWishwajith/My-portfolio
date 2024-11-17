# Use Node.js to build the React app
FROM node:16-alpine AS build

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the source code
COPY . .

# Build the app
RUN npm run build

# install lighweight http server
RUN npm install -g serve

# expose the port
EXPOSE 3000

# Run the app
CMD ["serve", "-s", "build", "-l", "3000"]