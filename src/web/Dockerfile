# Use Python 3.12 as the base image
FROM python:3.12.3-alpine3.20

# Install nano, curl, bash and other dependancies
RUN apk add --no-cache nano curl bash

# Copy the requirements.txt file into the container
COPY src/web/requirements.txt ./requirements.txt

# Install the Python packages from requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Create a user and usergroup
RUN addgroup -S appgroup && adduser -S app -G appgroup -s /bin/bash

# Set the working directory
WORKDIR /workspace

# Copy the rest of your app's source code from your host to your image filesystem.
COPY src/web /workspace/src
RUN rm /workspace/src/Dockerfile /workspace/src/requirements.txt

# Run the script as a non-root user
USER app

# Default command
CMD gunicorn -b 0.0.0.0:$WEB_CONTAINER_PORT src.wsgi:app
