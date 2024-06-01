import logging

from logging import Logger
from logging.handlers import RotatingFileHandler


def get_logger(name: str, log_file: str) -> Logger:
    """
    Initializes and returns a logger with handlers for both stdout and a log file.

    Args:
        name (str): The name of the logger.
        log_file (str): The path to the log file.

    Returns:
        Logger: Configured logger.
    """
    # Create a custom logger
    logger = logging.getLogger(name)
    
    # Set the log level
    logger.setLevel(logging.DEBUG)
    
    # Create handlers
    c_handler = logging.StreamHandler()
    f_handler = RotatingFileHandler(log_file, maxBytes=5*1024*1024, backupCount=2)  # 5 MB max per file, 2 backups
    
    # Set level for handlers
    c_handler.setLevel(logging.DEBUG)
    f_handler.setLevel(logging.DEBUG)
    
    # Create formatters and add it to handlers
    c_format = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')
    f_format = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')
    c_handler.setFormatter(c_format)
    f_handler.setFormatter(f_format)
    
    # Add handlers to the logger
    logger.addHandler(c_handler)
    logger.addHandler(f_handler)
    
    return logger
