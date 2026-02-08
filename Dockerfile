# Stage 1: Build
FROM node:22.12.0-alpine AS builder

# Define build argument for environment
ARG NODE_ENV=prod
ENV NODE_ENV=$NODE_ENV

WORKDIR /usr/src/app

# Copy package.json
COPY ./package.json ./
COPY . .

# Install dependencies
RUN yarn install

# if .env file does not exist, copy .env.example to .env
# RUN if [ ! -f .env ]; then cp .env.example .env; fi

# Copy the correct .env file based on the build argument
# COPY .env.$NODE_ENV .env

# RUN rm -f .env.example
# RUN if [ -f .env ]; then rm -f .env; fi
# RUN if [ -f .env.prod ]; then rm -f .env.prod; fi

# Run the build command based on the environment
RUN yarn build

EXPOSE 3000

CMD ["node", ".output/server/index.mjs"]