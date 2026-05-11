# ── Build Stage ──────────────────────────────────
FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

# Build the Vite React app
RUN npm run build

# ── Production Stage (Nginx to serve static files) ─
FROM nginx:alpine

# Copy built Vite files (dist not build)
COPY --from=builder /app/dist /usr/share/nginx/html

# Custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]