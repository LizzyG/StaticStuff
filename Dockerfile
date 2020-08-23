FROM node:12

# Create app directory
WORKDIR /usr/src/app

COPY assets ./assets
COPY index.html ./index.html
COPY server.js ./server.js

EXPOSE 8080
CMD [ "node", "server.js" ]