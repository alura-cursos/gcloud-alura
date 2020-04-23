FROM node:10

COPY ./ /app

CMD ["node", "/app/api/index.js"]