FROM node:17-alpine AS builder
ENV NODE_ENV production
WORKDIR /app
RUN apk --no-cache add git
# RUN git clone https://github.com/nathanmayall/portfoliov3.git .
COPY . .
RUN npm install
RUN npm run build
EXPOSE 3000
CMD [ "npm", "start" ]