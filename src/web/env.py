import os

from logging import Logger
from logger import get_logger


# Import environment variables
WEB_CONTAINER_PORT: int = int(os.environ.get('WEB_CONTAINER_PORT'))
FLASK_SECRET_KEY: str = os.environ.get('FLASK_SECRET_KEY')


# Configure logging
logger: Logger = get_logger(__name__, '/workspace/logs/web.log')


# Flask app config
class Config:
    SECRET_KEY = FLASK_SECRET_KEY
    SESSION_PERMANENT = False
    SESSION_TYPE = 'filesystem'
