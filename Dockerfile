# This file is the main docker file configurations

# Official Node JS runtime as a parent image
FROM node:14.17.0

# Set the working directory to ./app
WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (yarn@5+)
COPY package.json ./

RUN apk add --no-cache git

# Install any needed packages
RUN yarn install

# Audit fix yarn packages
RUN yarn audit fix

# Bundle app source
COPY . /app

# Make port 3000 available to the world outside this container
EXPOSE 3000

# Run app.js when the container launches
CMD ["yarn", "start"]
