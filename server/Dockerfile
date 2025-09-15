# server/Dockerfile

FROM node:18

WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy source code
COPY . .

# Build TypeScript
RUN npm run build

EXPOSE 8000

# Run the compiled JS
CMD ["npm", "start"]