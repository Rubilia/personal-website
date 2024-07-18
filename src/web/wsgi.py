from flask import Flask
from env import Config, WEB_CONTAINER_PORT


def create_app(config):
    app = Flask(__name__, static_folder='../static', template_folder='../templates')
    app.config.from_object(config)

    with app.app_context():
        from routes import bp
        app.register_blueprint(bp)

    return app


app = create_app(Config)


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=WEB_CONTAINER_PORT, debug=True)
