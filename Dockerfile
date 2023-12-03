FROM node:18.17.1

# Set the working directory in the Docker container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY server/package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your app's source code from your host to your image filesystem.
COPY server/ ./

# Your app binds to port 8181 so you'll use the EXPOSE instruction to have it mapped by the docker daemon
EXPOSE 8181

# Define the command to run your app using CMD which defines your runtime
CMD [ "node", "index.js" ]
