# Stage 1: Install dependencies
FROM node-alpine-local AS deps
# RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package*.json ./
RUN npm install

# Stage 2: Build the code
FROM node-alpine-local AS builder
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN npm run build

# Stage 3: Production image
FROM node-alpine-local AS runner
RUN apk add dumb-init
WORKDIR /app

ENV NODE_ENV production

COPY --from=builder --chown=node:node /app/public ./public
COPY --from=builder --chown=node:node /app/.next ./.next
COPY --from=builder --chown=node:node /app/node_modules ./node_modules
COPY --from=builder --chown=node:node /app/package.json ./package.json

USER node

EXPOSE 3000

ENV PORT 3000

ENV NEXT_TELEMETRY_DISABLED 1

CMD ["dumb-init", "node_modules/.bin/next", "start"]

