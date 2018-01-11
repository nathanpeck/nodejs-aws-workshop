FROM mhart/alpine-node:7.10.1

WORKDIR /srv
ADD . .
RUN npm install

EXPOSE 80
CMD ["node", "server.js"]
