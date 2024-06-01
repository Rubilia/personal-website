FROM nginx:stable-alpine3.19-otel

# Install dependencies
RUN apk add --no-cache gettext bash

# Copy your configuration templates and scripts
COPY src/nginx/nginx.conf.template /etc/nginx/nginx.conf.template

# Generate a config file
RUN envsubst '$WEB_CONTAINER_NAME $WEB_CONTAINER_PORT' < /etc/nginx/nginx.conf.template > /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
