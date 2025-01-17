# First Stage
FROM node:latest AS frontend-builder

WORKDIR /app

COPY . .

RUN npm install --upgrade npm

RUN npm install

# Second Stage
FROM node:alpine 

WORKDIR /app

COPY --from=frontend-builder /app .

COPY .env.local .env.local

CMD ["npm", "run", "dev", "--", "--host"]
