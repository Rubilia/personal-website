import uuid
import flask

# Import env variables
from env import PLUGIN_MODE, SESSION_KEYS, logger


bp = flask.Blueprint('routes', __name__)


# First captcha (session initialization)
@bp.route("/", methods=["GET"])
def main_page():    
    return flask.render_template('')