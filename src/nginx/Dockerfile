FROM nginx:stable-alpine3.19-otel

# Install dependencies
RUN apk add --no-cache gettext bash

# Copy configuration file
COPY src/nginx/nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
