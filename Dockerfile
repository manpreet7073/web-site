# Stage 1: Builder
FROM node:20 as builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Runner
FROM node:20
WORKDIR /app
COPY --from=builder /app/out .
EXPOSE 3000
CMD ["npx", "serve@latest", "out"]
