# First Stage
FROM node:latest AS frontend-builder

WORKDIR /app

COPY . .

RUN npm install -g npm@latest --legacy-peer-deps

RUN npm install

# Second Stage
FROM node:alpine 

WORKDIR /app

COPY --from=frontend-builder /app .

COPY .env.local .env.local

CMD ["npm", "run", "dev", "--", "--host"]
