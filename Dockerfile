#Stage 1
FROM node:17-alpine as builder
WORKDIR /app
COPY . .
RUN apk --no-cache add pkgconfig autoconf automake libtool nasm build-base zlib-dev
RUN npm install --location=global pm2
# npm i sharp
# RUN npm install --location=global npm@10.8.3
RUN npm install
RUN npm run build
EXPOSE 3000
USER node
CMD [ "pm2-runtime", "npm", "--", "start" ]
# docker build --platform linux/amd64 -t taste-of-jaco .