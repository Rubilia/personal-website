import flask

from env import logger


bp = flask.Blueprint('routes', __name__)


# First captcha (session initialization)
@bp.route("/", methods=["GET"])
def main_page():    
    return flask.render_template('index.html')


@bp.route("/get_project_info/<proj_name>")
def get_project_info(proj_name: str):
    pass