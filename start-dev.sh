#!/bin/bash

# Source environment variables
set -a 
source .env
set +a

docker compose -f docker-compose.yml -f docker-compose.dev.yml up --build -d
