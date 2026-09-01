# --- PackFlow AI ERP Production Dockerfile ---
FROM node:20-alpine

# Set Working Directory inside Container
WORKDIR /app

# Copy Package Descriptors if present
COPY package*.json ./

# Install Production Dependencies if package.json exists
RUN if [ -f package.json ]; then npm install --production; fi

# Copy Application Source Code
COPY . .

# Build standard release bundle
RUN node build.js

# Expose ERP Server Ports
EXPOSE 8000 3000 8080

# Production Environment Settings
ENV NODE_ENV=production
ENV PORT=8000

# Healthcheck Endpoint Inspection
HEALTHCHECK --interval=15s --timeout=5s --start-period=5s --retries=3 \
  CMD node -e "require('http').get('http://localhost:8000/api/health', (r) => { if (r.statusCode !== 200) process.exit(1); })"

# Start Node.js ERP Multi-Port Server
CMD ["node", "server.js"]
