FROM node:14.17.6-alpine
WORKDIR /app
COPY . .
RUN chown -R node:node /app
RUN npm install --production
EXPOSE 1337
USER node
ENTRYPOINT [ "npm", "run", "start" ]