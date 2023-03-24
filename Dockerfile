FROM nginx:latest

EXPOSE 80

COPY  ./frontend/build /usr/share/nginx/html